// --- Conversation Data (Simplified Language) ---
const conversations = {
    sp: [
        { sender: 'dc', text: "SP Sahab, good morning. Hope things are fine." },
        { sender: 'stakeholder', text: "Good morning, Sir. All okay here. Something important?" },
        { sender: 'dc', text: "Yes, about that new UK report on AI safety. Especially how AI is used to make CSAM. Did you get the alert?" },
        { sender: 'stakeholder', text: "Yes Sir, got the note from the state cyber police yesterday. Read it. It's quite worrying." },
        { sender: 'dc', text: "Yes, it is. The report says AI programs can make fake child abuse pictures/videos that look real. How much is this kind of thing happening in our district?" },
        { sender: 'stakeholder', text: "Sir, the 2022 crime numbers showed more online crimes against children everywhere. Our district is seeing that too." },
        { sender: 'dc', text: "What about the reports from NCMEC (an American centre helping find missing kids)? India gets millions of tip-offs from them. Do we get some?" },
        { sender: 'stakeholder', text: "Yes Sir. We get regular lists from the state police office. These lists tell us about bad child pictures/videos being uploaded or shared online." },
        { sender: 'dc', text: "Just to be clear, what exactly is CSAM?" },
        { sender: 'stakeholder', text: "Sir, CSAM means Child Sexual Abuse Material. It’s any photo, video, or sound that shows a child being used for sex in a picture or action." },
        { sender: 'dc', text: "And now AI can make this stuff without using a real child? Just using a computer program?" },
        { sender: 'stakeholder', text: "Exactly Sir. That's the new problem. AI called 'Generative AI' can learn how things look and then create new pictures that seem totally real." },
        { sender: 'dc', text: "How does this make police work harder, compared to finding real bad pictures?" },
        { sender: 'stakeholder', text: "Much harder, Sir. First, it's tricky to prove harm if no real child was used for that specific fake picture. Second, finding the person who made it is tougher if they just used an AI program online." },
        { sender: 'dc', text: "The UK wants a 'tool-centric' approach. What does that mean?" },
        { sender: 'stakeholder', text: "Sir, our current laws (like POCSO Section 14/15, IT Act Section 67B) punish people for using a real child to make porn, or for keeping or sharing that material. The focus is on the action or the final picture/video." },
        { sender: 'dc', text: "Right. Focus is on the person and the bad picture." },
        { sender: 'stakeholder', text: "Yes. The UK idea is to make it illegal just to have or share the AI program (the tool) itself, if that program is meant for making CSAM. It targets the 'tool' used to make the bad stuff." },
        { sender: 'dc', text: "Like making it illegal to own a certain gun, not just punishing someone after they shoot someone?" },
        { sender: 'stakeholder', text: "Exactly Sir. It lets police step in before the bad pictures are even made or shared. Catches bad people earlier, when they are just preparing." },
        { sender: 'dc', text: "That sounds much better at preventing harm. Our current laws don't allow catching them this early?" },
        { sender: 'stakeholder', text: "No Sir. IT Act 67B punishes sharing it online. POCSO punishes using a child or keeping the porn. BNS (new Indian Penal Code) punishes selling bad stuff. None of these laws directly target having the tool just because it could be used to make bad stuff." },
        { sender: 'dc', text: "What about POCSO Section 15 - keeping child porn? Does AI-made stuff count as that?" },
        { sender: 'stakeholder', text: "That's unclear, Sir. Lawyers need to figure it out. Some say POCSO means a real child victim must be involved. AI makes this confusing." },
        { sender: 'dc', text: "So, there's a big gap in our laws when it comes to fake pictures made purely by AI?" },
        { sender: 'stakeholder', text: "Yes Sir. The article correctly says this. The UK law tries to fill this gap." },
        { sender: 'dc', text: "The article talks about the 'ripple effect' on kids' mental health. How does AI make this worse?" },
        { sender: 'stakeholder', text: "Sir, much more fake stuff could be made easily. Also, because it looks real, any child could worry that a fake picture of them might be created. This causes fear, worry, and bullying, even with fake pictures. The harm is real even if the picture is fake." },
        { sender: 'dc', text: "What are the biggest problems your team faces now with existing CSAM cases (real pictures)?" },
        { sender: 'stakeholder', text: "Finding the bad people, Sir. They use things like VPNs, secret messaging apps, and the dark web (hidden parts of the internet). It's also hard when the crime crosses state or country borders." },
        { sender: 'dc', text: "VPNs... Virtual Private Networks? Can you explain simply?" },
        { sender: 'stakeholder', text: "Sir, VPNs hide a person's real internet address (called IP address). It makes their computer look like it's somewhere else. So, it's very hard for us to track where they really are." },
        { sender: 'dc', text: "The article says India should define 'intermediary' in the IT Act to include VPNs, VPS, and Cloud Services? What are intermediaries?" },
        { sender: 'stakeholder', text: "Sir, intermediaries are like middleman companies online – Facebook, Google, internet service providers (like Jio or Airtel). Right now, they have some duties, like helping police find criminals or removing illegal posts if asked." },
        { sender: 'dc', text: "But VPN companies or Cloud storage companies often say they just provide the service and don't check what people do?" },
        { sender: 'stakeholder', text: "Exactly. Naming them clearly in the law would mean they must follow Indian rules. Maybe they'd have to keep some records (like who used their service when) and help police investigate CSAM shared using their service." },
        { sender: 'dc', text: "Can they even do that? Many of these companies are in other countries." },
        { sender: 'stakeholder', text: "It's difficult, Sir. We need help from other countries and strong laws here. But making it a rule shows we are serious and puts pressure on them. The UN agreement mentioned could help countries work together on this." },
        { sender: 'dc', text: "Let's talk about our police team. Does our district police, especially the Cyber Cell (computer crime team), have the skills to spot AI-made CSAM or find who made it?" },
        { sender: 'stakeholder', text: "Sir, honestly, this AI stuff is very new and advanced. We have basic tools to check computers and phones. But spotting clever AI fakes needs special training and costly software. We don't have much of that right now." },
        { sender: 'dc', text: "What kind of training do they need?" },
        { sender: 'stakeholder', text: "Training to use software that detects AI fakes, training to find hidden clues in computer networks that show how the fake was made (not just where the picture was shared)." },
        { sender: 'dc', text: "And you need money for new software and computers too?" },
        { sender: 'stakeholder', text: "Yes Sir. We need to buy special tools for AI investigation. We also need to work with tech companies and experts because this technology changes very fast." },
        { sender: 'dc', text: "The article mentions the NCRP website (where people can report cybercrime) and the CCPWC scheme (a govt plan). How well are these working in our district?" },
        { sender: 'stakeholder', text: "The NCRP website lets people report crimes online easily. It helps gather complaints in one place. The tip-offs we get give us leads. They are helpful, but there are just too many reports. Investigating properly takes time and is the main challenge." },
        { sender: 'dc', text: "So, getting reports is easy, but solving the cases is hard." },
        { sender: 'stakeholder', text: "Yes Sir. We have to decide which cases are most urgent. And this AI problem makes investigating and proving the crime in court even harder." },
        { sender: 'dc', text: "How often do we successfully punish people in court for online crimes involving digital proof?" },
        { sender: 'stakeholder', text: "It's tough, Sir. Proving the digital proof is real, proving who actually committed the crime online, and getting the court to accept the digital proof are all difficult. AI fakes (deepfakes) could make it even harder to trust the evidence." },
        { sender: 'dc', text: "The UK wants to ban manuals that teach people how to use AI to make CSAM. Do we see such instruction books being shared?" },
        { sender: 'stakeholder', text: "We haven't found actual printed books for AI yet, Sir. But instructions are definitely shared online, in secret groups or hidden websites. Making it illegal to even have such instructions would be another useful tool for us." },
        { sender: 'dc', text: "If India makes a similar 'tool-centric' law (part of the planned Digital India Act), how would that change daily police work?" },
        { sender: 'stakeholder', text: "Sir, we could take action if we get information that someone has or is making such an AI tool, even before they create or share any bad pictures. It would help us prevent the crime." },
        { sender: 'dc', text: "But that would mean police need to gather information specifically about these tools?" },
        { sender: 'stakeholder', text: "Yes Sir. We'd need to watch online places where these tools might be shared or sold. And we'd need officers with tech skills to identify these tools." },
        { sender: 'dc', text: "How do we do that without wrongly spying on innocent people? Privacy is important." },
        { sender: 'stakeholder', text: "That's the difficult part, Sir. Any new law must have clear rules to protect privacy. Police action should need permission from judges. And the law should only target AI tools made specifically for bad things like CSAM, not general AI tools used for good things." },
        { sender: 'dc', text: "Okay. So, main points for police: Need new laws (targeting tools, clear definitions), need lots of training and better tools, need companies like VPNs to take more responsibility, and need better ways to gather info about these new threats. Right?" },
        { sender: 'stakeholder', text: "Exactly Sir. And we need to work very closely with child protection teams and lawyers." },
        { sender: 'dc', text: "Let's plan for our district. Can your Cyber Cell write a short report on what skills and tools they have now versus what they need to handle AI-CSAM?" },
        { sender: 'stakeholder', text: "Yes Sir. I'll tell them right away. We should have a first report in about a week." },
        { sender: 'dc', text: "Good. Also, tell me about any recent difficult cases (without using names) where you suspect AI might have been used, even if you can't prove it. It helps show the problem." },
        { sender: 'stakeholder', text: "Understood Sir. We had one case with very real-looking pictures where we just couldn't find the source. It could be relevant." },
        { sender: 'dc', text: "Exactly. We need to be ready for this. Thanks, SP Sahab." },
        { sender: 'stakeholder', text: "Thank you, Sir. We will make this a priority." }
    ],
    dcpo: [
        { sender: 'dc', text: "DCPO ji, good morning. I need your thoughts on this AI-made CSAM problem from the UK report. How does it look from a child safety angle?" },
        { sender: 'stakeholder', text: "Good morning, Sir. Yes, I read the note. It's very worrying for child protection." },
        { sender: 'dc', text: "The article talks about the harm when CSAM spreads. How does AI change this harm?" },
        { sender: 'stakeholder', text: "Sir, normally, CSAM shows abuse of a real child. The pain is huge and direct for that child. With AI-made CSAM, the picture might be fake, but it can still cause terrible harm." },
        { sender: 'dc', text: "How, if the child in the picture isn't even real?" },
        { sender: 'stakeholder', text: "Sir, first, bad people can use these fake pictures to trick or threaten real children online (this is called 'grooming' or 'blackmail'). Kids see pictures that look real and might believe the threats or get scared into doing things." },
        { sender: 'dc', text: "So, fake pictures become a weapon to harm real children." },
        { sender: 'stakeholder', text: "Yes. Second, just knowing that anyone could be shown doing bad things in a realistic fake picture makes all children and parents very scared and worried. It makes the internet feel like an unsafe place." },
        { sender: 'dc', text: "Like a 'digital ghost' haunting them?" },
        { sender: 'stakeholder', text: "Exactly Sir. It can lead to shame, bullying, and mental health problems like sadness and fear, even if the picture is later proved fake. The first shock and spread already cause damage." },
        { sender: 'dc', text: "The article says the UK law wants to stop this 'initial spread'. How can we do that here in our district?" },
        { sender: 'stakeholder', text: "Sir, stopping it before it starts is most important. We need programs in schools and villages to teach everyone about fake pictures (deepfakes), online tricks, and how to use the internet safely." },
        { sender: 'dc', text: "Are the safety lessons we teach now good enough for this new AI threat?" },
        { sender: 'stakeholder', text: "We teach basic online safety, Sir. But we need special lessons on how to spot AI fakes, how they are made, and how to report them. We need to update our teaching materials (IEC)." },
        { sender: 'dc', text: "IEC?" },
        { sender: 'stakeholder', text: "Information, Education, and Communication materials, Sir. Things like posters, leaflets, videos we use to teach people." },
        { sender: 'dc', text: "Right. What about helping victims? If someone reports a fake AI picture targeting them or someone they know, what do we do?" },
        { sender: 'stakeholder', text: "Sir, right now, our plan (working with the Child Welfare Committee - CWC) is mostly for victims shown in real abuse pictures. If a fake AI picture targets a specific child (like a deepfake), we would give counselling, help them report to police, and work with the school to stop any bullying." },
        { sender: 'dc', text: "But what if the picture is totally made up, not showing any real child from our district?" },
        { sender: 'stakeholder', text: "That's the hard part, Sir. There's no single 'victim' to help in the usual way. The harm is to society – it makes child abuse images seem normal. Our job then is more about general prevention and reporting the website or person spreading the fake picture." },
        { sender: 'dc', text: "The NHRC (National Human Rights Commission) suggested changing the term 'child pornography' in the POCSO law to 'CSAM'. Why is that change important?" },
        { sender: 'stakeholder', text: "Sir, 'pornography' usually means pictures watched for sexual pleasure. 'CSAM' is a wider term. It includes material used to threaten, trick, or trade, whatever the reason someone has it. It covers more types of harm and matches what international groups use." },
        { sender: 'dc', text: "Makes sense. It covers the harm better." },
        { sender: 'stakeholder', text: "Yes Sir. It focuses on how bad the material itself is for children." },
        { sender: 'dc', text: "How does the POCSO Act help against bad online pictures now? Sections 13, 14, 15 were mentioned." },
        { sender: 'stakeholder', text: "Sir, Section 13 stops using a child to make porn. Section 14 punishes keeping child porn. Section 15 is about watching it. These are strong laws, but like the SP probably said, they were written before these very clever AI fakes existed." },
        { sender: 'dc', text: "The problem of definitions again. What about reporting? Are kids or parents willing to report these things?" },
        { sender: 'stakeholder', text: "Many cases are still not reported, Sir. People are scared, ashamed, or don't know how or where to report. The online reporting website (NCRP) helps, but talking to people directly through Anganwadis (village centres), schools, and Panchayats (village councils) is very important." },
        { sender: 'dc', text: "Have you seen any local cases where AI-made pictures might have been used, maybe for bullying or threats?" },
        { sender: 'stakeholder', text: "We had a couple of online bullying cases last year where fake pictures were used. We couldn't prove they were AI-made for sure, but they looked very real. It caused a lot of pain for the student involved." },
        { sender: 'dc', text: "A small example right there. Shows the real harm." },
        { sender: 'stakeholder', text: "Yes Sir. We worked with the school counsellor, the family, and the Cyber Police. But finding who made the picture was hard." },
        { sender: 'dc', text: "If the law changes to focus on the 'tool' (the AI program), how would that help child protection work?" },
        { sender: 'stakeholder', text: "It would be a big step in prevention, Sir. If the tools themselves are controlled, fewer bad pictures can be created and shared. Less bad material means less chance of children being harmed by it." },
        { sender: 'dc', text: "The article also says we need to clearly define 'sexually explicit' in the IT Act. Why?" },
        { sender: 'stakeholder', text: "Sir, if the term is not clear, companies can make excuses and delay removing bad content. A clear definition (maybe listing specific acts) helps computers and people spot and block CSAM faster. Less argument." },
        { sender: 'dc', text: "Blocking faster is key to stop the harm from spreading." },
        { sender: 'stakeholder', text: "Absolutely Sir. Every minute bad material stays online, more people see it, and the harm grows." },
        { sender: 'dc', text: "What can NGOs (non-government groups) and local people do to help fight AI-CSAM in our district?" },
        { sender: 'stakeholder', text: "They are very important partners, Sir. They can help spread awareness, reach poor or remote families, give special counselling, and push for better laws. We already work with several child rights groups." },
        { sender: 'dc', text: "Can we have a workshop together with schools, NGOs, and maybe the Cyber Police, focused just on AI-related online dangers for kids?" },
        { sender: 'stakeholder', text: "Excellent idea, Sir. We can create new lessons and train teachers and NGO workers. Maybe we can try it in a few areas first." },
        { sender: 'dc', text: "Let's do that. Please prepare a basic plan. Focus on simple, practical tips for kids, parents, and teachers – how to spot fakes, where to report." },
        { sender: 'stakeholder', text: "Will do Sir. We need simple advice they can actually use. Like checking for weird things in pictures, thinking about who sent it, and reporting bad stuff right away without sharing it." },
        { sender: 'dc', text: "Good. Also, include info on how these things affect minds and where to get help (like Childline 1098, CWC, counsellors)." },
        { sender: 'stakeholder', text: "Understood Sir. A complete plan – prevent, report, and support." },
        { sender: 'dc', text: "One last thing. AI can also be used for good things. How do we protect kids without stopping useful technology?" },
        { sender: 'stakeholder', text: "Sir, the rules should focus only on harmful use. Laws should target AI programs made specifically to create illegal stuff like CSAM. Not general AI programs used for art or work. The laws need to be very clear about this difference." },
        { sender: 'dc', text: "So, writing the law carefully is very important." },
        { sender: 'stakeholder', text: "Yes Sir. To protect children without stopping good progress." },
        { sender: 'dc', text: "Thank you, DCPO ji. Your thoughts on the harm and prevention are very useful. Please go ahead with the workshop plan." },
        { sender: 'stakeholder', text: "Thank you, Sir. I will send it soon." }
    ],
    cyber_insp: [
        { sender: 'dc', text: "Inspector, I talked with SP Sahab and DCPO about the AI-made CSAM problem. I need your technical view." },
        { sender: 'stakeholder', text: "Yes Sir. Saw the note. From a tech side, this changes everything." },
        { sender: 'dc', text: "Explain 'generative AI' simply in this situation. How does it work?" },
        { sender: 'stakeholder', text: "Sir, think of AI like a student who studies huge amounts of information (like millions of pictures or texts). It learns the patterns. Then, it can create new, original things that look like what it studied. For CSAM, it might learn from bad pictures online to create new, fake ones." },
        { sender: 'dc', text: "So it doesn't need a real child?" },
        { sender: 'stakeholder', text: "Correct Sir. It can make a real-looking child picture, or change an existing picture to look like someone else (a 'deepfake'), just using computer code." },
        { sender: 'dc', text: "How hard is it for experts like you to tell if a bad picture is real or AI-made?" },
        { sender: 'stakeholder', text: "It's getting harder, Sir. Old AI fakes had obvious mistakes – like weird looking hands or strange backgrounds. But the new AI is very clever. We need special computer tools and AI programs trained to find tiny digital clues left behind when the fake was made." },
        { sender: 'dc', text: "Does our district Cyber Cell have these special tools?" },
        { sender: 'stakeholder', text: "Sir, we have the usual tools to check pictures and files for basic info ('metadata'). But special AI-detection tools are costly and need constant updates because AI changes so fast. We don't have strong skills in this specific area right now." },
        { sender: 'dc', text: "What is 'metadata'?" },
        { sender: 'stakeholder', text: "Sir, it's like hidden information stored inside a file. For a photo, it might show which camera took it, the date, or location. But AI-made pictures might have fake or no metadata, so it's less helpful for finding who made it." },
        { sender: 'dc', text: "The article mentioned problems finding criminals because they use VPNs, VPS, Cloud Services. SP Sahab explained VPNs. What are VPS and Cloud Services here?" },
        { sender: 'stakeholder', text: "Sir, a VPN hides your internet address. A VPS (Virtual Private Server) is like renting a private computer online, maybe in another country. Criminals can use a VPS to run their AI programs or host websites with bad stuff, making it hard to connect it back to them here." },
        { sender: 'dc', text: "And Cloud Services? Like Google Drive?" },
        { sender: 'stakeholder', text: "Yes Sir, those too. But also bigger services like Amazon Web Services (AWS) or Microsoft Azure that companies use. Criminals might store huge amounts of CSAM there, or use the powerful computers in the cloud to run the AI programs that make CSAM." },
        { sender: 'dc', text: "And making these companies 'intermediaries' under the IT Act would help how?" },
        { sender: 'stakeholder', text: "Sir, right now, 'intermediaries' like Facebook or Google have to follow rules – like removing illegal stuff if reported, or helping police find who first sent a harmful message in serious cases. If VPNs, VPS, Cloud companies are clearly named as intermediaries too..." },
        { sender: 'dc', text: "...they would have similar duties for CSAM stored or made using their services?" },
        { sender: 'stakeholder', text: "Exactly Sir. They might have to keep basic records (like who connected when, not what they did), answer requests from Indian police (LEAs), and remove CSAM faster." },
        { sender: 'dc', text: "LEAs?" },
        { sender: 'stakeholder', text: "Law Enforcement Agencies, Sir. Like the police or CBI." },
        { sender: 'dc', text: "But isn't it technically hard? How can a VPN company, which promises privacy, check for CSAM without reading people's secret messages?" },
        { sender: 'stakeholder', text: "That's a big debate, Sir. Some say they can't. Others think they could maybe check for known CSAM 'hashes' (digital fingerprints) or help police track specific users if a court orders it. Making it a law forces them to try and find solutions that work legally." },
        { sender: 'dc', text: "'Hashing'... explain that simply." },
        { sender: 'stakeholder', text: "Sir, it's like giving every file a unique ID code (made of numbers and letters). If a picture's ID code matches a known CSAM picture's code, it can be flagged automatically by computers, without a person having to see the picture. Tech companies use this now." },
        { sender: 'dc', text: "Can hashing work for AI-made CSAM, which might be slightly different each time?" },
        { sender: 'stakeholder', text: "Not as well for brand new, unique AI pictures, Sir. Hashing is best for known pictures that are shared a lot. For AI fakes, we need tools that look at the picture itself for signs of AI creation, not just the hash code." },
        { sender: 'dc', text: "The UK's 'tool-centric' idea: Technically, how would police identify an 'AI tool that can generate CSAM'?" },
        { sender: 'stakeholder', text: "Sir, that needs experts to check the software itself. Does it have options specifically for making dirty child pictures? Is it sold or mostly used for that purpose? It's tricky. Some AI tools can be used for good things too (like making art)." },
        { sender: 'dc', text: "So, police would need tech experts to check any software they find?" },
        { sender: 'stakeholder', text: "Yes Sir. And we'd need clear rules about what counts as an illegal 'tool' versus a normal AI program. Working with other countries would be key, as many tools are made overseas." },
        { sender: 'dc', text: "The article mentioned a UN agreement about fighting computer crime (ICT crime). How could that help?" },
        { sender: 'stakeholder', text: "Sir, ICT is just computer and internet technology. An agreement like that would set common rules for all countries fighting cybercrime, including AI crime. It would make it easier for countries to work together – share information, help each other get evidence faster (through MLAT requests), and make similar laws. This makes it harder for criminals to hide in other countries." },
        { sender: 'dc', text: "MLAT?" },
        { sender: 'stakeholder', text: "Mutual Legal Assistance Treaty, Sir. It's a formal deal between countries to help each other with legal cases, like getting bank records or sending a criminal back." },
        { sender: 'dc', text: "Okay. What can we do right now in our district to get technically better prepared?" },
        { sender: 'stakeholder', text: "Sir, 1. Training: Send our officers to special courses on finding AI fakes. 2. Tools: Get new software/computers for checking AI pictures. 3. Teamwork: Connect with colleges or private AI experts for help. 4. Awareness: Teach regular police station officers how to spot possible AI-CSAM in their first checks." },
        { sender: 'dc', text: "Can you make a specific list of training and tools we need? Include rough costs." },
        { sender: 'stakeholder', text: "Yes Sir. I'll look into the best options available now and send you a plan." },
        { sender: 'dc', text: "Also, can your team start looking out for specific words or websites (on the normal internet, as the report said bad stuff is spreading there too) related to AI CSAM tools? But stay within the law." },
        { sender: 'stakeholder', text: "We can increase our searching of public online information (OSINT) for those terms, Sir. I'll check with the state cyber police too." },
        { sender: 'dc', text: "OSINT?" },
        { sender: 'stakeholder', text: "Open-Source Intelligence, Sir. Getting information from places anyone can access, like websites, forums, social media." },
        { sender: 'dc', text: "Good. We need info to understand how big this threat is locally. Thanks, Inspector. Let me know about the plan." },
        { sender: 'stakeholder', text: "Thank you, Sir. Will do." }
    ],
    ps_home: [
        { sender: 'dc', text: "Good morning, Ma'am. Could I have a few minutes about the AI Safety Report and the CSAM issue?" },
        { sender: 'stakeholder', text: "Morning, Collector. Yes, the state police chief mentioned it. Serious stuff. What are you seeing in your district?" },
        { sender: 'dc', text: "Ma'am, from the report and talks with my SP/DCPO, the main points are: AI making real-looking fake CSAM, our current laws (IT Act/POCSO) not fully covering this, and needing a 'tool-centric' approach like the UK." },
        { sender: 'stakeholder', text: "I agree. Our current system acts after the bad content is made. AI needs us to act before by targeting the tools used for creation. The planned Digital India Act is likely where these changes need to be added at the national level." },
        { sender: 'dc', text: "Yes, Ma'am. The article strongly suggests that. What can we do at the state or district level in the meantime?" },
        { sender: 'stakeholder', text: "We need to focus on making our police (LEAs) better skilled, as the report suggests. Improve their computer investigation skills – training and tools especially for spotting AI fakes. State Police HQ is already looking at plans for this." },
        { sender: 'dc', text: "Ma'am, my SP told me they lack the specific tools and training for AI at the district level. We need state help to buy these things and get special training." },
        { sender: 'stakeholder', text: "Understood. We are collecting requests from all districts. Make sure your district's list of needs (I heard you asked SP for one) is clear and sent through the official process quickly." },
        { sender: 'dc', text: "Will do, Ma'am. Another point is defining 'intermediary'. The article suggests adding VPNs, VPS, Cloud Services to the IT Act list. This needs a change in the national law, but the state's opinion matters." },
        { sender: 'stakeholder', text: "Yes, the state IT Department is also looking into this. The difficulty is making companies follow the rules, especially if they are based outside India. But making them legally responsible is the first step. We are giving our suggestions for the Digital India Act discussions." },
        { sender: 'dc', text: "Ma'am, the NHRC idea to use 'CSAM' instead of 'child pornography' in POCSO also seems very important for covering more harm." },
        { sender: 'stakeholder', text: "Agreed. It matches what other countries do and covers the problem more completely. We have passed this suggestion up to the central government too." },
        { sender: 'dc', text: "What about working together? The NCMEC tip-offs come down through the State Crime Records Bureau (SCRB). Is that system working well?" },
        { sender: 'stakeholder', text: "It works, but the number of reports is huge, as you know. We are looking at using technology to better sort and prioritize these tip-offs at the state level before sending them to districts. Funnily enough, AI tools might help us sort through these reports faster." },
        { sender: 'dc', text: "Using AI to fight AI crime?" },
        { sender: 'stakeholder', text: "Possibly. To spot patterns, find areas with more problems, or flag urgent cases based on certain signs. We have to be careful and ethical about it, of course." },
        { sender: 'dc', text: "Ma'am, DCPO mentioned updating awareness materials (IEC) for schools and people about AI fakes. Can the state help create good, common materials for everyone?" },
        { sender: 'stakeholder', text: "Good idea. The department looking after women and children can work with the Education department and cyber experts to create state-level materials that districts can use or change slightly. Please send a formal request explaining what you need." },
        { sender: 'dc', text: "Will do, Ma'am. Lastly, that UN agreement mentioned – the state's job would mainly be to follow it once India signs up?" },
        { sender: 'stakeholder', text: "Mostly, yes. Following it would mean changing state rules if needed, training officers, and taking part in any information sharing systems set up by the agreement." },
        { sender: 'dc', text: "Thank you, Ma'am. Your advice is very helpful. We will focus on asking for training/tools and improving local awareness programs." },
        { sender: 'stakeholder', text: "Good. Keep watching this situation closely. This AI threat is changing fast. Get regular updates from your Cyber Cell." },
        { sender: 'dc', text: "Yes, Ma'am. Thank you." }
    ],
    ngo_rep: [
        { sender: 'dc', text: "Good afternoon. I wanted to talk about the worry over AI-made CSAM and hear your group's thoughts." },
        { sender: 'stakeholder', text: "Good afternoon, Sir. Thanks for asking. Yes, we are watching this. It's a scary new way children are being harmed." },
        { sender: 'dc', text: "The article mentions the UK is moving towards a law focused on the 'tool'. From your work helping children, do you think India should do the same?" },
        { sender: 'stakeholder', text: "Absolutely Sir. It's very important. Just focusing on the final bad picture is like trying to clean up a flood without turning off the leaking tap. We must stop the problem at the start – the tools that allow people to easily make and spread this horrible stuff." },
        { sender: 'dc', text: "What are the biggest dangers you see right now for children in our district from AI-CSAM?" },
        { sender: 'stakeholder', text: "Sir, besides what the police might have mentioned (like using fakes for tricking or threatening kids), there's a risk it becomes 'normal'. If lots of fake but real-looking CSAM is online, people might stop being shocked by it. This makes real abuse seem less serious." },
        { sender: 'dc', text: "A scary thought. Society stops hating it as much." },
        { sender: 'stakeholder', text: "Exactly. Also, think about how it affects all children mentally – knowing that a fake, bad picture of them could be made anytime. It makes them scared to be online." },
        { sender: 'dc', text: "DCPO mentioned updating awareness campaigns. What messages do you think are most important for kids and parents now?" },
        { sender: 'stakeholder', text: "Sir, we need to teach more than just general 'online safety'. Teach kids to think critically: 'Is this picture real? Who sent it? Why?'. Explain deepfakes simply. Stress reporting bad stuff to adults they trust or official websites (like NCRP, Childline) without sharing it. Teach digital skills safely from a young age." },
        { sender: 'dc', text: "We are planning workshops. Would your group be willing to help create the lessons and teach them?" },
        { sender: 'stakeholder', text: "Definitely Sir. We work directly with children and communities. We can help make lessons that are easy to understand for different ages, and help run sessions, especially in poorer areas." },
        { sender: 'dc', text: "Excellent. I'll connect you with the DCPO. What about the law changes needed? The article suggests changing POCSO (CSAM definition) and IT Act (definitions of 'intermediary', 'sexually explicit')." },
        { sender: 'stakeholder', text: "Sir, these are essential. Changing 'pornography' to 'CSAM' is long overdue. Defining 'sexually explicit' clearly stops online companies from avoiding responsibility. And companies like VPNs/Cloud must be made responsible – they shouldn't make money while helping criminals harm children." },
        { sender: 'dc', text: "Some people worry about too much police checking (surveillance) if we target tools or make companies more responsible. What's your view?" },
        { sender: 'stakeholder', text: "Sir, protecting children must come first. Yes, we need safety rules (safeguards). Laws should target tools made specifically for CSAM. Rules for companies should focus on removing known illegal content and helping police legally, not spying on everyone. It is possible to find a balance with careful laws." },
        { sender: 'dc', text: "What problems do you face when helping victims of online abuse now? How might AI make these problems worse?" },
        { sender: 'stakeholder', text: "Sir, blaming the victim and the shame they feel are huge problems. AI fakes might make this worse – people might say 'It wasn't real, why are you so upset?' or make it harder for victims to be believed. Proving harm in court might also get trickier, needing careful handling by police, counsellors, and judges." },
        { sender: 'dc', text: "So, everyone involved needs to be educated about this, along with changing the laws." },
        { sender: 'stakeholder', text: "Yes Sir. Police, judges, schools, families. Everyone needs to understand the real harm caused even by 'fake' pictures." },
        { sender: 'dc', text: "The tip-lines from NCMEC give us numbers. From your experience on the ground, do the official numbers show the full problem?" },
        { sender: 'stakeholder', text: "Sir, the official numbers are just the small part we can see (tip of the iceberg). Shame, fear, not trusting the police, poverty, or not knowing how to report mean most cases are probably never reported, especially in villages or poor areas." },
        { sender: 'dc', text: "How can we make it easier for people to report?" },
        { sender: 'stakeholder', text: "Sir, need reporting methods that are easy to use and child-friendly. Need to spread awareness in villages and build trust. Need to promise secrecy and give kind support to those who report. Maybe need better ways to report without giving a name." },
        { sender: 'dc', text: "Reporting without a name makes investigation hard, but maybe it's needed to get information?" },
        { sender: 'stakeholder', text: "Exactly Sir. It can help us see trends, find problem websites or apps, and identify bad people, even if we can't prosecute based just on that anonymous report." },
        { sender: 'dc', text: "Final thoughts? What's the single most important thing India needs to do now?" },
        { sender: 'stakeholder', text: "Sir, change the laws urgently to include the 'tool-centric' approach and update the definitions, especially in the new Digital India Act. At the same time, heavily increase awareness programs and training for police and others. We need to fight this from many sides at once." },
        { sender: 'dc', text: "Thank you for your honest thoughts. Your view from working directly with people is very valuable. We will include your group in our awareness plans." },
        { sender: 'stakeholder', text: "Thank you, Sir. We are ready to help in any way to protect children." }
    ]
};

