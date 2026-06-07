document.addEventListener('DOMContentLoaded', () => {

    // 1. تفعيل الخلفية في الـ About بـ Opacity 30%
    VANTA.NET({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        color: 0xFF017F,
        backgroundColor: 0x000000,
        points: 12.00,
        maxDistance: 22.00,
        spacing: 18.00
    });

    // 2. تحديث الناف بار مع السكرول (اللون البنفسجي للبروجكت)
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            const sectionTop = sec.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = sec.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });

        if (current === 'project') {
            document.body.classList.add('project-active');
        } else {
            document.body.classList.remove('project-active');
        }
    });

    // 3. أنيميشن الـ Typewriter
    const typingElement = document.getElementById("typingText");
    const textToType = "I'm a graphic designer passionate about creating interactive visual experiences, combining UI/UX design with motion graphics to craft simple yet impactful creative solutions. I love transforming ideas into seamless and visually appealing user interfaces and experiences.";
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < textToType.length) {
            typingElement.innerHTML += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 35); 
        }
    }
    setTimeout(typeWriter, 1000); 

    // 4. أنيميشن الكروت (GSAP ScrollTrigger)
    gsap.registerPlugin(ScrollTrigger);

    let cards = gsap.utils.toArray(".project-card");
    gsap.set(cards, { y: window.innerHeight }); 
    gsap.set(cards[0], { y: 0 }); 

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".projects-section",
            start: "top top", 
            end: "+=300%",    
            pin: true,        
            scrub: 1,         
        }
    });

    cards.forEach((card, i) => {
        if (i === 0) return; 
        tl.to(card, { y: 0, duration: 1 }) 
          .to(cards.slice(0, i), { scale: "-=0.05", y: "-=15", duration: 1 }, "<"); 
    });

    // أنيميشن ظهور البقع واحدة تلو الأخرى مع السكرول
gsap.to(".app-item", {
    scrollTrigger: {
        trigger: ".apps-section",
        start: "top 70%", // يبدأ لما السيكشن يظهر في الشاشة
    },
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.2, // التأخير بين ظهور كل واحدة والتانية
    ease: "back.out(1.7)"
});

});