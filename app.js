const CARDS_VERSION = "2026-09-06-k";
const LABELS = ["A","B","C","D","E"];
const CHAPTER_ORDER = ["Chapter 1","Chapter 2"];

const SEED = [
  // ---- Ch 2: Atoms/PTE (quiz-sourced) ----
  {id:"c2q1",chapter:"Chapter 2",number:12,type:"mc",
    question:"How many electrons will nitrogen (N) gain or lose to be stable when it forms a -3 charge?",
    options:["gain 3","lose 5","lose 3","gain 5"],answerIndex:0},
  {id:"c2q2",chapter:"Chapter 2",number:13,type:"match",
    question:"Match the part of the periodic table with its correct description.",
    pairs:[
      ["Found on the right side of the stair-step line, gain electrons to be stable","nonmetals"],
      ["Lose electrons to be stable, found on the left of the stair-step line (except hydrogen)","metals"],
      ["Group 2","Alkaline Earth metals"],
      ["Group 17","Halogens"],
      ["Found along the stair-step line, except aluminum","metalloids"]
    ]},
  {id:"c2q3",chapter:"Chapter 2",number:14,type:"mc",
    question:"Which statement about subatomic particles is NOT true?",
    options:["Protons and electrons have opposite charges.","Protons and neutrons have the same charge","Protons and neutrons have almost the same mass."],
    answerIndex:1},
  {id:"c2q4",chapter:"Chapter 2",number:15,type:"mc",
    question:"The number of protons in one atom of an element is that element's __________.",
    options:["atomic number","atomic mass","mass number"],answerIndex:0},
  {id:"c2q5",chapter:"Chapter 2",number:16,type:"mc",
    question:"How many electrons does the Sr ion have? You know its ion charge because it is in group 2 on the periodic table and has +2 charge.",
    options:["36 (protons 38, minus 2 for the +2 charge)","38 (this is the neutral-atom count — a trap)","40 (too high — not supported by Sr's atomic number)"],
    answerIndex:0},
  {id:"c2q6",chapter:"Chapter 2",number:17,type:"mc",
    question:"True or false: atoms, molecules, and ions are separate, non-overlapping categories.",
    options:["False — a particle can be more than one at once","True — each particle only ever fits one category"],answerIndex:0},
  {id:"c2q7",chapter:"Chapter 2",number:18,type:"mc",
    question:"Do you need to memorize the entire periodic table for gen chem?",
    options:["No — the full table is provided as reference; a small high-value set (common symbols, ion charges by group, polyatomic ions) is worth knowing cold","Yes — every atomic mass and configuration for all 118 elements"],answerIndex:0},
  {id:"c2q8",chapter:"Chapter 2",number:19,type:"mc",
    question:"When can you safely assume an atom's electron count equals its proton count (atomic number)?",
    options:["Always, unless the question mentions an ion, a charge, or gaining/losing electrons","Only for the first 20 elements","Never — you always have to calculate it separately","Only for nonmetals"],answerIndex:0},
  {id:"c2q9",chapter:"Chapter 2",number:20,type:"mc",
    question:"What is an anion?",
    options:["An anion is defined as an atom that has gained electrons and forms a negative charge.","An anion is defined as an atom that has gained electrons and forms a positive charge.","An anion is defined as an atom that has lost electrons and forms a negative charge."],answerIndex:0},
  {id:"c2q10",chapter:"Chapter 2",number:21,type:"mc",
    question:"What is a cation?",
    options:["A cation is defined as an atom that has gained electrons and forms a negative charge.","A cation is defined as an atom that has lost electrons and forms a positive charge.","A cation is defined as an atom that has gained electrons and forms a positive charge."],answerIndex:1},
  {id:"c2q11",chapter:"Chapter 2",number:22,type:"match",
    question:"Match the following term with its correct definition or description.",
    pairs:[
      ["Determines the identity of the element.","1. number of protons"],
      ["An atom of an element with a different number of neutrons.","3. isotope"],
      ["The average mass of all the different isotopes of an element.","5. atomic mass"],
      ["The number of protons plus neutrons in an atom.","2. mass number"],
      ["An atom that has lost electrons.","4. cation"]
    ]},
  {id:"c2q12",chapter:"Chapter 2",number:23,type:"mc",
    question:"What is the symbol notation for a neutral atom with 23 electrons and 29 neutrons?",
    options:["⁵²₂₉V","₅₂²³V","₂₉²³V","⁵²₂₃V"],answerIndex:3},
  {id:"c2q13",chapter:"Chapter 2",number:24,type:"mc",
    question:"What element has 28 electrons and a +3 charge?",
    options:["P","Ga","Ni","Se"],answerIndex:1},
  {id:"c2q14",chapter:"Chapter 2",number:25,type:"mc",
    question:"True or False: The transition metals are groups 3-12, and the representative elements are groups 1-2 and 13-18.",
    options:["True","False"],answerIndex:0},
  {id:"c2q15",chapter:"Chapter 2",number:26,type:"mc",
    question:"True or False: Alkali and Alkaline Earth Metals lose electrons to form cations (+1 and +2) in order to be stable.",
    options:["True","False"],answerIndex:0},
  {id:"c2q16",chapter:"Chapter 2",number:27,type:"mc",
    question:"How many electrons does the tellurium (Te) ion have? Te (atomic # 52) forms a -2 ion.",
    options:["54","128","50","52"],answerIndex:0},
  {id:"c2q17",chapter:"Chapter 2",number:28,type:"mc",
    question:"How many protons, neutrons, and electrons are in ⁹⁷₄₂Mo⁺²?",
    options:["97 protons, 42 neutrons, 44 electrons","42 protons, 55 neutrons, 40 electrons","55 protons, 42 neutrons, 55 electrons","42 protons, 55 neutrons, 44 electrons"],answerIndex:1},
  {id:"c2q18",chapter:"Chapter 2",number:29,type:"mc",
    question:"Due to periodicity, which of the following elements has chemical behavior similar to that of Oxygen? Elements in the same group behave similarly.",
    options:["bromine","carbon","sulfur"],answerIndex:2},
  {id:"c2q19",chapter:"Chapter 2",number:30,type:"mc",
    question:"Which statement is correct about chlorine-35 and chlorine-37?",
    options:["They have a different number of protons and electrons, but the same number of neutrons.","They have the same number of protons, but a different number of electrons and neutrons.","They have the same number of protons and electrons, but a different number of neutrons."],answerIndex:2},
  // ---- Sig Figs / Measurement ----
  {id:"sfq1",chapter:"Chapter 1",number:11,type:"mc",
    question:"80.30 × 0.2 = ? (answer with correct sig figs)",
    options:["20","20.","16","16.1"],answerIndex:0},
  {id:"sfq2",chapter:"Chapter 1",number:12,type:"mc",
    question:"0.0234 × 139.37 = ? (answer with correct sig figs)",
    options:["3.26","3.261","3.2613","3.3"],answerIndex:0},
  {id:"sfq3",chapter:"Chapter 1",number:13,type:"mc",
    question:"General rule: multiplying/dividing measurements, how many sig figs does the answer get?",
    options:["The same number of sig figs as the factor with the FEWEST sig figs","The same number of sig figs as the factor with the MOST sig figs","Always round to 2 sig figs, regardless of the factors","The sum of all sig figs across every factor"],answerIndex:0},

  // ---- Textbook Review 2.3-2.7 ----
  {id:"tr2q1",chapter:"Chapter 2",number:1,type:"mc",
    question:"(2.3, Ex.10) In what way are isotopes of a given element always different? In what way(s) are they always the same?",
    options:["Different: number of neutrons (and mass number). Same: number of protons (atomic number)","Different: number of protons. Same: number of neutrons","Different: number of electrons only. Same: everything else","Isotopes of the same element are identical in every way"],answerIndex:0},
  {id:"tr2q2",chapter:"Chapter 2",number:2,type:"match",
    question:"(2.3, Ex.16) Find protons, neutrons, electrons, and name the element for each isotope/ion.",
    pairs:[
      ["(a) Z=9, A=18, charge 1−","9 protons, 9 neutrons (18−9), 10 electrons (9+1) — Fluorine (F)"],
      ["(b) Z=43, A=99, charge 7+","43 protons, 56 neutrons (99−43), 36 electrons (43−7) — Technetium (Tc)"],
      ["(c) Z=53, A=131, charge 1−","53 protons, 78 neutrons (131−53), 54 electrons (53+1) — Iodine (I)"],
      ["(d) Z=81, A=201, charge 1+","81 protons, 120 neutrons (201−81), 80 electrons (81−1) — Thallium (Tl)"]
    ]},
  {id:"tr2q3",chapter:"Chapter 2",number:3,type:"mc",
    question:"(2.3, Ex.23) Bromine has two isotopes: ⁷⁹Br (mass 78.9183 amu, 50.69% abundance) and ⁸¹Br (mass 80.9163 amu, 49.31% abundance). Calculate bromine's average atomic mass.",
    options:["79.90 amu","79.00 amu","80.92 amu","78.92 amu"],answerIndex:0},
  {id:"tr2q4",chapter:"Chapter 2",number:4,type:"mc",
    question:"(2.4, Ex.27) Why does the symbol for the element oxygen (O) differ from the formula for a molecule of oxygen gas (O₂)?",
    options:["O represents a single oxygen atom; oxygen naturally occurs as a diatomic molecule (two bonded atoms), so O₂ shows that pairing","There is no real difference — O and O₂ mean the same thing","O₂ means there are 2 different types of oxygen","The subscript 2 indicates the charge on the oxygen atom"],answerIndex:0},
  {id:"tr2q5",chapter:"Chapter 2",number:5,type:"match",
    question:"(2.4, Ex.31) Determine the empirical formula for each compound.",
    pairs:[
      ["(a) caffeine C₈H₁₀N₄O₂","C₄H₅N₂O (divide all subscripts by 2)"],
      ["(b) sucrose C₁₂H₂₂O₁₁","C₁₂H₂₂O₁₁ (already lowest ratio)"],
      ["(c) hydrogen peroxide H₂O₂","HO (divide by 2)"],
      ["(d) glucose C₆H₁₂O₆","CH₂O (divide by 6)"],
      ["(e) ascorbic acid C₆H₈O₆","C₃H₄O₃ (divide by 2)"]
    ]},
  {id:"tr2q6",chapter:"Chapter 2",number:6,type:"match",
    question:"(2.5, Ex.37) Classify each as metal or nonmetal, then as main-group, transition, or inner transition.",
    pairs:[
      ["uranium","metal, inner transition (actinide)"],
      ["bromine","nonmetal, main-group"],
      ["strontium","metal, main-group"],
      ["neon","nonmetal, main-group"],
      ["gold","metal, transition"],
      ["americium","metal, inner transition (actinide)"],
      ["rhodium","metal, transition"],
      ["sulfur","nonmetal, main-group"],
      ["carbon","nonmetal, main-group"],
      ["potassium","metal, main-group"]
    ]},
  {id:"tr2q7",chapter:"Chapter 2",number:7,type:"match",
    question:"(2.5, Ex.41) Use the periodic table to give the name and symbol for each described element.",
    pairs:[
      ["(a) noble gas, same period as germanium (period 4)","Krypton, Kr"],
      ["(b) alkaline earth metal, same period as selenium (period 4)","Calcium, Ca"],
      ["(c) halogen, same period as lithium (period 2)","Fluorine, F"],
      ["(d) chalcogen, same period as cadmium (period 5)","Tellurium, Te"]
    ]},
  {id:"tr2q8",chapter:"Chapter 2",number:8,type:"match",
    question:"(2.6, Ex.45) Predict whether each chloride is ionic or covalent.",
    pairs:[
      ["KCl","Ionic (metal + nonmetal)"],
      ["NCl₃","Covalent (nonmetal + nonmetal)"],
      ["ICl","Covalent (nonmetal + nonmetal)"],
      ["MgCl₂","Ionic (metal + nonmetal)"],
      ["PCl₅","Covalent (nonmetal + nonmetal)"],
      ["CCl₄","Covalent (nonmetal + nonmetal)"]
    ]},
  {id:"tr2q9",chapter:"Chapter 2",number:9,type:"match",
    question:"(2.6, Ex.49) Write the formula of the compound formed by each ion pair.",
    pairs:[
      ["(a) Ca²⁺, S²⁻","CaS"],
      ["(b) NH₄⁺, SO₄²⁻","(NH₄)₂SO₄"],
      ["(c) Al³⁺, Br⁻","AlBr₃"],
      ["(d) Na⁺, HPO₄²⁻","Na₂HPO₄"],
      ["(e) Mg²⁺, PO₄³⁻","Mg₃(PO₄)₂"]
    ]},
  {id:"tr2q10",chapter:"Chapter 2",number:10,type:"match",
    question:"(2.7, Ex.51) Name the following binary ionic compounds.",
    pairs:[
      ["(a) CsCl","cesium chloride"],
      ["(b) BaO","barium oxide"],
      ["(c) K₂S","potassium sulfide"],
      ["(d) BeCl₂","beryllium chloride"],
      ["(e) HBr","hydrogen bromide"],
      ["(f) AlF₃","aluminum fluoride"]
    ]},
  {id:"tr2q11",chapter:"Chapter 2",number:11,type:"match",
    question:"(2.7, Ex.57) These metals can have more than one ionic charge — name each compound.",
    pairs:[
      ["(a) Cr₂O₃","chromium(III) oxide"],
      ["(b) FeCl₂","iron(II) chloride"],
      ["(c) CrO₃","chromium(VI) oxide"],
      ["(d) TiCl₄","titanium(IV) chloride"],
      ["(e) MoS₂","molybdenum(IV) sulfide"]
    ]},

  // ---- Textbook Review 1.1-1.6 ----
  {id:"tr1q1",chapter:"Chapter 1",number:1,type:"mc",
    question:"(1.1, Ex.2) Classify each as most similar to a hypothesis, a law, or a theory: (a) Falling barometric pressure precedes the onset of bad weather (b) All life on Earth has evolved from a common, primitive organism through natural selection (c) My truck's gas mileage has dropped significantly, probably because it's due for a tune-up",
    options:["(a) law, (b) theory, (c) hypothesis","(a) hypothesis, (b) law, (c) theory","(a) theory, (b) hypothesis, (c) law","All three are laws"],answerIndex:0},
  {id:"tr1q2",chapter:"Chapter 1",number:2,type:"match",
    question:"(1.2, Ex.16) Classify each as an element, a compound, or a mixture.",
    pairs:[
      ["copper","Element"],["water","Compound"],["nitrogen","Element"],["sulfur","Element"],
      ["air","Mixture (homogeneous)"],["sucrose","Compound"],
      ["molecules with two iodine atoms (I₂)","Element — still only ONE type of atom, just paired up"],
      ["gasoline","Mixture"]
    ]},
  {id:"tr1q3",chapter:"Chapter 1",number:3,type:"match",
    question:"(1.3, Ex.27) Classify each change as physical or chemical.",
    pairs:[
      ["(a) condensation of steam","Physical (phase change, same substance H₂O)"],
      ["(b) burning of gasoline","Chemical (combustion creates new substances)"],
      ["(c) souring of milk","Chemical (bacteria create new substances)"],
      ["(d) dissolving sugar in water","Physical (recoverable unchanged by evaporation)"],
      ["(e) melting of gold","Physical (phase change, same atoms)"]
    ]},
  {id:"tr1q4",chapter:"Chapter 1",number:4,type:"match",
    question:"(1.3, Ex.32) Classify each property as extensive or intensive.",
    pairs:[
      ["volume","Extensive"],["temperature","Intensive"],["humidity","Intensive"],
      ["heat","Extensive"],["boiling point","Intensive"]
    ]},
  {id:"tr1q5",chapter:"Chapter 1",number:5,type:"match",
    question:"(1.4, Ex.38) Give the name of the SI prefix for each power of ten.",
    pairs:[
      ["(a) 10³","kilo (k)"],["(b) 10⁻²","centi (c)"],["(c) 0.1 (=10⁻¹)","deci (d)"],
      ["(d) 10⁻³","milli (m)"],["(e) 1,000,000 (=10⁶)","mega (M)"],["(f) 0.000001 (=10⁻⁶)","micro (μ)"]
    ]},
  {id:"tr1q6",chapter:"Chapter 1",number:6,type:"mc",
    question:"(1.4, Ex.40) A piece of jewelry has a mass of 132.6 g. A graduated cylinder with 48.6 mL water rises to 61.2 mL when the jewelry is submerged. Find its density and identify the likely metal.",
    options:["10.5 g/mL — matches silver's known density","13.6 g/mL — matches mercury","2.7 g/mL — matches aluminum","19.3 g/mL — matches gold"],answerIndex:0},
  {id:"tr1q7",chapter:"Chapter 1",number:7,type:"match",
    question:"(1.5, Ex.48) How many significant figures are in each measurement?",
    pairs:[
      ["(a) 38.7 g","3 sig figs"],["(b) 2×10¹⁸ m","1 sig fig"],
      ["(c) 3,486,002 kg","7 sig figs (zeros BETWEEN nonzero digits always count)"],
      ["(d) 9.74150×10⁻⁴ J","6 sig figs"],["(e) 0.0613 cm³","3 sig figs (leading zeros never count)"],
      ["(f) 17.0 kg","3 sig figs (trailing zero after a decimal counts)"],
      ["(g) 0.01400 g/mL","4 sig figs"]
    ]},
  {id:"tr1q8",chapter:"Chapter 1",number:8,type:"mc",
    question:"(1.5, Ex.56) Classify these measurement sets: (b) testing 25-mL pipettes, got 27.02, 26.99, 26.97, 27.01 mL (c) testing gold purity, got 99.9999%, 99.9998%, 99.9998%, 99.9999%",
    options:["(b) precise but NOT accurate (tightly clustered but consistently off-target); (c) both precise and accurate (tightly clustered AND near the true 100% value)","(b) accurate but not precise; (c) neither accurate nor precise","Both sets are neither accurate nor precise","Both sets are both accurate and precise"],answerIndex:0},
  {id:"tr1q9",chapter:"Chapter 1",number:9,type:"mc",
    question:"(1.6, Ex.63) How many milliliters of soft drink are in a 12.0-oz can?",
    options:["355 mL","300 mL","500 mL","118 mL"],answerIndex:0},
  {id:"tr1q10",chapter:"Chapter 1",number:10,type:"mc",
    question:"(1.6, Ex.93) Convert the boiling temperature of gold, 2966°C, into °F and K.",
    options:["5371°F and 3239 K","2966°F and 3239 K","5371°F and 2966 K","3239°F and 5371 K"],answerIndex:0}
];

