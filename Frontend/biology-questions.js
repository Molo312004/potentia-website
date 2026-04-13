// All 50 Biology Questions (Botany & Zoology) from NEET Practice Paper
const biologyQuestions = [
    {
        id: 1,
        question: "Which of the following is the correct sequence of events during meiosis I?",
        category: "Botany - Cell Division",
        options: [
            { text: "Leptotene - Zygotene - Diplotene - Pachytene - Diakinesis", value: "A" },
            { text: "Leptotene - Zygotene - Pachytene - Diplotene - Diakinesis", value: "B" },
            { text: "Zygotene - Leptotene - Pachytene - Diplotene - Diakinesis", value: "C" },
            { text: "Leptotene - Pachytene - Zygotene - Diplotene - Diakinesis", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 2,
        question: "In which of the following plants is the stem modified into a flattened, leaf-like structure called phylloclad?",
        category: "Botany - Morphology",
        options: [
            { text: "Opuntia", value: "A" },
            { text: "Asparagus", value: "B" },
            { text: "Ruscus", value: "C" },
            { text: "Euphorbia", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 3,
        question: "The process by which glucose is oxidised to pyruvate in the cytoplasm is called:",
        category: "Botany - Respiration",
        options: [
            { text: "Glycolysis", value: "A" },
            { text: "Krebs cycle", value: "B" },
            { text: "Oxidative phosphorylation", value: "C" },
            { text: "Beta-oxidation", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 4,
        question: "Which organelle is called the 'powerhouse of the cell' and has its own circular DNA?",
        category: "Botany - Cell Biology",
        options: [
            { text: "Nucleus", value: "A" },
            { text: "Chloroplast", value: "B" },
            { text: "Ribosome", value: "C" },
            { text: "Mitochondria", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 5,
        question: "Cycas belongs to which division of the plant kingdom?",
        category: "Botany - Plant Kingdom",
        options: [
            { text: "Bryophyta", value: "A" },
            { text: "Gymnospermae", value: "B" },
            { text: "Angiospermae", value: "C" },
            { text: "Pteridophyta", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 6,
        question: "Which pigment absorbs light most efficiently at wavelengths of 430 nm and 680 nm during photosynthesis?",
        category: "Botany - Photosynthesis",
        options: [
            { text: "Chlorophyll b", value: "A" },
            { text: "Xanthophyll", value: "B" },
            { text: "Chlorophyll a", value: "C" },
            { text: "Carotene", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 7,
        question: "The 'fluid mosaic model' of cell membrane was proposed by:",
        category: "Botany - Cell Biology",
        options: [
            { text: "Singer and Nicolson", value: "A" },
            { text: "Watson and Crick", value: "B" },
            { text: "Schleiden and Schwann", value: "C" },
            { text: "Davson and Danielli", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 8,
        question: "Which of the following is a characteristic of C4 plants?",
        category: "Botany - Photosynthesis",
        options: [
            { text: "First stable product is 3-PGA", value: "A" },
            { text: "High CO2 compensation point", value: "B" },
            { text: "Absence of bundle sheath cells", value: "C" },
            { text: "Kranz anatomy is present", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 9,
        question: "In angiosperms, double fertilisation involves:",
        category: "Botany - Reproduction",
        options: [
            { text: "One sperm fuses with egg, another with antipodals", value: "A" },
            { text: "One sperm fuses with egg, another with polar nuclei", value: "B" },
            { text: "Both sperms fuse with polar nuclei", value: "C" },
            { text: "One sperm fuses with synergid, another with egg", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 10,
        question: "Which enzyme is responsible for the formation of phosphodiester bonds during DNA replication?",
        category: "Botany - Molecular Biology",
        options: [
            { text: "DNA helicase", value: "A" },
            { text: "DNA primase", value: "B" },
            { text: "DNA polymerase III", value: "C" },
            { text: "Topoisomerase", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 11,
        question: "Vernalisation is the requirement of __________ for flowering in plants.",
        category: "Botany - Plant Physiology",
        options: [
            { text: "Low temperature treatment", value: "A" },
            { text: "High temperature treatment", value: "B" },
            { text: "Short photoperiod", value: "C" },
            { text: "Long photoperiod", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 12,
        question: "Which of the following is NOT a function of auxin (IAA)?",
        category: "Botany - Plant Hormones",
        options: [
            { text: "Apical dominance", value: "A" },
            { text: "Cell elongation", value: "B" },
            { text: "Root initiation", value: "C" },
            { text: "Stomatal closure", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 13,
        question: "The number of ATP molecules produced by complete oxidation of one glucose molecule through aerobic respiration is:",
        category: "Botany - Respiration",
        options: [
            { text: "36 ATP", value: "A" },
            { text: "38 ATP", value: "B" },
            { text: "30 ATP", value: "C" },
            { text: "32 ATP", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 14,
        question: "Casparian strips are found in:",
        category: "Botany - Plant Anatomy",
        options: [
            { text: "Epidermis", value: "A" },
            { text: "Cortex", value: "B" },
            { text: "Endodermis", value: "C" },
            { text: "Pericycle", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 15,
        question: "The law of independent assortment does NOT hold when the two genes are:",
        category: "Botany - Genetics",
        options: [
            { text: "Linked on the same chromosome", value: "A" },
            { text: "Located on different chromosomes", value: "B" },
            { text: "Both dominant", value: "C" },
            { text: "Showing codominance", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 16,
        question: "Which of the following is a free-living, nitrogen-fixing bacterium found in soil?",
        category: "Botany - Ecology",
        options: [
            { text: "Rhizobium", value: "A" },
            { text: "Nitrosomonas", value: "B" },
            { text: "Pseudomonas", value: "C" },
            { text: "Azotobacter", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 17,
        question: "The primary acceptor of CO2 in C3 plants is:",
        category: "Botany - Photosynthesis",
        options: [
            { text: "OAA (Oxaloacetic acid)", value: "A" },
            { text: "RuBP (Ribulose bisphosphate)", value: "B" },
            { text: "PEP (Phosphoenolpyruvate)", value: "C" },
            { text: "Pyruvate", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 18,
        question: "Which statement about the cohesion-tension theory of ascent of sap is CORRECT?",
        category: "Botany - Plant Physiology",
        options: [
            { text: "It involves active transport through phloem", value: "A" },
            { text: "Root pressure alone drives water to the top", value: "B" },
            { text: "Transpiration pull creates tension in xylem column", value: "C" },
            { text: "It was proposed by Munch", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 19,
        question: "Which of the following is an example of a plant with epipetalous stamens?",
        category: "Botany - Morphology",
        options: [
            { text: "Brinjal (Solanum melongena)", value: "A" },
            { text: "China rose (Hibiscus rosa-sinensis)", value: "B" },
            { text: "Pea (Pisum sativum)", value: "C" },
            { text: "Lotus (Nelumbo nucifera)", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 20,
        question: "Geitonogamy is:",
        category: "Botany - Reproduction",
        options: [
            { text: "Transfer of pollen from one plant to another plant", value: "A" },
            { text: "Transfer of pollen within the same flower", value: "B" },
            { text: "Pollination by insects", value: "C" },
            { text: "Transfer of pollen between different flowers of the same plant", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 21,
        question: "The technique of PCR (Polymerase Chain Reaction) was developed by:",
        category: "Botany - Biotechnology",
        options: [
            { text: "Stanley Cohen", value: "A" },
            { text: "Kary Mullis", value: "B" },
            { text: "Herbert Boyer", value: "C" },
            { text: "Frederick Sanger", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 22,
        question: "Which hormone promotes dormancy in seeds and causes wilting of leaves?",
        category: "Botany - Plant Hormones",
        options: [
            { text: "Gibberellin", value: "A" },
            { text: "Cytokinin", value: "B" },
            { text: "Abscisic Acid (ABA)", value: "C" },
            { text: "Ethylene", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 23,
        question: "In a typical dicot root, the vascular bundles are:",
        category: "Botany - Plant Anatomy",
        options: [
            { text: "Radial and exarch xylem", value: "A" },
            { text: "Collateral and endarch xylem", value: "B" },
            { text: "Bicollateral and mesarch xylem", value: "C" },
            { text: "Conjoint and endarch xylem", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 24,
        question: "Hardy-Weinberg principle states that allele frequency in a population remains constant if:",
        category: "Botany - Evolution",
        options: [
            { text: "Natural selection is acting", value: "A" },
            { text: "Genetic drift is occurring", value: "B" },
            { text: "Migration is happening", value: "C" },
            { text: "Random mating, no selection, no mutation, no migration", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 25,
        question: "Which is the CORRECT ploidy level of endosperm in a typical angiosperm?",
        category: "Botany - Reproduction",
        options: [
            { text: "Diploid (2n)", value: "A" },
            { text: "Triploid (3n)", value: "B" },
            { text: "Haploid (n)", value: "C" },
            { text: "Tetraploid (4n)", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 26,
        question: "Which of the following is an acoelomate organism?",
        category: "Zoology - Animal Kingdom",
        options: [
            { text: "Earthworm", value: "A" },
            { text: "Roundworm", value: "B" },
            { text: "Planaria", value: "C" },
            { text: "Starfish", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 27,
        question: "The sliding filament theory of muscle contraction involves movement of:",
        category: "Zoology - Locomotion",
        options: [
            { text: "Actin filaments over myosin", value: "A" },
            { text: "Myosin filaments over actin", value: "B" },
            { text: "Z-line towards M-line", value: "C" },
            { text: "H-zone expanding during contraction", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 28,
        question: "The pacemaker of the human heart is:",
        category: "Zoology - Circulation",
        options: [
            { text: "AV node", value: "A" },
            { text: "Bundle of His", value: "B" },
            { text: "Purkinje fibres", value: "C" },
            { text: "SA node", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 29,
        question: "Haemoglobin is a:",
        category: "Zoology - Biomolecules",
        options: [
            { text: "Monomeric protein with one haem group", value: "A" },
            { text: "Tetrameric protein with four haem groups", value: "B" },
            { text: "Dimeric protein with two haem groups", value: "C" },
            { text: "Trimeric protein with three haem groups", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 30,
        question: "In the human kidney, ultrafiltration takes place in the:",
        category: "Zoology - Excretion",
        options: [
            { text: "Loop of Henle", value: "A" },
            { text: "Proximal convoluted tubule", value: "B" },
            { text: "Malpighian corpuscle (Bowman's capsule)", value: "C" },
            { text: "Collecting duct", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 31,
        question: "Which hormone is secreted by beta-cells of Islets of Langerhans?",
        category: "Zoology - Chemical Coordination",
        options: [
            { text: "Insulin", value: "A" },
            { text: "Glucagon", value: "B" },
            { text: "Somatostatin", value: "C" },
            { text: "Gastrin", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 32,
        question: "The resting membrane potential of a neuron is approximately:",
        category: "Zoology - Neural Control",
        options: [
            { text: "+70 mV", value: "A" },
            { text: "-40 mV", value: "B" },
            { text: "+40 mV", value: "C" },
            { text: "-70 mV", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 33,
        question: "Which blood group is called 'Universal Donor' and 'Universal Recipient' respectively?",
        category: "Zoology - Body Fluids",
        options: [
            { text: "AB and O", value: "A" },
            { text: "O and AB", value: "B" },
            { text: "A and B", value: "C" },
            { text: "B and A", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 34,
        question: "Spermatogenesis occurs in the:",
        category: "Zoology - Reproduction",
        options: [
            { text: "Epididymis", value: "A" },
            { text: "Rete testis", value: "B" },
            { text: "Seminiferous tubules", value: "C" },
            { text: "Vas deferens", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 35,
        question: "Which of the following is the CORRECT match of the digestive enzyme and its substrate?",
        category: "Zoology - Digestion",
        options: [
            { text: "Lipase - Fats", value: "A" },
            { text: "Amylase - Proteins", value: "B" },
            { text: "Trypsin - Lipids", value: "C" },
            { text: "Pepsin - Carbohydrates", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 36,
        question: "The functional unit of a kidney is:",
        category: "Zoology - Excretion",
        options: [
            { text: "Glomerulus", value: "A" },
            { text: "Bowman's capsule", value: "B" },
            { text: "Collecting duct", value: "C" },
            { text: "Nephron", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 37,
        question: "Transcription in eukaryotes takes place in the:",
        category: "Zoology - Molecular Biology",
        options: [
            { text: "Cytoplasm", value: "A" },
            { text: "Nucleus", value: "B" },
            { text: "Mitochondria only", value: "C" },
            { text: "Ribosome", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 38,
        question: "Which type of immunity involves T-lymphocytes and is cell-mediated?",
        category: "Zoology - Human Health",
        options: [
            { text: "Humoral immunity", value: "A" },
            { text: "Passive immunity", value: "B" },
            { text: "Cell-mediated immunity (CMI)", value: "C" },
            { text: "Innate immunity", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 39,
        question: "During oogenesis, which stage is present at birth in the human female?",
        category: "Zoology - Reproduction",
        options: [
            { text: "Primary oocyte arrested at prophase I", value: "A" },
            { text: "Secondary oocyte at metaphase II", value: "B" },
            { text: "Oogonia undergoing mitosis", value: "C" },
            { text: "Mature ovum", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 40,
        question: "Rohu (Labeo rohita) belongs to which class of vertebrates?",
        category: "Zoology - Animal Kingdom",
        options: [
            { text: "Amphibia", value: "A" },
            { text: "Cyclostomata", value: "B" },
            { text: "Chondrichthyes", value: "C" },
            { text: "Osteichthyes", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 41,
        question: "Which of the following is the 'master gland' of the endocrine system?",
        category: "Zoology - Chemical Coordination",
        options: [
            { text: "Thyroid", value: "A" },
            { text: "Anterior pituitary", value: "B" },
            { text: "Hypothalamus", value: "C" },
            { text: "Adrenal gland", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 42,
        question: "Which of the following sexually transmitted infections (STIs) is caused by a virus?",
        category: "Zoology - Human Health",
        options: [
            { text: "Gonorrhoea", value: "A" },
            { text: "Syphilis", value: "B" },
            { text: "Genital herpes", value: "C" },
            { text: "Chlamydiasis", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 43,
        question: "The one gene-one enzyme hypothesis was proposed by:",
        category: "Zoology - Genetics",
        options: [
            { text: "Beadle and Tatum", value: "A" },
            { text: "Morgan and Bridges", value: "B" },
            { text: "Watson and Crick", value: "C" },
            { text: "Garrod and Bateson", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 44,
        question: "Which part of the brain controls body temperature, hunger, and thirst?",
        category: "Zoology - Neural Control",
        options: [
            { text: "Cerebrum", value: "A" },
            { text: "Cerebellum", value: "B" },
            { text: "Medulla oblongata", value: "C" },
            { text: "Hypothalamus", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 45,
        question: "In Down's syndrome, the karyotype is:",
        category: "Zoology - Genetics",
        options: [
            { text: "45 chromosomes (monosomy 21)", value: "A" },
            { text: "47 chromosomes with trisomy 21", value: "B" },
            { text: "47 chromosomes with XXY", value: "C" },
            { text: "45 chromosomes with XO", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 46,
        question: "Which type of ecological pyramid is always upright and can never be inverted?",
        category: "Zoology - Ecology",
        options: [
            { text: "Pyramid of biomass", value: "A" },
            { text: "Pyramid of numbers", value: "B" },
            { text: "Pyramid of energy", value: "C" },
            { text: "Both A and B", value: "D" }
        ],
        correctAnswer: "C"
    },
    {
        id: 47,
        question: "In which phase of the cell cycle does DNA replication occur?",
        category: "Zoology - Cell Division",
        options: [
            { text: "S phase", value: "A" },
            { text: "G1 phase", value: "B" },
            { text: "G2 phase", value: "C" },
            { text: "M phase", value: "D" }
        ],
        correctAnswer: "A"
    },
    {
        id: 48,
        question: "Which of the following is a 'test cross'?",
        category: "Zoology - Genetics",
        options: [
            { text: "Crossing two F1 individuals", value: "A" },
            { text: "Crossing two homozygous dominant plants", value: "B" },
            { text: "Crossing F1 with homozygous dominant", value: "C" },
            { text: "Crossing F1 with homozygous recessive", value: "D" }
        ],
        correctAnswer: "D"
    },
    {
        id: 49,
        question: "Insulin is composed of:",
        category: "Zoology - Chemical Coordination",
        options: [
            { text: "One polypeptide chain with 21 amino acids", value: "A" },
            { text: "Two polypeptide chains A (21 AA) and B (30 AA) linked by disulfide bonds", value: "B" },
            { text: "Three polypeptide chains linked by hydrogen bonds", value: "C" },
            { text: "A single chain of 51 amino acids with no disulfide bonds", value: "D" }
        ],
        correctAnswer: "B"
    },
    {
        id: 50,
        question: "Which of the following biomes has the HIGHEST biodiversity?",
        category: "Zoology - Ecology",
        options: [
            { text: "Temperate deciduous forest", value: "A" },
            { text: "Tundra", value: "B" },
            { text: "Tropical rainforest", value: "C" },
            { text: "Grassland", value: "D" }
        ],
        correctAnswer: "C"
    }
];
