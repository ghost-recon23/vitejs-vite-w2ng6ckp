import { useState } from "react";

// ─── THEME ────────────────────────────────────────────────────────────────────

const DARK = {
  bg:           "#070c18",
  bgHeader:     "#0b1220",
  bgMain:       "#0f1c2e",
  bgSide:       "#0b1525",
  bgCard:       "#0d1a2e",
  bgInput:      "#162033",
  bgTag:        "rgba(245,158,11,.08)",
  bgPill:       "rgba(255,255,255,.04)",
  bgPregame:    "rgba(245,158,11,.04)",
  bgCoach:      "rgba(245,158,11,.05)",
  bgCoachTip:   "rgba(129,140,248,.04)",
  bgRepair:     "rgba(255,255,255,.03)",
  bgRepairOn:   "rgba(239,68,68,.07)",
  bgCalc:       "rgba(255,255,255,.03)",
  bgCalcHL:     "rgba(245,158,11,.07)",
  bgGauge:      "rgba(248,113,113,.05)",
  bgUfc:        "rgba(34,197,94,.04)",
  bgDecBar:     "rgba(34,197,94,.04)",
  bgWhy:        "rgba(99,102,241,.05)",
  bgSandler:    "rgba(255,255,255,.02)",
  bgStepBtn:    "rgba(255,255,255,.04)",
  bgARVStrip:   "#162033",
  bgRepSummary: "#162033",
  bgScriptLine: "rgba(245,158,11,.05)",
  bgQCard:      "rgba(255,255,255,.02)",
  bgModeTab:    "rgba(245,158,11,.04)",
  bgPainLink:   "rgba(248,113,113,.06)",
  border:       "rgba(255,255,255,.07)",
  borderInput:  "rgba(255,255,255,.09)",
  borderPill:   "rgba(255,255,255,.08)",
  borderStep:   "rgba(255,255,255,.08)",
  borderCard:   "rgba(255,255,255,.07)",
  borderSide:   "rgba(245,158,11,.12)",
  borderHeader: "rgba(245,158,11,.15)",
  borderSandler:"rgba(255,255,255,.07)",
  borderCB:     "rgba(255,255,255,.15)",
  borderRepair: "rgba(255,255,255,.06)",
  borderQCard:  "rgba(255,255,255,.08)",
  borderARV:    "rgba(255,255,255,.07)",
  borderPainLink:"rgba(248,113,113,.18)",
  text:         "#e2e8f0",
  textMuted:    "#64748b",
  textSub:      "#94a3b8",
  textCard:     "#f1f5f9",
  textScript:   "#cbd5e1",
  textCoach:    "#f59e0b",
  textRepair:   "#cbd5e1",
  textStep:     "#64748b",
  textSandler:  "#475569",
  accent:       "#f59e0b",
  accentGreen:  "#22c55e",
  accentRed:    "#ef4444",
  accentPurple: "#818cf8",
  accentBlue:   "#38bdf8",
  accentTeal:   "#34d399",
  isDark: true,
};

const LIGHT = {
  bg:           "#f0f4f8",
  bgHeader:     "#ffffff",
  bgMain:       "#ffffff",
  bgSide:       "#fefefe",
  bgCard:       "#f8fafc",
  bgInput:      "#f1f5f9",
  bgTag:        "rgba(217,119,6,.1)",
  bgPill:       "rgba(0,0,0,.04)",
  bgPregame:    "rgba(217,119,6,.06)",
  bgCoach:      "rgba(217,119,6,.07)",
  bgCoachTip:   "rgba(99,102,241,.06)",
  bgRepair:     "rgba(0,0,0,.03)",
  bgRepairOn:   "rgba(220,38,38,.07)",
  bgCalc:       "rgba(0,0,0,.03)",
  bgCalcHL:     "rgba(217,119,6,.08)",
  bgGauge:      "rgba(220,38,38,.05)",
  bgUfc:        "rgba(22,163,74,.05)",
  bgDecBar:     "rgba(22,163,74,.05)",
  bgWhy:        "rgba(99,102,241,.06)",
  bgSandler:    "rgba(0,0,0,.02)",
  bgStepBtn:    "rgba(0,0,0,.03)",
  bgARVStrip:   "#f1f5f9",
  bgRepSummary: "#f1f5f9",
  bgScriptLine: "rgba(217,119,6,.06)",
  bgQCard:      "#f8fafc",
  bgModeTab:    "rgba(217,119,6,.06)",
  bgPainLink:   "rgba(220,38,38,.05)",
  border:       "rgba(0,0,0,.08)",
  borderInput:  "rgba(0,0,0,.12)",
  borderPill:   "rgba(0,0,0,.1)",
  borderStep:   "rgba(0,0,0,.08)",
  borderCard:   "rgba(0,0,0,.08)",
  borderSide:   "rgba(217,119,6,.25)",
  borderHeader: "rgba(217,119,6,.2)",
  borderSandler:"rgba(0,0,0,.08)",
  borderCB:     "rgba(0,0,0,.18)",
  borderRepair: "rgba(0,0,0,.07)",
  borderQCard:  "rgba(0,0,0,.09)",
  borderARV:    "rgba(0,0,0,.08)",
  borderPainLink:"rgba(220,38,38,.2)",
  text:         "#1e293b",
  textMuted:    "#64748b",
  textSub:      "#475569",
  textCard:     "#1e293b",
  textScript:   "#334155",
  textCoach:    "#b45309",
  textRepair:   "#334155",
  textStep:     "#64748b",
  textSandler:  "#94a3b8",
  accent:       "#d97706",
  accentGreen:  "#16a34a",
  accentRed:    "#dc2626",
  accentPurple: "#6366f1",
  accentBlue:   "#0284c7",
  accentTeal:   "#0d9488",
  isDark: false,
};

// ─── SANDLER DATA ─────────────────────────────────────────────────────────────

const SANDLER_STAGES = [
  { id: "rapport",     label: "Bonding & Rapport",  icon: "🤝", color: "#818cf8" },
  { id: "contract",    label: "Upfront Contract",   icon: "📋", color: "#34d399" },
  { id: "pain",        label: "Pain",               icon: "💢", color: "#f87171" },
  { id: "budget",      label: "Budget",             icon: "💰", color: "#f59e0b" },
  { id: "decision",    label: "Decision",           icon: "✅", color: "#22c55e" },
  { id: "fulfillment", label: "Fulfillment",        icon: "🎯", color: "#38bdf8" },
];
const SANDLER_BY_STEP = [
  ["rapport","contract"],
  ["rapport","pain"],
  ["pain"],
  ["pain","budget"],
  ["budget","decision"],
  ["decision","fulfillment"],
];

