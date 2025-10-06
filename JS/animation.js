// Typing Animatin

const typing = (text, elementId, speed = 30, i = 0) => {
    const el = document.getElementById(elementId);
    if (!el) return;

    if (i < text.length) {
        el.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
        setTimeout(() => typing(text, elementId, speed, i + 1), speed);
    }
}

window.onload = () => {
    typing(
        `Discover thousands of courses from expert
instructors and advance your career with 
practical, hands-on learning.`,
        "hero-pf"
    );

    typing(
        "Explore our comprehensive collection of online courses",
        "all-courses-pf"
    );
};


// // دالة الكتابة
// function typing(text, elementId, speed = 30, i = 0) {
//     const el = document.getElementById(elementId);
//     if (!el) return;

//     if (i < text.length) {
//         el.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
//         setTimeout(() => typing(text, elementId, speed, i + 1), speed);
//     }
// }

// // دالة تفعيل الانيميشن عند الظهور
// function animateOnView(elementId, text) {
//     const el = document.getElementById(elementId);
//     if (!el) return;

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 typing(text, elementId);
//                 observer.unobserve(entry.target); // يوقف المراقبة بعد أول مرة
//             }
//         });
//     }, { threshold: 0.2 }); // يبدأ لما 20% من العنصر يظهر

//     observer.observe(el);
// }

// // مثال استخدام
// animateOnView("hero-pf", `Discover thousands of courses from expert
// instructors and advance your career with
// practical, hands-on learning.`);

// animateOnView("all-courses-pf", "Explore our comprehensive collection of online courses");
