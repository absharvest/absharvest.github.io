// Content for the "Beekeeping tips" guide (converted from the original page's translations)
const en = {
  "title": "Beekeeping tips & ideas",
  "intro": "Practical field guidance for healthier colonies, better honey harvests, locally adapted queens, and sustainable beekeeping in Nepal - from a weekly hive checklist to a season-by-season care calendar.",
  "toc": [
    "Hive checklist",
    "Seasonal care",
    "Practical tips",
    "Field problems"
  ],
  "checklistTitle": "Interactive Hive Inspection Checklist",
  "reminderLabel": "Field reminder:",
  "reminderText": "Open colonies only in calm, suitable weather. Work gently, use smoke lightly, and write down what you observe after every inspection.",
  "checks": [
    {
      "id": "weather",
      "title": "Choose suitable weather",
      "text": "Inspect in calm, warm, dry conditions when foragers are active."
    },
    {
      "id": "queen",
      "title": "Confirm queen status",
      "text": "Look for the queen or evidence of her presence: fresh eggs and young larvae."
    },
    {
      "id": "brood",
      "title": "Check brood pattern",
      "text": "Look for a compact, healthy brood pattern and note any unusual cells."
    },
    {
      "id": "food",
      "title": "Assess honey and pollen stores",
      "text": "Confirm the colony has enough food for current conditions."
    },
    {
      "id": "space",
      "title": "Check colony space",
      "text": "Look for crowding, queen cells, or a need for more room during nectar flow."
    },
    {
      "id": "pests",
      "title": "Watch for pests and disease signs",
      "text": "Observe adult bees, brood, comb, and hive floor for anything unusual."
    },
    {
      "id": "entrance",
      "title": "Inspect entrance and ventilation",
      "text": "Keep the entrance clear and make sure the hive is dry and well ventilated."
    },
    {
      "id": "water",
      "title": "Check water availability",
      "text": "Provide clean, shallow water with stones or floating sticks to land on."
    },
    {
      "id": "records",
      "title": "Write inspection notes",
      "text": "Record queen status, brood, stores, temperament, and any action needed."
    },
    {
      "id": "tools",
      "title": "Clean tools and close gently",
      "text": "Leave the colony orderly and avoid crushing bees while replacing frames."
    }
  ],
  "completeAll": "Mark all complete",
  "resetChecklist": "Reset checklist",
  "privacy": "Your checklist is saved only in this browser and clears automatically after an hour. It is not sent to our server or shared with anyone.",
  "progress": "{c} of {n} completed",
  "calendarTitle": "Seasonal Apiary Care",
  "calendarIntro": "Use this as a general planning guide and adjust it to your altitude, local flowering periods, and weather.",
  "seasons": [
    {
      "title": "Spring",
      "items": [
        "Check colony strength after winter",
        "Watch for swarming preparations",
        "Add space during nectar flow",
        "Prepare splits and nucleus colonies"
      ]
    },
    {
      "title": "Summer & Monsoon",
      "items": [
        "Improve drainage and ventilation",
        "Protect hives from heavy rain",
        "Keep entrances clear of vegetation",
        "Monitor weak colonies closely"
      ]
    },
    {
      "title": "Autumn",
      "items": [
        "Assess food stores for cooler months",
        "Replace damaged equipment",
        "Evaluate queen performance",
        "Plan colony increases"
      ]
    },
    {
      "title": "Winter",
      "items": [
        "Reduce unnecessary disturbance",
        "Protect from cold wind and dampness",
        "Monitor food reserves",
        "Prepare tools for spring"
      ]
    }
  ],
  "tipsTitle": "Practical Beekeeping Ideas",
  "tipsIntro": "From traditional log hives to framed boxes, success starts with healthy colonies, good forage, and thoughtful management.",
  "tips": [
    {
      "title": "Start with strong colonies",
      "items": [
        "Choose healthy, locally adapted bees",
        "Buy queens and nucleus colonies from trusted sources",
        "Begin with manageable colony numbers",
        "Keep a simple inspection record"
      ]
    },
    {
      "title": "Manage swarming early",
      "items": [
        "Look for congestion and charged queen cells",
        "Provide space before the colony becomes crowded",
        "Make splits from strong colonies when appropriate",
        "Use swarms to preserve valuable local genetics"
      ]
    },
    {
      "title": "Support bee nutrition",
      "items": [
        "Plant diverse nectar and pollen sources",
        "Keep flowering plants across seasons",
        "Offer clean water near the apiary",
        "Avoid pesticide use during bloom"
      ]
    },
    {
      "title": "Raise better queens",
      "items": [
        "Select calm, productive breeder colonies",
        "Prioritize healthy brood and survival",
        "Use strong nurse colonies for queen cells",
        "Record emergence and mating dates"
      ]
    },
    {
      "title": "Feed with care",
      "items": [
        "Feed only when stores and forage are inadequate",
        "Keep feeders clean and prevent spills",
        "Never use honey from unknown colonies",
        "Remove feed before harvesting honey"
      ]
    },
    {
      "title": "Harvest responsibly",
      "items": [
        "Take only surplus honey",
        "Leave enough stores for the colony",
        "Use clean, food-safe equipment",
        "Label variety, date, and harvest location"
      ]
    }
  ],
  "problemsTitle": "Common Field Problems",
  "problemsIntro": "Use observations, not assumptions, to decide the next step. Recheck uncertain colonies rather than acting too quickly.",
  "problemsHead": [
    "Observation",
    "Possible reason",
    "Useful next action"
  ],
  "problems": [
    [
      "Few eggs or young larvae",
      "Queen failure, recent swarming, or poor mating",
      "Reinspect and assess whether the colony needs a queen."
    ],
    [
      "Bees clustering outside",
      "Heat, congestion, or possible pre-swarm behaviour",
      "Improve ventilation and inspect available space."
    ],
    [
      "Low food stores",
      "Nectar dearth, bad weather, or a weak colony",
      "Assess stores and provide support if needed."
    ],
    [
      "Ant activity around hive",
      "Food spills or an attractive hive stand",
      "Clean spills and use a suitable stand barrier."
    ],
    [
      "Wax moth damage",
      "Weak colony or poorly stored comb",
      "Strengthen the colony and store comb carefully."
    ]
  ],
  "ctaTitle": "Grow With Our Apiary Community",
  "ctaText": "Explore traditional Nepali hive practices, queen rearing, local forage, raw honey, and hands-on learning opportunities.",
  "ctaBtn": "Contact Our Apiary",
  "metaTitle": "Beekeeping Tips for Nepal — Hive Inspection Checklist & Seasonal Care | A.B.S Pristine Harvest",
  "metaDescription": "Practical beekeeping tips for Nepal: an interactive hive inspection checklist, a season-by-season apiary care calendar, swarm and queen management, and fixes for common field problems.",
  "kicker": "Guide · Field tips",
  "nextLabel": "Previous guide",
  "nextTitle": "How to get started"
};

