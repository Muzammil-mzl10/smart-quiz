export const questions = [
  {
    id: "Q07",
    question: "Hoe zou je jouw energieniveau gedurende de dag omschrijven?",
    category: "Energy, Focus & Mood",
    type: "single-select",
    options: ["Geweldig!", "Goed.", "Kan beter.", "Altijd moe."],
    why: "Lage energielevels kunnen het gevolg zijn van een tekort aan bepaalde voedingstoffen. B-vitamines bevorderen de energiestofwisseling.",
  },
  {
    id: "Q08",
    question: "Ervaar je wel eens energiedipjes?",
    category: "Energy, Focus & Mood",
    type: "single-select",
    options: [
      "Nee, vrijwel nooit",
      "'s ochtends",
      "'s middags",
      "'s avonds",
      "Na maaltijden",
    ],
    why: "Het tijdstip waarop je energiedipjes ervaart, is indicatief voor bepaalde problemen of tekorten.",
  },
  {
    id: "Q09",
    question: "Hoe zou je jouw stresslevels omschrijven?",
    category: "Energy, Focus & Mood",
    type: "single-select",
    options: [
      "Zelden gestrest",
      "Soms gestrest",
      "Regelmatig gestrest",
      "Constant gestrest",
    ],
    why: "Stress kan het gebruik van calorieën en voedingsstoffen door het lichaam beïnvloeden.",
  },
  {
    id: "Q10",
    question: "Hoe is je stemming meestal?",
    category: "Energy, Focus & Mood",
    type: "single-select",
    options: [
      "Meestal blij",
      "Kan beter",
      "Soms stemmingswisselingen",
      "Vaak verdrietig",
    ],
    why: "Je gemoedstoestand kan een indicatie zijn van je voedingsstatus en algehele gezondheid.",
  },
  {
    id: "QX1",
    question:
      "Hoe actief is je levensstijl over het algemeen? (sporten niet meegerekend)",
    category: "Exercise & Movement",
    type: "single-select",
    options: [
      "Inactief (voornamelijk zittend (kantoor) werk en weinig fysieke beweging)",
      "Licht actief (regelmatig lichte activiteiten zoals wandelen of huishoudelijk werk)",
      "Actief (Veel in beweging door hobbies, reizen of werk)",
      "Zeer actief (constant in beweging, bijvoorbeeld door een fysiek beroep)",
    ],
    why: "Je algemene activiteitsniveau is belangrijk om je energie- en voedingsbehoeften te bepalen.",
  },
  {
    id: "Q11",
    question: "Hoe vaak sport je gemiddeld per week?",
    category: "Exercise & Movement",
    type: "single-select",
    options: ["Zelden", "2-4 keer per week", "5+ keer per week"],
    why: "Je sportfrequentie heeft invloed op hoeveel energie je verbrandt en de behoefte aan micronutriënten.",
  },
  {
    id: "Q12",
    question: "Welke soorten sport of lichaamsbeweging beoefen je wekelijks?",
    category: "Exercise & Movement",
    type: "multi-select",
    options: [
      "Gewichtheffen",
      "Hoge intensiteit",
      "Duursporten",
      "Flexibiliteit",
    ],
    why: "Verschillende soorten lichaamsbeweging zorgen voor verschillende voedingsstofbehoeften.",
  },
  {
    id: "Q13",
    question:
      "Heb je specifieke sportdoelen waar je wilt dat we je bij ondersteunen?",
    category: "Exercise & Movement",
    type: "multi-select",
    options: [
      "Prestaties verbeteren",
      "Gewicht verliezen",
      "Spiergroei",
      "Algehele gezondheid",
      "Herstel optimaliseren",
      "Kramp verminderen",
      "Geen van deze",
    ],
    why: "Je sportdoelen geven ons inzicht in welke extra micronutriënten mogelijk voordelig voor je kunnen zijn.",
  },
  {
    id: "QX2",
    question: "Ben of beschouw je jezelf als een professionele atleet?",
    category: "Exercise & Movement",
    type: "single-select",
    options: ["Nee", "Ja"],
    why: "Competitieve sporters hebben mogelijk extra voedingsstoffen nodig. ",
  },
  {
    id: "Q14",
    question: "Volg je een specifiek dieet?",
    category: "Diet",
    type: "single-select",
    options: [
      "Vegetarisch",
      "Veganistisch",
      "Keto",
      "Paleo",
      "Carnivoor",
      "Geen van deze",
    ],
    why: "Het volgen van een dieet beïnvloedt je voedingsinname en kan voor mogelijke tekorten zorgen.",
  },
  {
    id: "Q15",
    question: "Hoeveel porties onbewerkt fruit eet je gemiddeld per dag?",
    category: "Diet",
    type: "single-select",
    options: ["Minder dan één", "Eén", "Twee", "Meer dan twee"],
    why: "Fruit levert essentiële vitamines en mineralen. Door inzicht te hebben in je dagelijkse fruitconsumptie, kunnen we bepalen of je hier gemiddeld gezien voldoende van binnenkrijgt.",
  },
  {
    id: "Q16",
    question:
      "Hoe vaak eet je kiwi, citroen, limoen, sinaasappel of aardbeien?",
    category: "Diet",
    type: "single-select",
    options: ["Zelden", "1-3 keer per week", "4-6 keer per week", "Elke dag"],
    why: "Deze vruchten zijn rijk aan vitamine C en antioxidanten, wat belangrijk is voor het immuunsysteem en huidgezondheid.",
  },
  {
    id: "Q17",
    question: "Hoeveel groenten (in gram) eet je per dag?",
    category: "Diet",
    type: "single-select",
    options: [
      "< 100 gram",
      "100-200 gram",
      "200-300 gram",
      "300-400 gram",
      "> 400 gram",
    ],
    why: "Groenten zijn cruciaal voor de inname van vitamines, mineralen en vezels. Aan de hand van je dagelijkse inname weten we of je hier gemiddeld genoeg van binnenkrijgt.",
  },
  {
    id: "Q18",
    question:
      "Welke soorten groenten eet je regelmatig? (minimaal eens per 2 dagen)",
    category: "Diet",
    type: "multi-select",
    options: [
      "Groene bladgroenten",
      "Wortel- en knolgewassen",
      "Paprika's",
      "Kruisbloemige groenten zoals broccoli of bloemkool",
      "Gefermenteerde groenten",
      "Uien, knoflook, bosuien, prei",
      "Geen van deze",
    ],
    why: "Verschillende soorten groenten bieden bepaalde voedingsstoffen die belangrijk zijn voor specifieke gezondheidsaspecten zoals ooggezondheid en immuun functie.",
  },
  {
    id: "Q19",
    question: "Hoe bereid je meestal je groenten?",
    category: "Diet",
    type: "single-select",
    options: [
      "Gekookt",
      "Gebakken/Geroosterd",
      "Roergebakken",
      "Rauw",
      "Gestoomd",
    ],
    why: "De bereidingswijze van groenten kan invloed hebben op de voedingswaarde en opname van voedingsstoffen.",
  },
  {
    id: "Q20",
    question:
      "Hoe vaak eet je zuivelproducten (of zuivelvervangers zoals soja of amandelmelk) op een gemiddelde dag?",
    category: "Diet",
    type: "single-select",
    options: ["Zelden", "Eenmaal", "Twee keer of meer"],
    why: "Zuivel en zuivelvervangers zijn belangrijk voor calciuminname, wat invloed heeft op je botgezondheid.",
  },
  {
    id: "Q21",
    question:
      "Welke van deze voedingsmiddelen eet je regelmatig? (minimaal eens per 2 dagen)",
    category: "Diet",
    type: "multi-select",
    options: [
      "Pure chocolade",
      "Bonen",
      "Haver",
      "Volkorenbrood",
      "Noten",
      "Zaden",
      "Geen van deze",
    ],
    why: "Deze voedingsmiddelen zijn rijk aan bepaalde voedingstoffen.",
  },
  {
    id: "Q22",
    question: "Hoe vaak eet je vlees in een gemiddelde week?",
    category: "Diet",
    type: "single-select",
    options: ["Nooit", "1-2 keer", "3-4 keer", "5 keer of meer"],
    why: "Vleesconsumptie geeft informatie over eiwitinname en mogelijke verzadigde vetinname, wat belangrijk is voor spieropbouw en hartgezondheid.",
  },
  {
    id: "Q23",
    question: "Welke soorten vlees consumeer je regelmatig?",
    category: "Diet",
    type: "multi-select",
    options: [
      "Kip",
      "Rundvlees",
      "Orgaanvlees",
      "Varkensvlees",
      "Geen van deze",
    ],
    why: "Verschillende vleessoorten bevatten verschillende voedingsstoffen. ",
  },
  {
    id: "Q24",
    question: "Hoe vaak eet je vleesvervangers in een gemiddelde week?",
    category: "Diet",
    type: "single-select",
    options: ["Nooit", "1-2 keer", "3-4 keer", "5 keer of meer"],
    why: "Vleesvervangers kunnen belangrijke bronnen zijn van eiwitten en andere voedingsstoffen. ",
  },
  {
    id: "Q25",
    question: "Hoeveel vis of zeevruchten eet je gemiddeld per week?",
    category: "Diet",
    type: "single-select",
    options: ["Nooit", "Eenmaal", "Tweemaal", "Drie keer of meer"],
    why: "Vis en zeevruchten zijn belangrijke bronnen van omega-3 vetzuren en eiwitten, die bijdragen aan de hartgezondheid en hersenfunctie.",
  },
  {
    id: "Q26",
    question:
      "Wanneer je vis eet, hoe vaak gaat het dan om vette vis? (zalm, tonijn, sardines, haring, makreel, etc)",
    category: "Diet",
    type: "single-select",
    options: ["Nooit", "Eenmaal per week", "Twee keer of vaker per week"],
    why: "Het type vis beïnvloedt de inname van omega-3 vetzuren, wat belangrijk is voor hartgezondheid en cognitieve functies.",
  },
  {
    id: "Q27",
    question: "Drink je alcoholische dranken?",
    category: "Diet",
    type: "single-select",
    options: [
      "Nooit",
      "Zelden",
      "Af en toe",
      "Meer dan 12 glazen per week of regelmatig meer dan 6 glazen op een dag",
    ],
    why: "Alcoholconsumptie kan invloed hebben op je levergezondheid en overmatig gebruik kan leiden tot bepaalde tekorten. ",
  },
  {
    id: "Q28",
    question:
      "Hoeveel cafeïne houdende dranken drink je gemiddeld per dag? (Koffie, groene/zwarte thee of energie drink)",
    category: "Diet",
    type: "single-select",
    options: ["Geen", "1-2", "3-4", "5 of meer"],
    why: "Cafeïne houdende dranken beïnvloeden het vermogen van je lichaam om bepaalde vitamines en mineralen op te nemen. ",
  },
  {
    id: "Q29",
    question: "Hoeveel eieren eet je per week?",
    category: "Diet",
    type: "single-select",
    options: ["Geen", "1-3", "4-8", "8 of meer"],
    why: "Eieren zijn een goede bron van eiwitten en bevatten een aantal essentiële voedingsstoffen, zoals vitamine B12 en choline.  ",
  },
  // {
  //   id: 'Q30',
  //   question: 'Neem je momenteel dagelijks supplementen?',
  //   category: 'Lifestyle',
  //   type: 'single-select',
  //   options: ['Nee', 'Ja'],
  //   why: 'Je supplementgebruik geeft ons inzicht in je huidige voedingsstoffeninname en mogelijke tekorten of overschotten.',
  // },
  // {
  //   id: 'Q31',
  //   question:
  //     'Welke van deze supplementen neem je momenteel? (selecteer alle stoffen die je regelmatig neemt)',
  //   category: 'Lifestyle',
  //   type: 'multi-select',
  //   options: [
  //     'Vitamine D',
  //     'Vitamine C',
  //     'Magnesium',
  //     'Omega 3',
  //     'Calcium',
  //     'IJzer',
  //     'Zink',
  //     'B12',
  //     'B11',
  //     'Multivitamine',
  //     'B-complex',
  //     'Overig',
  //     'Ik neem op dit moment geen supplementen',
  //   ],
  //   why: 'We vragen naar je huidige supplementgebruik om dit te kunnen afstemmen met je bloedresultaten en om toekomstige supplementatie nauwkeurig te bepalen.',
  // },
  {
    id: "Q32",
    question: "Rook je?",
    category: "Lifestyle",
    type: "single-select",
    options: [
      "Nooit",
      "Alleen bij feestjes",
      "Dagelijks",
      "Meer dan 10 sigaretten per dag",
    ],
    why: "Roken of passief roken kan je behoefte aan bepaalde micronutriënten en antioxidanten beïnvloeden.",
  },
  {
    id: "QX3",
    question: "Gebruik je weleens drugs?",
    category: "Lifestyle",
    type: "single-select",
    options: ["Nooit", "Af en toe", "Regelmatig", "Vrij vaak"],
    why: "Regelmatig gebruik van drugs kan verstoringen veroorzaken in de balans van bepaalde vitamines, mineralen en neurotransmitters.",
  },
  {
    id: "Q33",
    question: "Wat is je huidskleur?",
    category: "Lifestyle",
    type: "single-select",
    options: [
      "Zeer licht",
      "Licht tot medium",
      "Medium tot olijfkleurig",
      "Bruin tot donker",
    ],
    why: "Je huidskleur is belangrijk voor het bepalen van je vitamine D-behoeften en helpt ons om je vitamine D bloedresultaten juist te interpreteren. ",
  },
  {
    id: "Q34",
    question:
      "Hoeveel ben je in de afgelopen 30 dagen blootgesteld aan zon met een UV factor boven de 3? (Dit is vergelijkbaar met de zon tijdens Nederlandse zomer- en lentedagen tussen 11.00 en 15.00 uur)",
    category: "Lifestyle",
    type: "range",
    options: [
      "Niet of nauwelijks (ook het geval in de Nederlandse winter)",
      "Nauwelijks (minder dan 30 minuten)",
      "Veel (30-60 minuten per dag)",
      "Zeer veel (meer dan 1 uur per dag)",
    ],
    why: "Zonblootstelling beïnvloedt de vitamine D-synthese in je huid. Deze informatie gebruiken we in combinatie met je bloedresultaten om je vitamine D-status te beoordelen.",
  },
  {
    id: "Q35",
    question:
      "Hoeveel verwacht je in de komende 30 dagen blootgesteld te zijn aan zon met een UV factor boven de 3? (Dit is vergelijkbaar met de zon tijdens Nederlandse zomer- en lentedagen tussen 11.00 en 15.00 uur)",
    category: "Lifestyle",
    type: "range",
    options: [
      "Niet of nauwelijks (ook het geval in de Nederlandse winter)",
      "Nauwelijks (minder dan 30 minuten)",
      "Veel (30-60 minuten per dag)",
      "Zeer veel (meer dan 1 uur per dag)",
    ],
    why: "Toekomstige zonblootstelling geeft ons inzicht in mogelijke veranderingen in je vitamine D-niveaus en helpt bij het plannen van toekomstige supplementatie.",
  },
  {
    id: "Q36",
    question: "Hoeveel tijd breng je door achter schermen?",
    category: "Lifestyle",
    type: "range",
    options: [
      "Minder dan 2 uur per dag of helemaal niet",
      "Ongeveer 2-4 uur per dag",
      "Ongeveer 4-8 uur per dag",
      "Meer dan 8 uur per dag (bijvoorbeeld door kantoorwerk of lange gamesessies)",
    ],
    why: "Een hoge schermtijd kan leiden tot bepaalde oogproblemen.",
  },
  {
    id: "Q37",
    question: "Heb je regelmatig last van droge, rode of geïrriteerde ogen?",
    category: "Lifestyle",
    type: "single-select",
    options: ["Nee", "Ja"],
    why: "Droge ogen kunnen een symptoom zijn van een tekort aan voedingsstoffen, bijvoorbeeld een laag vitamine A-gehalte.",
  },
  {
    id: "Q38",
    question: "Heb je moeite met zien in het donker?",
    category: "Lifestyle",
    type: "single-select",
    options: ["Nee", "Ja"],
    why: "Nachtzichtproblemen kunnen wijzen op een tekort aan bepaalde voedingsstoffen, zoals vitamine A.",
  },
  {
    id: "Q39",
    question: "Zweet je veel?",
    category: "Lifestyle",
    type: "single-select",
    options: [
      "Nee, helemaal niet",
      "Ja, maar alleen bij erg warm weer of tijdens het sporten",
      "Ik zweet vrij snel vergeleken met anderen",
      "Ja, ik zweet altijd",
    ],
    why: "Overmatig zweten kan wijzen op een verstoring van de vocht- en elektrolytenbalans.",
  },
  {
    id: "Q40",
    question: "Ben je regelmatig ziek?",
    category: "Health",
    type: "range",
    options: [
      "Bijna nooit ziek.",
      "Af en toe ziek (paar keer per jaar licht verkouden)",
      "Relatief vaak en/of lang ziek (vaker ziek dan de gemiddelde persoon)",
      "Erg vaak ziek (Vrijwel elke maand en/of telkens vrij sterke symptomen)",
    ],
    why: "Regelmatige ziekte kan wijzen op een zwak immuunsysteem, wat een gevolg kan zijn van bepaalde tekorten.",
  },
  {
    id: "Q41",
    question: "Heb je momenteel blessures waarmee we je kunnen ondersteunen?",
    category: "Health",
    type: "single-select",
    options: [
      "Botblessure",
      "Spierblessure",
      "Gewrichtsblessure",
      "Peesblessure",
      "Geen",
    ],
    why: "Bepaalde voedingstoffen kunnen helpen om blessures sneller te genezen. ",
  },
  {
    id: "Q42",
    question: "Heb je haar- en/of huidproblemen?",
    category: "Health",
    type: "single-select",
    options: ["Nee", "Ja"],
    why: "Haar- en huidgezondheid kan indicatief zijn voor voedingsstatus en kan helpen bij het identificeren van tekorten. Als je ja selecteert, zullen we je hier meer vragen over stellen.",
  },
  {
    id: "Q43",
    question: "Heb je in de afgelopen drie maanden antibiotica genomen?",
    category: "Health",
    type: "single-select",
    options: ["Nee", "Ja"],
    why: "Antibioticagebruik kan invloed hebben op je darmflora en de absorptie van bepaalde voedingsstoffen.",
  },
  {
    id: "Q44",
    question:
      "Heb je een geschiedenis van allergieën zoals hooikoorts, eczeem, enz.?",
    category: "Health",
    type: "single-select",
    options: ["Nee", "Ja"],
    why: "Kennis van je allergieën is belangrijk bij het opstellen van je persoonlijke supplement en om mogelijke reacties in relatie tot je bloedresultaten te begrijpen.",
  },
  {
    id: "Q45",
    question:
      "Ben je zwanger, geef je borstvoeding, of ben je van plan binnenkort kinderen te krijgen?",
    category: "Health",
    type: "single-select",
    options: ["Nee", "Ja"],
    why: "Zwangerschap, borstvoeding en vruchtbaarheidsplanning zijn belangrijk bij het samenstellen van je supplement, zodat je (toekomstige) kindje alles krijgt wat hij/zij nodig heeft en tegelijkertijd geen enkel risico loopt door te hoge doseringen.",
  },
  {
    id: "Q46",
    question:
      "Heb je specifieke gezondheidsdoelen die je wilt dat wij overwegen bij het samenstellen van jouw gepersonaliseerde supplement?",
    category: "Health",
    type: "multi-select",
    options: [
      "Hartgezondheid",
      "Energie",
      "Huid-, haar- of nagelgezondheid",
      "Stressreductie",
      "Detox/Levergezondheid",
      "Botgezondheid",
      "Gewichtsvermindering",
      "Algehele Gezondheid",
      "Geen",
    ],
    why: "Het begrijpen van je gezondheidsdoelen helpt ons bij het personaliseren van je supplement.",
  },
  {
    id: "Q47",
    question: "Heb je allergieën waar we rekening mee moeten houden?",
    category: "Health",
    type: "multi-select",
    options: [
      "Geen allergieën",
      "Allergisch voor jodium",
      "Allergisch voor algen",
    ],
    why: "Het kennen van je allergieën is cruciaal voor het voorkomen van allergische reacties. De standaard allergenen die hieronder benoemd staan, zitten sowieso niet in je supplement. Melk, Ei, Vis, Schelpdieren, Pinda&apos;s, Noten, Soja, Gluten, Tarwe, Pollen, Selderij, Mosterd, Sesam, Sulfieten, Lupine, Weekdieren",
  },
  {
    id: "Q48",
    question: "Gebruik je medicatie?",
    category: "Health",
    type: "multi-select",
    options: [
      "Geen medicijnen",
      "Maagzuurremmers",
      "Diuretica",
      "Bloedverdunners",
      "Statines",
      "Diabetesmedicatie",
      "Bloeddrukmedicatie",
      "Orale anticonceptiva",
      "Corticosteroïden",
    ],
    why: "Medicijnen kunnen invloed hebben op bepaalde bloedresultaten. Kennis over je medicijngebruik is essentieel bij het opstellen van je persoonlijke formule en het vermijden van interacties met supplementen. NOTE: Hoewel wij gevaarlijke interacties met je medicijnen proberen te voorkomen, kunnen wij niet garant staan dat je supplement 100% veilig is om te gebruiken. Raadpleeg bij het gebruik van medicijnen altijd je dokter voordat je start met het nemen van nieuwe supplementen.",
  },
  {
    id: "Q49",
    question: "Heb je momenteel menstruaties?",
    category: "Women Health",
    type: "single-select",
    options: ["Nee", "Ja"],
    why: "Menstruatiepatronen kunnen invloed hebben op je voedingsbehoeften.",
  },
  {
    id: "Q50",
    question:
      "Zijn je menstruaties langer dan 12 opeenvolgende maanden gestopt en heb je symptomen van de menopauze?",
    category: "Women Health",
    type: "single-select",
    options: ["Nee", "Ja"],
    why: "Na 12 opeenvolgende maanden zonder menstruatie bevind je je officieel in de menopauze. Dit heeft invloed op je ijzerbehoeftes.",
  },
  {
    id: "Q51",
    question: "Heb je last van hevig menstrueel bloedverlies?",
    category: "Women Health",
    type: "single-select",
    options: ["Zeer licht", "Licht", "Matig", "Zwaar", "Zeer zwaar"],
    why: "Hevig menstrueel bloedverlies kan belangrijk zijn voor het beoordelen van ijzerbehoefte. Deze informatie helpt ons om je bloedresultaten goed te interpreteren. ",
  },
  {
    id: "Q52",
    question: "Heb je last van symptomen van het premenstrueel syndroom?",
    category: "Women Health",
    type: "single-select",
    options: ["Geen symptomen", "Mild", "Redelijk", "Ernstig"],
    why: "PMS-symptomen verschijnen kort voordat je menstruatiecyclus begint en kunnen bestaan uit vermoeidheid, stemmingswisselingen, verhoogde prikkelbaarheid en gevoelige borsten. Verschillende studies tonen aan dat tekorten aan bepaalde micronutriënten de symptomen van PMS kunnen verergeren.",
  },
  {
    id: "Q53",
    question: "Heb je last van een of meerdere van de volgende haarproblemen?",
    category: "Health",
    type: "multi-select",
    options: [
      "Begint dunner te worden of haaruitval",
      "Groeit langzaam",
      "Droog haar",
      "Beschadigd haar, gespleten punten",
      "Geen van deze",
    ],
    why: "Haarproblemen kunnen wijzen op bepaalde voedingsdeficiënties en worden meegenomen bij het interpreteren van je bloedresultaten. ",
  },
  {
    id: "Q54",
    question: "Heb je last van een of meerdere van de volgende nagelproblemen?",
    category: "Health",
    type: "multi-select",
    options: [
      "Broze of zwakke nagels",
      "Langzame groei",
      "Witte vlekjes",
      "Grote ribbels",
      "Geen van deze",
    ],
    why: "Nagelproblemen kunnen wijzen op bepaalde voedingsdeficiënties. Deze informatie helpt ons om je bloedresultaten en voedingsbehoeften beter te begrijpen.",
  },
  {
    id: "Q55",
    question: "Heb je last van een of meerdere van de volgende huidproblemen?",
    category: "Health",
    type: "multi-select",
    options: [
      "Acne",
      "Verlies van elasticiteit",
      "Hyperpigmentatie, donkere vlekken",
      "Vroegtijdige veroudering, rimpels",
      "Wondjes genezen langzaam",
      "Geen van deze",
    ],
    why: "Huidproblemen kunnen wijzen op bepaalde voedingsdeficiënties of andere gezondheidsproblemen. Deze informatie wordt meegenomen bij het interpreteren van je bloedresultaten.",
  },

  {
    id: "Q57",
    question: "Is er nog iets anders dat je met ons wilt delen?",
    category: "Other",
    type: "textarea",
    why: "Deze open vraag stelt je in staat om aanvullende informatie te geven die relevant kan zijn voor je persoonlijk gezondheids- en voedingsadvies.",
  },
];