// --- Global Variables ---
let currentStakeholderKey = null;
let currentMessageIndex = 0;
let isTypingOrLoading = false; // Flag to prevent clicks during animations

// --- DOM References ---
const stakeholderSelectionDiv = document.getElementById('stakeholder-selection');
const chatContainerDiv = document.getElementById('chat-container');
const chatHeaderName = document.getElementById('stakeholder-name');
const chatMessagesDiv = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const loadingDots = document.getElementById('loading-dots');

// --- Functions ---

// Function to display a message in the chat window
function displayMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'dc' ? 'user-message' : 'stakeholder-message');
    // Convert newline characters (\n) to <br> tags for display
    messageDiv.innerHTML = text.replace(/\n/g, '<br>');
    chatMessagesDiv.appendChild(messageDiv);
    // Scroll smoothly to the bottom
    chatMessagesDiv.scrollTo({ top: chatMessagesDiv.scrollHeight, behavior: 'smooth' });
}


// Function to simulate typing the DC's message into the input bar
function typeMessageInInput(text, callback) {
    let charIndex = 0;
    const typingSpeed = 35; // Adjusted speed
    messageInput.value = ''; // Clear input first
    isTypingOrLoading = true; // Set flag

    const intervalId = setInterval(() => {
        if (charIndex < text.length) {
            messageInput.value += text[charIndex];
            charIndex++;
        } else {
            clearInterval(intervalId);
            setTimeout(() => {
                 callback(text); // Pass the full text to the callback
            }, 250); // Shorter pause after typing
        }
    }, typingSpeed);
}

