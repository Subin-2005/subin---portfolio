/* ==========================================================================
   PORTFOLIO MODERN GSAP ANIMATIONS ENGINE
   - GSAP 3 & ScrollTrigger Staggered Entrances
   - GSAP Hero Timeline & Continuous Floating Orbs
   - GSAP 3D Interactive Card Tilt & Cursor Spotlight
   - GSAP Animated Skill Bars & Dynamic Counter Tweens
   - GSAP Skill Category Filter Transitions
   - Ambient Constellation Canvas Background
   - Typing Effect & Direct WhatsApp Connect
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initGSAPAnimations();
    initAmbientCanvas();
    initTypingEffect();
    initMobileNav();
    initScrollProgress();
    initBackToTop();
    initCopyFeedback();
});

/* --------------------------------------------------
   1. Modern GSAP 3 & ScrollTrigger Animations
   -------------------------------------------------- */
function initGSAPAnimations() {
    // Check if GSAP is available
    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded. Falling back to standard rendering.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    // A. Header Dropdown Entrance
    gsap.from("header", {
        y: -70,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "transform"
    });

    // B. Hero Section Timeline (Home Page)
    const homeContent = document.querySelector(".home-content");
    if (homeContent) {
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl
            .from(".status-pill", {
                scale: 0,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(2)"
            })
            .from(".home-content .eyebrow", {
                y: 20,
                opacity: 0,
                duration: 0.5
            }, "-=0.3")
            .from(".home-content h1", {
                y: 35,
                opacity: 0,
                duration: 0.8
            }, "-=0.3")
            .from(".home-content h3", {
                y: 25,
                opacity: 0,
                duration: 0.7
            }, "-=0.5")
            .from(".home-content p", {
                y: 20,
                opacity: 0,
                duration: 0.7
            }, "-=0.5")
            .from(".btn-group .btn", {
                y: 25,
                opacity: 0,
                stagger: 0.12,
                duration: 0.7,
                ease: "back.out(1.6)"
            }, "-=0.4");

        // Profile Avatar Elastic Entrance
        gsap.from(".profile-visual-container", {
            scale: 0.7,
            opacity: 0,
            duration: 1.1,
            delay: 0.25,
            ease: "elastic.out(1, 0.75)"
        });

        // Orbiting Tech Badges Pop In
        gsap.from(".floating-tech-badge", {
            scale: 0,
            opacity: 0,
            stagger: 0.18,
            duration: 0.75,
            delay: 0.7,
            ease: "back.out(2.2)"
        });

        // Continuous GSAP Floating Sine-Waves
        gsap.to(".profile-img", {
            y: -12,
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".badge-django", {
            y: -12,
            rotation: 3,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".badge-python", {
            y: 12,
            rotation: -3,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.4
        });

        gsap.to(".badge-react", {
            y: -10,
            rotation: 2.5,
            duration: 3.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.8
        });
    }

    // C. ScrollTrigger Stagger for Service Grid
    if (document.querySelector(".service-grid")) {
        gsap.from(".service-grid .service-item", {
            scrollTrigger: {
                trigger: ".service-grid",
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 45,
            opacity: 0,
            stagger: 0.14,
            duration: 0.85,
            ease: "power3.out"
        });
    }

    // D. ScrollTrigger for Projects (Featured & Projects Page)
    if (document.querySelector(".project-grid")) {
        gsap.from(".project-grid .project-card", {
            scrollTrigger: {
                trigger: ".project-grid",
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            stagger: 0.16,
            duration: 0.85,
            ease: "power3.out"
        });
    }

    // E. ScrollTrigger for Section Headings
    document.querySelectorAll(".section-heading").forEach(heading => {
        gsap.from(heading.children, {
            scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 0.75,
            ease: "power3.out"
        });
    });

    // F. Skills Page: Cards & Dynamic Progress Bars
    const skillCards = document.querySelectorAll(".skill-card");
    if (skillCards.length) {
        gsap.from(skillCards, {
            scrollTrigger: {
                trigger: ".skills-container",
                start: "top 85%"
            },
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.75,
            ease: "power3.out"
        });

        skillCards.forEach(card => {
            const fill = card.querySelector(".skill-fill");
            const label = card.querySelector(".skill-percent-label");
            const targetLevel = parseInt(card.getAttribute("data-level"), 10) || 0;

            if (fill && typeof ScrollTrigger !== "undefined") {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 90%",
                    once: true,
                    onEnter: () => {
                        // Animate Bar Fill
                        gsap.to(fill, {
                            width: `${targetLevel}%`,
                            duration: 1.35,
                            ease: "power2.out"
                        });

                        // Animate Percentage Counter
                        if (label) {
                            const counter = { val: 0 };
                            gsap.to(counter, {
                                val: targetLevel,
                                duration: 1.35,
                                ease: "power2.out",
                                onUpdate: () => {
                                    label.textContent = `${Math.floor(counter.val)}%`;
                                }
                            });
                        }
                    }
                });
            }
        });
    }

    // G. Education Timeline ScrollTrigger
    const educationItems = document.querySelectorAll(".education-item");
    if (educationItems.length) {
        gsap.from(educationItems, {
            scrollTrigger: {
                trigger: ".timeline-wrapper",
                start: "top 85%"
            },
            x: -35,
            opacity: 0,
            stagger: 0.18,
            duration: 0.85,
            ease: "power3.out"
        });
    }

    // H. About Page: Animated Stat Numbers
    const statCards = document.querySelectorAll(".stat-card");
    if (statCards.length) {
        gsap.from(statCards, {
            scrollTrigger: {
                trigger: ".stats-row, .stats-column, .about-side-content",
                start: "top 85%"
            },
            y: 35,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "back.out(1.5)",
            onComplete: () => {
                document.querySelectorAll("[data-counter]").forEach(counterEl => {
                    const target = parseInt(counterEl.getAttribute("data-counter"), 10) || 0;
                    const suffix = counterEl.getAttribute("data-suffix") || "";
                    const counterObj = { val: 0 };

                    gsap.to(counterObj, {
                        val: target,
                        duration: 1.5,
                        ease: "power2.out",
                        onUpdate: () => {
                            counterEl.textContent = `${Math.floor(counterObj.val)}${suffix}`;
                        }
                    });
                });
            }
        });
    }

    // I. Contact Page Entrance
    if (document.querySelector(".contact-page")) {
        gsap.from(".contact-copy", {
            x: -40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out"
        });

        gsap.from(".contact-form-wrapper, .contact-form", {
            x: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.15
        });
    }

    // J. Interactive GSAP 3D Tilt for Cards (Desktop)
    initGSAP3DTilt();

    // K. GSAP Category Filter
    initGSAPSkillFilter();
}

/* --------------------------------------------------
   2. GSAP 3D Interactive Card Tilt & Cursor Spotlight
   -------------------------------------------------- */
function initGSAP3DTilt() {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cards = document.querySelectorAll(
        ".service-item, .project-card, .skill-card, .education-item, .stat-card, .contact-item-card"
    );

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotX = ((y - centerY) / centerY) * -5.5;
            const rotY = ((x - centerX) / centerX) * 5.5;

            if (typeof gsap !== "undefined") {
                gsap.to(card, {
                    rotationX: rotX,
                    rotationY: rotY,
                    y: -5,
                    transformPerspective: 1000,
                    duration: 0.3,
                    ease: "power1.out"
                });
            }
        });

        card.addEventListener("mouseleave", () => {
            if (typeof gsap !== "undefined") {
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    y: 0,
                    duration: 0.55,
                    ease: "power2.out",
                    clearProps: "transform"
                });
            }
        });
    });

    // Cursor Spotlight Follower
    const spotlight = document.getElementById("cursorSpotlight");
    if (spotlight) {
        window.addEventListener("mousemove", (e) => {
            if (typeof gsap !== "undefined") {
                gsap.to(spotlight, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.35,
                    ease: "power2.out"
                });
            } else {
                spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }
        }, { passive: true });
    }
}

