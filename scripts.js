const matchups = {
    sasuke: ["sakura","hinata","orochimaru","gaara","kakashi"],
    hinata: [],
    gaara: ["hinata", "sakura"],
    orochimaru: ["hinata", "gaara","jiraya"],
    naruto: ["pain", "sakura", "sasuke", "kakashi", "gaara", "jiraya", "hinata"],
    itachi: ["sasuke", "hinata", "gaara", "naruto", "jiraya"],
    hashirama: ["naruto", "sasuke", "hinata", "gaara", "orochimaru", "itachi", "jiraya", "shisui", "pain", "kakashi", "sakura"],
    jiraya: ["sasuke", "hinata", "gaara","kakashi"],
    shisui: ["sasuke", "hinata", "gaara", "orochimaru", "naruto"],
    pain: ["hinata","sakura","jiraya","orochimaru","gaara","itachi","sasuke","kakashi","shisui"],
    kakashi: ["hinata","sakura"],
    sakura: [],
    opponents: ["hashirama", "naruto", "itachi", "jiraya", "shisui", "gaara"]
};

const characterImages = {
    sasuke: "assests/sasuke.jpg",
    hinata: "assests/hinata.jpg",
    gaara: "assests/gaara.jpg",
    orochimaru: "assests/Orochimaru.jpg",
    naruto: "assests/naruto.jpg",
    itachi: "assests/itachi.jpg",
    hashirama: "assests/hashirama.jpg",
    jiraya: "assests/jiraya.jpg",
    shisui: "assests/shisui.webp",
    pain: "assests/pain.jpg",
    kakashi: "assests/kakashi.jpg",
    sakura: "assests/sakura.jpg"
};

const winMessages = {
    sasuke: "私が夢見ているのはもう未来ではなく、過去だけです。",
    hinata: "なると",
    gaara: "血",
    orochimaru: "時間の大局において、あなたは取るに足らない脚注に過ぎない",
    naruto: "まっすぐ自分の言葉は曲げねぇ…。それがオレの忍道だ",
    itachi: "人は悪を、自分が悪であるから選ぶのではありません。ただ、悪を幸福、つまり自分が求める善と勘違いしているだけなのです。",
    hashirama: "忍者の真の価値は、どのように生きるかではなく、どのように死ぬかである",
    jiraya: "Now I suppose it's about time I put down my pen. Oh, right... What should I name the sequel? I wonder... Let's see: The Tale of Naruto Uzumaki. Yes...",
    shisui: "Shisui emerges victorious!",
    pain: "痛み",
    kakashi: "Kakashi triumphs with his skills!",
    sakura: "佐助!"
};

let score = 0;
let matchesWon = 0;
let matchesLost = 0;

function getRandomOpponent() {
    const randomIndex = Math.floor(Math.random() * matchups.opponents.length);
    return matchups.opponents[randomIndex];
}

function checkMatchup(player, opponent) {
    if (player === opponent) {
        return "draw";
    } else if (player === "sasuke" && matchups.sasuke.includes(opponent)) {
        return "sasuke";
    } else if (player === "hinata" && matchups.hinata.includes(opponent)) {
        return "hinata";
    } else if (player === "gaara" && matchups.gaara.includes(opponent)) {
        return "gaara";
    } else if (player === "orochimaru" && matchups.orochimaru.includes(opponent)) {
        return "orochimaru";
    } else if (player === "naruto" && matchups.naruto.includes(opponent)) {
        if (opponent === "jiraya") {
            return "funny";
        } else {
            return "naruto";
        }
    } else if (player === "itachi" && matchups.itachi.includes(opponent)) {
        return "itachi";
    } else if (player === "hashirama" && matchups.hashirama.includes(opponent)) {
        return "hashirama";
    } else if (player === "jiraya" && matchups.jiraya.includes(opponent)) {
        return "jiraya";
    } else if (player === "shisui" && matchups.shisui.includes(opponent)) {
        return "shisui";
    } else if (player === "pain" && matchups.pain.includes(opponent)) {
        return "pain";
    } else if (player === "kakashi" && matchups.kakashi.includes(opponent)) {
        return "kakashi";
    } else if (player === "sakura" && matchups.sakura.includes(opponent)) {
        return "sakura";
    }
    return "lose";
}

document.getElementById("battle-btn").addEventListener("click", function() {
    const playerCharacter = document.getElementById("player-select").value;
    const opponentCharacter = getRandomOpponent();
    
    //document.getElementById("opponent-character").textContent = opponentCharacter;

    const playerImg = document.getElementById("player-img");
    const opponentImg = document.getElementById("opponent-img");

    playerImg.src = characterImages[playerCharacter];
    opponentImg.src = characterImages[opponentCharacter];

    const result = checkMatchup(playerCharacter, opponentCharacter);

    if (result === "sasuke" || result === "hinata" || result === "gaara" || result === "orochimaru" || result === "naruto" || result === "itachi" || result === "hashirama" || result === "jiraya" || result === "shisui" || result === "pain" || result === "kakashi" || result === "sakura") {
        document.getElementById("result").textContent = winMessages[result];
        score++;
        matchesWon++;
    } else if (result === "funny") {
        document.getElementById("result").textContent = "Pervy sage..!!";
    } else {
        document.getElementById("result").textContent = "You Lost!";
        matchesLost++;
    }

    document.getElementById("score-value").textContent = score;
    document.getElementById("matches-won").textContent = matchesWon;
    document.getElementById("matches-lost").textContent = matchesLost;
});

document.getElementById("reset-btn").addEventListener("click", function() {
    score = 0;
    matchesWon = 0;
    matchesLost = 0;
    document.getElementById("score-value").textContent = score;
    document.getElementById("matches-won").textContent = matchesWon;
    document.getElementById("matches-lost").textContent = matchesLost;
}); 