const EXPLANATIONS = {
  c2q1:"A neutral atom has equal protons and electrons, so their charges cancel. Charge only appears when that balance shifts: losing electrons leaves more protons than electrons → positive charge; gaining electrons leaves more electrons than protons → negative charge. A -3 charge means nitrogen ended up with 3 more electrons than protons — so it gained 3 electrons. This also matches nitrogen's position as a nonmetal, which gains electrons (rather than losing them) to reach a stable octet.",
  c2q2:"The stair-step line splits the table into metals (left, lose electrons) and nonmetals (right, gain electrons), with metalloids straddling the line itself (aluminum is the one stair-step-adjacent element usually classified as a metal, not a metalloid). Group 2 = Alkaline Earth metals; Group 17 = Halogens.",
  c2q3:"Neutrons are neutral — no charge at all — so they don't 'share' a charge with protons (+1) or anything else. That makes (b) the false statement. Protons and electrons genuinely do have opposite charges (+1 and −1), and protons/neutrons really are almost equal in mass (~1 amu each; electrons are negligible by comparison, ~1/1800th).",
  c2q4:"Atomic number is defined as the proton count — it's literally what identifies an element on the periodic table. Atomic mass and mass number both factor in neutrons too, so they don't fit the blank.",
  c2q5:"Strontium's atomic number is 38, so a neutral Sr atom has 38 protons and 38 electrons. A +2 charge means it lost 2 electrons (protons never change in ion formation) → 38 − 2 = 36 electrons.",
  c2q6:"'Atom vs molecule' answers how many atoms are bonded together; 'neutral vs ion' answers whether the charge is balanced. These are independent questions. A single atom can be an ion (Na⁺), and a group of bonded atoms can also carry a charge — a polyatomic ion (SO₄²⁻). So a particle can be described by more than one label simultaneously.",
  c2q7:"Nearly every gen chem exam hands you a clean periodic table, since chemistry tests whether you can use it, not recite it. What IS worth memorizing: common element symbols, ion charges by group (mostly derivable from column position), and polyatomic ions (sulfate, nitrate, ammonium, carbonate, phosphate, etc.) — these aren't derivable from the table's structure, so they're the one thing usually worth rote-memorizing with flashcards.",
  c2q8:"A neutral atom always has equal protons and electrons — that's the default, and the atomic number gives you that count directly. The moment a question introduces a CHARGE, the word ION, or language like 'gains/loses/transfers electrons,' the atom is no longer neutral: subtract the charge for a positive ion (lost electrons), add it for a negative ion (gained electrons). Protons never change in ion formation — only electrons move.",
  c2q9:"Anions form when an atom GAINS electrons. Extra (negatively charged) electrons mean more negative charge than positive — so the atom becomes negatively charged overall. Memory anchor: 'an-ion' sounds like 'a negative ion.'",
  c2q10:"Cations form when an atom LOSES electrons. Losing negatively charged electrons leaves more protons than electrons — so the atom becomes positively charged overall. Memory anchor: the 't' in 'cation' looks like a plus sign (+), so cation = positive.",
  c2q11:"Two pairs are easy to mix up here: MASS NUMBER (protons + neutrons) is the whole-number nucleon count for one specific atom, while ATOMIC MASS is the decimal weighted-average mass across all naturally occurring isotopes of that element — the number you see on the periodic table. 'Average mass of all the different isotopes' is describing atomic mass, not mass number, even though both involve counting mass. The other three are more straightforward: protons = the element's identity (atomic number), isotope = same element, different neutron count, and cation = lost electrons (positive charge).",
  c2q12:"Work from the definition of each slot in ᴬ₂X notation: the SUBSCRIPT (bottom) is the atomic number Z = protons, and the SUPERSCRIPT (top) is the mass number A = protons + neutrons. Neutral atom with 23 electrons → 23 protons → Z = 23, which is what makes it vanadium (V) in the first place. A = 23 + 29 = 52. So: ⁵²₂₃V. The trap answer ⁵²₂₉V puts the NEUTRON count (29) in the subscript slot — but the neutron count never appears directly in the notation; it's only recoverable as A − Z. Sanity check: the subscript must always match the element's spot on the periodic table (V is element 23, not 29 — 29 is copper).",
  c2q13:"A +3 charge means the atom LOST 3 electrons — so it has 3 more protons than its current 28 electrons: 28 + 3 = 31 protons → element 31 → gallium (Ga). The trap is Ni (element 28): that matches the electron count, but electron count only equals atomic number for NEUTRAL atoms. For ions, always solve protons = electrons + charge first, then look up the element by proton count.",
  c2q14:"Both halves of this statement are accurate: transition metals fill the middle block, groups 3–12, and representative (main-group) elements are the tall columns on the far left (groups 1–2) and far right (groups 13–18), including the noble gases in group 18. Since both parts check out, the whole statement is True.",
  c2q15:"Alkali metals (group 1) have just 1 valence electron; losing it gets them to a full, stable outer shell matching the nearest noble gas — forming a +1 cation. Alkaline earth metals (group 2) have 2 valence electrons and lose both the same way, forming a +2 cation. Both families lose electrons (rather than gain) because they have very few valence electrons to begin with — losing a couple is a much shorter path to stability than gaining six or seven.",
  c2q16:"Neutral tellurium has 52 electrons (matching its atomic number, 52). A -2 charge means the atom GAINED 2 electrons (protons never change during ion formation) → 52 + 2 = 54 electrons. Common trap: subtracting instead of adding — remember, negative charge always means extra electrons.",
  c2q17:"Break it into three separate lookups: PROTONS = atomic number (the subscript, 42) — this identifies the element as molybdenum (Mo) and never changes. NEUTRONS = mass number − atomic number = 97 − 42 = 55. ELECTRONS = protons − charge = 42 − 2 = 40 (a positive charge means electrons were lost, so subtract).",
  c2q18:"Elements in the same GROUP (column) share the same number of valence electrons, which drives similar chemical behavior — this is what 'periodicity' refers to here. Oxygen is in group 16 (the chalcogens). Sulfur sits directly below oxygen in that same group, so it behaves similarly. Bromine is group 17 (a halogen, different valence electron count) and carbon is group 14 — neither matches oxygen's group.",
  c2q19:"Chlorine-35 and chlorine-37 are ISOTOPES of the same element. Proton count = atomic number = 17 for both — that's what makes them both chlorine (change the protons and you change the element). Both are neutral atoms, so electrons = protons = 17 for both too. The only difference is neutrons: 35 − 17 = 18 vs. 37 − 17 = 20. Isotope rule: same protons (and same electrons when neutral), different neutrons → different mass number.",
  sfq1:"80.30 has 4 sig figs; 0.2 has only 1 sig fig. In multiplication, the answer is limited to the FEWEST sig figs among the factors — so the result needs just 1 sig fig. Raw product: 80.30 × 0.2 = 16.06. Rounded to 1 sig fig → 20, written WITHOUT a decimal point. Writing '20.' would signal 2 sig figs (too much precision).",
  sfq2:"0.0234 has 3 sig figs (leading zeros never count); 139.37 has 5 sig figs. Keep the fewest — 3 sig figs. Raw product: 0.0234 × 139.37 = 3.261258. Rounded to 3 sig figs → 3.26.",
  sfq3:"The core rule for multiplication and division: your answer can't claim more precision than your least-precise measurement. Count the sig figs in each number being multiplied/divided, and match the answer's sig figs to whichever factor has the fewest. (Different rule for addition/subtraction — that goes by decimal places.)",
  tr2q1:"Atomic number (proton count) is what DEFINES an element — change it and you change the element entirely. So all isotopes of one element must share the same proton count. What varies between isotopes is the neutron count, which changes the mass number without changing which element it is.",
  tr2q2:"Three-step method for any ion problem: (1) protons = atomic number Z, which tells you the element directly; (2) neutrons = mass number − atomic number; (3) electrons = protons − charge (subtract a positive charge, ADD for a negative charge).",
  tr2q3:"Average atomic mass = sum of (fractional abundance × isotope mass) for every isotope. (0.5069 × 78.9183) + (0.4931 × 80.9163) = 40.00 + 39.90 = 79.90 amu. This is a weighted average — it leans toward whichever isotope is more abundant.",
  tr2q4:"A chemical symbol like O identifies the element itself (one atom). But some elements don't exist as lone atoms in nature — oxygen occurs as a diatomic molecule, meaning two atoms bonded together, so O₂ is needed to represent what you'd actually find. (Other diatomic elements: H₂, N₂, F₂, Cl₂, Br₂, I₂.)",
  tr2q5:"An empirical formula shows the SIMPLEST whole-number ratio of atoms in a compound. Find the greatest common divisor of all subscripts and divide every subscript by it. If they share no common factor (like sucrose's 12, 22, 11), the molecular formula IS already the empirical formula.",
  tr2q6:"Metal vs. nonmetal: check which side of the stair-step line the element sits on. Main-group elements are the tall columns on the far left/right (groups 1–2 and 13–18); transition metals fill the middle block (groups 3–12); inner transition metals are the two rows pulled out at the bottom (lanthanides/actinides).",
  tr2q7:"This drills two skills at once: knowing the named families (noble gases = group 18, alkaline earth = group 2, halogens = group 17, chalcogens = group 16) AND reading periods (rows). Find the reference element to identify the period, then slide across that row to the target group.",
  tr2q8:"Fast rule: metal + nonmetal → ionic bond (electrons transfer). Nonmetal + nonmetal → covalent bond (electrons shared). K and Mg are metals; N, I, P, and C are all nonmetals — so only KCl and MgCl₂ are ionic.",
  tr2q9:"Ionic compounds must be electrically neutral overall. Cross the charge magnitudes as subscripts (dropping the sign), then reduce to lowest terms. Example (e): Mg is +2, PO₄ is −3 — cross them → Mg₃(PO₄)₂, giving +6 and −6, which balance.",
  tr2q10:"Naming simple binary ionic compounds: name the metal first (unchanged), then the nonmetal with its ending switched to '-ide.' No prefixes (mono-, di-) are used for ionic compounds — those are reserved for covalent compounds.",
  tr2q11:"Certain metals don't have one fixed charge, so you CALCULATE it and show it with a Roman numeral. Figure out the nonmetal's charge first, multiply by its subscript count, then solve for the metal's charge so the total is zero. Example (a): 3 oxygens × −2 = −6, so 2 chromiums must total +6 → each Cr is +3 → chromium(III) oxide.",
  tr1q1:"A LAW summarizes a pattern of observations without explaining WHY — (a) just states an observed correlation with no mechanism given. A THEORY is a well-substantiated EXPLANATION — (b) evolution explains a mechanism, not just a pattern. A HYPOTHESIS is a tentative, testable explanation for a specific observation — (c) is a guess that could be tested.",
  tr1q2:"The test: how many DIFFERENT types of atoms are involved, and are they chemically bonded in fixed ratios or just physically combined? Elements have only one type of atom (even paired up, like I₂). Compounds have different atom types bonded in a fixed ratio. Mixtures combine substances that keep their own identity and can vary in proportion.",
  tr1q3:"The test: did a NEW substance form with different chemical properties, or is it still the same substance in a different form/state/mixture? Physical changes can typically be reversed to recover the original substance. Chemical changes produce genuinely new substances.",
  tr1q4:"Extensive properties scale with the amount of substance present (double the sample, double the value). Intensive properties stay the same no matter how much you have. Density is built FROM two extensive properties (mass ÷ volume) but becomes intensive since the ratio cancels the 'amount' dependence.",
  tr1q5:"SI prefixes are shorthand multipliers stacked onto a base unit so you don't write long strings of zeros. Worth knowing cold: kilo (10³), deci (10⁻¹), centi (10⁻²), milli (10⁻³), micro (10⁻⁶), mega (10⁶).",
  tr1q6:"Water displacement gives volume: 61.2 − 48.6 = 12.6 mL. Density = mass ÷ volume = 132.6 g ÷ 12.6 mL = 10.5 g/mL, which matches silver's known density almost exactly — the classic 'identify the unknown metal by density' problem.",
  tr1q7:"Leading zeros never count. Zeros SANDWICHED between nonzero digits always count. Trailing zeros only count if there's a decimal point present. Scientific notation sidesteps the ambiguity entirely — every digit shown counts.",
  tr1q8:"PRECISION = how tightly clustered repeated measurements are with each other. ACCURACY = how close they are to the true value. The pipette set is tightly clustered (precise) but consistently off from 25 mL (not accurate). The gold set is both tightly clustered AND close to 100% pure — both precise and accurate.",
  tr1q9:"1 fl oz = 29.5735 mL. 12.0 oz × 29.5735 mL/oz = 354.88 mL, rounds to 3 sig figs → 355 mL.",
  tr1q10:"K = °C + 273.15 → 2966 + 273.15 = 3239.15 → 3239 K. °F = (°C × 9/5) + 32 → (2966 × 1.8) + 32 = 5370.8 → 5371°F. Common trap: forgetting the +32, or mixing up which formula goes which direction."
};

