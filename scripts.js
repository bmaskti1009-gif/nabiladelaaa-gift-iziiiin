let tahap = 1;
const mainText = document.getElementById("main-text");
const subText = document.getElementById("sub-text");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgGif = document.getElementById("background-gif");
const music = document.getElementById("bgMusic");

// Fungsi navigasi manual
window.tahapBerikutnya = function() {
    // Putar musik saat klik pertama
    if (music && music.paused) {
        music.play().catch(e => console.log("Musik butuh interaksi"));
    }

    tahap++;

    if (tahap === 2) {
        mainText.innerHTML = "Sebenernya lumayan susah si buat luluhin hati seorang nabila dela satu ini";
        subText.innerHTML = "Gue rasa gue mau ajak lu jalan atau sekedar ngopi lucu kalcer aja si";
        nextBtn.innerHTML = "Terus? ";
    } 
    else if (tahap === 3) {
        bgGif.style.backgroundImage = "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4&ep=v1_gifs_search&rid=giphy.gif&ct=g')";
        mainText.innerHTML = "Berhubung bentar lagi valentine, dan itu bukan budaya kita, mau ga fresh flower nya di ganti jadi fresh kangkung?";
        subText.innerHTML = "Lu mau nggak jalan bareng sabtu nanti? atau sekedar ngopi lucu gitu";
        nextBtn.style.display = "none";
        yesBtn.style.display = "inline-block";
        noBtn.style.display = "inline-block";
    }
};

// Tombol Enggak Kabur
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Tombol Mau
yesBtn.addEventListener("click", () => {
    bgGif.style.backgroundImage = "url('https://media.giphy.com/media/Y39pGbofrbvN9TzcDC/giphy.gif')";
    mainText.innerHTML = "Yeeayy! 😍";
    subText.innerHTML = "Terimakasih, Silahkan Tinggalkan Pesan";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.className = "heart-fall";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-5vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