// Function called after DC's message is typed into the input bar
function onDcTypingComplete(typedText) {
    // 1. Display the message in chat history
    displayMessage('dc', typedText);

    // 2. Clear the input bar and show loading dots
    messageInput.value = '';
    messageInput.placeholder = "Waiting for response...";
    loadingDots.classList.remove('hidden');
     // Scroll again after adding dots
     chatMessagesDiv.scrollTo({ top: chatMessagesDiv.scrollHeight, behavior: 'smooth' });

    // 3. Wait for ~2 seconds (loading simulation)
    setTimeout(() => {
        // 4. Hide loading dots
        loadingDots.classList.add('hidden');

        // 5. Process the stakeholder's response
        processNextStakeholderMessage();
    }, 2000); // 2 seconds loading time
}


// Function to process ONLY the stakeholder's reply
function processNextStakeholderMessage() {
     if (!currentStakeholderKey || currentMessageIndex >= conversations[currentStakeholderKey].length) {
        messageInput.placeholder = "Conversation ended.";
        sendButton.disabled = true; // Ensure button is disabled at the end
        isTypingOrLoading = false;
        console.log("End of conversation.");
        return;
    }

    const messageData = conversations[currentStakeholderKey][currentMessageIndex];

    if (messageData.sender === 'stakeholder') {
         // Simulate stakeholder "thinking/typing" delay
        setTimeout(() => {
            displayMessage('stakeholder', messageData.text);
            currentMessageIndex++;
            prepareForNextDcTurn(); // Check if DC is next
        }, 900); // Stakeholder thinking/typing delay

    } else {
         console.error("Error: Expected stakeholder message, found DC message.");
         isTypingOrLoading = false;
         prepareForNextDcTurn(); // Check next step anyway
    }
}

