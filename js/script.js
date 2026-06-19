/* ===========================================================
   SHIVESH ANAND — PORTFOLIO — INTERACTIONS
   =========================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- NAV: scrolled state + mobile toggle ---------- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  function onScroll() {
    if (window.scrollY > 12) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
    toggleBackToTop();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- ACTIVE NAV LINK on scroll ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navAnchors = document.querySelectorAll("[data-nav]");

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            navAnchors.forEach(function (a) {
              a.classList.toggle("active", a.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* ---------- SCROLL REVEAL ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = Math.min(i * 60, 240);
            setTimeout(function () { el.classList.add("in-view"); }, reduceMotion ? 0 : delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---------- HERO TYPED TEXT ---------- */
  var typedEl = document.getElementById("typed");
  var roles = ["AI/ML Engineer", "Data Scientist", "Data Analyst", "RAG & LLM Builder", "Data Pipeline Engineer"];

  if (typedEl) {
    if (reduceMotion) {
      typedEl.textContent = roles.join(" · ");
    } else {
      var roleIndex = 0, charIndex = 0, deleting = false;

      function tick() {
        var current = roles[roleIndex];
        if (!deleting) {
          charIndex++;
          typedEl.textContent = current.slice(0, charIndex);
          if (charIndex === current.length) {
            deleting = true;
            setTimeout(tick, 1500);
            return;
          }
          setTimeout(tick, 65);
        } else {
          charIndex--;
          typedEl.textContent = current.slice(0, charIndex);
          if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(tick, 350);
            return;
          }
          setTimeout(tick, 32);
        }
      }
      tick();
    }
  }

  /* ---------- COUNT-UP STATS ---------- */
  var stats = document.querySelectorAll(".stat");
  function animateCount(statEl) {
    var target = parseFloat(statEl.getAttribute("data-target"));
    var suffix = statEl.getAttribute("data-suffix") || "";
    var decimals = parseInt(statEl.getAttribute("data-decimals") || "0", 10);
    var numEl = statEl.querySelector("[data-count]");
    if (!numEl) return;

    if (reduceMotion) {
      numEl.textContent = target.toFixed(decimals) + suffix;
      return;
    }

    var duration = 1400;
    var start = null;

    function frame(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      numEl.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if ("IntersectionObserver" in window && stats.length) {
    var statObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    stats.forEach(function (s) { statObserver.observe(s); });
  }

  /* ---------- COPY TO CLIPBOARD ---------- */
  var toast = document.getElementById("toast");
  var toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2000);
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-copy");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () {
          showToast("Copied " + value);
        }).catch(function () {
          showToast(value);
        });
      } else {
        showToast(value);
      }
    });
  });

  /* ---------- BACK TO TOP ---------- */
  var toTop = document.getElementById("toTop");
  function toggleBackToTop() {
    if (!toTop) return;
    toTop.classList.toggle("visible", window.scrollY > 700);
  }
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- ACCENT THEME SWITCHER ---------- */
  var themeSwitcher = document.getElementById("themeSwitcher");
  var htmlElement = document.documentElement;

  if (themeSwitcher) {
    var themeBtns = themeSwitcher.querySelectorAll(".theme-btn");
    
    // Load persisted theme
    var savedTheme = localStorage.getItem("portfolioAccentTheme") || "cyberpunk";
    if (savedTheme === "amber") {
      savedTheme = "cyberpunk";
      localStorage.setItem("portfolioAccentTheme", "cyberpunk");
    }
    setActiveTheme(savedTheme);

    themeBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var theme = btn.getAttribute("data-theme");
        setActiveTheme(theme);
        localStorage.setItem("portfolioAccentTheme", theme);
      });
    });

    function setActiveTheme(theme) {
      // Remove all theme classes
      themeBtns.forEach(function (btn) {
        var btnTheme = btn.getAttribute("data-theme");
        htmlElement.classList.remove("theme-" + btnTheme);
        btn.classList.toggle("active", btnTheme === theme);
      });
      // Add new theme class
      htmlElement.classList.add("theme-" + theme);
    }
  }

  /* ---------- THEME MODE SWITCHER (DARK / LIGHT / RGB) ---------- */
  var modeToggle = document.getElementById("modeToggle");
  var modes = ["dark", "light", "rgb"];
  
  if (modeToggle) {
    var savedMode = localStorage.getItem("portfolioThemeMode") || "dark";
    setThemeMode(savedMode);

    modeToggle.addEventListener("click", function () {
      var currentMode = localStorage.getItem("portfolioThemeMode") || "dark";
      var nextIndex = (modes.indexOf(currentMode) + 1) % modes.length;
      var nextMode = modes[nextIndex];
      setThemeMode(nextMode);
      localStorage.setItem("portfolioThemeMode", nextMode);
    });

    function setThemeMode(mode) {
      modes.forEach(function (m) {
        htmlElement.classList.remove("mode-" + m);
      });
      htmlElement.classList.add("mode-" + mode);
    }
  }

  /* ---------- SCROLL PROGRESS & TIMELINE LINE DRAW ---------- */
  var scrollProgress = document.getElementById("scrollProgress");
  var tlLines = document.querySelectorAll(".timeline .tl-item");

  function updateScrollVisuals() {
    // Top progress bar
    if (scrollProgress) {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrollPercent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = scrollPercent + "%";
    }

    // Timeline line progress draw
    if (tlLines.length) {
      var triggerPoint = window.innerHeight * 0.85;
      tlLines.forEach(function (item) {
        var line = item.querySelector(".tl-line");
        if (!line) return;
        var rect = item.getBoundingClientRect();
        
        if (rect.top < triggerPoint) {
          var itemHeight = rect.height;
          var visibleAmount = triggerPoint - rect.top;
          var percent = Math.min(Math.max((visibleAmount / itemHeight) * 100, 0), 100);
          line.style.setProperty("--line-height", percent + "%");
        } else {
          line.style.setProperty("--line-height", "0%");
        }
      });
    }
  }

  window.addEventListener("scroll", updateScrollVisuals, { passive: true });
  updateScrollVisuals();

  /* ---------- SPOTLIGHT CARDS TRACKING ---------- */
  var spotlightCards = document.querySelectorAll(".project-card, .tl-card");
  
  if (!reduceMotion && spotlightCards.length) {
    spotlightCards.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", x + "px");
        card.style.setProperty("--mouse-y", y + "px");
      });
      card.addEventListener("mouseleave", function () {
        card.style.setProperty("--mouse-x", "-999px");
        card.style.setProperty("--mouse-y", "-999px");
      });
    });
  }

  /* ---------- 3D PARALLAX PHOTO TILT ---------- */
  var heroPhoto = document.querySelector(".hero-photo");
  var photoFrame = document.querySelector(".photo-frame");

  if (!reduceMotion && heroPhoto && photoFrame) {
    heroPhoto.addEventListener("mousemove", function (e) {
      var rect = heroPhoto.getBoundingClientRect();
      var width = rect.width;
      var height = rect.height;
      
      var mouseX = (e.clientX - rect.left) / width - 0.5;
      var mouseY = (e.clientY - rect.top) / height - 0.5;
      
      var rotateX = -(mouseY * 15).toFixed(2);
      var rotateY = (mouseX * 15).toFixed(2);
      
      photoFrame.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
      
      var shadowX = -(mouseX * 20).toFixed(2);
      var shadowY = -(mouseY * 20).toFixed(2);
      photoFrame.style.boxShadow = shadowX + "px " + shadowY + "px 30px rgba(79, 209, 197, 0.2)";
    });

    heroPhoto.addEventListener("mouseleave", function () {
      photoFrame.style.transform = "rotateX(0deg) rotateY(0deg)";
      photoFrame.style.boxShadow = "none";
    });
  }

  /* ---------- MAGNETIC BUTTONS ---------- */
  var magneticBtns = document.querySelectorAll(".btn");

  if (!reduceMotion && magneticBtns.length) {
    window.addEventListener("mousemove", function (e) {
      magneticBtns.forEach(function (btn) {
        var rect = btn.getBoundingClientRect();
        var btnX = rect.left + rect.width / 2;
        var btnY = rect.top + rect.height / 2;
        
        var distanceX = e.clientX - btnX;
        var distanceY = e.clientY - btnY;
        var distance = Math.hypot(distanceX, distanceY);
        
        var magnetRadius = 75;
        
        if (distance < magnetRadius) {
          var strength = 0.35;
          var targetX = distanceX * strength;
          var targetY = distanceY * strength;
          
          btn.style.transform = "translate(" + targetX + "px, " + targetY + "px)";
        } else {
          btn.style.transform = "";
        }
      });
    });
  }

  /* ---------- CANVAS PARTICLES ---------- */
  var canvas = document.getElementById("particleCanvas");
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var particles = [];
    var mouse = { x: null, y: null, radius: 120 };

    window.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", function () {
      mouse.x = null;
      mouse.y = null;
    });

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = (Math.random() - 0.5) * 0.25;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 20) + 15;
        
        var symbols = ["0", "1", "x", "y", "z", "f(x)", "Σ", "λ", "μ", "σ", "π", "R²", "log", "e", "θ", "AI", "ML", "dx", "dy"];
        this.char = symbols[Math.floor(Math.random() * symbols.length)];
      }

      draw(color) {
        ctx.fillStyle = color || "rgba(255, 180, 84, 0.35)";
        ctx.font = (this.size * 3.5 + 6.5) + "px Consolas, Monaco, monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.char, this.x, this.y);
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        if (mouse.x !== null && mouse.y !== null) {
          var dx = mouse.x - this.x;
          var dy = mouse.y - this.y;
          var dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            var forceDirectionX = dx / dist;
            var forceDirectionY = dy / dist;
            var force = (mouse.radius - dist) / mouse.radius;
            var directionX = forceDirectionX * force * this.density * 0.3;
            var directionY = forceDirectionY * force * this.density * 0.3;
            
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }
    }

    function initParticles() {
      particles = [];
      var particleCount = Math.floor((canvas.width * canvas.height) / 18000);
      particleCount = Math.min(particleCount, 80);
      for (var i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connect(color) {
      var opacityValue = 1;
      var lineLimit = 95;
      var r = 255, g = 180, b = 84;
      if (color.startsWith("rgba")) {
        var parts = color.match(/\d+/g);
        if (parts && parts.length >= 3) {
          r = parseInt(parts[0], 10);
          g = parseInt(parts[1], 10);
          b = parseInt(parts[2], 10);
        }
      } else if (color.startsWith("#")) {
        r = parseInt(color.slice(1, 3), 16);
        g = parseInt(color.slice(3, 5), 16);
        b = parseInt(color.slice(5, 7), 16);
      }

      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var distance = Math.hypot(dx, dy);

          if (distance < lineLimit) {
            opacityValue = 1 - (distance / lineLimit);
            ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + (opacityValue * 0.12) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      var colorStyle = getComputedStyle(document.documentElement).getPropertyValue('--amber').trim() || "#FFB454";
      var r = 255, g = 180, b = 84;
      if (colorStyle.startsWith("#")) {
        r = parseInt(colorStyle.slice(1, 3), 16);
        g = parseInt(colorStyle.slice(3, 5), 16);
        b = parseInt(colorStyle.slice(5, 7), 16);
      } else if (colorStyle.startsWith("rgb")) {
        var parts = colorStyle.match(/\d+/g);
        if (parts && parts.length >= 3) {
          r = parseInt(parts[0], 10);
          g = parseInt(parts[1], 10);
          b = parseInt(parts[2], 10);
        }
      }
      var fillStyleColor = "rgba(" + r + "," + g + "," + b + ", 0.35)";

      particles.forEach(function (particle) {
        particle.update();
        particle.draw(fillStyleColor);
      });
      connect(colorStyle);
      requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();
  }

  /* ---------- PARTY BOMBER CONFETTI POPPER ---------- */
  function burstConfetti(x, y) {
    var colors = ["#FFB454", "#4FD1C5", "#818CF8", "#34D399", "#FF6B6B", "#F472B6"];
    var count = 100;
    var container = document.body;

    for (var i = 0; i < count; i++) {
      var el = document.createElement("div");
      el.className = "confetti-piece";
      
      var size = Math.random() * 8 + 5;
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      if (Math.random() > 0.5) el.style.borderRadius = "50%";
      
      el.style.position = "fixed";
      el.style.left = x + "px";
      el.style.top = y + "px";
      el.style.zIndex = "9999";
      el.style.pointerEvents = "none";
      
      container.appendChild(el);

      var angle = Math.random() * Math.PI * 2;
      var speed = Math.random() * 10 + 5;
      var velocityX = Math.cos(angle) * speed;
      var velocityY = Math.sin(angle) * speed - 3;
      var gravity = 0.25;
      var drag = 0.95;
      var rotation = Math.random() * 360;
      var rotationSpeed = (Math.random() - 0.5) * 12;
      
      (function(piece, vx, vy, rot, rotSp) {
        var posX = x;
        var posY = y;
        var opacity = 1;

        function update() {
          vy += gravity;
          vx *= drag;
          vy *= drag;
          posX += vx;
          posY += vy;
          rot += rotSp;
          opacity -= 0.015;

          piece.style.transform = "translate3d(" + (posX - x) + "px, " + (posY - y) + "px, 0) rotate(" + rot + "deg)";
          piece.style.opacity = opacity;

          if (opacity > 0) {
            requestAnimationFrame(update);
          } else {
            piece.remove();
          }
        }
        requestAnimationFrame(update);
      })(el, velocityX, velocityY, rotation, rotationSpeed);
    }
  }

  // Trigger burst Confetti on specific elements click
  document.addEventListener("click", function (e) {
    var target = e.target;
    if (target.closest(".logo") || target.closest(".btn") || target.closest(".theme-btn") || target.closest(".mode-toggle") || target.closest(".contact-link") || target.closest(".project-card") || target.closest(".tl-card")) {
      burstConfetti(e.clientX, e.clientY);
    }
  });

})();
