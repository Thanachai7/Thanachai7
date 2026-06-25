// แสดงปีปัจจุบันใน Footer
document.getElementById("year").textContent = new Date().getFullYear();

// เอฟเฟกต์ Fade In ตอนเลื่อนหน้า
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
}, {
threshold: 0.2
});

sections.forEach((section) => {
section.classList.add("fade-in");
observer.observe(section);
});

// ข้อความต้อนรับ
console.log("Welcome to THANACHAI Portfolio");

// โลโก้หมุน
const logo = document.getElementById("spin-logo");

if (logo) {
let angle = 0;

```
function rotateLogo() {
    angle += 2;
    logo.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotateLogo);
}

rotateLogo();
```

}

// =====================================
// รูป Carousel 3D
// =====================================

const CARDS = [
'url("cat.jpg")',
'url("m1.jpg")',
'url("cat2.png")',
'url("cat3.jpg")',
'url("cat4.jpg")'
];

const CARD_W = 160;
const GAP = 30;
const SPEED = 0.7;
const TILT = 50;

const track = document.getElementById("track");

if (track) {

```
const N = CARDS.length;
const STEP = CARD_W + GAP;
const totalW = N * STEP;

const scene = track.parentElement;

const REPEATS = Math.max(
    3,
    Math.ceil((window.innerWidth * 2.5) / totalW) + 1
);

for (let rep = 0; rep < REPEATS; rep++) {
    CARDS.forEach(bg => {
        const card = document.createElement("div");

        card.className = "card";
        card.style.background = bg;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";

        track.appendChild(card);
    });
}

const allCards = [...track.children];
let offset = 0;

function updateCarousel() {

    offset = (offset + SPEED) % totalW;

    const cw = scene.getBoundingClientRect().width;

    allCards.forEach((card, idx) => {

        const i = idx % N;
        const rep = Math.floor(idx / N);

        const baseX =
            i * STEP +
            rep * totalW -
            offset -
            (totalW * Math.floor(REPEATS / 2));

        const norm = (baseX + CARD_W / 2) / (cw * 0.45);
        const absN = Math.abs(norm);

        if (absN > 2.6) {
            card.style.opacity = 0;
            return;
        }

        const scale = Math.max(0.35, 1 - absN * 0.55);
        const rotY = norm * TILT;

        card.style.transform =
            `translateX(${baseX - CARD_W / 2}px)
             translateY(-50%)
             perspective(900px)
             rotateY(${rotY}deg)
             scale(${scale})`;

        card.style.opacity = Math.max(0, 1 - absN * 0.62);
        card.style.zIndex = Math.round((1 - absN) * 20);
    });

    requestAnimationFrame(updateCarousel);
}

updateCarousel();
```

}