/* --------------------------------------------------
   3. GSAP Skills Category Filter
   -------------------------------------------------- */
function initGSAPSkillFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const skillCards = document.querySelectorAll(".skill-card");
    if (!filterBtns.length || !skillCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter").toLowerCase();

            skillCards.forEach(card => {
                const group = (card.getAttribute("data-group") || "").toLowerCase();
                const match = filterValue === "all" || group === filterValue;

                if (match) {
                    card.classList.remove("is-hidden");
                    if (typeof gsap !== "undefined") {
                        gsap.fromTo(card,
                            { scale: 0.85, opacity: 0 },
                            { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
                        );
                    }
                } else {
                    card.classList.add("is-hidden");
                }
            });
        });
    });
}

/* --------------------------------------------------
   4. Typing Effect
   -------------------------------------------------- */
function initTypingEffect() {
    const typingElement = document.querySelector(".typing");
    if (!typingElement) return;

    const words = [
        "Django Web Applications",
        "Full-Stack Python Systems",
        "Responsive & Fast Interfaces",
        "Robust Backend APIs",
        "Interactive Digital Experiences"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 110;

    function type() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 1900;
            } else {
                typingSpeed = 85 + Math.random() * 35;
            }
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 400;
            } else {
                typingSpeed = 40;
            }
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/* --------------------------------------------------
   5. Mobile Navigation
   -------------------------------------------------- */
