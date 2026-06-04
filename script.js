// แสดงปีปัจจุบันใน Footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// เอฟเฟกต์ Fade In ตอนเลื่อนหน้า
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
});

// ข้อความต้อนรับ
console.log("Welcome to THANACHAI Portfolio");
