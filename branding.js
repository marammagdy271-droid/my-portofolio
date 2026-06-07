// ... (الكود السابق الخاص بـ brand-identity و brochure)

VANTA.NET({
    el: "#flyer", // هذا هو السطر الذي يربط الخلفية بالسيكشن
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.60, 
    scaleMobile: 1.00,
    color: 0xff017f,
    backgroundColor: 0x000000, // خلفية سوداء للسيكشن
    points: 12.00,
    maxDistance: 25.00,
    spacing: 18.00
});
// عند الضغط على card2 ينقلنا لسيكشن البوستر
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        let targetId = card.getAttribute('data-target');
        if (targetId === "#poster") {
            document.querySelector(targetId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
});