let tahap = 1;
const mainText = document.getElementById("main-text");
const subText = document.getElementById("sub-text");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgGif = document.getElementById("background-gif");
const music = document.getElementById("bgMusic");

// Fungsi Alur Manual (Klik baru Ganti)
function tahapBerikutnya() {
    // Putar musik pada klik pertama
    if (music.paused) music.play().catch(e => console.log("Audio play blocked"));

    tahap++;

    if (tahap === 2) {
        mainText.innerHTML = "Sebenarnya kak, karna hati lu susah diluluhin";
        subText.innerHTML = "Gue rasa gue punya sesuatu buat luluhin hati lu";
        nextBtn.innerHTML = "Apaa? ";
    } 
    else if (tahap === 3) {
        // Ganti ke GIF Pertanyaan
        bgGif.style.backgroundImage = "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4&ep=v1_gifs_search&rid=giphy.gif&ct=g')";
        
        mainText.innerHTML = "karna valentine bukan budaya kita";
        subText.innerHTML = "gimana kalo elu ga gue kasih fresh flower, tapi fresh kangkung??lumayan buat masak abis itu dimakan";
        
        nextBtn.style.display = "none";
        yesBtn.style.display = "inline-block";
        noBtn.style.display = "inline-block";
    }
}

// Logika Tombol Enggak Kabur
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Logika Tombol Mau
yesBtn.addEventListener("click", () => {
    // Ganti ke GIF Kucing Dance Pilihanmu
    bgGif.style.backgroundImage = "url('https://media.giphy.com/media/Y39pGbofrbvN9TzcDC/giphy.gif')";
    
    mainText.innerHTML = "Yeeayy! 😍";
    subText.innerHTML = "Terimakasi sudah membuka pesan ini silahkan tinggalkan pesan di DM";
    
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.className = "heart-fall";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}