export type TipsContent = typeof en;

export const tips: { en: TipsContent } & Partial<Record<'ne' | 'sl', Partial<TipsContent>>> = {
  en,
  ne: {
  "title": "मौरीपालन सुझावहरू",
  "intro": "स्वस्थ मौरी समूह, राम्रो मह उत्पादन, स्थानीय रूपमा अनुकूलित रानी मौरी, र दिगो मौरीपालनका लागि व्यावहारिक फिल्ड मार्गदर्शन - साप्ताहिक जाँचसूचीदेखि मौसमी हेरचाह क्यालेन्डरसम्म।",
  "toc": [
    "जाँचसूची",
    "मौसमी हेरचाह",
    "सुझावहरू",
    "फिल्ड समस्या"
  ],
  "checklistTitle": "अन्तरक्रियात्मक मौरीघार निरीक्षण जाँचसूची",
  "reminderLabel": "फिल्ड सम्झना:",
  "reminderText": "समूह शान्त, उपयुक्त मौसममा मात्र खोल्नुहोस्। बिस्तारै काम गर्नुहोस्, धुवाँ हल्का प्रयोग गर्नुहोस्, र प्रत्येक निरीक्षणपछि आफूले देखेको कुरा लेख्नुहोस्।",
  "checks": [
    {
      "id": "weather",
      "title": "उपयुक्त मौसम छान्नुहोस्",
      "text": "मौरीहरू सक्रिय हुँदा, शान्त, न्यानो र सुख्खा मौसममा निरीक्षण गर्नुहोस्।"
    },
    {
      "id": "queen",
      "title": "रानी मौरीको अवस्था पुष्टि गर्नुहोस्",
      "text": "रानी मौरी वा उनको उपस्थितिको प्रमाण खोज्नुहोस्: ताजा अण्डा र साना लार्भा।"
    },
    {
      "id": "brood",
      "title": "ब्रूड ढाँचा जाँच गर्नुहोस्",
      "text": "बाक्लो, स्वस्थ ब्रूड ढाँचा हेर्नुहोस् र कुनै असामान्य कोष भए टिपोट गर्नुहोस्।"
    },
    {
      "id": "food",
      "title": "मह र पराग भण्डार जाँच गर्नुहोस्",
      "text": "हालको अवस्थाका लागि समूहसँग पर्याप्त खाना छ भन्ने पुष्टि गर्नुहोस्।"
    },
    {
      "id": "space",
      "title": "समूहको ठाउँ जाँच गर्नुहोस्",
      "text": "भीडभाड, रानी कोष, वा मह प्रवाहको समयमा थप ठाउँको आवश्यकता छ कि हेर्नुहोस्।"
    },
    {
      "id": "pests",
      "title": "कीट र रोगका लक्षणहरू हेर्नुहोस्",
      "text": "वयस्क मौरी, ब्रूड, मौरीघार, र चाकाको भुइँमा कुनै असामान्य कुरा छ कि अवलोकन गर्नुहोस्।"
    },
    {
      "id": "entrance",
      "title": "प्रवेशद्वार र हावा-प्रवाह जाँच गर्नुहोस्",
      "text": "प्रवेशद्वार खुला राख्नुहोस् र मौरीघार सुख्खा तथा राम्रोसँग हावा-प्रवाह भएको सुनिश्चित गर्नुहोस्।"
    },
    {
      "id": "water",
      "title": "पानीको उपलब्धता जाँच गर्नुहोस्",
      "text": "ढुङ्गा वा तैरने काठसहित सफा, उथलो पानी उपलब्ध गराउनुहोस् जसमा मौरी बस्न सकून्।"
    },
    {
      "id": "records",
      "title": "निरीक्षण टिपोट लेख्नुहोस्",
      "text": "रानी मौरीको अवस्था, ब्रूड, भण्डार, स्वभाव, र आवश्यक कार्य रेकर्ड गर्नुहोस्।"
    },
    {
      "id": "tools",
      "title": "औजार सफा गर्नुहोस् र बिस्तारै बन्द गर्नुहोस्",
      "text": "समूहलाई व्यवस्थित राख्नुहोस् र फ्रेम फर्काउँदा मौरीहरू नथिचिने ध्यान दिनुहोस्।"
    }
  ],
  "completeAll": "सबै पूरा भएको चिन्ह लगाउनुहोस्",
  "resetChecklist": "जाँचसूची रिसेट गर्नुहोस्",
  "privacy": "तपाईंको जाँचसूची यो ब्राउजरमा मात्र सुरक्षित हुन्छ र एक घण्टापछि स्वतः खाली हुन्छ। यो हाम्रो सर्भरमा पठाइँदैन वा कसैसँग साझा गरिँदैन।",
  "progress": "{n} मध्ये {c} पूरा भयो",
  "calendarTitle": "मौसमी मौरीघार हेरचाह",
  "calendarIntro": "यसलाई सामान्य योजना मार्गदर्शकको रूपमा प्रयोग गर्नुहोस् र आफ्नो उचाइ, स्थानीय फूल फुल्ने समय, र मौसम अनुसार समायोजन गर्नुहोस्।",
  "seasons": [
    {
      "title": "वसन्त",
      "items": [
        "जाडोपछि समूहको बल जाँच गर्नुहोस्",
        "झुण्ड बनाउने तयारी हेर्नुहोस्",
        "मह प्रवाहको समयमा थप ठाउँ थप्नुहोस्",
        "विभाजन र न्यूक्लियस समूह तयार गर्नुहोस्"
      ]
    },
    {
      "title": "गर्मी र मनसुन",
      "items": [
        "जल निकास र हावा-प्रवाह सुधार गर्नुहोस्",
        "मौरीघारलाई भारी वर्षाबाट जोगाउनुहोस्",
        "प्रवेशद्वारलाई बोटबिरुवाबाट खाली राख्नुहोस्",
        "कमजोर समूहलाई नजिकबाट अनुगमन गर्नुहोस्"
      ]
    },
    {
      "title": "शरद",
      "items": [
        "चिसो महिनाका लागि खाना भण्डार मूल्याङ्कन गर्नुहोस्",
        "क्षतिग्रस्त उपकरण बदल्नुहोस्",
        "रानी मौरीको कार्यसम्पादन मूल्याङ्कन गर्नुहोस्",
        "समूह वृद्धिको योजना बनाउनुहोस्"
      ]
    },
    {
      "title": "जाडो",
      "items": [
        "अनावश्यक बाधा कम गर्नुहोस्",
        "चिसो हावा र चिसोपनबाट जोगाउनुहोस्",
        "खाना भण्डार अनुगमन गर्नुहोस्",
        "वसन्तका लागि औजार तयार गर्नुहोस्"
      ]
    }
  ],
  "tipsTitle": "व्यावहारिक मौरीपालन सुझावहरू",
  "tipsIntro": "परम्परागत काठको मौरीघारदेखि फ्रेम भएको बाकसम्म, सफलता स्वस्थ समूह, राम्रो चरन, र विचारशील व्यवस्थापनबाट सुरु हुन्छ।",
  "tips": [
    {
      "title": "बलियो समूहबाट सुरु गर्नुहोस्",
      "items": [
        "स्वस्थ, स्थानीय रूपमा अनुकूलित मौरी छान्नुहोस्",
        "भरपर्दो स्रोतबाट रानी र न्यूक्लियस समूह किन्नुहोस्",
        "व्यवस्थापन गर्न सकिने समूह संख्याबाट सुरु गर्नुहोस्",
        "सरल निरीक्षण रेकर्ड राख्नुहोस्"
      ]
    },
    {
      "title": "झुण्ड बन्ने समस्या समयमै व्यवस्थापन गर्नुहोस्",
      "items": [
        "भीडभाड र सक्रिय रानी कोष खोज्नुहोस्",
        "समूह भीडभाड हुनुअघि नै ठाउँ दिनुहोस्",
        "उपयुक्त भएमा बलियो समूहबाट विभाजन गर्नुहोस्",
        "मूल्यवान स्थानीय जीन संरक्षण गर्न झुण्ड प्रयोग गर्नुहोस्"
      ]
    },
    {
      "title": "मौरीको पोषणमा सहयोग गर्नुहोस्",
      "items": [
        "विविध मह र पराग स्रोत रोप्नुहोस्",
        "सबै मौसममा फुल्ने बोटबिरुवा राख्नुहोस्",
        "मौरीघार नजिक सफा पानी उपलब्ध गराउनुहोस्",
        "फूल फुल्ने बेला कीटनाशक प्रयोग नगर्नुहोस्"
      ]
    },
    {
      "title": "राम्रो रानी मौरी उत्पादन गर्नुहोस्",
      "items": [
        "शान्त, उत्पादनशील ब्रीडर समूह छान्नुहोस्",
        "स्वस्थ ब्रूड र बाँच्ने क्षमतालाई प्राथमिकता दिनुहोस्",
        "रानी कोषका लागि बलियो नर्स समूह प्रयोग गर्नुहोस्",
        "निस्कने र संगमको मिति रेकर्ड गर्नुहोस्"
      ]
    },
    {
      "title": "सावधानीपूर्वक खुवाउनुहोस्",
      "items": [
        "भण्डार र चरन अपर्याप्त हुँदा मात्र खुवाउनुहोस्",
        "फिडर सफा राख्नुहोस् र चुहावट रोक्नुहोस्",
        "अज्ञात समूहको मह कहिल्यै प्रयोग नगर्नुहोस्",
        "मह झिक्नुअघि दाना हटाउनुहोस्"
      ]
    },
    {
      "title": "जिम्मेवारीपूर्वक मह संकलन गर्नुहोस्",
      "items": [
        "बाँकी बचेको मह मात्र लिनुहोस्",
        "समूहका लागि पर्याप्त भण्डार छोड्नुहोस्",
        "सफा, खाद्य-सुरक्षित उपकरण प्रयोग गर्नुहोस्",
        "प्रकार, मिति, र संकलन स्थान लेबल गर्नुहोस्"
      ]
    }
  ],
  "problemsTitle": "सामान्य फिल्ड समस्याहरू",
  "problemsIntro": "अर्को कदम तय गर्न अनुमान होइन, अवलोकनको प्रयोग गर्नुहोस्। छिटो कारबाही गर्नुभन्दा अनिश्चित समूहलाई पुनः जाँच गर्नुहोस्।",
  "problemsHead": [
    "अवलोकन",
    "सम्भावित कारण",
    "उपयोगी अर्को कदम"
  ],
  "problems": [
    [
      "थोरै अण्डा वा साना लार्भा",
      "रानी असफलता, हालैको झुण्ड, वा कमजोर संगम",
      "पुनः निरीक्षण गर्नुहोस् र समूहलाई रानी चाहिन्छ कि मूल्याङ्कन गर्नुहोस्।"
    ],
    [
      "मौरी बाहिर झुण्डिने",
      "गर्मी, भीडभाड, वा झुण्ड बन्नुअघिको व्यवहार",
      "हावा-प्रवाह सुधार गर्नुहोस् र उपलब्ध ठाउँ जाँच गर्नुहोस्।"
    ],
    [
      "कम खाना भण्डार",
      "मह अभाव, खराब मौसम, वा कमजोर समूह",
      "भण्डार मूल्याङ्कन गर्नुहोस् र आवश्यक परे सहयोग गर्नुहोस्।"
    ],
    [
      "मौरीघार वरिपरि कमिलाको गतिविधि",
      "खाना चुहावट वा आकर्षक मौरीघार स्ट्यान्ड",
      "चुहावट सफा गर्नुहोस् र उपयुक्त स्ट्यान्ड ब्यारियर प्रयोग गर्नुहोस्।"
    ],
    [
      "मैनको कीराबाट क्षति",
      "कमजोर समूह वा राम्रोसँग भण्डारण नगरिएको चाका",
      "समूहलाई बलियो बनाउनुहोस् र चाका होसियारीपूर्वक भण्डारण गर्नुहोस्।"
    ]
  ],
  "ctaTitle": "हाम्रो मौरीघार समुदायसँग बढ्नुहोस्",
  "ctaText": "परम्परागत नेपाली मौरीघार अभ्यास, रानी उत्पादन, स्थानीय चरन, कच्चा मह, र प्रत्यक्ष सिकाइका अवसरहरू अन्वेषण गर्नुहोस्।",
  "ctaBtn": "हाम्रो मौरीघारलाई सम्पर्क गर्नुहोस्",
  "metaTitle": "नेपालका लागि मौरीपालन सुझाव — घार निरीक्षण जाँचसूची | A.B.S Pristine Harvest",
  "metaDescription": "नेपालका लागि व्यावहारिक मौरीपालन सुझाव: अन्तरक्रियात्मक घार निरीक्षण जाँचसूची, मौसमी हेरचाह क्यालेन्डर र सामान्य फिल्ड समस्याहरूको समाधान।",
  "kicker": "मार्गदर्शन · फिल्ड सुझाव",
  "nextLabel": "अघिल्लो मार्गदर्शन",
  "nextTitle": "कसरी सुरु गर्ने"
},
  sl: {
  "title": "Nasveti za čebelarjenje",
  "intro": "Praktični terenski nasveti za zdravejše družine, boljši pridelek medu, lokalno prilagojene matice in trajnostno čebelarjenje v Nepalu - od tedenskega kontrolnega seznama do sezonskega koledarja nege.",
  "toc": [
    "Kontrolni seznam",
    "Sezonska nega",
    "Nasveti",
    "Težave na terenu"
  ],
  "checklistTitle": "Interaktivni kontrolni seznam za pregled panja",
  "reminderLabel": "Opomnik za teren:",
  "reminderText": "Panje odpirajte le v mirnem, primernem vremenu. Delajte nežno, dima uporabite malo in po vsakem pregledu zapišite svoja opažanja.",
  "checks": [
    {
      "id": "weather",
      "title": "Izberite primerno vreme",
      "text": "Pregled opravite v mirnem, toplem in suhem vremenu, ko so nabiralke aktivne."
    },
    {
      "id": "queen",
      "title": "Potrdite prisotnost matice",
      "text": "Poiščite matico ali dokaze o njeni prisotnosti: sveža jajčeca in mlade ličinke."
    },
    {
      "id": "brood",
      "title": "Preglejte vzorec zalege",
      "text": "Poiščite strnjen, zdrav vzorec zalege in opazite morebitne nenavadne celice."
    },
    {
      "id": "food",
      "title": "Ocenite zaloge medu in cvetnega prahu",
      "text": "Preverite, ali ima družina dovolj hrane za trenutne razmere."
    },
    {
      "id": "space",
      "title": "Preverite prostor v panju",
      "text": "Bodite pozorni na gnečo, matičnike ali potrebo po dodatnem prostoru med pašo."
    },
    {
      "id": "pests",
      "title": "Bodite pozorni na škodljivce in znake bolezni",
      "text": "Opazujte odrasle čebele, zalego, satje in dno panja za morebitne nepravilnosti."
    },
    {
      "id": "entrance",
      "title": "Preglejte vhod in prezračevanje",
      "text": "Vhod naj bo odprt in prost ovir, panj pa naj bo suh in dobro prezračen."
    },
    {
      "id": "water",
      "title": "Preverite dostopnost vode",
      "text": "Zagotovite čisto, plitvo vodo s kamni ali plavajočimi palicami za pristajanje."
    },
    {
      "id": "records",
      "title": "Zapišite opažanja",
      "text": "Zabeležite stanje matice, zalege, zalog, temperament družine in potrebne ukrepe."
    },
    {
      "id": "tools",
      "title": "Očistite orodje in nežno zaprite panj",
      "text": "Panj pustite urejen in pazite, da pri vračanju okvirjev ne zmečkate čebel."
    }
  ],
  "completeAll": "Označi vse kot dokončano",
  "resetChecklist": "Ponastavi seznam",
  "privacy": "Vaš seznam je shranjen samo v tem brskalniku in se samodejno počisti po eni uri. Ni poslan na naš strežnik in ni deljen z nikomer.",
  "progress": "{c} od {n} dokončano",
  "calendarTitle": "Sezonska nega čebelnjaka",
  "calendarIntro": "To uporabite kot splošno vodilo za načrtovanje in ga prilagodite svoji nadmorski višini, lokalnemu obdobju cvetenja in vremenu.",
  "seasons": [
    {
      "title": "Pomlad",
      "items": [
        "Preverite moč družine po zimi",
        "Bodite pozorni na priprave na rojenje",
        "Med pašo dodajte prostor",
        "Pripravite delitve in nuklease"
      ]
    },
    {
      "title": "Poletje in monsun",
      "items": [
        "Izboljšajte odvodnjavanje in prezračevanje",
        "Zaščitite panje pred močnim dežjem",
        "Vhod naj bo prost rastlinja",
        "Pozorno spremljajte šibke družine"
      ]
    },
    {
      "title": "Jesen",
      "items": [
        "Ocenite zaloge hrane za hladnejše mesece",
        "Zamenjajte poškodovano opremo",
        "Ocenite učinkovitost matice",
        "Načrtujte povečanje števila družin"
      ]
    },
    {
      "title": "Zima",
      "items": [
        "Zmanjšajte nepotrebno motenje",
        "Zaščitite pred mrzlim vetrom in vlago",
        "Spremljajte zaloge hrane",
        "Pripravite orodje za pomlad"
      ]
    }
  ],
  "tipsTitle": "Praktične ideje za čebelarjenje",
  "tipsIntro": "Od tradicionalnih panjev iz hlodov do panjev z okvirji uspeh temelji na zdravih čebeljih družinah, dobri paši in premišljenem upravljanju.",
  "tips": [
    {
      "title": "Začnite z močnimi družinami",
      "items": [
        "Izberite zdrave, lokalno prilagojene čebele",
        "Matice in nukleuse kupujte pri zaupanja vrednih virih",
        "Začnite z obvladljivim številom družin",
        "Vodite preprosto evidenco pregledov"
      ]
    },
    {
      "title": "Zgodaj obvladujte rojenje",
      "items": [
        "Bodite pozorni na gnečo in aktivne matičnike",
        "Zagotovite prostor, preden postane družina prenatrpana",
        "Kadar je primerno, naredite delitve iz močnih družin",
        "Roje uporabite za ohranjanje dragocene lokalne genetike"
      ]
    },
    {
      "title": "Podprite prehrano čebel",
      "items": [
        "Zasadite raznolike vire nektarja in cvetnega prahu",
        "Skrbite za cvetoče rastline skozi vse letne čase",
        "Zagotovite čisto vodo blizu čebelnjaka",
        "Med cvetenjem se izogibajte uporabi pesticidov"
      ]
    },
    {
      "title": "Vzrejajte boljše matice",
      "items": [
        "Izberite mirne, produktivne matične družine",
        "Dajte prednost zdravi zalegi in preživetju",
        "Za matičnike uporabite močne negovalne družine",
        "Zabeležite datume izleganja in parjenja"
      ]
    },
    {
      "title": "Previdno hranite",
      "items": [
        "Hranite le, ko so zaloge in paša nezadostne",
        "Krmilnike vzdržujte čiste in preprečite razlitje",
        "Nikoli ne uporabljajte medu iz neznanih družin",
        "Pred pobiranjem medu odstranite krmo"
      ]
    },
    {
      "title": "Odgovorno pobirajte med",
      "items": [
        "Vzemite le presežek medu",
        "Pustite dovolj zalog za družino",
        "Uporabljajte čisto, za živila varno opremo",
        "Označite sorto, datum in mesto pobiranja"
      ]
    }
  ],
  "problemsTitle": "Pogoste terenske težave",
  "problemsIntro": "Pri odločanju o naslednjem koraku uporabite opažanja, ne domneve. Negotove družine raje ponovno preverite, kot da ukrepate prehitro.",
  "problemsHead": [
    "Opažanje",
    "Možen vzrok",
    "Koristen naslednji korak"
  ],
  "problems": [
    [
      "Malo jajčec ali mladih ličink",
      "Odpoved matice, nedavno rojenje ali slabo parjenje",
      "Ponovno preglejte in ocenite, ali družina potrebuje matico."
    ],
    [
      "Čebele se gručijo zunaj",
      "Vročina, gneča ali morebitno vedenje pred rojenjem",
      "Izboljšajte prezračevanje in preverite razpoložljiv prostor."
    ],
    [
      "Nizke zaloge hrane",
      "Pomanjkanje nektarja, slabo vreme ali šibka družina",
      "Ocenite zaloge in po potrebi zagotovite podporo."
    ],
    [
      "Mravlje okoli panja",
      "Razlita hrana ali privlačno stojalo za panj",
      "Očistite razlitja in uporabite ustrezno pregrado na stojalu."
    ],
    [
      "Poškodbe zaradi voščene vešče",
      "Šibka družina ali slabo shranjeno satje",
      "Okrepite družino in skrbno shranjujte satje."
    ]
  ],
  "ctaTitle": "Rastite z našo čebelarsko skupnostjo",
  "ctaText": "Raziščite tradicionalne nepalske prakse čebelarjenja, vzrejo matic, lokalno pašo, surovi med in priložnosti za praktično učenje.",
  "ctaBtn": "Kontaktirajte naš čebelnjak",
  "metaTitle": "Nasveti za čebelarjenje v Nepalu — kontrolni seznam za pregled panja | A.B.S Pristine Harvest",
  "metaDescription": "Praktični nasveti za čebelarje v Nepalu: interaktivni kontrolni seznam za pregled panja, sezonski koledar nege in rešitve pogostih težav.",
  "kicker": "Vodnik · Terenski nasveti",
  "nextLabel": "Prejšnji vodnik",
  "nextTitle": "Kako začeti"
},
};
