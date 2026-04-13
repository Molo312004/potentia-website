// Physics Test Questions - Exact 20 Questions from NEET
const physicsQuestions = [
    {
        id: 1,
        category: "Thermodynamics",
        question: "When 800 kJ of heat is given to a gas under constant pressure of 4.5×10⁵ Pa, then its volume changes from 0.5 m³ to 2 m³. The change in internal energy of the gas is:",
        options: [
            { value: "A", text: "Zero" },
            { value: "B", text: "6.75 × 10⁵ J" },
            { value: "C", text: "2 × 10⁵ J" },
            { value: "D", text: "1.25 × 10⁵ J" }
        ],
        correctAnswer: "D"
    },
    {
        id: 2,
        category: "Simple Harmonic Motion",
        question: "A particle is executing SHM along x-axis about origin with amplitude A and time period T. The time taken by the particle in going from x = 0 to x = A/2 will be:",
        options: [
            { value: "A", text: "T/6" },
            { value: "B", text: "T/12" },
            { value: "C", text: "T/4" },
            { value: "D", text: "T/21" }
        ],
        correctAnswer: "B"
    },
    {
        id: 3,
        category: "Work and Energy",
        question: "The natural length of a massless spring is x (spring constant = k). It is slowly stretched by applying an external force. The work done to stretch the spring from length 3x to 4x is:",
        options: [
            { value: "A", text: "1.5kx²" },
            { value: "B", text: "2.5kx²" },
            { value: "C", text: "4kx²" },
            { value: "D", text: "kx²" }
        ],
        correctAnswer: "B"
    },
    {
        id: 4,
        category: "Nuclear Physics",
        question: "When the Incredible Hulk powers up a gamma reactor, each fission of a ₉₂U²³⁵ nucleus releases 250 MeV of energy. To maintain his strength, Hulk needs the reactor to continuously generate 1 MW of power. The number of uranium nuclei that must undergo fission per second is:",
        options: [
            { value: "A", text: "9.2 × 10¹⁷" },
            { value: "B", text: "6.3 × 10²³" },
            { value: "C", text: "1.6 × 10¹⁹" },
            { value: "D", text: "2.5 × 10¹⁶" }
        ],
        correctAnswer: "D"
    },
    {
        id: 5,
        category: "Electrostatics",
        question: "An electron is moving round the nucleus of a hydrogen atom in a circular orbit of radius r. The Coulomb force F on the electron is:",
        options: [
            { value: "A", text: "K e²/r² r̂" },
            { value: "B", text: "-K e²/r² r̂" },
            { value: "C", text: "K e²/r³ r̂" },
            { value: "D", text: "-K e²/r³ r̂" }
        ],
        correctAnswer: "D"
    },
    {
        id: 6,
        category: "Electrostatics",
        question: "Two equal negative charges −q are placed at (0, a) and (0, −a) on the y–axis. A positive charge q is released from (2a, 0). This charge will:",
        options: [
            { value: "A", text: "Execute SHM about the origin" },
            { value: "B", text: "Oscillate but not execute SHM" },
            { value: "C", text: "Move towards origin and become stationary" },
            { value: "D", text: "Execute SHM along y–axis" }
        ],
        correctAnswer: "B"
    },
    {
        id: 7,
        category: "Electricity",
        question: "Eels are able to generate current with biological cells called electroplaques. The electroplaques in an eel are arranged in 100 rows, each row stretching horizontally along the body of the fish containing 5000 electroplaques. Each electroplaques has an emf of 0.15 V and internal resistance of 0.25 Ω. The water surrounding the eel completes a circuit between its head and its tail with resistance of 500 Ω. The current an eel can produce in water is about:",
        options: [
            { value: "A", text: "1.5 A" },
            { value: "B", text: "3 A" },
            { value: "C", text: "15 A" },
            { value: "D", text: "30 A" }
        ],
        correctAnswer: "A"
    },
    {
        id: 8,
        category: "Electromagnetic Waves",
        question: "The sun radiates electromagnetic energy at the rate of 3.9 × 10²⁶ W. Its radius is 6.96 × 10⁸ m. The intensity of sunlight at the solar surface will be (in W/m²):",
        options: [
            { value: "A", text: "1.4 × 10⁴" },
            { value: "B", text: "2.8 × 10⁵" },
            { value: "C", text: "4.2 × 10⁶" },
            { value: "D", text: "6.4 × 10⁷" }
        ],
        correctAnswer: "D"
    },
    {
        id: 9,
        category: "Electromagnetic Waves",
        question: "The oscillating electric and magnetic vectors of an electromagnetic wave are oriented along:",
        options: [
            { value: "A", text: "The same direction but differ in phase by 90°" },
            { value: "B", text: "The same direction and are in phase" },
            { value: "C", text: "Mutually perpendicular directions and are in phase" },
            { value: "D", text: "Mutually perpendicular directions and differ in phase by 90°" }
        ],
        correctAnswer: "C"
    },
    {
        id: 10,
        category: "Electrostatics",
        question: "Two positive point charges 12 µC and 8 µC are 10 cm apart. Work done in bringing them 4 cm closer is:",
        options: [
            { value: "A", text: "1.3 eV" },
            { value: "B", text: "13 J" },
            { value: "C", text: "5.8 J" },
            { value: "D", text: "5.8 eV" }
        ],
        correctAnswer: "C"
    },
    {
        id: 11,
        category: "Electrostatics",
        question: "Three charges Q, +q and +q are placed at the vertices of a right–angled isosceles triangle. The net electrostatic energy of the configuration is zero. Q is equal to:",
        options: [
            { value: "A", text: "-q/(1 + √2)" },
            { value: "B", text: "-2q/(2 + √2)" },
            { value: "C", text: "-2q" },
            { value: "D", text: "+q" }
        ],
        correctAnswer: "B"
    },
    {
        id: 12,
        category: "Electromagnetic Waves",
        question: "Electromagnetic wave cannot be produced by:",
        options: [
            { value: "A", text: "Stationary charge" },
            { value: "B", text: "Uniformly moving charge" },
            { value: "C", text: "Accelerating charge" },
            { value: "D", text: "Both (A) and (B)" }
        ],
        correctAnswer: "D"
    },
    {
        id: 13,
        category: "Nuclear Physics",
        question: "If r₁ and r₂ are the radii of the atomic nuclei of mass numbers 4 and 32 respectively, then the ratio (r₁/r₂) is:",
        options: [
            { value: "A", text: "1 : 2" },
            { value: "B", text: "1 : 3" },
            { value: "C", text: "1 : 4" },
            { value: "D", text: "1 : 5" }
        ],
        correctAnswer: "A"
    },
    {
        id: 14,
        category: "Measurements",
        question: "If L = 2.331 cm and B = 2.1 cm, then L + B = (According to significant figures):",
        options: [
            { value: "A", text: "4.431 cm" },
            { value: "B", text: "4.43 cm" },
            { value: "C", text: "4.4 cm" },
            { value: "D", text: "4 cm" }
        ],
        correctAnswer: "C"
    },
    {
        id: 15,
        category: "Nuclear Physics",
        question: "The mass density of a nucleus of mass number A is:",
        options: [
            { value: "A", text: "Proportional to A^(1/3)" },
            { value: "B", text: "Proportional to A^(2/3)" },
            { value: "C", text: "Proportional to A³" },
            { value: "D", text: "Independent of A" }
        ],
        correctAnswer: "D"
    },
    {
        id: 16,
        category: "Magnetism",
        question: "Magnetic susceptibility of paramagnetic materials is:",
        options: [
            { value: "A", text: "Negative and small" },
            { value: "B", text: "Positive but very high" },
            { value: "C", text: "Positive but very small" },
            { value: "D", text: "Negative but very high" }
        ],
        correctAnswer: "C"
    },
    {
        id: 17,
        category: "Gravitation",
        question: "As we go upwards from the Earth's surface, the value of acceleration due to gravity g:",
        options: [
            { value: "A", text: "Increases" },
            { value: "B", text: "Decreases" },
            { value: "C", text: "Remains constant" },
            { value: "D", text: "First increases and then decreases" }
        ],
        correctAnswer: "B"
    },
    {
        id: 18,
        category: "Atomic Physics",
        question: "In Lyman series, the longest wavelength for hydrogen atom will be (Rₕ = Rydberg constant):",
        options: [
            { value: "A", text: "1/Rₕ" },
            { value: "B", text: "4/(3Rₕ)" },
            { value: "C", text: "36/(5Rₕ)" },
            { value: "D", text: "2/Rₕ" }
        ],
        correctAnswer: "B"
    },
    {
        id: 19,
        category: "Electricity",
        question: "A resistance wire connected in the left gap of a meter bridge balances a 12 Ω resistance in the right gap. This happens at a point where the bridge wire is divided in the ratio 2 : 1. The unknown resistance in left gap is:",
        options: [
            { value: "A", text: "24 Ω" },
            { value: "B", text: "32 Ω" },
            { value: "C", text: "12 Ω" },
            { value: "D", text: "4 Ω" }
        ],
        correctAnswer: "A"
    },
    {
        id: 20,
        category: "Optics",
        question: "In Young's double slit experiment, if the wavelength of light is increased, the fringe width will:",
        options: [
            { value: "A", text: "Decrease" },
            { value: "B", text: "Remain unchanged" },
            { value: "C", text: "Increase" },
            { value: "D", text: "Become zero" }
        ],
        correctAnswer: "C"
    }
];