// ---------- state ----------
let activeChapter = CHAPTER_ORDER[0];
let idx = 0;
let results = {};      // id -> 'correct' | 'wrong'
let selected = null;   // chosen option index for current mc card
let flipped = false;
let answerMode = false;

function loadState(){
  try{
    const v = localStorage.getItem("chem_fc_version");
    if(v !== CARDS_VERSION){
      localStorage.setItem("chem_fc_version", CARDS_VERSION);
      localStorage.removeItem("chem_fc_results");
    }
    const r = localStorage.getItem("chem_fc_results");
    if(r) results = JSON.parse(r);
    const am = localStorage.getItem("chem_fc_answermode");
    answerMode = am === "1";
    const pos = localStorage.getItem("chem_fc_pos");
    if(pos){ const p = JSON.parse(pos); activeChapter = p.chapter || activeChapter; idx = p.idx || 0; }
  }catch(e){}
}
function saveResults(){ try{ localStorage.setItem("chem_fc_results", JSON.stringify(results)); }catch(e){} }
function savePos(){ try{ localStorage.setItem("chem_fc_pos", JSON.stringify({chapter:activeChapter, idx})); }catch(e){} }

function filtered(){ return SEED.filter(c=>c.chapter===activeChapter).sort((a,b)=>a.number-b.number); }
function chapterList(){
  const set = [...new Set(SEED.map(c=>c.chapter))];
  return CHAPTER_ORDER.filter(c=>set.includes(c));
}

