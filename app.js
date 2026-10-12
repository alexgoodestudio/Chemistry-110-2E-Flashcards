const CARDS_VERSION = "2026-10-12-b";
const LABELS = ["A","B","C","D","E"];
const CHAPTER_ORDER = ["Chapter 1","Chapter 2","Chapter 3","Chapter 4"];

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
    options:["5371°F and 3239 K","2966°F and 3239 K","5371°F and 2966 K","3239°F and 5371 K"],answerIndex:0},

  // ---- Ch 3 & 4: Composition/Stoichiometry study guide (instructor practice sheet, Fall 2026) ----,
  {id:"sg01",chapter:"Chapter 3",number:1,type:"match",
    question:"How do you recognize a MOLARITY problem?",
    pairs:[["Answer","One solution, no reaction. Given/asked: moles, grams, or volume of solute. Use M = mol solute / L solution. Keyword: 'of' links the volume to the molarity (e.g. 490. mL of a 0.208 M solution)."]]},
  {id:"sg02",chapter:"Chapter 3",number:2,type:"match",
    question:"How do you recognize a DILUTION problem?",
    pairs:[["Answer","One solute, water is added. Keywords: 'dilute', 'make ___ mL of ___ M solution from ___ M'. Use M1V1 = M2V2 (moles of solute do not change)."]]},
  {id:"sg03",chapter:"Chapter 4",number:1,type:"match",
    question:"How do you recognize a TITRATION problem?",
    pairs:[["Answer","TWO different solutions that react (a chemical reaction). Keywords: 'titrate', 'endpoint', 'needed to react with'. Use the mole ratio from the balanced equation."]]},
  {id:"sg04",chapter:"Chapter 4",number:2,type:"match",
    question:"How do you recognize a STOICHIOMETRY (mass-to-mass) problem?",
    pairs:[["Answer","Grams (or moles) of ONE substance given, asked for another substance in the same balanced equation. Chain: g -> mol (molar mass) -> mol (mole ratio) -> g (molar mass)."]]},
  {id:"sg05",chapter:"Chapter 4",number:3,type:"match",
    question:"How do you recognize a LIMITING / EXCESS reactant problem?",
    pairs:[["Answer","Amounts of TWO reactants are given. Run the chain from each reactant; the smaller answer is the theoretical yield and that reactant is the limiting reactant (LR)."]]},
  {id:"sg06",chapter:"Chapter 4",number:4,type:"match",
    question:"How do you recognize a PERCENT YIELD problem?",
    pairs:[["Answer","An actual amount obtained in the lab is given ('she obtained 90.7 g'). % yield = actual / theoretical x 100."]]},
  {id:"sg07",chapter:"Chapter 4",number:5,type:"match",
    question:"How do you tell single vs double displacement?",
    pairs:[["Answer","Double: two compounds swap partners (AB + CD -> AD + CB). Single: a lone element plus a compound (A + BC -> AC + B)."]]},
  {id:"sg08",chapter:"Chapter 3",number:3,type:"match",
    question:"Molarity: formula and unit conversion",
    pairs:[["Answer","M = mol solute / L solution, so mol = M x L. Convert mL to L by dividing by 1000 (490. mL = 0.490 L)."]]},
  {id:"sg09",chapter:"Chapter 3",number:4,type:"match",
    question:"Dilution: formula",
    pairs:[["Answer","M1V1 = M2V2. M1 = starting (concentrated) molarity, V1 = volume needed, M2 = final molarity, V2 = final volume. Any volume unit works if it is the same on both sides."]]},
  {id:"sg10",chapter:"Chapter 4",number:6,type:"match",
    question:"Titration: mole-ratio shortcut (any reaction)",
    pairs:[["Answer","Multiply each solution's M x V by the OTHER solution's coefficient from the balanced equation, then set them equal. Example 3 Ba(OH)2 + 2 H3PO4: 2(M V of Ba(OH)2) = 3(M V of H3PO4)."]]},
  {id:"sg11",chapter:"Chapter 4",number:7,type:"match",
    question:"Titration: teacher's acid-base shortcut",
    pairs:[["Answer","(# of H)(M_acid)(V_acid) = (M_base)(V_base)(# of OH). At the endpoint moles H+ = moles OH-. Keep mL as mL if it cancels on both sides."]]},
  {id:"sg12",chapter:"Chapter 4",number:8,type:"match",
    question:"Stoichiometry: steps for mass-to-mass",
    pairs:[["Answer","1) Balance the equation. 2) Write given amount over 1. 3) g -> mol using molar mass. 4) mol -> mol using the coefficients (wanted on top). 5) mol -> g using molar mass. 6) Round to correct sig figs."]]},
  {id:"sg13",chapter:"Chapter 4",number:9,type:"match",
    question:"Limiting reactant: teacher's method",
    pairs:[["Answer","Run the chain from EACH reactant to the same product. Smaller answer = theoretical yield. The reactant that gave the smaller answer = limiting reactant (LR). The other = excess reactant (ER)."]]},
  {id:"sg14",chapter:"Chapter 4",number:10,type:"match",
    question:"Excess reactant: how many grams of ER are left over?",
    pairs:[["Answer","Start from the LR and calculate grams of ER USED (LR -> ER chain). Then: original grams of ER - grams of ER used = grams left over."]]},
  {id:"sg15",chapter:"Chapter 4",number:11,type:"match",
    question:"Percent yield: formula",
    pairs:[["Answer","% yield = (actual yield / theoretical yield) x 100. Theoretical yield comes from the limiting reactant."]]},
  {id:"sg16",chapter:"Chapter 4",number:12,type:"match",
    question:"Balancing: order for combustion of CxHyOz",
    pairs:[["Answer","Balance C first, then H, then O last. If O is odd, double everything. Final coefficients must be the lowest whole numbers. Keep polyatomic ions (ClO4, OH, SO4) together."]]},
  {id:"sg17",chapter:"Chapter 4",number:13,type:"match",
    question:"Predicting: double displacement steps",
    pairs:[["Answer","1) Split each compound into cation + anion. 2) Swap partners. 3) Crisscross charges to write formulas. 4) Check solubility: insoluble product = (s) precipitate. If both products stay aqueous -> NO REACTION. 5) Balance. 6) Add states."]]},
  {id:"sg18",chapter:"Chapter 4",number:14,type:"match",
    question:"Predicting: neutralization",
    pairs:[["Answer","Acid + base -> salt + water. Water is (l). Example: 2 Al(OH)3 + 3 H2SO4 -> Al2(SO4)3 + 6 H2O."]]},
  {id:"sg19",chapter:"Chapter 4",number:15,type:"match",
    question:"Predicting: single displacement rule",
    pairs:[["Answer","A more reactive element replaces a less reactive one (activity series). If the lone element is LESS reactive than the one in the compound -> no reaction. K is above Fe so K replaces Fe; Cu is below Zn so Cu does not replace Zn."]]},
  {id:"sg20",chapter:"Chapter 4",number:16,type:"match",
    question:"Predicting: state symbols",
    pairs:[["Answer","(s) solid, (l) liquid, (g) gas, (aq) dissolved in water. Water made in a reaction is (l), NOT (aq), because water cannot be dissolved in itself."]]},
  {id:"sg21",chapter:"Chapter 4",number:17,type:"match",
    question:"Net ionic equations: steps",
    pairs:[["Answer","1) Balance the molecular equation. 2) Split every (aq) strong electrolyte into ions with charges. 3) Leave (s), (l), (g) together. 4) Cancel spectator ions that appear unchanged on both sides. 5) Write what is left."]]},
  {id:"sg22",chapter:"Chapter 3",number:5,type:"match",
    question:"Formula: empirical formula steps",
    pairs:[["Answer","1) Treat % as grams (100 g sample). 2) Grams -> moles for each element. 3) Divide all by the smallest number of moles. 4) Round to whole-number subscripts (multiply if needed)."]]},
  {id:"sg23",chapter:"Chapter 3",number:6,type:"match",
    question:"Formula: molecular formula steps",
    pairs:[["Answer","Molar mass of molecular formula / molar mass of empirical formula = a whole number n. Multiply every subscript in the empirical formula by n."]]},
  {id:"sg24",chapter:"Chapter 3",number:7,type:"match",
    question:"Constants: Avogadro's number",
    pairs:[["Answer","6.022 x 10^23 particles (atoms, molecules, formula units) per 1 mole."]]},
  {id:"sg25",chapter:"Chapter 3",number:8,type:"match",
    question:"Sig figs: rules",
    pairs:[["Answer","Multiply/divide: answer has the fewest sig figs of the measured numbers. Trailing zeros with NO decimal point are not significant (250 mL = 2 sf, 3000 g = 1 sf). A decimal point makes them count (500. mL = 3 sf). Exact counts and mole ratios never limit sig figs. Use molar masses with at least 4 sf."]]},
  {id:"sg26",chapter:"Chapter 3",number:9,type:"match",
    question:"Dimensional analysis: rules",
    pairs:[["Answer","Write each conversion factor as a fraction so the unit you want to remove is on the bottom and cancels the unit above it. Chain the factors in ONE line. In molarity problems the final unit is mol/L, so mol does not cancel."]]},
  {id:"sg27",chapter:"Chapter 4",number:18,type:"match",
    question:"Practice 1a: balance C6H14O + O2 -> CO2 + H2O",
    pairs:[["Answer","C6H14O + 9 O2 -> 6 CO2 + 7 H2O  (C: 6, H: 14 = 7 H2O, O: 1 + 18 = 12 + 7 = 19)"]]},
  {id:"sg28",chapter:"Chapter 4",number:19,type:"match",
    question:"Practice 1b: balance P4O10 + H2O -> H3PO4",
    pairs:[["Answer","P4O10 + 6 H2O -> 4 H3PO4"]]},
  {id:"sg29",chapter:"Chapter 4",number:20,type:"match",
    question:"Practice 1c: balance Cl2 + Fe2O3 -> FeCl3 + O2",
    pairs:[["Answer","6 Cl2 + 2 Fe2O3 -> 4 FeCl3 + 3 O2"]]},
  {id:"sg30",chapter:"Chapter 4",number:21,type:"match",
    question:"Practice 1d: balance Cr(OH)3 + HClO4 -> Cr(ClO4)3 + H2O",
    pairs:[["Answer","Cr(OH)3 + 3 HClO4 -> Cr(ClO4)3 + 3 H2O  (acid + base -> salt + water)"]]},
  {id:"sg31",chapter:"Chapter 4",number:22,type:"match",
    question:"Practice 2a: Al(OH)3(aq) + H2SO4(aq) -> ?  (type?)",
    pairs:[["Answer","Double displacement (neutralization): 2 Al(OH)3(aq) + 3 H2SO4(aq) -> Al2(SO4)3(aq) + 6 H2O(l). Note: the teacher's key appears to show H2O(l) without the 6; atom count needs 6."]]},
  {id:"sg32",chapter:"Chapter 4",number:23,type:"match",
    question:"Practice 2b: Cu(NO3)2(aq) + Na2CO3(aq) -> ?  (type?)",
    pairs:[["Answer","Double displacement (precipitate): Cu(NO3)2(aq) + Na2CO3(aq) -> CuCO3(s) + 2 NaNO3(aq)"]]},
  {id:"sg33",chapter:"Chapter 4",number:24,type:"match",
    question:"Practice 2c: FeO(aq) + K(s) -> ?  (type?)",
    pairs:[["Answer","Single displacement (K is more reactive than Fe): FeO(aq) + 2 K(s) -> K2O(aq) + Fe(s)"]]},
  {id:"sg34",chapter:"Chapter 4",number:25,type:"match",
    question:"Practice 2d: Na2S(aq) + (NH4)3PO4(aq) -> ?  (type?)",
    pairs:[["Answer","Double displacement, but products Na3PO4 and (NH4)2S are both aqueous (soluble) -> NO REACTION."]]},
  {id:"sg35",chapter:"Chapter 4",number:26,type:"match",
    question:"Practice 2e: ZnBr2(aq) + Cu(s) -> ?  (type?)",
    pairs:[["Answer","Single displacement, but Cu is less reactive than Zn -> NO REACTION."]]},
  {id:"sg36",chapter:"Chapter 4",number:27,type:"match",
    question:"Practice 3: net ionic equation: Pb(NO3)2(aq) + GaI3(aq) -> PbI2(s) + Ga(NO3)3(aq)",
    pairs:[["Answer","Balanced: 3 Pb(NO3)2 + 2 GaI3 -> 3 PbI2 + 2 Ga(NO3)3. Spectators: NO3- and Ga3+. Net ionic: Pb2+(aq) + 2 I-(aq) -> PbI2(s)"]]},
  {id:"sg37",chapter:"Chapter 3",number:10,type:"match",
    question:"Practice 4: how many atoms of H are in 3000 grams of aspartame, C14H18N2O5?",
    pairs:[["Answer","3000 g x (1 mol / 294.34 g) x (18 mol H / 1 mol) x (6.022x10^23 atoms / 1 mol) = 1 x 10^26 atoms H. Sig figs: 1 (3000 has no decimal point, so trailing zeros are not significant). Type: dimensional analysis."]]},
  {id:"sg38",chapter:"Chapter 3",number:11,type:"match",
    question:"Practice 5a: empirical formula of a compound that is 82.4% N and the rest H",
    pairs:[["Answer","H = 100 - 82.4 = 17.6%. N: 82.4 g / 14.01 = 5.88 mol. H: 17.6 g / 1.01 = 17.4 mol. Divide by 5.88: N = 1, H = 2.96 = 3. Empirical formula: NH3"]]},
  {id:"sg39",chapter:"Chapter 3",number:12,type:"match",
    question:"Practice 5b: molar mass of the molecular formula is 136 g/mol. What is the molecular formula? (empirical = NH3)",
    pairs:[["Answer","NH3 = 17.04 g/mol. 136 / 17.04 = about 8. Multiply subscripts by 8: N8H24"]]},
  {id:"sg40",chapter:"Chapter 3",number:13,type:"match",
    question:"Practice 6: how many grams of NaOH are in 490. mL of 0.208 M solution?",
    pairs:[["Answer","0.490 L x 0.208 mol/L = 0.102 mol NaOH; 0.102 mol x 40.00 g/mol = 4.08 g NaOH. Sig figs: 3 (490. and 0.208 each have 3)."]]},
  {id:"sg41",chapter:"Chapter 4",number:28,type:"match",
    question:"Practice 7a: 50.0 g Al + 50.0 g O2: 4 Al + 3 O2 -> 2 Al2O3. Theoretical yield of Al2O3?",
    pairs:[["Answer","From Al: 50.0 g x (1 mol/26.98 g) x (2 mol Al2O3/4 mol Al) x (101.96 g/1 mol) = 94.5 g. From O2: 50.0 g x (1/32.00) x (2/3) x (101.96) = 106 g. Smaller = 94.5 g Al2O3 (3 sf)."]]},
  {id:"sg42",chapter:"Chapter 4",number:29,type:"match",
    question:"Practice 7b: which is the limiting reactant (Al vs O2)?",
    pairs:[["Answer","Al, because it produced the smaller amount of product (94.5 g vs 106 g)."]]},
  {id:"sg43",chapter:"Chapter 4",number:30,type:"match",
    question:"Practice 7c: how many grams of excess reactant are left over?",
    pairs:[["Answer","From Al: 50.0 g Al x (1 mol/26.98 g) x (3 mol O2/4 mol Al) x (32.00 g/1 mol) = 44.5 g O2 used. 50.0 - 44.5 = 5.5 g O2 left over."]]},
  {id:"sg44",chapter:"Chapter 4",number:31,type:"match",
    question:"Practice 7d: Sue obtained 90.7 g Al2O3. What is her % yield?",
    pairs:[["Answer","(90.7 g / 94.5 g) x 100 = 95.98 = 96.0% (3 sf)."]]},
  {id:"sg45",chapter:"Chapter 3",number:14,type:"match",
    question:"Practice 8: how many mL of 12.0 M HNO3 are needed to make 350 mL of 2.50 M solution?",
    pairs:[["Answer","M1V1 = M2V2: V1 = (350 mL)(2.50 M) / 12.0 M = 73 mL. Sig figs: 2 (350 has no decimal point). Type: dilution."]]},
  {id:"sg46",chapter:"Chapter 4",number:32,type:"match",
    question:"Practice 9: 3 Ba(OH)2 + 2 H3PO4 -> Ba3(PO4)2 + 6 ?  How many mL of 0.465 M Ba(OH)2 react with 200. mL of 0.620 M H3PO4?",
    pairs:[["Answer","Type: titration. 2(V)(0.465) = 3(200.)(0.620) -> V = 400. mL. Or chain: 0.200 L x 0.620 mol/L x (3 mol Ba(OH)2 / 2 mol H3PO4) x (1 L / 0.465 mol) = 0.400 L = 400. mL (3 sf). The sheet's printed '6NaCl' is a typo; it should be 6 H2O(l)."]]}
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
  tr1q10:"K = °C + 273.15 → 2966 + 273.15 = 3239.15 → 3239 K. °F = (°C × 9/5) + 32 → (2966 × 1.8) + 32 = 5370.8 → 5371°F. Common trap: forgetting the +32, or mixing up which formula goes which direction.",
  sg01:"Molarity is just a concentration definition, so if only one solution is involved and nothing reacts, the problem is a unit conversion around mol/L. No second substance means no mole ratio needed.",
  sg02:"Adding solvent changes volume but not the amount of dissolved solute, so moles before (M1V1) equal moles after (M2V2).",
  sg03:"A reaction between two solutions means their moles are linked by the balanced equation's coefficients, which is what separates titration from plain molarity or dilution.",
  sg04:"Balanced equations relate MOLES, not grams, so you must go through moles: convert grams to moles, apply the coefficient ratio, then convert back to grams.",
  sg05:"Whichever reactant runs out first stops the reaction. Running each reactant to the same product and taking the smaller amount finds which one runs out first.",
  sg06:"Percent yield compares what you really got to the maximum possible. The word 'obtained' or 'actual' signals a measured result, so you also need a theoretical yield from stoichiometry.",
  sg07:"Count the reactants: two compounds means partners can swap (double); a free element plus a compound means the element replaces another element (single).",
  sg08:"Molarity is defined per LITER, so volumes in mL must be converted first or the answer is off by a factor of 1000.",
  sg09:"Units for volume cancel because they appear on both sides of the equation, so no mL-to-L conversion is needed here, unlike in a molarity problem.",
  sg10:"M x V gives moles of each. The reaction needs moles A : moles B = coefficient A : coefficient B; cross-multiplying that ratio gives the 'other solution's coefficient' shortcut.",
  sg11:"At the endpoint the acid's H+ exactly neutralizes the base's OH-. Multiplying by the number of H or OH per formula unit counts the moles of H+ or OH- actually available.",
  sg12:"Balancing comes first because coefficients are the only source of the mole ratio. Putting the wanted substance's coefficient on top makes the given substance's moles cancel.",
  sg13:"The reactant that can make LESS product is the one that runs out first, so it limits the reaction and sets the theoretical yield.",
  sg14:"Only the limiting reactant is fully consumed, so it tells you exactly how much ER reacted. What is left is what you started with minus what was used.",
  sg15:"Theoretical yield is the maximum product possible, which the limiting reactant sets. Actual yield can't exceed it in a real lab, so % yield is normally 100 or less.",
  sg16:"O appears in both products and O2, so balancing it last avoids redoing work. Doubling fixes an odd O count because O2 supplies oxygen in pairs. Polyatomic ions are balanced as a unit because they stay intact.",
  sg17:"A double displacement only 'happens' if something leaves solution (a solid, gas, or water). If both new compounds stay dissolved, the ions just mix and nothing changes.",
  sg18:"The acid's H+ combines with the base's OH- to make H2O, and the leftover cation and anion form the salt.",
  sg19:"An element can only take another's place if it holds electrons/ions more favorably, which is what the activity series ranks.",
  sg20:"(aq) means 'dissolved in water', so water itself, being the solvent, is a pure liquid.",
  sg21:"Only aqueous strong electrolytes exist as separate ions. Spectators are identical on both sides, so they take no part in the change and cancel.",
  sg22:"Subscripts are ratios of ATOMS (moles), not grams, so you must convert to moles first. Dividing by the smallest makes that element 1 and gives the simplest ratio.",
  sg23:"The molecular formula is a whole-number multiple of the empirical formula, so the ratio of the two molar masses is that multiple.",
  sg24:"A mole is defined as this many particles, so it is the conversion factor between moles and counts of atoms or molecules.",
  sg25:"A result can't be more precise than the least precise measurement. Exact numbers (counts, coefficients) have no uncertainty, and molar masses with 4+ sf keep rounding from limiting the answer.",
  sg26:"Each factor equals 1 (same quantity in two units), so multiplying by it changes units without changing value. Canceling units checks the setup is right.",
  sg27:"C = 6 gives 6 CO2; H = 14 gives 7 H2O. Product O = 12 + 7 = 19, and the fuel supplies 1, so O2 must supply 18 = 9 O2.",
  sg28:"4 P atoms need 4 H3PO4, which contain 12 H and 16 O. 12 H needs 6 H2O, and O is then 10 + 6 = 16, which balances.",
  sg29:"Fe and O each force even/odd matching: 2 Fe2O3 gives 4 Fe and 6 O, so 4 FeCl3 (12 Cl = 6 Cl2) and 3 O2.",
  sg30:"Treat ClO4 as one unit: 3 are needed for Cr(ClO4)3, so 3 HClO4. The 3 OH- plus 3 H+ then form 3 H2O.",
  sg31:"A base plus an acid makes a salt plus water. Al3+ and SO4 2- crisscross to Al2(SO4)3, and counting H (6 + 6 = 12 total on the left) requires 6 H2O.",
  sg32:"Swapping partners gives CuCO3 and NaNO3. Carbonates are insoluble (except with Na+), so CuCO3 is the precipitate; nitrates are always soluble.",
  sg33:"K is higher on the activity series, so it takes the oxygen and frees Fe. K+ and O 2- crisscross to K2O, requiring 2 K.",
  sg34:"Compounds of Na+ and NH4+ are always soluble, so neither product leaves solution and the ions simply stay mixed.",
  sg35:"Cu is below Zn on the activity series, so it can't push Zn out of its compound.",
  sg36:"Everything aqueous splits into ions; NO3- and Ga3+ appear unchanged on both sides and cancel. Only Pb2+ and I- join to form the solid. Coefficients reduce to 1 Pb2+ : 2 I-.",
  sg37:"Grams -> moles of aspartame (molar mass), -> moles of H (18 per molecule), -> atoms (Avogadro). The unrounded value is about 1.1 x 10^26, but 3000 has 1 sf.",
  sg38:"Convert % to grams of a 100 g sample, then to moles, and divide by the smaller. 2.96 is within rounding of 3, so the whole-number ratio is N1H3.",
  sg39:"The molecular formula is n x the empirical formula, and n = 136 / 17.04 = 7.98, which rounds to 8. Multiply both subscripts by 8.",
  sg40:"Molarity x liters gives moles, and molar mass (22.99 + 16.00 + 1.01 = 40.00) converts to grams. The decimal point in '490.' makes the zero significant.",
  sg41:"Two starting amounts means a limiting-reactant problem. The reactant giving less product limits the reaction, so the smaller value (94.5 g) is the theoretical yield.",
  sg42:"The limiting reactant is the one whose chain gave the smaller product mass; the other reactant is in excess.",
  sg43:"All 50.0 g of Al reacts, using 44.5 g of O2. Subtract from the 50.0 g you started with to get the leftover.",
  sg44:"Percent yield = actual / theoretical, and the theoretical yield (94.5 g) comes from the limiting reactant, not from O2.",
  sg45:"Moles of HNO3 stay constant, so V1 = M2V2/M1. The concentrated stock is 12.0 M and the target is 2.50 M, so you need about 1/5 of the final volume. 350 has 2 sf, so round to 73 mL.",
  sg46:"Two solutions react, so use the 3 : 2 mole ratio from the balanced equation. Ba(OH)2 is a base and H3PO4 an acid, so the unlisted product is water, not NaCl (there is no Na or Cl)."
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