const RAPPORT_QUESTIONS = [
  { q: "Catch me up to speed — what's going on with the property?", note: "Open-ended. Let them talk. Don't interrupt." },
  { q: "What are you trying to accomplish here?", note: "Gets to the WHY fast." },
  { q: "What's your biggest challenge with this property right now?", note: "Surface-level pain opener." },
  { q: "How has the process been so far — have you talked to other investors?", note: "Assumes they've been shopping. They'll tell you if they haven't." },
  { q: "What other offers have you been receiving?", note: "Never ask 'have you gotten offers?' — assume they have." },
  { q: "What has kept you from selling the house so far?", note: "Reveals real objections early." },
  { q: "So I imagine you're getting a lot of lowball offers from other people?", note: "Positions you as different. Validates their frustration." },
  { q: "What did your real estate agent say?", note: "Assume they've spoken to one. They'll tell you if not." },
  { q: "Why haven't you listed this with a realtor?", note: "Uncovers motivation to go the investor route." },
  { q: "What will get you excited about doing a deal with me or anyone else?", note: "Lets them tell you exactly what they need to close." },
];
const UPFRONT_CONTRACT = [
  { q: "I want to make sure we're a good fit for each other — even though I didn't bring a contract today.", note: "Sets collaborative frame." },
  { q: "I'm busy, you're busy — if we work out a good situation for you, what would the next step be?", note: "Gets commitment to a next step before you invest time." },
  { q: "My partner and I only buy 2 houses a week. Is this something you'd move on soon, or should I check back in a few weeks?", note: "Creates scarcity. Reveals urgency without pressure." },
  { q: "Are you ready to make a decision today, or should I check back in 2–3 weeks?", note: "Forces a real answer. No maybes." },
  { q: "A yes or a no is totally fine with me. What I can't work with is a maybe. Fair enough?", note: "No maybes rule — stated upfront." },
  { q: "Is there anyone else that needs to be part of this conversation? I'd rather everyone hear it from me.", note: "Surfaces hidden decision makers before you go deep." },
];
const UFC_CHECKLIST = [
  { id: "decision_makers", label: "All decision makers confirmed on the call" },
  { id: "yes_no",          label: "Yes/No commitment — no maybes" },
  { id: "timeline",        label: "Timeline confirmed (ready now vs. later)" },
  { id: "pen_paper",       label: "Pen & paper step completed" },
  { id: "next_step",       label: "Next step agreed to upfront" },
];
const PAIN_GENERAL = [
  { q: "Doesn't seem like you're totally ready to sell yet?", note: "Pattern interrupt. Gets them to defend their urgency." },
  { q: "What are you going to do if you don't sell?", note: "Forces them to confront the alternative." },
  { q: "What are your plans if you don't get the number you need?", note: "Surfaces the real floor — and what happens if they miss it." },
  { q: "Sounds like if you kept this property it wouldn't be that big of a deal for you?", note: "Reverse psychology. If pain is real, they push back hard." },
  { q: "So if you don't make a decision today, how much will this cost you in 60 days?", note: "Quantifies the cost of inaction. Let them do the math." },
  { q: "Imagine yourself in 60 days — do you still own this? Are you still hemorrhaging? What does that picture look like?", note: "Future pacing. Gets emotional, not just logical." },
  { q: "If you don't sell, what is your next move?", note: "Forces them to admit there isn't a great alternative." },
  { q: "Why would you even consider doing business with an investor vs. listing it?", note: "Let them sell YOU on why they need you." },
];
const PAIN_BY_SITUATION = {
  probate: [
    { q: "How long has the estate been tied up — what's that cost the family emotionally and financially?", note: "Connects financial pain to emotional weight." },
    { q: "What happens to the family dynamic if this drags on another 6 months?", note: "Surfaces relationship pain — often bigger than the financial." },
    { q: "Is the property generating any income while you're carrying it through probate?", note: "If no — quantify the bleed immediately." },
    { q: "Are all the heirs in agreement on selling, or is there tension pulling things in different directions?", note: "Uncovers hidden blockers early. If there's disagreement, that's a real pain point." },
    { q: "Do you have a probate attorney involved, or are you navigating most of this on your own?", note: "Gauges how complex the process is and whether they feel supported." },
    { q: "What's the biggest headache for you personally right now in settling all of this?", note: "Gets them to name their own pain. Let them say it." },
    { q: "If we could close this in the next 2–3 weeks and get cash into the estate, how would that change things for the family?", note: "Future pacing — connects speed to relief." },
    { q: "What does this property mean emotionally to the family — is there any attachment, or is everyone ready to move on?", note: "Important to know before making an offer. Emotional attachment affects negotiation." },
  ],
  behind_payments: [
    { q: "How many months behind are you right now — and has the lender started any formal process?", note: "Get the exact number. Don't let them be vague." },
    { q: "You've been behind for [X] months — you're spending money every day treading water on a property you want out of. How much longer can that continue?", note: "Quantify the bleed. Let them say it." },
    { q: "What happens when a foreclosure notice actually hits — what does that do to your credit and your future plans?", note: "Future consequence pain. Most people haven't thought this through." },
    { q: "If you don't make a decision today, what does that number look like in 60 days?", note: "Cost of inaction. Let them do the math out loud." },
    { q: "Have you received any notices of default yet, or are you still in the early stages?", note: "Urgency gauge — tells you how fast you need to move." },
    { q: "Has anyone else reached out trying to help with the property, or have you been handling this alone?", note: "Reveals competition and also their isolation — both useful." },
    { q: "What would it mean for your stress level if this payment was completely off your plate tomorrow?", note: "Emotional relief framing — moves the conversation from price to peace of mind." },
    { q: "Is there a second mortgage or HELOC involved, or just the first?", note: "Practical — affects your offer calculation and their real walkaway." },
  ],
  divorce: [
    { q: "Every month this property sits, you're both still financially tied together — how does that feel?", note: "Emotional + financial pain combined." },
    { q: "What's the cost of keeping this property in the middle of an already difficult situation?", note: "Positions the property as adding weight to an already painful process." },
    { q: "Is it worth prolonging this for more money, or is a clean exit worth more than a higher number?", note: "Gets them to weigh peace of mind vs. price. Many will choose peace." },
    { q: "Are both parties in agreement on selling, or is one side more reluctant than the other?", note: "Critical to know — if one party is resistant, you have a blocker." },
    { q: "Is there an attorney or mediator coordinating this, or are you two working it out directly?", note: "Legal involvement changes the timeline and the process." },
    { q: "What happens to the divorce proceedings if this property doesn't sell quickly?", note: "Ties the property sale directly to the legal and emotional resolution they want." },
    { q: "Which of you is still living in the home, or is it vacant right now?", note: "Vacancy = carrying cost + urgency. Still occupied = emotional complexity." },
    { q: "What does a clean, fast close do for both of you in terms of moving forward with your lives?", note: "Future pacing — connects speed of close to freedom from the situation." },
  ],
  vacant: [
    { q: "How long has the property been sitting vacant?", note: "Sets the baseline for carrying cost calculation." },
    { q: "How much are you paying each month to hold a property that's doing nothing for you?", note: "Quantify the exact monthly bleed. Make them say the number." },
    { q: "What's the risk every day that property sits vacant — insurance, vandalism, liability?", note: "Surfaces hidden costs they may not have been thinking about." },
    { q: "So you're essentially paying rent on a house you don't live in — how long does that continue?", note: "Reframes the cost in simple, relatable terms." },
    { q: "Have there been any break-ins, vandalism, or squatter issues while it's been empty?", note: "Surfaces additional pain — and if squatters are present, flags a bigger issue." },
    { q: "Is it still on utilities, or have those been shut off?", note: "Practical details — also shows the degree of abandonment." },
    { q: "What was your original plan for the property when it went vacant — did that plan fall through?", note: "Gets the backstory. Often reveals a failed rental or relocation scenario." },
    { q: "If this property sat vacant for another full year, what does that cost you total — and what else could you do with that money?", note: "Forces a 12-month calculation. The number is usually jarring enough to create urgency." },
  ],
  squatters: [
    { q: "How long have they been in there, and do you know how they got access in the first place?", note: "Sets the timeline and the backstory." },
    { q: "What does it cost you each month in carrying costs, legal fees, and stress while these people are in there?", note: "Combines financial and emotional cost into one question." },
    { q: "What happens if you go through a full eviction and then find the property is completely trashed?", note: "Worst-case scenario — often the biggest fear they haven't said out loud." },
    { q: "How many more months are you willing to fight this before you decide it's not worth it?", note: "Forces them to put a number on their threshold." },
    { q: "Have you had police or attorneys involved yet — how far down that road are you?", note: "Gauges how exhausted and frustrated they already are." },
    { q: "Is the property sustaining damage while they're in there — do you even know the current condition?", note: "Surfaces the unknown, which is often scarier than the known." },
    { q: "Has this made it impossible to list it or show it to other buyers?", note: "Connects the squatter issue directly to why they haven't been able to sell." },
    { q: "What would it feel like to just hand this problem off entirely and never deal with it again?", note: "Relief framing — sell the outcome, not the process." },
  ],
  job_loss: [
    { q: "How long has the financial strain been going on — months, or longer?", note: "Sets the timeline and depth of the problem." },
    { q: "You're spending money every month to keep a property afloat — what would that money do for you if it stayed in your pocket?", note: "Redirect the money to something meaningful — bills, family, stability." },
    { q: "What happens in 90 days if this property isn't sold and the carrying costs keep coming?", note: "90-day consequence framing. Forces them to think it through." },
    { q: "Is holding out for a higher price worth what it's costing you every single month?", note: "Price vs. time tradeoff — surfaces what their real priority is." },
    { q: "Are there other assets or savings helping you float the payments right now, or is this getting tight?", note: "Gauges urgency without being intrusive." },
    { q: "What's your plan if the job situation doesn't turn around in the next few months?", note: "Gets them to confront the alternative scenario." },
    { q: "If we put cash in your hands in the next two weeks, what does that do for your situation?", note: "Future pacing — connects speed to financial relief." },
    { q: "Is selling this property the thing that gets you back to stable ground, or is there more going on?", note: "Opens the door to a bigger conversation about their full financial picture." },
  ],
  relocation: [
    { q: "When do you need to be fully relocated by — is there a hard deadline?", note: "Establishes urgency. A hard deadline is your best friend." },
    { q: "Every day this property isn't closed, you're split between two lives — how sustainable is that?", note: "Emotional cost of being mentally stuck in two places at once." },
    { q: "What's the carrying cost per month, and how does that number grow the longer this drags?", note: "Quantify the time cost of not closing." },
    { q: "What happens to your plans at the new location if this property doesn't close in time?", note: "Ties the property directly to their future — the stakes get real." },
    { q: "Is managing this sale from a distance stressful, or do you have someone local helping you?", note: "Surfaces logistical pain. Remote sellers feel powerless." },
    { q: "Are you already settled at the new location, or is this property the last thing holding you back?", note: "Identifies whether the close is the final piece — often creates emotional urgency." },
    { q: "What's the worst case if this takes another 3–4 months to sell?", note: "Forces them to articulate the consequence. Let them say it." },
    { q: "Would a flexible close date where we handle everything end-to-end make your move significantly easier?", note: "Introduces your value proposition in a needs-based way." },
  ],
  tired_landlord: [
    { q: "How long have you been dealing with tenants — and what's been the absolute worst of it?", note: "Get the full story. The longer they've been at it, the more pain there is." },
    { q: "At what point did this stop being worth it?", note: "Let them say it. They've been over it for a long time." },
    { q: "What has being a landlord actually cost you — not just money, but your time, sleep, and sanity?", note: "Broadens pain beyond dollars. Time and mental energy are real costs." },
    { q: "If this tenant situation doesn't resolve, what's your next move — and how much will that cost?", note: "Surfaces the alternative being just as bad or worse." },
    { q: "Is it currently occupied, and are tenants actually paying — or is that part of the problem too?", note: "Non-paying tenants = dual pain of carrying cost + legal battle." },
    { q: "Have you had to do evictions before — are you in the middle of one right now?", note: "Eviction = exhaustion. If they're in one now, urgency is high." },
    { q: "What does your property management setup look like — is that adding to the headache or helping?", note: "Bad management = another layer of frustration on top of tenant issues." },
    { q: "If this property was completely out of your life tomorrow, what does your stress level look like?", note: "Relief framing — sell the outcome. Most tired landlords just want peace." },
  ],
  health: [
    { q: "I'm sorry to hear that — are you comfortable sharing a bit about what's going on?", note: "Opens gently. Don't push, but invite them to share." },
    { q: "Is the mental bandwidth this property takes up making everything else harder right now?", note: "Gently connects property management stress to their health situation." },
    { q: "What would it mean for you to have this completely off your plate while you focus on what actually matters?", note: "Paints the relief picture. Powerful when said sincerely." },
    { q: "How much energy are you spending managing this property that you could be using elsewhere?", note: "Time and energy as currency — especially resonant during health challenges." },
    { q: "Do you have family helping you navigate the big decisions, or is most of this falling on you?", note: "Surfaces isolation — and whether there are hidden decision makers." },
    { q: "Is there a timeline you're working around — a treatment schedule or a move that's coming up?", note: "Urgency gauge. Health situations often have hard deadlines." },
    { q: "What does getting this resolved do for your peace of mind during what's already a difficult time?", note: "Emotional relief framing. Peace of mind often matters more than the number." },
    { q: "If we could close this quickly and take it completely off your list, how would that change your day-to-day?", note: "Future pacing — connects the sale directly to quality of life." },
  ],
  tax_lien: [
    { q: "How close is this to a point where the county acts — and what does that mean for your equity?", note: "Urgency framing. Most sellers underestimate how fast this moves." },
    { q: "Do you know the total amount of the lien — has the county or taxing authority given you a payoff figure?", note: "Get the number. It affects your offer math and their walkaway." },
    { q: "Once a tax sale happens, what are your options — are any of them better than selling now?", note: "Forces comparison of alternatives. The answer is almost always no." },
    { q: "If you don't resolve this, how much of what you'd walk away with gets eaten up by penalties and interest?", note: "Quantify the shrinking equity. The longer they wait, the worse it gets." },
    { q: "Has it reached a point where a tax sale date has been set, or are you still in the notice stage?", note: "Critical urgency indicator. A set sale date changes everything." },
    { q: "Are there other liens or judgments attached to the property beyond the tax lien?", note: "Layers of liens = title complexity. Surfaces more pain and more reason to move fast." },
    { q: "What's the timeline you're working with before this escalates to the next stage?", note: "Forces them to acknowledge the countdown clock." },
    { q: "If we could clear this lien, close fast, and still put money in your pocket, what would that mean for you?", note: "Solution framing — ties your offer directly to relief from the lien." },
  ],
  fire_damage: [
    { q: "Every month that property sits damaged, what's the liability exposure if someone wanders in and gets hurt?", note: "Legal risk pain — often completely overlooked by sellers." },
    { q: "Are you still paying a mortgage on a property that's essentially unlivable right now?", note: "Quantifies the absurdity of the situation. Let them sit with that." },
    { q: "Was there insurance — and if so, has a claim been filed, and what did it pay out?", note: "Critical for your offer math. Also surfaces whether there's a gap they're dealing with." },
    { q: "If the insurance payout doesn't cover the full cost of repairs, what does your plan look like from there?", note: "Surfaces the gap they may be avoiding thinking about." },
    { q: "How extensive is the damage — are we talking cosmetic, gut rehab, or is it a total loss situation?", note: "Scope sets your repair estimate and offer range." },
    { q: "Have you gotten any contractor estimates, or does that whole process feel overwhelming right now?", note: "Many fire damage sellers feel paralyzed. The overwhelm is the pain." },
    { q: "What's the city or municipality's position — have they issued any orders or violations on the property?", note: "Code violations and demolition orders add urgency and legal pressure." },
    { q: "What would selling as-is and walking away with cash do for you right now compared to managing a full rebuild?", note: "Positions your offer as the path of least resistance." },
  ],
  hoarder: [
    { q: "Have you actually seen the full scope of what's in there, or are you still discovering what you're dealing with?", note: "Gets them to admit the problem is bigger than they thought." },
    { q: "What would it cost to completely clean that property out before you could even list it?", note: "Quantify the cleanout burden. The number is usually shocking." },
    { q: "If you had to manage that cleanout while also selling — what does that process realistically look like for you?", note: "Surfaces logistical overwhelm. Most people have no idea where to start." },
    { q: "Is the current or former owner still emotionally attached to what's inside, or is everyone ready to let it go?", note: "Emotional attachment to possessions can be a hidden blocker." },
    { q: "Has the condition made it hard to even get a real picture of what the property is worth?", note: "Surfaces the valuation problem — and why a cash offer removes that complexity." },
    { q: "Have any contractors or cleanout crews given you estimates yet, or is that still ahead of you?", note: "If they haven't started, the problem feels even more daunting — that's leverage." },
    { q: "What happens if you try to list this on the market in its current condition — what does that process look like?", note: "Forces them to walk through the alternative. It's not pretty." },
    { q: "What if we took the property completely as-is, contents and all — does that remove the biggest obstacle for you?", note: "Introduce your as-is offer as the solution to their specific pain." },
  ],
};
const BUDGET_QUESTIONS = [
  { q: "What are you willing to do to get this problem completely off your plate?", note: "Open-ended. Don't anchor the number yourself." },
  { q: "When you and your spouse sat down and talked — what number did you come up with? Ballpark.", note: "Assumes they've discussed it. Gets the real floor." },
  { q: "If I had a duffel bag at the closing table — how much money is in it?", note: "Disarming way to get their walk-away number." },
  { q: "In 60 days, when we're done — how much money do you have in your pocket?", note: "Future pacing to their outcome." },
  { q: "What is solving this problem actually worth to you?", note: "Separates price from value." },
  { q: "If I cover all closing costs and close exactly when you need — what does that look like financially?", note: "Anchors value of terms, not just price." },
  { q: "Everyone has a number they'd love — have you thought about yours?", note: "Gives permission to say a big number. You want to hear it." },
  { q: "You've been bleeding about $[X]/month — what would you do with that money back in your pocket?", note: "Use their carrying cost number against inaction." },
];
const DECISION_QUESTIONS = [
  { q: "On a scale of 1 to 10 — how much does what we discussed solve your problem?", note: "If not a 10: 'What would make it a 10?' That's your real objection." },
  { q: "If we create a good situation for you — what would keep you from moving forward today?", note: "Surfaces hidden objections before you make the offer." },
  { q: "If my transaction coordinator called right now and sent the agreement — are you ready?", note: "Test close. Their answer tells you everything." },
  { q: "How will you know you made the right decision if multiple investors are calling you?", note: "Lead into: 'Other sellers tell me they want someone who won't re-trade...'" },
  { q: "One of the most important things I need to hear is a yes or no. I never want a maybe.", note: "No maybes. Direct and confident." },
  { q: "Who else do we need to involve to make this happen?", note: "Final check for hidden decision makers." },
];
const FULFILLMENT_QUESTIONS = [
  { q: "What's our next step?", note: "Simple. Direct. Forces them to say it." },
  { q: "Can I paint a picture of what this looks like for you from here?", note: "Transition into the process walkthrough." },
  { q: "What if I went back to my partner and told them we need to come up to [X] — would that get you excited?", note: "Suggestion, not a commitment. 'I give suggestions, not offers.'" },
  { q: "So what do you want to do?", note: "Most powerful close. Simple. Silence after." },
];

