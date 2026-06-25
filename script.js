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

});

// ข้อความต้อนรับ
console.log("Welcome to THANACHAI Portfolio");

// โลโก้หมุน

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


// ปีปัจจุบัน
document.getElementById("year").textContent =
new Date().getFullYear();

// เอฟเฟกต์ Fade In
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach((section)=>{
    section.classList.add("fade-in");
    observer.observe(section);
});

console.log("Welcome to THANACHAI Portfolio");

// =====================
// 3D Carousel
// =====================

const CARDS = [
    'url("WIN_20260625_23_01_32_Pro.jpg")',
    'url("WIN_20260625_21_22_18_Pro.jpg")',
    'url("WIN_25690625_09_39_07_Pro.jpg")',
    'url("สัญญาณรบกวน (Noise) ในกระบวนการสื่อสารหมายถึงอะไรบ.png")'
];

const track = document.getElementById("track");

if(track){

    const radius = 350;
    let angle = 0;

    CARDS.forEach((img,index)=>{

        const card = document.createElement("div");

        card.className = "card";
        card.style.backgroundImage = img;

        track.appendChild(card);
    });

    const cards = document.querySelectorAll(".card");

    function animate(){

        angle += 0.3;

        cards.forEach((card,index)=>{

            const theta =
            (360/cards.length)*index + angle;

            const rad =
            theta * Math.PI / 180;

            const x =
            Math.sin(rad) * radius;

            const z =
            Math.cos(rad) * radius;

            const scale =
            (z + radius) / (radius * 2);

            card.style.left =
            `calc(50% + ${x}px - 90px)`;

            card.style.transform =
            `translateY(-50%) scale(${0.5 + scale})`;

            card.style.zIndex =
            Math.floor(scale * 100);

            card.style.opacity =
            0.3 + scale;
        });

        requestAnimationFrame(animate);
    }

    animate();
}
