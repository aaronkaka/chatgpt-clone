const SummarySource = () => {

  const prompt = 'Below is a SOURCE TEXT followed by a SUMMARY of what it says. Evaluate the single-paragraph SUMMARY, mentioning points it got correct, points it somewhat misrepresented, and possible ways to improve it. Keep the tone positive and encouraging.\n\nSOURCE TEXT:\n"""\n'
  const sourceText = 'Although debates continued, Washington’s election as president, and the first eight years of functioning government during his administration, cemented the Constitution’s authority. By 1793, the term “Anti-Federalist” would be essentially meaningless. Yet the debates produced a piece of the Constitution that seems irreplaceable today. Ten amendments to the Constitution were added in 1791. Together, they constitute the Bill of Rights. James Madison, against his original wishes, supported these amendments as an act of political compromise and necessity. He had won election to the House of Representatives only by promising his Virginia constituents such a list of rights. There was much the Bill of Rights did not cover. Women found here no special protections or guarantee of a voice in government. Many states would continue to restrict voting only to men who owned significant amounts of property. And slavery not only continued to exist; it was condoned and protected by the Constitution. Of all the compromises that formed the Constitution, perhaps none would be more important than the compromise over the slave trade. Americans generally perceived the Atlantic slave trade (the process of shipping enslaved Africans to the Western Hemisphere) as more violent and immoral than slavery itself. Many Northerners opposed it on moral grounds. But they also understood that letting Southern states import more Africans would increase their political power. The Constitution counted each black individual as three-fifths of a person for purposes of representation, so in districts with many slaves, the white voters had extra influence. On the other hand, the states of the Upper South also welcomed a ban on the Atlantic trade because they already had a surplus of slaves. Banning importation meant slaveowners in Virginia and Maryland could get higher prices when they sold slaves in America. States like South Carolina and Georgia, however, were dependent upon a continued slave trade. New England and the Deep South agreed to what was called a “dirty compromise” at the Constitutional Convention in 1787. New Englanders agreed to include a constitutional provision that protected the foreign slave trade for twenty years; in exchange, South Carolina and Georgia delegates had agreed to support a constitutional clause that made it harder for Congress to pass commercial legislation. As a result, the Atlantic slave trade resumed until 1808 when it was outlawed for three reasons. First, Britain was also in the process of outlawing the slave trade in 1807, and the United States did not want to concede any moral high ground to its rival. Second, the Haitian Revolution (1791–1804), a successful slave revolt against French colonial rule in the West Indies, had changed the stakes in the debate. The image of thousands of armed black revolutionaries terrified white Americans. Third, the Haitian Revolution had ended France’s plans to expand its presence in the Americas, so in 1803, the United States had purchased the Louisiana Territory from the French at a fire-sale price. This massive new territory, which had doubled the size of the United States, had put the question of slavery’s expansion at the top of the national agenda. Many white Americans, including President Thomas Jefferson, thought that ending the external slave trade and dispersing the domestic slave population would keep the United States a white man’s republic and perhaps even lead to the disappearance of slavery. The ban on the slave trade, however, lacked effective enforcement measures and funding. Moreover, instead of freeing illegally imported Africans, the act left their fate to the individual states, and many of those states simply sold intercepted slaves at auction. Thus, the ban preserved the logic of property ownership in human beings. The new federal government protected slavery as much as it expanded democratic rights and privileges for white men.'
  const promptObj = {
    prompt: prompt,
    sourceText: sourceText
  }

  return (
    promptObj
  )
}

export default SummarySource