const SCRIPT = {
  greeting: [
    { type:"line",  text:"Hi [Seller Name], this is [Your Name]!" },
    { type:"coach", text:"Pause. Sound like the neighbor next door. Come off like you already know each other." },
    { type:"line",  text:"I'm calling about your property on [ADDRESS] — it was referred to me by our referral company." },
    { type:"line",  text:"Looks like they paired your property with us because they thought we'd be a good fit. Did I catch you at a bad time?" },
    { type:"coach", text:"Pull away — let them answer." },
    { type:"line",  text:"They mentioned you're wanting to sell — is that right?" },
    { type:"coach", text:"SHUT UP AND LET THEM TALK. This is the start of the WHY." },
    { type:"line",  text:"The point of this call is to see if your property qualifies for an AS-IS offer. By the end of this call I'll give you an approval with an offer — or a denial with a reason why." },
    { type:"line",  text:"We buy AS-IS, cover ALL closing costs, and there are NO commissions." },
    { type:"divider", text:"PEN & PAPER — MUST ON EVERY CALL" },
    { type:"line",  text:"[Mr/Mrs], grab a pen and paper — I'll have you jot down my info, and there'll be numbers you'll want to write down if we get approved today." },
    { type:"coach", text:"Have them write: (1) Your name (2) Company name (3) Office number — ask them to repeat it back (4) Website + BBB A rating." },
  ],
  factFind: [
    { type:"coach",   text:"7 MINUTE MINIMUM. Must flow as a conversation — never blast questions." },
    { type:"line",    text:"Catch me up to speed — why are you considering selling?" },
    { type:"line",    text:"Is the home your primary home, tenant occupied, or vacant?" },
    { type:"coach",   text:"DIG DEEPER. Keep pulling on the WHY." },
    { type:"line",    text:"How long have you been thinking about this?" },
    { type:"line",    text:"What will selling do for you — what will the money be used for?" },
    { type:"line",    text:"How long have you lived there?" },
    { type:"line",    text:"What's your favorite thing about the home or neighborhood?" },
    { type:"line",    text:"Where would you go if you did sell?" },
    { type:"coach",   text:"USE A THIRD-PARTY STORY. Shows you've handled this before, helps them open up." },
    { type:"line",    text:"Is it just you on the property — are all decision makers available?" },
    { type:"line",    text:"In a perfect world, what were you hoping to walk away with?" },
    { type:"coach",   text:"Ask TWICE. 'Ballpark? You must have an idea?'" },
  ],
  pitchOutside: [
    { type:"coach", text:"Start running comps. Find value to add — moving help, leaving belongings, flexible timeline." },
    { type:"line",  text:"Before we talk inside — walk me through everything outside, starting with: what's the neighborhood like?" },
    { type:"line",  text:"Lots of renters or more owner-occupied?" },
    { type:"line",  text:"Any electrical lines front, back, or side?" },
    { type:"line",  text:"Anything wrong with the structure — siding, gutters?" },
    { type:"line",  text:"Anything in the back I can't see — pool, shed, structures?" },
    { type:"line",  text:"Is there anything I haven't asked that if you were in my shoes, you'd want to know?" },
    { type:"coach", text:"This gets them to start selling YOU the house." },
  ],
  pitchInside: [
    { type:"line",    text:"Walk me through the inside — is everything still from the year of the house?" },
    { type:"line",    text:"What are the floors like? Kitchen original — cabinets, counters, appliances?" },
    { type:"line",    text:"Bathrooms original? Any basement or crawl space moisture?" },
    { type:"line",    text:"If you were keeping it, what would you do with $20k–$30k?" },
    { type:"divider", text:"FIRST HOLD TRANSITION" },
    { type:"line",    text:"Everything you've told me I've been putting into our system — it goes straight to our underwriters. They're running a report right now." },
    { type:"coach",   text:"FIRST HOLD — 3 min. Run comps. Come back with follow-up questions." },
    { type:"line",    text:"I don't have good or bad news yet — a few more questions: age of roof, HVAC, water heater, windows? Foundation? Electrical panel updated? Any liens or mortgage remaining?" },
  ],
  offer: [
    { type:"coach",   text:"Get commitment BEFORE the second hold." },
    { type:"line",    text:"If we can get to a number that makes sense for both of us — are you ready to move forward with a purchase agreement TODAY?" },
    { type:"coach",   text:"SECOND HOLD. Run final numbers. NEVER live negotiate." },
    { type:"divider", text:"DELIVERING THE OFFER" },
    { type:"line",    text:"Congratulations — your property was approved. Let me explain what was approved." },
    { type:"line",    text:"Approved AS-IS, closing at [their timeline], zero commissions, all closing costs on us." },
    { type:"line",    text:"They placed the funds in a Virtual Withdrawal Account — write this down: VW-[number]. Can you repeat that back?" },
    { type:"line",    text:"The approved offer for your property is... [USE AN ODD NUMBER — e.g. $247,358]" },
    { type:"coach",   text:"They should NOT be happy with the first number. That's normal and expected." },
    { type:"divider", text:"PRICE PUSHBACK" },
    { type:"line",    text:"I completely understand — this is what they've authorized me to spend. The hard part is over — now it's about making the numbers work for both of us." },
    { type:"coach",   text:"NEVER live negotiate. Always go back to the underwriter. Come up little by little." },
  ],
  close: [
    { type:"divider", text:"THEY ACCEPTED — DIRECT NEXT STEPS" },
    { type:"line",    text:"The underwriters are preparing your agreement now — sent via DocuSign. Simple 2-page agreement, plain English." },
    { type:"line",    text:"What's your email address?" },
    { type:"coach",   text:"Say 'The underwriter just sent you and I the offer' — THEN actually send it." },
    { type:"line",    text:"Let's verify: name correct, address correct, price is right?" },
    { type:"line",    text:"Within 24 hours you'll get a call from our Transaction Coordinator. Within 72 hours we'll have a photographer at the house." },
    { type:"line",    text:"It was a pleasure. Congratulations on bringing this chapter to a close." },
    { type:"divider", text:"OBJECTION HANDLERS" },
    { type:"coach",   text:"Rude / just wants an offer: 'Do you really want to hear what I have to say, or are you just tired of these calls?'" },
    { type:"coach",   text:"'Just want an offer': 'I completely understand — at the end of this call, I will give you one.'" },
    { type:"coach",   text:"Hard sellers: 'No is your middle name. I don't even think you want to sell.' — pattern interrupt." },
  ],
};