function changeChapter(ch){ activeChapter=ch; idx=0; selected=null; flipped=false; savePos(); render(); }
function jumpTo(i){ idx=i; selected=null; flipped=answerMode; savePos(); render(); }
function handleFlip(){ if(!flipped){ flipped=true; render(); } }
function flipBack(){ flipped=false; selected=null; render(); }
function nextCard(){
  const fl = filtered();
  if(idx < fl.length-1){ idx++; selected=null; flipped=answerMode; savePos(); render(); }
}
function pickOption(i){
  const card = filtered()[idx];
  if(selected!==null) return;
  selected = i;
  results[card.id] = (i===card.answerIndex) ? "correct" : "wrong";
  saveResults();
  render();
}
function selfGrade(ok){
  const card = filtered()[idx];
  results[card.id] = ok ? "correct" : "wrong";
  saveResults();
  render();
}
function toggleAnswerMode(){
  answerMode = !answerMode;
  try{ localStorage.setItem("chem_fc_answermode", answerMode?"1":"0"); }catch(e){}
  if(flipped) flipped = true;
  render();
}
function resetDeck(){
  const fl = filtered();
  fl.forEach(c=>{ delete results[c.id]; });
  saveResults();
  idx=0; selected=null; flipped=false;
  render();
}
function esc(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function render(){
  const app = document.getElementById("app");
  const chapters = chapterList();
  const fl = filtered();
  const tot = fl.length;
  const card = fl[idx];
  const correct = fl.filter(c=>results[c.id]==="correct").length;
  const wrong = fl.filter(c=>results[c.id]==="wrong").length;

  let html = "";
  html += `<div class="tabs">` + chapters.map(ch=>{
    const n = SEED.filter(c=>c.chapter===ch).length;
    return `<button class="tab${ch===activeChapter?" active":""}" onclick="changeChapter('${ch.replace(/'/g,"\\'")}')">${ch} (${n})</button>`;
  }).join("") + `</div>`;

  html += `<div class="toprow">
    <button class="toggle${answerMode?" on":""}" onclick="toggleAnswerMode()">Answer Mode: ${answerMode?"ON":"OFF"}</button>
    <button class="ctrl-btn" onclick="resetDeck()">&#8634; Reset this deck's progress</button>
  </div>`;

  html += `<div class="meta-row"><span><strong>${idx+1} / ${tot}</strong> &middot; ${activeChapter}</span>
    <span>${correct>0?`<span class="score-pill score-correct">${correct} ✓</span>`:""}${wrong>0?`<span class="score-pill score-wrong">${wrong} ✗</span>`:""}</span></div>`;

  html += `<div class="pip-grid">` + fl.map((c,i)=>{
    const res = results[c.id];
    let cls = "pip";
    if(i===idx) cls += " current";
    if(res==="correct") cls += " correct";
    if(res==="wrong") cls += " wrong";
    return `<button class="${cls}" onclick="jumpTo(${i})">${i+1}</button>`;
  }).join("") + `</div>`;

  html += `<div class="progress-wrap"><div class="progress-bar" style="width:${Math.round((idx/Math.max(tot-1,1))*100)}%"></div></div>`;

  const showBack = flipped || answerMode;
  const explanation = EXPLANATIONS[card.id] || "";

  html += `<div class="flashcard-wrap"><div class="flashcard"><div class="flashcard-inner${showBack?" flipped":""}">`;

  html += `<div class="face face-front" onclick="handleFlip()">
    <div class="q-label">${card.chapter} &middot; #${card.number}</div>
    <div class="q-text">${esc(card.question)}</div>
    <div class="flip-hint">Tap to see answer${card.type==="mc"?" choices":""}</div>
  </div>`;

  html += `<div class="face face-back">
    <div class="back-header">
      <div class="q-label" style="margin-bottom:0">${card.chapter} &middot; #${card.number}</div>
      <button class="flip-back-btn" onclick="flipBack()">&#8617; See question</button>
    </div>`;

  if(card.type === "mc"){
    if(answerMode && selected===null){
      html += `<div class="options">` + card.options.map((opt,i)=>{
        const cls = "opt-btn" + (i===card.answerIndex ? " correct" : "");
        return `<div class="${cls}" style="cursor:default"><span class="opt-label">${LABELS[i]}.</span>${esc(opt)}</div>`;
      }).join("") + `</div>`;
    } else {
      html += `<div class="options">` + card.options.map((opt,i)=>{
        let cls = "opt-btn";
        if(selected!==null){ if(i===card.answerIndex) cls += " correct"; else if(i===selected) cls += " wrong"; }
        return `<button class="${cls}" onclick="pickOption(${i})" ${selected!==null?"disabled":""}><span class="opt-label">${LABELS[i]}.</span>${esc(opt)}</button>`;
      }).join("") + `</div>`;
    }
  } else if(card.type === "match"){
    html += `<div class="match-list">` + card.pairs.map(([p,a])=>{
      return `<div class="match-row"><div class="prompt">${esc(p)}</div><div class="ans">→ ${esc(a)}</div></div>`;
    }).join("") + `</div>`;
    if(results[card.id]===undefined){
      html += `<div class="selfgrade">
        <button class="sg-btn got" onclick="selfGrade(true)">✓ Got it</button>
        <button class="sg-btn missed" onclick="selfGrade(false)">✗ Missed it</button>
      </div>`;
    }
  }

  const answeredNow = card.type==="mc" ? (selected!==null || answerMode) : (results[card.id]!==undefined || answerMode);
  if(explanation && answeredNow){
    html += `<div class="why-box"><b>Why:</b> ${esc(explanation)}</div>`;
  }
  if(answeredNow){
    html += `<div class="advancing-row"><button class="next-card-btn" onclick="nextCard()" ${idx===tot-1?"disabled":""}>Next card &rarr;</button></div>`;
  }

  html += `</div></div></div></div>`;

  app.innerHTML = html;
}

function injectFAQSchema(){
  try{
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": SEED.map(c=>{
        let answerText;
        if(c.type === "mc"){
          answerText = c.options[c.answerIndex];
        } else {
          answerText = c.pairs.map(([p,a])=>p+": "+a).join("; ");
        }
        if(EXPLANATIONS[c.id]) answerText += " " + EXPLANATIONS[c.id];
        return {
          "@type": "Question",
          "name": c.question,
          "acceptedAnswer": {"@type":"Answer","text": answerText}
        };
      })
    };
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.id = "ld-faq";
    tag.text = JSON.stringify(faq);
    document.head.appendChild(tag);
  }catch(e){}
}

loadState();
if(!chapterList().includes(activeChapter)) activeChapter = CHAPTER_ORDER[0];
const flInit = filtered();
if(idx >= flInit.length) idx = 0;
flipped = answerMode;
render();
injectFAQSchema();
