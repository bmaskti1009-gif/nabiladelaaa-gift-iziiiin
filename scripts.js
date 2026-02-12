let tahap = 1;
const mainText = document.getElementById("main-text");
const subText = document.getElementById("sub-text");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgGif = document.getElementById("background-gif");
const music = document.getElementById("bgMusic");

// Fungsi Tombol Lanjut
window.tahapBerikutnya = function() {
    // Putar musik saat klik pertama
    if (music && music.paused) {
        music.play().catch(e => console.log("Audio play blocked"));
    }

    tahap++;

    if (tahap === 2) {
        mainText.innerHTML = "Sebenarnya kak, gue mau ngajak lu jalan atau ngopi lucu ajaa nanti hari sabtu kalo lu mau";
        subText.innerHTML = "Soalnya hati lu susah banget di luluhin dan gue rasa gue punya sesuatu buat luluhin hati lu";
        nextBtn.innerHTML = "apaa?";
    } 
    else if (tahap === 3) {
        // GIF Pertanyaan Utama
        bgGif.style.backgroundImage = "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4eXp4&ep=v1_gifs_search&rid=giphy.gif&ct=g')";
        
        mainText.innerHTML = "karena nanti hari sabtu valentine, dan valentine itu bukan budaya kita?";
        subText.innerHTML = "gimana klo nnti ga gue kasih fresh flower? gantinya fresh kangkung lumayan kak buat dimakan enak mehehehe";
        
        nextBtn.style.display = "none";
        yesBtn.style.display = "inline-block";
        noBtn.style.display = "inline-block";
    }
}

// Tombol Enggak Kabur
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Tombol Mau Diklik
yesBtn.addEventListener("click", () => {
    // GANTI KE GIF KUCING DANCE PILIHANMU
    bgGif.style.backgroundImage = "url('https://media.giphy.com/media/Y39pGbofrbvN9TzcDC/giphy.gif')";
    
    mainText.innerHTML = "Yeeayy! 😍";
    subText.innerHTML = "Terimakasih telah membaca silahkan tinggalkan pesan di DM";
    
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
