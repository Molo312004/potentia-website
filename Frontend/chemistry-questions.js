// Chemistry Test Questions - Exact 20 Questions from NEET
const chemistryQuestions = [
    {
        id: 1,
        category: "Chemical Equilibrium",
        question: "For the manufacture of ammonia by Haber's process, N₂(g) + 3H₂(g) ⇌ 2NH₃(g); ΔH = -22 kcal. The favorable conditions are:",
        options: [
            { value: "A", text: "High temperature, high pressure" },
            { value: "B", text: "Low temperature, low pressure" },
            { value: "C", text: "High temperature, low pressure" },
            { value: "D", text: "Low temperature, high pressure" }
        ],
        correctAnswer: "D"
    },
    {
        id: 2,
        category: "Ionic Equilibrium",
        question: "Match the column I with column II and mark the appropriate choice:\n\nColumn I: (A) CH₃COONa, (B) NH₄Cl, (C) NaNO₃, (D) CH₃COONH₄\nColumn II: (i) Almost neutral pH, (ii) Acidic pH < 7, (iii) Alkaline pH > 7, (iv) Neutral pH = 7",
        options: [
            { value: "A", text: "(A)→(i), (B)→(ii), (C)→(iii), (D)→(iv)" },
            { value: "B", text: "(A)→(ii), (B)→(iii), (C)→(iv), (D)→(i)" },
            { value: "C", text: "(A)→(iii), (B)→(ii), (C)→(iv), (D)→(i)" },
            { value: "D", text: "(A)→(iv), (B)→(i), (C)→(iii), (D)→(ii)" }
        ],
        correctAnswer: "C"
    },
    {
        id: 3,
        category: "Coordination Chemistry",
        question: "Amongst Ni(CO)₄, [Ni(CN)₄]²⁻ and [NiCl₄]²⁻:",
        options: [
            { value: "A", text: "Ni(CO)₄ and [Ni(CN)₄]²⁻ are diamagnetic and [NiCl₄]²⁻ is paramagnetic" },
            { value: "B", text: "[NiCl₄]²⁻ and [Ni(CN)₄]²⁻ are diamagnetic and Ni(CO)₄ is paramagnetic" },
            { value: "C", text: "Ni(CO)₄ and [Ni(CN)₄]²⁻ are diamagnetic and [NiCl₄]²⁻ is paramagnetic" },
            { value: "D", text: "Ni(CO)₄ is diamagnetic and [NiCl₄]²⁻ and [Ni(CN)₄]²⁻ are paramagnetic" }
        ],
        correctAnswer: "C"
    },
    {
        id: 4,
        category: "Atomic Structure",
        question: "The graph between |ψ|² and r(radial distance) shows a peak near nucleus and then a wave. This represents:\n\n[Graph characteristics: Peak at origin, then oscillation]",
        options: [
            { value: "A", text: "3s orbital" },
            { value: "B", text: "1s orbital" },
            { value: "C", text: "2p orbital" },
            { value: "D", text: "2s orbital" }
        ],
        correctAnswer: "D"
    },
    {
        id: 5,
        category: "Solid State",
        question: "Given below are two statements:\n\nStatement-I: α and β forms of sulphur can change reversibly between themselves with slow heating or slow cooling.\nStatement-II: At room temperature the stable crystalline form of sulphur is monoclinic sulphur.\n\nChoose the correct answer:",
        options: [
            { value: "A", text: "Statement I is false but Statement II is true" },
            { value: "B", text: "Both Statement I and Statement II are true" },
            { value: "C", text: "Statement I is true but Statement II is false" },
            { value: "D", text: "Both Statement I and Statement II are false" }
        ],
        correctAnswer: "C"
    },
    {
        id: 6,
        category: "Thermodynamics",
        question: "Five moles of a gas is put through a series of changes as shown graphically in a cyclic process on Volume-Temperature diagram. The processes A→B, B→C, and C→A respectively are:\n\n[Diagram: Shows triangle on V-T graph with points A, B, C]",
        options: [
            { value: "A", text: "Isochoric, Isobaric, Isothermal" },
            { value: "B", text: "Isobaric, Isochoric, Isothermal" },
            { value: "C", text: "Isothermal, Isobaric, Isochoric" },
            { value: "D", text: "Isochoric, Isothermal, Isobaric" }
        ],
        correctAnswer: "A"
    },
    {
        id: 7,
        category: "Kinetics",
        question: "If a reaction follows the Arrhenius equation, the plot in k vs 1/RT gives a straight line with a gradient → γ unit. The energy required to activate the reactant is:",
        options: [
            { value: "A", text: "γ/R unit" },
            { value: "B", text: "γR unit" },
            { value: "C", text: "γ unit" },
            { value: "D", text: "→γ unit" }
        ],
        correctAnswer: "C"
    },
    {
        id: 8,
        category: "Redox Reactions",
        question: "In the reaction: 2FeCl₃ + H₂S → 2FeCl₂ + S + 2HCl",
        options: [
            { value: "A", text: "FeCl₃ acts as oxidising agent" },
            { value: "B", text: "Both H₂S and FeCl₃ are oxidised" },
            { value: "C", text: "FeCl₂ is oxidised while H₂S is reduced" },
            { value: "D", text: "FeCl₃ is oxidised while H₂S is reduced" }
        ],
        correctAnswer: "A"
    },
    {
        id: 9,
        category: "Nitrogen Compounds",
        question: "Pure N₂ can be obtained by heating:",
        options: [
            { value: "A", text: "NH₃ with CuO" },
            { value: "B", text: "NH₄NO₃" },
            { value: "C", text: "(NH₄)₂Cr₂O₇" },
            { value: "D", text: "Ba(N₃)₂" }
        ],
        correctAnswer: "D"
    },
    {
        id: 10,
        category: "P-Block Elements",
        question: "Given below are two statements:\n\nStatement I: Group 13 trivalent halides get easily hydrolyzed by water due to their covalent nature.\nStatement II: AlCl₃ upon hydrolysis in acidified aqueous solution forms octahedral [Al(H₂O)₆]³⁺ ion.\n\nChoose the correct answer:",
        options: [
            { value: "A", text: "Statement I is false but Statement II is true" },
            { value: "B", text: "Both Statement I and Statement II are true" },
            { value: "C", text: "Both Statement I and Statement II are false" },
            { value: "D", text: "Statement I is true but Statement II is false" }
        ],
        correctAnswer: "B"
    },
    {
        id: 11,
        category: "Coordination Complexes",
        question: "The brown ring test for NO₂⁻ and NO₃⁻ is due to the formation of complex ion with a formula:",
        options: [
            { value: "A", text: "[Fe(H₂O)₆]²⁺" },
            { value: "B", text: "[Fe(NO)(CN)₅]³⁻" },
            { value: "C", text: "[Fe(H₂O)₅NO]²⁺" },
            { value: "D", text: "[Fe(H₂O)(NO)]³⁺" }
        ],
        correctAnswer: "C"
    },
    {
        id: 12,
        category: "Organic Reactions",
        question: "The product D of the reaction is?\nCH₃Cl --KCN→ (A) --H₂O→ (B) --NH₃→ (C) --Δ→ (D)",
        options: [
            { value: "A", text: "CH₃(CH₂)NH₂" },
            { value: "B", text: "CH₃CN" },
            { value: "C", text: "HCONH₂" },
            { value: "D", text: "CH₃CONH₂" }
        ],
        correctAnswer: "D"
    },
    {
        id: 13,
        category: "Amines",
        question: "Which of the following compounds is most basic?\n\n[Structures: (a) O₂N-C₆H₄-NH₂  (b) C₆H₅-CH₂NH₂  (c) C₆H₄(N-COCH₃)  (d) C₆H₅-NH₂]",
        options: [
            { value: "A", text: "O₂N-C₆H₄-NH₂" },
            { value: "B", text: "C₆H₅-CH₂NH₂" },
            { value: "C", text: "C₆H₄(N-COCH₃)" },
            { value: "D", text: "C₆H₅-NH₂" }
        ],
        correctAnswer: "B"
    },
    {
        id: 14,
        category: "Carboxylic Acids",
        question: "What is the acid anhydride that is hydrolyzed?\n\n[Diagram showing benzene ring with multiple carbonyl groups undergoes H₂O,H⁺ hydrolysis to form OH and HO⁻]",
        options: [
            { value: "A", text: "Anhydride with two carbonyls adjacent to benzene" },
            { value: "B", text: "Anhydride with phenyl group attached to carbonyl" },
            { value: "C", text: "Anhydride with carbonyl and H" },
            { value: "D", text: "Anhydride with two separate carbonyl groups" }
        ],
        correctAnswer: "A"
    },
    {
        id: 15,
        category: "Organic Synthesis",
        question: "End products of the following sequence of reactions are:\n\n[Cyclohexanone derivative with C-CH₃ undergoes: 1) I₂, NaOH, A  2) H  3) A]",
        options: [
            { value: "A", text: "Yellow ppt of CHI₃ + cyclohexane carboxylic acid" },
            { value: "B", text: "Yellow ppt of CHI₃ + cyclohexane carbaldehyde" },
            { value: "C", text: "Yellow ppt of CHI₃ + cyclohexane with ketone and COOH" },
            { value: "D", text: "Yellow ppt of CHI₃ + cyclohexane with two COOH groups" }
        ],
        correctAnswer: "C"
    },
    {
        id: 16,
        category: "Ethers",
        question: "The ether that undergoes electrophilic substitution reactions is:",
        options: [
            { value: "A", text: "CH₃OC₂H₅" },
            { value: "B", text: "C₆H₅OCH₃" },
            { value: "C", text: "CH₃OCH₃" },
            { value: "D", text: "C₂H₅OC₂H₅" }
        ],
        correctAnswer: "B"
    },
    {
        id: 17,
        category: "Alcohols",
        question: "Compound 'A' reacts with PCl₅ to give 'B' which on treatment with KCN followed by hydrolysis gives propanoic acid as the product. What is 'A'?",
        options: [
            { value: "A", text: "Ethane" },
            { value: "B", text: "Propane" },
            { value: "C", text: "Ethyl chloride" },
            { value: "D", text: "Ethyl alcohol" }
        ],
        correctAnswer: "D"
    },
    {
        id: 18,
        category: "Grignard Reagents",
        question: "Identify the reactant X and the product Y:\n\nCH₃-CO-CH₃ + X → (CH₃)₃C-OMg-Cl\n                    |Hydrolysis\n                    Y + Mg(OH)Cl",
        options: [
            { value: "A", text: "X = MgCl₂; Y = CH₃CH = CH₂" },
            { value: "B", text: "X = CH₃MgCl; Y = C₂H₅COCH₃" },
            { value: "C", text: "X = CH₃MgCl; Y = (CH₃)₃COH" },
            { value: "D", text: "X = C₂H₅MgCl; Y = (CH₃)₃COH" }
        ],
        correctAnswer: "C"
    },
    {
        id: 19,
        category: "Tautomerism",
        question: "Which among the given molecules can exhibit tautomerism?\n\n[Shows 3 molecular structures labeled I, II, III with cyclic and bicyclic compounds]",
        options: [
            { value: "A", text: "III Only" },
            { value: "B", text: "Both I and III" },
            { value: "C", text: "Both I and II" },
            { value: "D", text: "Both II and III" }
        ],
        correctAnswer: "A"
    },
    {
        id: 20,
        category: "Hyperconjugation",
        question: "The hyper conjugative stabilities of tert-butyl cation and 2-butene, respectively, are due to:",
        options: [
            { value: "A", text: "σ → p (empty) and σ → π* electron delocalisations" },
            { value: "B", text: "σ → σ* and σ → π electron delocalisations" },
            { value: "C", text: "σ → p (filled) and σ → π electron delocalisations" },
            { value: "D", text: "p(filled) → σ* and σ → π* electron delocalisations" }
        ],
        correctAnswer: "A"
    }
];