const COACHING_BY_STEP = [
  ["80/20 rule: 80% of the conversation is about the seller, 20% about the house.","Your selling style should match your personality — adapt the script, don't read it.","High energy. Match their tonality.","Never go past the foyer — establish what you're trying to accomplish today.","If they say they're the only decision maker: 'Great — the last seller told me that and spent 2 hours with me, then said she had to talk to her husband. We won't run into that, right?'","Assume everything. Don't ask questions that let them say no to things that should be yes."],
  ["Catch me up to speed questions will get you to pain most of the time.","Use a third-party story to normalize their situation and get them to open up.","You don't bring up terms or pricing until you fully understand their pain.","Bonding & Rapport happens throughout the WHOLE process — not just at the start.","If they get offended by a question, you didn't ask it smoothly enough. Adjust and practice."],
  ["Pain questions work best AFTER rapport is established — don't jump cold.","Use reverse psychology: 'Doesn't seem like you're ready to sell' — forces them to defend urgency.","Quantify the cost of inaction: 'If you don't decide today, how much does that cost in 60 days?'","For creative deals: look for GAIN. For cash deals: look for PAIN.","Use pain to transition into budget — never jump to price without surfacing pain first."],
  ["During the walkthrough, get them to start selling YOU the house.","The 'if you were keeping it' question is gold — gets real repair estimates without interrogation.","Link the repair list back to their pain: 'You're bleeding $X/mo AND have a $40k roof — how long?'","First Hold: 3 minutes max. Come out and ask follow-up questions naturally.","Added value check: 30-day close, leave belongings, we handle everything."],
  ["Get commitment BEFORE the second hold — 'If we get to a number, are you ready TODAY?'","I give SUGGESTIONS, not offers: 'What if I told my partner we need to come up to [X]?'","Never live negotiate. Always go back to the 'underwriter.' Come up little by little.","Virtual Withdrawal Account creates psychological ownership — the money already feels real.","Use an odd number — e.g. $247,358 not $250,000. Feels calculated and credible."],
  ["You direct next steps — never let the seller lead the close.","Walk them through DocuSign step by step — the unknown is scary, remove friction.","Don't send the agreement yet — say 'The underwriter just sent you and I the offer' THEN send.","Follow up: always wine and dine them with notes from the first call. Find common ground again.","Hard sellers: 'No is your middle name. I don't even think you want to sell.' — pattern interrupt."],
];

const SITUATIONS = [
  { id:"probate",        label:"Probate / Inherited",   icon:"⚖️" },
  { id:"behind_payments",label:"Behind on Payments",    icon:"💸" },
  { id:"divorce",        label:"Divorce / Separation",  icon:"💔" },
  { id:"vacant",         label:"Vacant Property",       icon:"🏚️" },
  { id:"squatters",      label:"Squatters / Occupied",  icon:"🚨" },
  { id:"job_loss",       label:"Job Loss / Hardship",   icon:"📉" },
  { id:"relocation",     label:"Relocation",            icon:"✈️" },
  { id:"tired_landlord", label:"Tired Landlord",        icon:"🔑" },
  { id:"health",         label:"Health / Medical",      icon:"🏥" },
  { id:"tax_lien",       label:"Tax Lien",              icon:"📋" },
  { id:"fire_damage",    label:"Fire / Storm Damage",   icon:"🔥" },
  { id:"hoarder",        label:"Hoarder / Clutter",     icon:"📦" },
];

const REPAIR_ITEMS = [
  { id:"roof",        label:"Roof Replacement",  low:8000,  high:22000, icon:"🏠" },
  { id:"hvac",        label:"HVAC System",        low:5000,  high:15000, icon:"❄️" },
  { id:"foundation",  label:"Foundation Repair",  low:10000, high:60000, icon:"🏗️" },
  { id:"kitchen",     label:"Kitchen Remodel",    low:15000, high:45000, icon:"🍳" },
  { id:"bathroom",    label:"Bathroom Remodel",   low:8000,  high:25000, icon:"🚿" },
  { id:"electrical",  label:"Electrical Update",  low:3000,  high:15000, icon:"⚡" },
  { id:"plumbing",    label:"Plumbing",           low:4000,  high:20000, icon:"🔧" },
  { id:"windows",     label:"Windows",            low:5000,  high:18000, icon:"🪟" },
  { id:"flooring",    label:"Flooring",           low:4000,  high:18000, icon:"🪵" },
  { id:"paint_int",   label:"Interior Paint",     low:2000,  high:6000,  icon:"🖌️" },
  { id:"paint_ext",   label:"Exterior Paint",     low:3000,  high:10000, icon:"🏡" },
  { id:"landscaping", label:"Landscaping",        low:2000,  high:10000, icon:"🌿" },
  { id:"mold",        label:"Mold Remediation",   low:3000,  high:25000, icon:"⚠️" },
  { id:"septic",      label:"Septic System",      low:6000,  high:25000, icon:"💧" },
  { id:"water_heater",label:"Water Heater",       low:800,   high:3500,  icon:"🔥" },
  { id:"cleanout",    label:"Full Cleanout",      low:2000,  high:10000, icon:"🗑️" },
];

const TIMELINES   = ["ASAP / Emergency","Within 30 days","1–3 months","3–6 months","6–12 months","No rush"];
const CONDITIONS  = ["Move-in ready","Minor cosmetic","Moderate repairs","Major rehab","Tear down"];

// ─── SMALL COMPONENTS ────────────────────────────────────────────────────────

function ScriptLine({ item, t }) {
  if (item.type==="line")    return <div style={{ display:"flex",gap:6,marginBottom:7,lineHeight:1.6 }}><span style={{ color:t.accent,flexShrink:0,fontSize:10,marginTop:2 }}>▸</span><span style={{ fontStyle:"italic",color:t.textScript,fontSize:11,lineHeight:1.6 }}>"{item.text}"</span></div>;
  if (item.type==="coach")   return <div style={{ display:"flex",gap:6,background:t.bgCoach,border:`1px solid ${t.accent}28`,borderRadius:5,padding:"5px 8px",marginBottom:6,color:t.textCoach,fontSize:10,lineHeight:1.5 }}><span>💡</span><span>{item.text}</span></div>;
  if (item.type==="divider") return <div style={{ fontSize:8,fontWeight:800,color:t.accent,textTransform:"uppercase",letterSpacing:1.5,borderTop:`1px solid ${t.accent}30`,paddingTop:7,marginTop:2,marginBottom:8 }}>{item.text}</div>;
  return null;
}

function QCard({ q, note, color, t }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{ border:`1px solid ${open ? color : t.borderQCard}`,borderRadius:7,padding:"8px 10px",marginBottom:6,background:t.bgQCard,cursor:"pointer" }}>
      <div style={{ display:"flex",gap:7,alignItems:"flex-start" }}>
        <span style={{ color,flexShrink:0,fontSize:10,marginTop:2 }}>▸</span>
        <span style={{ fontStyle:"italic",color:t.textScript,fontSize:11,lineHeight:1.6 }}>"{q}"</span>
      </div>
      {open && note && <div style={{ marginTop:7,paddingTop:7,borderTop:`1px solid ${color}30`,fontSize:10,lineHeight:1.5,color:t.textSub }}>{note}</div>}
    </div>
  );
}

function SandlerBar({ stepIdx, t }) {
  const active = SANDLER_BY_STEP[stepIdx] || [];
  return (
    <div style={{ padding:"11px 15px",borderBottom:`1px solid ${t.border}` }}>
      <div style={{ fontSize:8,fontWeight:800,color:t.textMuted,textTransform:"uppercase",letterSpacing:1,marginBottom:7 }}>SANDLER STAGE</div>
      <div style={{ display:"flex",flexWrap:"wrap",gap:4 }}>
        {SANDLER_STAGES.map(st => {
          const on = active.includes(st.id);
          return <div key={st.id} style={{ display:"flex",gap:4,alignItems:"center",border:`1px solid ${on ? st.color : t.borderSandler}`,color:on ? st.color : t.textSandler,padding:"3px 7px",borderRadius:5,fontSize:10,fontWeight:600,background:on ? st.color+"14" : t.bgSandler }}>{st.icon} <span style={{ fontSize:9 }}>{st.label}</span></div>;
        })}
      </div>
    </div>
  );
}

function PainGauge({ value, onChange, t }) {
  const col = value<=3 ? t.textMuted : value<=5 ? "#f59e0b" : value<=7 ? "#fb923c" : "#ef4444";
  const lbl = value===0 ? "—" : value<=3 ? "Low" : value<=5 ? "Moderate" : value<=7 ? "High" : "🔥 Urgent";
  return (
    <div style={{ background:t.bgGauge,border:`1px solid ${t.accentRed}30`,borderRadius:9,padding:"11px 13px",marginTop:16 }}>
      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:9 }}>
        <span style={{ fontSize:10,fontWeight:800,color:"#f87171",textTransform:"uppercase",letterSpacing:.8 }}>💢 SELLER PAIN LEVEL</span>
        <span style={{ fontSize:12,fontWeight:800,color:col }}>{value>0?`${value}/10`:"—"} <span style={{ fontSize:10,fontWeight:500 }}>{lbl}</span></span>
      </div>
      <div style={{ display:"flex",gap:4,justifyContent:"space-between" }}>
        {[1,2,3,4,5,6,7,8,9,10].map(n => (
          <div key={n} onClick={() => onChange(n)} style={{ width:22,height:22,borderRadius:"50%",background:n<=value?col:"rgba(128,128,128,.12)",border:`1px solid ${n<=value?col:"rgba(128,128,128,.2)"}`,cursor:"pointer",transform:n===value?"scale(1.25)":"scale(1)",transition:"all .12s",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,fontWeight:700,color:n<=value?"#fff":t.textMuted }}>{n}</div>
        ))}
      </div>
      <div style={{ display:"flex",justifyContent:"space-between",fontSize:8,color:t.textMuted,marginTop:5 }}>
        <span>Not motivated</span><span>Must sell NOW</span>
      </div>
    </div>
  );
}