// Function to check if it's DC's turn next and enable the button
function prepareForNextDcTurn() {
     if (currentMessageIndex < conversations[currentStakeholderKey].length && conversations[currentStakeholderKey][currentMessageIndex].sender === 'dc') {
        // It's DC's turn next. Enable the send button.
        sendButton.disabled = false;
        messageInput.placeholder = "Click Send for your next message...";
        isTypingOrLoading = false; // Ready for user click
    } else {
        // End of conversation or unexpected state
        messageInput.placeholder = "Conversation ended.";
        sendButton.disabled = true;
        isTypingOrLoading = false; // Reset flag
         if (currentMessageIndex >= conversations[currentStakeholderKey].length) {
             console.log("End of conversation reached after stakeholder message.");
         }
    }
}


// Function to handle clicking the Send button
function handleSendClick() {
    // Prevent action if typing/loading or not DC's turn
    if (isTypingOrLoading || !currentStakeholderKey || currentMessageIndex >= conversations[currentStakeholderKey].length || conversations[currentStakeholderKey][currentMessageIndex].sender !== 'dc') {
        return;
    }

    // Get the message data for DC's turn
    const messageData = conversations[currentStakeholderKey][currentMessageIndex];

    // Disable button immediately
    sendButton.disabled = true;
    messageInput.placeholder = "Typing..."; // Indicate typing action

    // Increment index *before* starting typing
    currentMessageIndex++;

    // Start typing animation in input bar, then proceed
    typeMessageInInput(messageData.text, onDcTypingComplete);
}