// export const dependentQuestions: any = {
//   'Vitamine D': {
//     id: 'Q31-1',
//     question:
//       'Hoeveel Vitamine D neem je momenteel (in microgram) per dag? (Gebruikelijk: 10-75 mcg)',
//     type: 'numeric',
//     unit: 'mcg',
//     min: 10,
//     max: 75,
//   },
//   'Vitamine C': {
//     id: 'Q31-2',
//     question:
//       'Hoeveel Vitamine C neem je momenteel (in milligram) per dag? (Gebruikelijk: 100-2000 mg)',
//     type: 'numeric',
//     unit: 'mg',
//     min: 100,
//     max: 2000,
//   },
//   Magnesium: {
//     id: 'Q31-3',
//     question:
//       'Hoeveel Magnesium neem je momenteel (in milligram) per dag? (Gebruikelijk: 100-400 mg)',
//     type: 'numeric',
//     unit: 'mg',
//     min: 100,
//     max: 400,
//   },
//   'Omega 3': {
//     id: 'Q31-4',
//     question:
//       'Hoeveel Omega-3 neem je momenteel (in milligram) per dag? (Gebruikelijk: 250-2000 mg)',
//     type: 'numeric',
//     unit: 'mg',
//     min: 250,
//     max: 2000,
//   },
//   Calcium: {
//     id: 'Q31-5',
//     question:
//       'Hoeveel Calcium neem je momenteel (in milligram) per dag? (Gebruikelijk: 200-1200 mg)',
//     type: 'numeric',
//     unit: 'mg',
//     min: 200,
//     max: 1200,
//   },
//   IJzer: {
//     id: 'Q31-6',
//     question:
//       'Hoeveel IJzer neem je momenteel (in milligram) per dag? (Gebruikelijk: 8-28 mg)',
//     type: 'numeric',
//     unit: 'mg',
//     min: 8,
//     max: 28,
//   },
//   Zink: {
//     id: 'Q31-7',
//     question:
//       'Hoeveel Zink neem je momenteel (in milligram) per dag? (Gebruikelijk: 5-40 mg)',
//     type: 'numeric',
//     unit: 'mg',
//     min: 5,
//     max: 40,
//   },
//   B12: {
//     id: 'Q31-8',
//     question:
//       'Hoeveel Vitamine B12 neem je momenteel (in microgram) per dag? (Gebruikelijk: 2-1000 mcg)',
//     type: 'numeric',
//     unit: 'mcg',
//     min: 2,
//     max: 1000,
//   },
//   B11: {
//     id: 'Q31-9',
//     question:
//       'Hoeveel Foliumzuur (Vitamine B11) neem je momenteel (in microgram) per dag? (Gebruikelijk: 200-1000 mcg)',
//     type: 'numeric',
//     unit: 'mcg',
//     min: 200,
//     max: 1000,
//   },
//   Overig: {
//     id: 'Q31-12',
//     question: 'Welke andere supplementen neem je? Specificeer de hoeveelheid.',
//     type: 'textarea',
//   },
// };
