import React, { useState, useRef, useEffect, useContext } from 'react'
import ChatMessage from './ChatMessage'
import { ChatContext } from '../context/chatContext'
import Thinking from './Thinking'
import SummarySource from './SummarySource'
import DiveDeeperSource from './DiveDeeperSource'
import PrimarySecondarySource from './PrimarySecondarySource'

/**
 * A chat view component that displays a list of messages and a form for sending new messages.
 */
const ChatView = () => {
  const messagesEndRef = useRef()
  const inputRef = useRef()
  const [formValue, setFormValue] = useState('')
  const [thinking, setThinking] = useState(false)

  const MAX_REQUEST = 4000
  const MAX_TOKENS = 200
  const TEMPERATURE = 0
  const DIVE_DEEPER_PREFIX = 3600
  const options = ['ChatGPT', 'Explain it back', 'Another Bite at the Apple', 'Check Your Sources', 'use case 4', 'Tell Me More', 'Dive Deeper', 'DALL·E']
  const [selected, setSelected] = useState(options[0])
  const [messages, addMessage] = useContext(ChatContext)
  const summarySource = SummarySource().prompt + SummarySource().sourceText
  const [summaryHistory, setSummaryHistory] = useState('')
  const diveDeeperSource = DiveDeeperSource().prompt + DiveDeeperSource().sourceText + '\n"""'
  const [diveDeeperHistory, setDiveDeeperHistory] = useState('')
  const primarySecondarySource = PrimarySecondarySource().prompt + PrimarySecondarySource().sourceText

  /**
   * Scrolls the chat area to the bottom.
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  /**
   * Adds a new message to the chat.
   *
   * @param {string} newValue - The text of the new message.
   * @param {boolean} [ai=false] - Whether the message was sent by an AI or the user.
   */
  const updateMessage = (newValue, ai = false, selected) => {
    const id = Date.now() + Math.floor(Math.random() * 1000000)
    const newMsg = {
      id: id,
      createdAt: Date.now(),
      text: newValue,
      ai: ai,
      selected: `${selected}`
    }

    addMessage(newMsg)
  }

  /**
   * Sends our prompt to our API and get response to our request from openai.
   *
   * @param {Event} e - The submit event of the form.
   */
  const sendMessage = async (e) => {
    e.preventDefault()

    const newMsg = formValue
    const aiModel = selected

    const BASE_URL = 'http://localhost:3001/'
    const PATH = aiModel !== options[7] ? 'davinci' : 'dalle'
    const POST_URL = BASE_URL + PATH

    let useCasePrompt = newMsg // default is current user input

    switch (aiModel) {
      case options[1]:
        const summarySourcePrompt = summarySource + '\n"""\n\nSUMMARY:\n"""\n' + newMsg + '\n"""\n'
        setSummaryHistory(summarySourcePrompt)
        useCasePrompt = summarySourcePrompt
        break;
      case options[2]:
        if (!summaryHistory) console.error('You must revise an existing summary.')
        const revisedSummaryPrompt = summaryHistory + '\nREVISED SUMMARY:\n"""\n' + newMsg + '\n"""\n\nIs the REVISED SUMMARY better? Why?\n'
        setSummaryHistory(revisedSummaryPrompt)
        useCasePrompt = revisedSummaryPrompt
        break;
      case options[3]:
        const primarySecondaryPrompt = primarySecondarySource + newMsg
        useCasePrompt = primarySecondaryPrompt
        break;
      case options[5]:
        const divePrompt = diveDeeperSource + '\n\n' + newMsg + '\n\n'
        setDiveDeeperHistory(divePrompt)
        useCasePrompt = divePrompt
        break;
      case options[6]:
        const diveDeeperPrompt = diveDeeperHistory + '\n\n' + newMsg + '\n\n'
        const diveDeeperPromptConstrained = diveDeeperPrompt.slice(0, DIVE_DEEPER_PREFIX) + '\n\n' + diveDeeperPrompt.slice(4 - (MAX_REQUEST - DIVE_DEEPER_PREFIX))
        setDiveDeeperHistory(diveDeeperPromptConstrained)
        useCasePrompt = diveDeeperPromptConstrained
        break;
      default:
        console.error('A valid use case selection must be made!')
    }
    console.log(`*** Context Length: ${useCasePrompt.length} \n` + useCasePrompt)

    setThinking(true)
    setFormValue('')
    updateMessage(newMsg, false, aiModel)

    const response = await fetch(POST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: useCasePrompt,
        max_tokens: MAX_TOKENS,
        temperature: TEMPERATURE
      })
    })

    const data = await response.json()

    console.log(response.status)
    if (response.ok) {
      // The request was successful
      data.bot && updateMessage(data.bot, true, aiModel)

      switch (aiModel) {
        case options[1]:
        case options[2]:
          setSummaryHistory(useCasePrompt + '\n' + data.bot + '\n')
          break;
        case options[5]:
        case options[6]:
          setDiveDeeperHistory(useCasePrompt + data.bot)
          break;
        default:
          console.error('A valid use case selection must be made!')
      }

    } else if (response.status === 429) {
      setThinking(false)
    } else {
      // The request failed
      window.alert(`openAI is returning an error: ${response.status + response.statusText} 
      please try again later`)
      console.log(`Request failed with status code ${response.status}`)
      setThinking(false)
    }

    setThinking(false)
  }

  /**
   * Scrolls the chat area to the bottom when the messages array is updated.
   */
  useEffect(() => {
    scrollToBottom()
  }, [messages, thinking])

  /**
   * Focuses the TextArea input to when the component is first rendered.
   */
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className="chatview">
      <main className='chatview__chatarea'>

        {messages.map((message, index) => (
          <ChatMessage key={index} message={{ ...message }} />
        ))}

        {thinking && <Thinking />}

        <span ref={messagesEndRef}></span>
      </main>
      <form className='form' onSubmit={sendMessage}>
        <select value={selected} onChange={(e) => setSelected(e.target.value)} className="dropdown" >
          <option>{options[0]}</option>
          <option>{options[1]}</option>
          <option>{options[2]}</option>
          <option>{options[3]}</option>
          <option>{options[4]}</option>
          <option>{options[5]}</option>
          <option>{options[6]}</option>
          <option>{options[7]}</option>
        </select>
        <textarea ref={inputRef} className='chatview__textarea-message' value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit" className='chatview__btn-send' disabled={!formValue}>Send</button>
      </form>
    </div>
  )
}

export default ChatView