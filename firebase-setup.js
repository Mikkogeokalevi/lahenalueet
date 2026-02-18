// firebase-setup.js - Skripti datan siirtämiseen Firebaseen

// Firebase konfiguraatio
const firebaseConfig = {
  apiKey: "AIzaSyCaLtaT4J4qFBxEE0bxK8_1yyQDbcwwWfs",
  authDomain: "lahenalueet.firebaseapp.com",
  projectId: "lahenalueet",
  storageBucket: "lahenalueet.firebasestorage.app",
  messagingSenderId: "237550096622",
  appId: "1:237550096622:web:4d403d5c40ebf356dea3ff"
};

// Import Firebase SDK (tarvitaan npm tai CDN)
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, doc, setBatch } from "firebase/firestore";

// Alkuperäinen data puzzle_data.js tiedostosta
const puzzleData = {
    initialPrompt: "Kirjoita salasana",
    wrongInputMessage: "Väärin meni! Palataan takaisin alkuun.",
    finalFailMessage: "Liian monta väärää yritystä!",
    maxWrongAttempts: 3,
    steps: [
        {
            stepNumber: 0,
            expectedInput: "salasana",
            responseMessage: "Oikein! Tässä ensimmäinen kuva-arvoitus:",
            challengeText: null,
            challengeImage: null,
            maxWrongAttempts: 3
        },
        {
            stepNumber: 1,
            expectedInput: "Jalkaranta",
            responseMessage: "Hienoa! Jatka seuraavaan:",
            challengeText: "Kirjoita kuvasta selviävä kaupunginosa:",
            challengeImage: "jalkaranta.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 2,
            expectedInput: "Ämmälä",
            responseMessage: "Hyvin menee! Tässä seuraava:",
            challengeText: "Mikä kaupunginosa kuvassa on:",
            challengeImage: "ammala.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 3,
            expectedInput: "Kottero",
            responseMessage: "Loistavaa! Seuraava odottaa:",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "kottero.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 4,
            expectedInput: "kukonkoivu",
            responseMessage: "Melkein perillä! Tässä vielä ainakin yksi:",
            challengeText: "Mistä päin kaupunkia tämä kuva on:",
            challengeImage: "kukonkoivu.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 5,
            expectedInput: "Radiomäki",
            responseMessage: "Hienoa!",
            challengeText: "Kaupunginosa kuvassa:",
            challengeImage: "radiomaki.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 6,
            expectedInput: "Jokimaa",
            responseMessage: "Jatka samaan malliin!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "jokimaa.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 7,
            expectedInput: "Karjusaari",
            responseMessage: "Se alkaa olla hallussa!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "karjusaari.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 8,
            expectedInput: "keijupuisto",
            responseMessage: "Loistavaa!",
            challengeText: "Tämä kaupunginosa on:",
            challengeImage: "keijupuisto.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 9,
            expectedInput: "leponiemi",
            responseMessage: "Hyvä! ",
            challengeText: "Kaupunginosa?:",
            challengeImage: "leponiemi.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 10,
            expectedInput: "metsäkangas",
            responseMessage: "Puolivälikö häämöttää vai montako näitä on! ",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "metsakangas.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 11,
            expectedInput: "patoniitty",
            responseMessage: "Et ole yksin!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "patoniitty.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 12,
            expectedInput: "kolava",
            responseMessage: "Hyvin vedetty!",
            challengeText: "missä kaupunginosassa olla tässä:",
            challengeImage: "kolava.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 13,
            expectedInput: "koivukumpu",
            responseMessage: "Mahtavaa! ",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "koivukumpu.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 14,
            expectedInput: "venetsia",
            responseMessage: "Vielä jaksaa! ",
            challengeText: "Missä olemme tässä:",
            challengeImage: "venetsia.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 15,
            expectedInput: "sydänkangas",
            responseMessage: "Kohta valmis! ehkä?",
            challengeText: "Tämäkin kaupunginosa tarvitaan jotta pääsee eteenpäin:",
            challengeImage: "sydankangas.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 16,
            expectedInput: "pesäkallio",
            responseMessage: "Enää muutamia! ",
            challengeText: "Kaupunginosa:",
            challengeImage: "pesakallio.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 17,
            expectedInput: "vartiolaakso",
            responseMessage: "Melkein perillä!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "vartiolaakso.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 18,
            expectedInput: "kukonkoski",
            responseMessage: "Viimeiset vedot! ",
            challengeText: "Missä kaupungiosassa olla tässä:",
            challengeImage: "kukonkoski.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 19,
            expectedInput: "myllypohja",
            responseMessage: "Viimeinen kuva-arvoitus kohta?!",
            challengeText: "Kaupunginosa :",
            challengeImage: "myllypohja.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 20,
            expectedInput: "kuusiniitty",
            responseMessage: "Joko tämä jo olis tässä?",
            challengeText: "Kaupunginosa:",
            challengeImage: "kuusiniitty.jpg",
            maxWrongAttempts: 3
        },
        {
            stepNumber: 21,
            expectedInput: "Mikkokalevi",
            responseMessage: "Erinomaista työtä! Olet ratkaissut kaikki kuvat ja loppu kysymyksen! Kirjoita chekkeriin \"geokätköilijä on nero\".",
            challengeText: "Onneksi olkoon, kaikki tehtävät suoritettu! Kirjoita vielä että kenen mysteeri tämä saadaksesi vastauksen chekkerille!",
            challengeImage: null,
            maxWrongAttempts: 3
        }
    ]
};

// Funktio datan siirtämiseen Firebaseen
async function migrateToFirebase() {
    try {
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        console.log("Aloitetaan datan siirto Firebaseen...");

        // Luo gameConfig dokumentti
        const gameConfigRef = doc(db, 'puzzles', 'gameConfig');
        await setDoc(gameConfigRef, {
            initialPrompt: puzzleData.initialPrompt,
            wrongInputMessage: puzzleData.wrongInputMessage,
            finalFailMessage: puzzleData.finalFailMessage,
            maxWrongAttempts: puzzleData.maxWrongAttempts
        });
        console.log("✅ gameConfig luotu");

        // Luo kaikki vaiheet batch-operaatiolla
        const batch = writeBatch(db);
        
        puzzleData.steps.forEach((step) => {
            const stepRef = doc(db, 'puzzles', 'steps', `step_${step.stepNumber}`);
            batch.set(stepRef, step);
        });

        await batch.commit();
        console.log("✅ Kaikki vaiheet siirretty Firebaseen");
        console.log(`🎉 Siirto valmis! ${puzzleData.steps.length} vaihetta siirretty.`);

    } catch (error) {
        console.error("❌ Virhe datan siirrossa:", error);
    }
}

// Suorita siirto
// migrateToFirebase();

// Ohjeet:
// 1. Asenna Firebase SDK: npm install firebase
// 2. Tuo skripti HTML-sivulle tai suorita Node.js:ssä
// 3. Poista kommentti migrateToFirebase() kutsusta
// 4. Suorita skripti

export { migrateToFirebase, puzzleData };