function initMobileNav() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = nav.classList.toggle("open");
            menuToggle.classList.toggle("is-active", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));

            if (isOpen && typeof gsap !== "undefined") {
                gsap.from(nav.querySelectorAll("li"), {
                    y: -12,
                    opacity: 0,
                    stagger: 0.06,
                    duration: 0.35,
                    ease: "power2.out"
                });
            }
        });

        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
                menuToggle.classList.remove("is-active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("click", (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains("open")) {
                nav.classList.remove("open");
                menuToggle.classList.remove("is-active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    window.addEventListener("scroll", () => {
        if (!header) return;
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }, { passive: true });
}

/* --------------------------------------------------
   6. Scroll Progress Bar
   -------------------------------------------------- */
function initScrollProgress() {
    const progressBar = document.getElementById("scrollProgress");
    if (!progressBar) return;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    }, { passive: true });
}

/* --------------------------------------------------
   7. Back to Top Button
   -------------------------------------------------- */
function initBackToTop() {
    const backToTopBtn = document.getElementById("backToTop");
    if (!backToTopBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 340) {
            backToTopBtn.classList.add("is-visible");
        } else {
            backToTopBtn.classList.remove("is-visible");
        }
    }, { passive: true });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* --------------------------------------------------
   8. Copy Feedback Toast
   -------------------------------------------------- */
function initCopyFeedback() {
    const copyTriggers = document.querySelectorAll("[data-copy]");
    copyTriggers.forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const textToCopy = el.getAttribute("data-copy");
            if (!textToCopy) return;

            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Copied to clipboard: ${textToCopy}`);
            }).catch(() => {
                showToast("Failed to copy");
            });
        });
    });
}

function showToast(message) {
    const existing = document.querySelector(".toast-notification");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: #162823;
        border: 1px solid rgba(69, 212, 131, 0.45);
        color: #f4f7f5;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.86rem;
        font-weight: 600;
        padding: 10px 22px;
        border-radius: 9999px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 18px rgba(69, 212, 131, 0.3);
        z-index: 9999;
        opacity: 0;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    toast.innerHTML = `<span style="color: #45d483;">✓</span> ${message}`;
    document.body.appendChild(toast);

    if (typeof gsap !== "undefined") {
        gsap.to(toast, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "back.out(1.8)"
        });

        gsap.to(toast, {
            opacity: 0,
            y: 15,
            duration: 0.35,
            delay: 2.8,
            ease: "power2.in",
            onComplete: () => toast.remove()
        });
    } else {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
        setTimeout(() => toast.remove(), 2800);
    }
}

/* --------------------------------------------------
   9. Ambient Constellation Canvas Background
   -------------------------------------------------- */
function initAmbientCanvas() {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width, height;
    let particles = [];
    let animationFrameId;

    const colors = [
        "rgba(69, 212, 131, 0.55)",
        "rgba(37, 184, 160, 0.45)",
        "rgba(244, 201, 93, 0.35)",
    ];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 1.8 + 0.8;
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = (Math.random() - 0.5) * 0.45;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function createParticles() {
        particles = [];
        const count = Math.min(Math.floor((width * height) / 22000), 55);
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function drawLines() {
        const maxDist = 130;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.16;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(69, 212, 131, ${alpha})`;
                    ctx.lineWidth = 0.9;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        drawLines();
        animationFrameId = requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resize();
            createParticles();
        }, 150);
    });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            cancelAnimationFrame(animationFrameId);
        } else {
            animate();
        }
    });
}
