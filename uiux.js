document.addEventListener("DOMContentLoaded", function() {
    
    // 1. تفعيل الخلفية للسيكشن الأول (UI/UX Profile)
    VANTA.NET({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff017f,
        backgroundColor: 0x0a050f,
        points: 12.00,
        maxDistance: 22.00,
        spacing: 17.00
    });

    // 2. تفعيل الخلفية لسيكشن المشاريع (Projects)
    VANTA.NET({
        el: "#vanta-background-projects",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff017f,
        backgroundColor: 0x0a050f,
        points: 10.00,
        maxDistance: 20.00,
        spacing: 15.00
    });

    // 3. ضبط الحركة (Animation)
    gsap.registerPlugin(ScrollTrigger);

    // نقوم بإخفاء الكروت برمجياً في البداية لضمان أن الـ GSAP هو من يتحكم في ظهورها
    gsap.set(".project-card", { opacity: 0, y: 50 });

    // الحركة عند السكرول
    gsap.to(".project-card", {
        opacity: 1,       // ستظهر الكروت (Fade in)
        y: 0,             // ستستقر في مكانها (Move up)
        duration: 0.8,
        stagger: 0.2,     // تأخير بسيط بين ظهور كل كارت والآخر
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".projects-container", // السكشن المستهدف
            start: "top 80%",               // تبدأ الحركة عند وصول السكشن لـ 80% من الشاشة
            toggleActions: "play none none none"
        }
    });
});