// Function to start a specific conversation
// Accepts stakeholderKey (e.g., 'sp') and stakeholderName (e.g., 'Superintendent of Police (SP)')
function startConversation(stakeholderKey, stakeholderName) {
    if (!conversations[stakeholderKey]) {
        console.error("Conversation data not found for key:", stakeholderKey);
        return;
    }
    currentStakeholderKey = stakeholderKey;
    currentMessageIndex = 0;
    isTypingOrLoading = false;

    // Update UI
    stakeholderSelectionDiv.classList.add('hidden');
    chatContainerDiv.classList.remove('hidden');
    chatHeaderName.textContent = stakeholderName; // Use the passed name
    chatMessagesDiv.innerHTML = '';
    messageInput.value = '';
    messageInput.readOnly = true;
    loadingDots.classList.add('hidden');

    // Prepare for the first turn (always DC in our script)
    prepareForNextDcTurn();
}

// Function to go back to the stakeholder selection screen
function goBackToSelection() {
    chatContainerDiv.classList.add('hidden');
    stakeholderSelectionDiv.classList.remove('hidden');
    currentStakeholderKey = null; // Reset current stakeholder
}


// --- Event Listeners ---
sendButton.addEventListener('click', handleSendClick);

// --- Initial Setup ---
// Handled by CSS and startConversation function