function Inp({ label, value, onChange, placeholder, span, dollar, t }) {
  return (
    <label style={{ display:"flex",flexDirection:"column",gap:4,fontSize:10,fontWeight:700,color:t.textSub,textTransform:"uppercase",letterSpacing:.5,...(span===2?{gridColumn:"span 2"}:{}) }}>
      {label}
      <div style={{ position:"relative" }}>
        {dollar && <span style={{ position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",color:t.textMuted,fontSize:13,pointerEvents:"none" }}>$</span>}
        <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{ background:t.bgInput,border:`1px solid ${t.borderInput}`,borderRadius:7,padding:"8px 10px",color:t.text,fontSize:13,outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box",...(dollar?{paddingLeft:22}:{}) }} />
      </div>
    </label>
  );
}
function Sel({ label, value, onChange, options, t }) {
  return (
    <label style={{ display:"flex",flexDirection:"column",gap:4,fontSize:10,fontWeight:700,color:t.textSub,textTransform:"uppercase",letterSpacing:.5 }}>
      {label}
      <select value={value} onChange={e => onChange(e.target.value)} style={{ background:t.bgInput,border:`1px solid ${t.borderInput}`,borderRadius:7,padding:"8px 10px",color:t.text,fontSize:13,outline:"none",fontFamily:"inherit",width:"100%" }}>
        <option value="">Select...</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
function Ta({ label, value, onChange, placeholder, t }) {
  return (
    <label style={{ display:"flex",flexDirection:"column",gap:4,fontSize:10,fontWeight:700,color:t.textSub,textTransform:"uppercase",letterSpacing:.5,marginTop:14 }}>
      {label}
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{ background:t.bgInput,border:`1px solid ${t.borderInput}`,borderRadius:7,padding:"8px 10px",color:t.text,fontSize:13,outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box",height:75,resize:"vertical" }} />
    </label>
  );
}
function Check({ checked, onToggle, label, green, t }) {
  const col = green ? t.accentGreen : t.accent;
  return (
    <label style={{ display:"flex",gap:8,alignItems:"center",cursor:"pointer",fontSize:12 }}>
      <div onClick={onToggle} style={{ width:17,height:17,borderRadius:4,border:`1px solid ${checked?col:t.borderCB}`,background:checked?col+"22":"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:800,color:checked?col:"transparent",flexShrink:0 }}>✓</div>
      <span style={{ color:checked?t.textMuted:t.textSub,textDecoration:checked?"line-through":"none",opacity:checked?.65:1 }}>{label}</span>
    </label>
  );
}
function RR({ label, val, t }) {
  return <div style={{ display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`1px solid ${t.border}`,fontSize:12 }}><span style={{ color:t.textMuted }}>{label}</span><strong style={{ color:t.textCard,maxWidth:"58%",textAlign:"right" }}>{val||"—"}</strong></div>;
}
function NavBtns({ onBack, onNext, nextLabel, gold, t }) {
  return (
    <div style={{ display:"flex",gap:10,marginTop:26 }}>
      {onBack && <button onClick={onBack} style={{ background:t.bgPill,border:`1px solid ${t.borderPill}`,color:t.textSub,padding:"10px 15px",borderRadius:8,cursor:"pointer",fontSize:13,fontWeight:600 }}>← Back</button>}
      <button onClick={onNext} style={{ background:gold?"linear-gradient(135deg,#f59e0b,#ef4444)":"linear-gradient(135deg,"+t.accent+","+t.accent+"cc)",color:"#fff",border:"none",padding:"10px 18px",borderRadius:8,fontWeight:700,cursor:"pointer",fontSize:14,flex:1 }}>{nextLabel||"Continue →"}</button>
    </div>
  );
}
function SSTitle({ children, t }) {
  return <div style={{ fontSize:9,fontWeight:800,color:t.accent,textTransform:"uppercase",letterSpacing:1,marginBottom:9,marginTop:3 }}>{children}</div>;
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function AcqPro() {
  const [dark, setDark]     = useState(false);
  const t = dark ? DARK : LIGHT;

  const [step, setStep]     = useState(0);
  const [mode, setMode]     = useState("script");
  const [lead, setLead]     = useState({ name:"",phone:"",address:"",source:"" });
  const [prop, setProp]     = useState({ beds:"",baths:"",sqft:"",year:"",type:"Single Family",arv:"" });
  const [motivation, setMotivation] = useState("");
  const [situations, setSituations] = useState([]);
  const [timeline, setTimeline]     = useState("");
  const [asking, setAsking]         = useState("");
  const [condition, setCondition]   = useState("");
  const [repairs, setRepairs]       = useState({});
  const [mtg, setMtg]               = useState({ balance:"",payment:"",lender:"",behind:"" });
  const [pain, setPain]             = useState(0);
  const [ufc, setUfc]               = useState({});
  const [dec, setDec]               = useState({});
  const [offerNums, setOfferNums]   = useState({ first:"",counter:"",final:"" });
  const [notes, setNotes]           = useState({ call:"",repairs:"",financial:"",manager:"",occ:"",sit:"",vwa:"" });

  const STEPS = ["Greeting","Fact Find","Situation","Condition","Offer","Close"];

  const fmt   = n => n>0 ? `$${Math.round(n).toLocaleString()}` : "—";
  const arv   = parseFloat(prop.arv?.replace(/,/g,""))||0;
  const mtgBal= parseFloat(mtg.balance?.replace(/,/g,""))||0;
  const repLow= REPAIR_ITEMS.reduce((s,r) => repairs[r.id]?s+r.low:s,0);
  const repHi = REPAIR_ITEMS.reduce((s,r) => repairs[r.id]?s+r.high:s,0);
  const repAvg= (repLow+repHi)/2;
  const mao   = Math.round(arv*0.70-repAvg);
  const oLo   = Math.round(arv*0.65-repHi);
  const oHi   = Math.round(arv*0.72-repLow);
  const sNet  = mao-mtgBal;
  const painCol = pain<=3?t.textMuted:pain<=5?"#f59e0b":pain<=7?"#fb923c":"#ef4444";

  const toggleSit = id => setSituations(p => p.includes(id)?p.filter(x=>x!==id):[...p,id]);

  // ── SIDE PANELS ──────────────────────────────────────────────────────────────

  function ScriptContent() {
    if (step===2) return (
      <div>
        <SSTitle t={t}>🎯 TACTICAL EMPATHY</SSTitle>
        {situations.length===0
          ? <div style={{ color:t.textMuted,fontSize:11,textAlign:"center",padding:"22px 12px",lineHeight:1.7 }}>Select situation tags on the left to generate targeted questions.</div>
          : situations.map(sid => {
              const sit=SITUATIONS.find(x=>x.id===sid);
              return <div key={sid} style={{ marginBottom:12 }}>
                <div style={{ fontSize:9,fontWeight:800,color:t.accent+"bb",textTransform:"uppercase",letterSpacing:.7,marginBottom:5 }}>{sit.icon} {sit.label}</div>
                {(PAIN_BY_SITUATION[sid]||[]).map((it,i) => <QCard key={i} q={it.q} note={it.note} color={t.accent} t={t} />)}
              </div>;
            })}
      </div>
    );
    if (step===3) return (
      <div>
        {[["🏠 OUTSIDE WALKTHROUGH",SCRIPT.pitchOutside],["🛋️ INSIDE + FIRST HOLD",SCRIPT.pitchInside]].map(([title,items]) => (
          <div key={title} style={{ marginBottom:14 }}>
            <SSTitle t={t}>{title}</SSTitle>
            {items.map((it,i) => <ScriptLine key={i} item={it} t={t} />)}
          </div>
        ))}
      </div>
    );
    const map = [SCRIPT.greeting,SCRIPT.factFind,null,null,SCRIPT.offer,SCRIPT.close];
    const items = map[step];
    return items ? <div>{items.map((it,i) => <ScriptLine key={i} item={it} t={t} />)}</div> : null;
  }

  function PainContent() {
    if (step===0) return (
      <div>
        <SSTitle t={t}>🤝 BONDING & RAPPORT</SSTitle>
        {RAPPORT_QUESTIONS.map((it,i) => <QCard key={i} q={it.q} note={it.note} color={t.accentPurple} t={t} />)}
        <div style={{ height:14 }} />
        <SSTitle t={t}>📋 UPFRONT CONTRACT</SSTitle>
        {UPFRONT_CONTRACT.map((it,i) => <QCard key={i} q={it.q} note={it.note} color={t.accentTeal} t={t} />)}
      </div>
    );
    if (step===4) return (
      <div>
        <PainGauge value={pain} onChange={setPain} t={t} />
        <div style={{ height:14 }} />
        <SSTitle t={t}>💰 BUDGET QUESTIONS</SSTitle>
        {BUDGET_QUESTIONS.map((it,i) => <QCard key={i} q={it.q} note={it.note} color={t.accent} t={t} />)}
      </div>
    );
    if (step===5) return (
      <div>
        <SSTitle t={t}>✅ DECISION QUESTIONS</SSTitle>
        {DECISION_QUESTIONS.map((it,i) => <QCard key={i} q={it.q} note={it.note} color={t.accentGreen} t={t} />)}
        <div style={{ height:14 }} />
        <SSTitle t={t}>🎯 FULFILLMENT</SSTitle>
        {FULFILLMENT_QUESTIONS.map((it,i) => <QCard key={i} q={it.q} note={it.note} color={t.accentBlue} t={t} />)}
      </div>
    );
    return (
      <div>
        <PainGauge value={pain} onChange={setPain} t={t} />
        <div style={{ height:14 }} />
        <SSTitle t={t}>💢 GENERAL PAIN</SSTitle>
        {PAIN_GENERAL.map((it,i) => <QCard key={i} q={it.q} note={it.note} color={t.accentRed} t={t} />)}
        {situations.length>0 && <>
          <div style={{ height:14 }} />
          <SSTitle t={t}>🎯 SITUATION-SPECIFIC PAIN</SSTitle>
          {situations.map(sid => {
            const sit=SITUATIONS.find(x=>x.id===sid);
            return <div key={sid} style={{ marginBottom:12 }}>
              <div style={{ fontSize:9,fontWeight:800,color:t.accentRed+"cc",textTransform:"uppercase",letterSpacing:.7,marginBottom:5 }}>{sit.icon} {sit.label}</div>
              {(PAIN_BY_SITUATION[sid]||[]).map((it,i) => <QCard key={i} q={it.q} note={it.note} color={t.accentRed} t={t} />)}
            </div>;
          })}
        </>}
      </div>
    );
  }

  function CoachContent() {
    return (
      <div>
        <SSTitle t={t}>🧠 COACHING TIPS</SSTitle>
        {COACHING_BY_STEP[step].map((tip,i) => (
          <div key={i} style={{ display:"flex",gap:7,fontSize:11,color:t.textSub,lineHeight:1.6,marginBottom:8,padding:"7px 9px",background:t.bgCoachTip,border:`1px solid ${t.accentPurple}22`,borderRadius:6 }}>
            <span style={{ color:t.accentPurple,fontSize:8,flexShrink:0,marginTop:3 }}>◆</span>
            <span>{tip}</span>
          </div>
        ))}
      </div>
    );
  }

  const calcCards = [
    { label:"ARV",              val:fmt(arv) },
    { label:"Avg Repairs",      val:fmt(repAvg), red:true },
    { label:"Offer Low (65%)",  val:fmt(oLo) },
    { label:"Offer High (72%)", val:fmt(oHi) },
    { label:"MAX OFFER (MAO)",  val:fmt(mao), hl:true },
    { label:"Seller Net @ MAO", val:mtgBal>0?fmt(sNet):"—", green:sNet>5000, red2:sNet<0 },
  ];

  return (
    <div style={{ background:t.bg,minHeight:"100vh",fontFamily:"'DM Sans','Trebuchet MS',sans-serif",color:t.text,fontSize:14,transition:"background .25s,color .25s" }}>

      {/* HEADER */}
      <div style={{ background:t.bgHeader,borderBottom:`1px solid ${t.borderHeader}`,padding:"10px 20px",display:"flex",alignItems:"center",gap:14,position:"sticky",top:0,zIndex:100,flexWrap:"wrap",boxShadow:dark?"0 2px 20px rgba(0,0,0,.4)":"0 2px 12px rgba(0,0,0,.08)" }}>
        <div style={{ display:"flex",flexDirection:"column",gap:1 }}>
          <div style={{ fontSize:18,fontWeight:800,color:t.accent,letterSpacing:-.5 }}>⚡ AcqPro</div>
          <div style={{ fontSize:9,color:t.textMuted,textTransform:"uppercase",letterSpacing:1 }}>Acquisition Intelligence</div>
        </div>

        <div style={{ display:"flex",gap:4,flex:1,flexWrap:"wrap" }}>
          {STEPS.map((name,i) => (
            <button key={i} onClick={() => setStep(i)} style={{ background:i===step?t.accent+"1e":i<step?t.accentGreen+"12":t.bgStepBtn,border:`1px solid ${i===step?t.accent+"66":i<step?t.accentGreen+"44":t.borderStep}`,color:i===step?t.accent:i<step?t.accentGreen:t.textStep,padding:"5px 11px",borderRadius:6,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500 }}>
              <span style={{ fontWeight:700,fontSize:10 }}>{i<step?"✓":i+1}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>

        <div style={{ display:"flex",gap:8,alignItems:"center" }}>
          {pain>0 && <div style={{ border:`1px solid ${painCol}`,color:painCol,padding:"3px 11px",borderRadius:20,fontSize:11,fontWeight:700 }}>💢 Pain {pain}/10</div>}
          {lead.name && <div style={{ background:t.accent+"14",border:`1px solid ${t.accent}33`,color:t.accent,padding:"3px 12px",borderRadius:20,fontSize:11,fontWeight:700 }}>📞 {lead.name}</div>}

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDark(!dark)}
            title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{ display:"flex",alignItems:"center",gap:7,background:dark?"rgba(255,255,255,.07)":"rgba(0,0,0,.06)",border:`1px solid ${dark?"rgba(255,255,255,.14)":"rgba(0,0,0,.12)"}`,borderRadius:20,padding:"5px 14px",cursor:"pointer",color:t.textSub,fontSize:12,fontWeight:700,transition:"all .2s" }}>
            <span style={{ fontSize:15,lineHeight:1 }}>{dark ? "☀️" : "🌙"}</span>
            <span>{dark ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>

      <div style={{ padding:"18px",maxWidth:1440,margin:"0 auto" }}>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 370px",gap:18,alignItems:"start" }}>

          {/* MAIN PANEL */}
          <div style={{ background:t.bgMain,border:`1px solid ${t.borderCard}`,borderRadius:12,padding:26,boxShadow:dark?"none":"0 2px 16px rgba(0,0,0,.07)" }}>

            {/* STEP 0 */}
            {step===0 && (
              <div>
                <h2 style={{ fontSize:20,fontWeight:700,margin:"0 0 5px",color:t.textCard }}>📞 Greeting & Lead Info</h2>
                <p style={{ fontSize:12,color:t.textMuted,margin:"0 0 18px" }}>Set the frame. Establish credibility. Complete the Upfront Contract before going deeper.</p>
                <div style={{ background:t.bgPregame,border:`1px solid ${t.accent}20`,borderRadius:9,padding:"12px 14px",marginBottom:18 }}>
                  <div style={{ fontSize:9,fontWeight:800,color:t.accent,textTransform:"uppercase",letterSpacing:1.2,marginBottom:8 }}>⚡ PREGAME</div>
                  <div style={{ display:"flex",flexWrap:"wrap",gap:5 }}>
                    {["Treat Every Lead The Same","A Sale Takes Place On Every Call","Do Not Prejudge","Create An Experience","80/20 — Seller First"].map((m,i) => (
                      <span key={i} style={{ background:t.accent+"12",border:`1px solid ${t.accent}30`,color:t.accent,padding:"2px 9px",borderRadius:10,fontSize:10,fontWeight:600 }}>{m}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
                  <Inp label="Seller Name" value={lead.name} onChange={v=>setLead({...lead,name:v})} placeholder="John Smith" t={t} />
                  <Inp label="Phone" value={lead.phone} onChange={v=>setLead({...lead,phone:v})} placeholder="(555) 000-0000" t={t} />
                  <Inp label="Property Address" value={lead.address} onChange={v=>setLead({...lead,address:v})} placeholder="123 Main St, City, State ZIP" span={2} t={t} />
                  <Sel label="Lead Source" value={lead.source} onChange={v=>setLead({...lead,source:v})} options={["Direct Mail","Cold Call","PPC / Online Ad","Driving for Dollars","Referral","Probate List","Pre-foreclosure List","MLS","Bandit Signs"]} t={t} />
                  <Sel label="Property Type" value={prop.type} onChange={v=>setProp({...prop,type:v})} options={["Single Family","Multi-Family","Condo / Townhouse","Mobile Home","Land","Commercial"]} t={t} />
                </div>
                <div style={{ marginTop:20 }}>
                  <div style={{ fontSize:13,fontWeight:700,color:t.textCard,marginBottom:9 }}>📋 Upfront Contract Checklist</div>
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginTop:10 }}>
                    {UFC_CHECKLIST.map(item => <Check key={item.id} checked={!!ufc[item.id]} onToggle={() => setUfc(p=>({...p,[item.id]:!p[item.id]}))} label={item.label} t={t} />)}
                  </div>
                </div>
                <Ta label="📝 Live Call Notes" value={notes.call} onChange={v=>setNotes({...notes,call:v})} placeholder="Free-form notes during the call..." t={t} />
                <NavBtns onNext={() => setStep(1)} nextLabel="Start Fact Find →" t={t} />
              </div>
            )}

            {/* STEP 1 */}
            {step===1 && (
              <div>
                <h2 style={{ fontSize:20,fontWeight:700,margin:"0 0 5px",color:t.textCard }}>🔎 Fact Find & Property Details</h2>
                <p style={{ fontSize:12,color:t.textMuted,margin:"0 0 18px" }}>Build rapport. Dig on the WHY. Minimum 7 minutes. Use Pain tab for rapport and pain openers.</p>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12 }}>
                  <Sel label="Beds"  value={prop.beds}  onChange={v=>setProp({...prop,beds:v})}  options={["1","2","3","4","5","6+"]} t={t} />
                  <Sel label="Baths" value={prop.baths} onChange={v=>setProp({...prop,baths:v})} options={["1","1.5","2","2.5","3","3.5","4+"]} t={t} />
                  <Inp label="Sq Footage"         value={prop.sqft} onChange={v=>setProp({...prop,sqft:v})} placeholder="1,800"    t={t} />
                  <Inp label="Year Built"          value={prop.year} onChange={v=>setProp({...prop,year:v})} placeholder="1985"     t={t} />
                  <Inp label="ARV Estimate"        value={prop.arv}  onChange={v=>setProp({...prop,arv:v})}  placeholder="250,000"  dollar t={t} />
                  <Inp label="Seller Asking Price" value={asking}    onChange={setAsking}                    placeholder="200,000"  dollar t={t} />
                </div>
                <Ta label="📋 Property Notes" value={notes.propNotes} onChange={v=>setNotes({...notes,propNotes:v})} placeholder="Anything notable about the property — neighborhood, lot size, additions, permitted work, history, unique features, seller's description..." t={t} />
                <div style={{ marginTop:14 }}>
                  <div style={{ fontSize:13,fontWeight:700,color:t.textCard,marginBottom:9 }}>Occupancy</div>
                  <div style={{ display:"flex",flexWrap:"wrap",gap:7 }}>
                    {["Primary Home","Tenant Occupied","Vacant"].map(o => (
                      <button key={o} onClick={() => setNotes(n=>({...n,occ:o}))} style={{ background:notes.occ===o?t.accent+"18":t.bgPill,border:`1px solid ${notes.occ===o?t.accent+"66":t.borderPill}`,color:notes.occ===o?t.accent:t.textSub,padding:"5px 12px",borderRadius:20,cursor:"pointer",fontSize:12,fontWeight:600 }}>{o}</button>
                    ))}
                  </div>
                </div>
                <Ta label="Main Motivation — in their words" value={motivation} onChange={setMotivation} placeholder="e.g. 'My dad passed and we inherited the house, nobody wants to deal with it...'" t={t} />
                {arv>0 && (
                  <div style={{ display:"flex",alignItems:"center",background:t.bgARVStrip,border:`1px solid ${t.borderARV}`,borderRadius:8,padding:"9px 16px",gap:20,marginTop:13 }}>
                    {[["ARV",fmt(arv),t.accent],["70% MAO",fmt(arv*0.70),t.accentGreen],["Asking",asking?fmt(parseFloat(asking.replace(/,/g,""))):"—",t.textSub]].map(([label,val,col],i) => (
                      <div key={i} style={{ display:"flex",flexDirection:"column",gap:3,alignItems:"center" }}>
                        <div style={{ fontSize:9,color:t.textMuted,textTransform:"uppercase",letterSpacing:.8 }}>{label}</div>
                        <strong style={{ color:col }}>{val}</strong>
                      </div>
                    ))}
                  </div>
                )}
                <NavBtns onBack={() => setStep(0)} onNext={() => setStep(2)} nextLabel="Continue to Situation →" t={t} />
              </div>
            )}

            {/* STEP 2 */}
            {step===2 && (
              <div>
                <h2 style={{ fontSize:20,fontWeight:700,margin:"0 0 5px",color:t.textCard }}>🔍 Seller Situation</h2>
                <p style={{ fontSize:12,color:t.textMuted,margin:"0 0 18px" }}>Select all that apply. Switch to Pain tab for the full situation-specific pain funnel.</p>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7 }}>
                  {SITUATIONS.map(sit => (
                    <button key={sit.id} onClick={() => toggleSit(sit.id)} style={{ background:situations.includes(sit.id)?t.accent+"16":t.bgRepair,border:`1px solid ${situations.includes(sit.id)?t.accent+"66":t.borderRepair}`,borderRadius:8,padding:"10px 7px",cursor:"pointer",color:situations.includes(sit.id)?t.accent:t.textSub,fontSize:11,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center",gap:4,textAlign:"center" }}>
                      <span style={{ fontSize:19 }}>{sit.icon}</span>
                      <span>{sit.label}</span>
                    </button>
                  ))}
                </div>
                <div style={{ marginTop:16 }}>
                  <div style={{ fontSize:13,fontWeight:700,color:t.textCard,marginBottom:9 }}>Timeline to Sell</div>
                  <div style={{ display:"flex",flexWrap:"wrap",gap:7 }}>
                    {TIMELINES.map(tl => <button key={tl} onClick={() => setTimeline(tl)} style={{ background:timeline===tl?t.accentGreen+"16":t.bgPill,border:`1px solid ${timeline===tl?t.accentGreen+"55":t.borderPill}`,color:timeline===tl?t.accentGreen:t.textSub,padding:"5px 12px",borderRadius:20,cursor:"pointer",fontSize:12,fontWeight:600 }}>{tl}</button>)}
                  </div>
                </div>
                <PainGauge value={pain} onChange={setPain} t={t} />
                <Ta label="Situation Notes" value={notes.sit} onChange={v=>setNotes({...notes,sit:v})} placeholder="Key pain points, emotional triggers, third-party story angle used..." t={t} />
                <NavBtns onBack={() => setStep(1)} onNext={() => setStep(3)} nextLabel="Continue to Condition →" t={t} />
              </div>
            )}

            {/* STEP 3 */}
            {step===3 && (
              <div>
                <h2 style={{ fontSize:20,fontWeight:700,margin:"0 0 5px",color:t.textCard }}>🔨 Property Condition & Repairs</h2>
                <p style={{ fontSize:12,color:t.textMuted,margin:"0 0 18px" }}>Walk through the house. Script tab = walkthrough language. Pain tab = repair-linked pain questions.</p>
                <div style={{ marginBottom:12 }}>
                  <div style={{ fontSize:13,fontWeight:700,color:t.textCard,marginBottom:9 }}>Overall Condition</div>
                  <div style={{ display:"flex",flexWrap:"wrap",gap:7 }}>
                    {CONDITIONS.map(c => <button key={c} onClick={() => setCondition(c)} style={{ background:condition===c?t.accent+"18":t.bgPill,border:`1px solid ${condition===c?t.accent+"66":t.borderPill}`,color:condition===c?t.accent:t.textSub,padding:"5px 12px",borderRadius:20,cursor:"pointer",fontSize:12,fontWeight:600 }}>{c}</button>)}
                  </div>
                </div>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6 }}>
                  {REPAIR_ITEMS.map(item => (
                    <div key={item.id} onClick={() => setRepairs(p=>({...p,[item.id]:!p[item.id]}))} style={{ background:repairs[item.id]?t.bgRepairOn:t.bgRepair,border:`1px solid ${repairs[item.id]?t.accentRed+"55":t.borderRepair}`,borderRadius:7,padding:"9px 8px",cursor:"pointer",userSelect:"none" }}>
                      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4 }}>
                        <span style={{ fontSize:16 }}>{item.icon}</span>
                        <div style={{ width:14,height:14,borderRadius:3,border:`1px solid ${repairs[item.id]?t.accentRed:"rgba(128,128,128,.3)"}`,background:repairs[item.id]?t.accentRed+"33":"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,fontWeight:800,color:t.accentRed }}>{repairs[item.id]?"✓":""}</div>
                      </div>
                      <div style={{ fontSize:10,fontWeight:600,color:t.textRepair,lineHeight:1.3,marginBottom:2 }}>{item.label}</div>
                      <div style={{ fontSize:9,color:t.textMuted }}>${(item.low/1000).toFixed(0)}k–${(item.high/1000).toFixed(0)}k</div>
                    </div>
                  ))}
                </div>
                {repLow>0 && (
                  <div style={{ background:t.bgRepSummary,border:`1px solid ${t.accent}28`,borderRadius:9,padding:"11px 14px",marginTop:11 }}>
                    {[["Items selected",Object.values(repairs).filter(Boolean).length,null],["Repair range",`${fmt(repLow)} – ${fmt(repHi)}`,"#f59e0b"],["Average estimate",fmt(repAvg),t.accentRed],...(arv>0?[["MAO after repairs",fmt(mao),t.accentGreen]]:[])].map(([label,val,col],i) => (
                      <div key={i} style={{ display:"flex",justifyContent:"space-between",padding:"4px 0",fontSize:12,borderBottom:`1px solid ${t.border}` }}><span style={{ color:t.textMuted }}>{label}</span><strong style={{ color:col||t.textCard }}>{val}</strong></div>
                    ))}
                    {pain>0 && repAvg>0 && mtg.payment && (
                      <div style={{ marginTop:9,background:t.bgPainLink,border:`1px solid ${t.borderPainLink}`,borderRadius:6,padding:"7px 11px",fontSize:11,color:"#fca5a5",lineHeight:1.5 }}>
                        💢 Pain link: "You're bleeding ~${parseFloat(mtg.payment||0).toLocaleString()}/mo AND facing {fmt(repAvg)} in repairs — how long does that continue?"
                      </div>
                    )}
                  </div>
                )}
                <Ta label="Repair Notes" value={notes.repairs} onChange={v=>setNotes({...notes,repairs:v})} placeholder="Seller said roof is original 1987, plumber quoted $12k for the main line..." t={t} />
                <NavBtns onBack={() => setStep(2)} onNext={() => setStep(4)} nextLabel="Continue to Offer →" t={t} />
              </div>
            )}

            {/* STEP 4 */}
            {step===4 && (
              <div>
                <h2 style={{ fontSize:20,fontWeight:700,margin:"0 0 5px",color:t.textCard }}>💰 Offer & Financials</h2>
                <p style={{ fontSize:12,color:t.textMuted,margin:"0 0 18px" }}>Use Budget questions (Pain tab) BEFORE revealing numbers. Never live negotiate.</p>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
                  <Inp label="Mortgage Balance" value={mtg.balance} onChange={v=>setMtg({...mtg,balance:v})} placeholder="85,000" dollar t={t} />
                  <Inp label="Monthly Payment"  value={mtg.payment} onChange={v=>setMtg({...mtg,payment:v})} placeholder="850"    dollar t={t} />
                  <Inp label="Lender / Servicer" value={mtg.lender} onChange={v=>setMtg({...mtg,lender:v})} placeholder="Chase, Wells Fargo..." t={t} />
                  <Inp label="Months Behind"     value={mtg.behind} onChange={v=>setMtg({...mtg,behind:v})} placeholder="0" t={t} />
                </div>
                <div style={{ marginTop:18 }}>
                  <div style={{ fontSize:13,fontWeight:700,color:t.textCard,marginBottom:9 }}>📊 Deal Calculator</div>
                  <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginTop:9 }}>
                    {calcCards.map((c,i) => (
                      <div key={i} style={{ background:c.hl?t.bgCalcHL:t.bgCalc,border:`1px solid ${c.hl?t.accent+"44":t.border}`,borderRadius:8,padding:12,textAlign:"center" }}>
                        <div style={{ fontSize:9,color:t.textMuted,textTransform:"uppercase",letterSpacing:.4,marginBottom:5 }}>{c.label}</div>
                        <div style={{ fontSize:c.hl?22:17,fontWeight:800,color:c.hl?t.accent:c.red?t.accentRed:c.green?t.accentGreen:c.red2?t.accentRed:t.textCard }}>{c.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop:18 }}>
                  <div style={{ fontSize:13,fontWeight:700,color:t.textCard,marginBottom:9 }}>🔢 Offer Tracking</div>
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12 }}>
                    <Inp label="First Offer (odd #)"  value={offerNums.first}   onChange={v=>setOfferNums({...offerNums,first:v})}   placeholder="247,358" dollar t={t} />
                    <Inp label="Counter (if pushed)"  value={offerNums.counter} onChange={v=>setOfferNums({...offerNums,counter:v})} placeholder="260,000" dollar t={t} />
                    <Inp label="Final Agreed"          value={offerNums.final}   onChange={v=>setOfferNums({...offerNums,final:v})}   placeholder="271,500" dollar t={t} />
                  </div>
                  <div style={{ display:"flex",alignItems:"center",gap:12,marginTop:12,flexWrap:"wrap" }}>
                    <span style={{ fontSize:12,fontWeight:700,color:t.textSub }}>Virtual Withdrawal Account #</span>
                    <input value={notes.vwa} onChange={e=>setNotes({...notes,vwa:e.target.value})} placeholder="VW-12345" style={{ background:t.bgInput,border:`1px solid ${t.borderInput}`,borderRadius:7,padding:"7px 10px",color:t.text,fontSize:13,outline:"none",fontFamily:"inherit",width:140 }} />
                    <span style={{ fontSize:10,color:t.textMuted,fontStyle:"italic" }}>Have seller repeat back</span>
                  </div>
                </div>
                <Ta label="Financial / Lien Notes" value={notes.financial} onChange={v=>setNotes({...notes,financial:v})} placeholder="Second lien, IRS lien, back taxes, other encumbrances..." t={t} />
                <NavBtns onBack={() => setStep(3)} onNext={() => setStep(5)} nextLabel="⚡ Generate Closing Report →" gold t={t} />
              </div>
            )}

            {/* STEP 5 */}
            {step===5 && (
              <div>
                <div style={{ background:t.bgDecBar,border:`1px solid ${t.accentGreen}22`,borderRadius:10,padding:"13px 16px",marginBottom:20 }}>
                  <div style={{ fontSize:13,fontWeight:700,color:t.textCard,marginBottom:10 }}>✅ Decision Checklist — Complete Before Closing</div>
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:9 }}>
                    {[{id:"dms",label:"All decision makers confirmed & present"},{id:"yn",label:"Yes/No commitment — no maybes"},{id:"pain",label:"Pain fully surfaced & quantified"},{id:"budget",label:"Budget / walk-away number known"},{id:"timeline",label:"Timeline locked in"},{id:"obj",label:"All objections handled"}].map(item => (
                      <Check key={item.id} checked={!!dec[item.id]} onToggle={() => setDec(p=>({...p,[item.id]:!p[item.id]}))} label={item.label} green t={t} />
                    ))}
                  </div>
                </div>

                <div style={{ textAlign:"center",paddingBottom:18,borderBottom:`1px solid ${t.accent}22`,marginBottom:18 }}>
                  <div style={{ display:"inline-block",background:t.bgTag,border:`1px solid ${t.accent}33`,color:t.accent,fontSize:9,fontWeight:800,letterSpacing:2,padding:"3px 13px",borderRadius:20,marginBottom:8 }}>ACQUISITIONS REPORT</div>
                  <h1 style={{ fontSize:21,fontWeight:800,margin:"0 0 4px",color:t.textCard }}>{lead.address||"Property Analysis"}</h1>
                  <div style={{ fontSize:11,color:t.textMuted }}>{new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</div>
                </div>

                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
                  {[
                    { title:"👤 Lead", rows:[["Name",lead.name],["Phone",lead.phone],["Source",lead.source],["Occupancy",notes.occ]] },
                    { title:"🏠 Property", rows:[["Address",lead.address],["Type",prop.type],["Beds/Baths",`${prop.beds||"—"} / ${prop.baths||"—"}`],["Sq Ft / Year",`${prop.sqft||"—"} / ${prop.year||"—"}`],["Condition",condition],["Asking",asking?fmt(parseFloat(asking.replace(/,/g,""))):"—"]] },
                  ].map(card => (
                    <div key={card.title} style={{ background:t.bgCard,border:`1px solid ${t.borderCard}`,borderRadius:10,padding:15 }}>
                      <div style={{ fontSize:10,fontWeight:800,color:t.accent,textTransform:"uppercase",letterSpacing:.6,marginBottom:10 }}>{card.title}</div>
                      {card.rows.map(([l,v]) => <RR key={l} label={l} val={v} t={t} />)}
                    </div>
                  ))}

                  <div style={{ background:t.bgCard,border:`1px solid ${t.borderCard}`,borderRadius:10,padding:15 }}>
                    <div style={{ fontSize:10,fontWeight:800,color:t.accent,textTransform:"uppercase",letterSpacing:.6,marginBottom:10 }}>🔍 Situation</div>
                    <RR label="Timeline" val={timeline} t={t} />
                    <div style={{ marginTop:8,display:"flex",flexWrap:"wrap",gap:4 }}>
                      {situations.map(sid => { const sit=SITUATIONS.find(x=>x.id===sid); return <span key={sid} style={{ display:"inline-block",background:t.bgTag,border:`1px solid ${t.accent}33`,color:t.accent,fontSize:10,fontWeight:600,padding:"2px 7px",borderRadius:4 }}>{sit.icon} {sit.label}</span>; })}
                    </div>
                    {motivation && <div style={{ marginTop:9,background:t.bgInput,borderLeft:`3px solid ${t.accent}`,padding:"7px 11px",fontSize:11,fontStyle:"italic",borderRadius:"0 6px 6px 0",lineHeight:1.6,color:t.textSub }}>"{motivation}"</div>}
                  </div>

                  <div style={{ background:t.bgCard,border:`1px solid ${t.borderCard}`,borderRadius:10,padding:15 }}>
                    <div style={{ fontSize:10,fontWeight:800,color:t.accent,textTransform:"uppercase",letterSpacing:.6,marginBottom:10 }}>💢 Sandler Profile</div>
                    <RR label="Pain Level" val={pain>0?`${pain}/10`:"—"} t={t} />
                    <RR label="UFC Complete" val={`${Object.values(ufc).filter(Boolean).length}/${UFC_CHECKLIST.length}`} t={t} />
                    <RR label="Decision Ready" val={`${Object.values(dec).filter(Boolean).length}/6`} t={t} />
                    <div style={{ marginTop:9,background:t.bgInput,borderLeft:`3px solid ${painCol}`,padding:"7px 11px",fontSize:11,borderRadius:"0 6px 6px 0",lineHeight:1.6,color:painCol }}>
                      {pain>=8?"🔥 High urgency — move fast":pain>=5?"⚠️ Moderate pain — keep digging":pain>0?"🧊 Low pain — more rapport needed":"Pain not assessed"}
                    </div>
                  </div>

                  <div style={{ background:t.bgCard,border:`1px solid ${t.borderCard}`,borderRadius:10,padding:15 }}>
                    <div style={{ fontSize:10,fontWeight:800,color:t.accent,textTransform:"uppercase",letterSpacing:.6,marginBottom:10 }}>🔨 Repairs</div>
                    {REPAIR_ITEMS.filter(r=>repairs[r.id]).map(r => <div key={r.id} style={{ display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:`1px solid ${t.border}`,fontSize:11 }}><span>{r.icon} {r.label}</span><strong>${(r.low/1000).toFixed(0)}k–${(r.high/1000).toFixed(0)}k</strong></div>)}
                    {!Object.values(repairs).some(Boolean) && <div style={{ opacity:.4,fontSize:12 }}>None documented</div>}
                    {repLow>0 && <div style={{ display:"flex",justifyContent:"space-between",borderTop:`1px solid ${t.border}`,marginTop:7,paddingTop:7,fontSize:11 }}><strong>TOTAL RANGE</strong><strong style={{ color:t.accent }}>{fmt(repLow)} – {fmt(repHi)}</strong></div>}
                  </div>

                  <div style={{ background:t.bgCard,border:`1px solid ${t.accent}33`,borderRadius:10,padding:15,gridColumn:"span 2" }}>
                    <div style={{ fontSize:10,fontWeight:800,color:t.accent,textTransform:"uppercase",letterSpacing:.6,marginBottom:10 }}>⚡ Offer Analysis</div>
                    <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8 }}>
                      {calcCards.map((c,i) => (
                        <div key={i} style={{ background:c.hl?t.bgCalcHL:t.bgCalc,border:`1px solid ${c.hl?t.accent+"44":t.border}`,borderRadius:8,padding:12,textAlign:"center" }}>
                          <div style={{ fontSize:9,color:t.textMuted,textTransform:"uppercase",letterSpacing:.4,marginBottom:5 }}>{c.label}</div>
                          <div style={{ fontSize:c.hl?24:17,fontWeight:800,color:c.hl?t.accent:c.red?t.accentRed:c.green?t.accentGreen:c.red2?t.accentRed:t.textCard }}>{c.val}</div>
                        </div>
                      ))}
                    </div>
                    {(offerNums.first||offerNums.final) && (
                      <div style={{ display:"flex",gap:10,marginTop:13,flexWrap:"wrap" }}>
                        {[["First Offer",offerNums.first,t.textCard],["Counter",offerNums.counter,t.textCard],["Final Agreed",offerNums.final,t.accentGreen]].filter(([,v])=>v).map(([l,v,c]) => (
                          <div key={l} style={{ background:t.bgCalc,border:`1px solid ${l==="Final Agreed"?t.accentGreen+"55":t.border}`,borderRadius:7,padding:"8px 13px",display:"flex",flexDirection:"column",gap:3 }}>
                            <span style={{ fontSize:9,color:t.textMuted,textTransform:"uppercase",letterSpacing:.4 }}>{l}</span>
                            <span style={{ fontSize:14,fontWeight:800,color:c }}>${v}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ background:t.bgCard,border:`1px solid ${t.borderCard}`,borderRadius:10,padding:15,gridColumn:"span 2" }}>
                    <div style={{ fontSize:10,fontWeight:800,color:t.accent,textTransform:"uppercase",letterSpacing:.6,marginBottom:10 }}>📋 Acquisition Manager Notes</div>
                    <textarea value={notes.manager} onChange={e=>setNotes({...notes,manager:e.target.value})} placeholder="Recommendation, deal strength, motivation level, red flags, follow-up strategy, final offer guidance..." style={{ background:t.bgInput,border:`1px solid ${t.borderInput}`,borderRadius:7,padding:"8px 10px",color:t.text,fontSize:13,outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box",height:85,resize:"vertical",marginTop:0 }} />
                    <div style={{ background:t.bgWhy,border:`1px solid ${t.accentPurple}22`,borderRadius:8,padding:13,marginTop:12 }}>
                      <div style={{ fontSize:9,fontWeight:800,color:t.accentPurple,textTransform:"uppercase",letterSpacing:1,marginBottom:10 }}>💼 WHY WORK WITH US</div>
                      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:7 }}>
                        {[["⚡","Close in 7–14 days — no banks, no delays"],["🏚️","Buy AS-IS — zero repairs, zero cleanout"],["💸","Zero commissions, zero closing costs"],["🎯","Flexible close — built around their timeline"],["📋","Simple 2-page agreement — plain English"],["🤝","No financing contingencies — offer certainty"]].map(([ic,tx],i) => (
                          <div key={i} style={{ display:"flex",gap:6,fontSize:11,color:t.textSub,lineHeight:1.5 }}><span>{ic}</span><span>{tx}</span></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display:"flex",gap:10,marginTop:18 }}>
                  <button onClick={() => setStep(4)} style={{ background:t.bgPill,border:`1px solid ${t.borderPill}`,color:t.textSub,padding:"10px 15px",borderRadius:8,cursor:"pointer",fontSize:13,fontWeight:600 }}>← Back</button>
                  <button onClick={() => window.print()} style={{ background:`linear-gradient(135deg,${t.accent},${t.accentRed})`,color:"#fff",border:"none",padding:"10px 18px",borderRadius:8,fontWeight:700,cursor:"pointer",fontSize:14,flex:1 }}>🖨️ Print / Export Report</button>
                </div>
              </div>
            )}
          </div>

          {/* SIDE PANEL */}
          <div style={{ background:t.bgSide,border:`1px solid ${t.borderSide}`,borderRadius:12,overflow:"hidden",position:"sticky",top:68,maxHeight:"calc(100vh - 84px)",boxShadow:dark?"none":"0 2px 16px rgba(0,0,0,.07)" }}>
            <SandlerBar stepIdx={step} t={t} />
            <div style={{ display:"flex",borderBottom:`1px solid ${t.border}` }}>
              {[["script","📋 Script"],["pain","💢 Pain"],["coaching","🧠 Coaching"]].map(([id,label]) => (
                <button key={id} onClick={() => setMode(id)} style={{ flex:1,background:mode===id?t.bgModeTab:"transparent",border:"none",borderBottom:`2px solid ${mode===id?t.accent:"transparent"}`,color:mode===id?t.accent:t.textMuted,padding:"8px 5px",cursor:"pointer",fontSize:11,fontWeight:700,transition:"all .15s" }}>{label}</button>
              ))}
            </div>
            <div style={{ padding:"14px 16px 16px",overflowY:"auto",maxHeight:"calc(100vh - 220px)" }}>
              {mode==="script"   && <ScriptContent />}
              {mode==="pain"     && <PainContent />}
              {mode==="coaching" && <CoachContent />}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}