/**
 * Ashwin ❤️ Nayana — Our Story
 * Interactive Logic: Love Counter, Parametric Heart Gallery, Canvas Particles, Lightbox & Audio
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. INITIALIZATION ---
    initLiveCounter();
    initHeartCanvas();
    initGallery();
    initTimeline();
    initReasons();
    initQuoteGenerator();
    initLightbox();
    initMusicPlayer();
    initScrollEffects();
});

// ==========================================================================
// 1. LIVE LOVE COUNTER LOGIC
// ==========================================================================
function initLiveCounter() {
    // Relationship start date: January 20th, 2025 at 00:00:00
    const startDate = new Date(2025, 0, 20, 0, 0, 0);

    function updateCounter() {
        const now = new Date();
        
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();
        let hours = now.getHours() - startDate.getHours();
        let minutes = now.getMinutes() - startDate.getMinutes();
        let seconds = now.getSeconds() - startDate.getSeconds();

        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            // Get total days in previous month
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        // Update DOM elements safely
        document.getElementById('years').textContent = Math.max(0, years);
        document.getElementById('months').textContent = Math.max(0, months);
        document.getElementById('days').textContent = Math.max(0, days);
        document.getElementById('hours').textContent = String(Math.max(0, hours)).padStart(2, '0');
        document.getElementById('minutes').textContent = String(Math.max(0, minutes)).padStart(2, '0');
        document.getElementById('seconds').textContent = String(Math.max(0, seconds)).padStart(2, '0');
    }

    updateCounter();
    setInterval(updateCounter, 1000);
}

// ==========================================================================
// 2. BACKGROUND CANVAS PARTICLES (Floating Hearts & Sparkles)
// ==========================================================================
function initHeartCanvas() {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 35;

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 100;
            this.size = Math.random() * 14 + 8;
            this.speedY = Math.random() * 1.2 + 0.5;
            this.speedX = Math.sin(Math.random() * Math.PI) * 0.8;
            this.opacity = Math.random() * 0.6 + 0.2;
            this.rotation = Math.random() * 360;
            this.rotSpeed = (Math.random() - 0.5) * 1.5;
            this.type = Math.random() > 0.3 ? 'heart' : 'sparkle';
            this.color = Math.random() > 0.5 ? '#E8A598' : '#D4AF37';
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
            this.rotation += this.rotSpeed;

            if (this.y < -50) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.globalAlpha = this.opacity;

            if (this.type === 'heart') {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                const topCurveHeight = this.size * 0.3;
                ctx.moveTo(0, topCurveHeight);
                ctx.bezierCurveTo(
                    0, 0,
                    -this.size / 2, 0,
                    -this.size / 2, topCurveHeight
                );
                ctx.bezierCurveTo(
                    -this.size / 2, (this.size + topCurveHeight) / 2,
                    0, this.size,
                    0, this.size
                );
                ctx.bezierCurveTo(
                    0, this.size,
                    this.size / 2, (this.size + topCurveHeight) / 2,
                    this.size / 2, topCurveHeight
                );
                ctx.bezierCurveTo(
                    this.size / 2, 0,
                    0, 0,
                    0, topCurveHeight
                );
                ctx.closePath();
                ctx.fill();
            } else {
                ctx.fillStyle = '#D4AF37';
                ctx.beginPath();
                ctx.arc(0, 0, this.size * 0.25, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}

// ==========================================================================
// 3. PARAMETRIC HEART GALLERY LOGIC
// ==========================================================================
let currentViewMode = 'heart';

function initGallery() {
    const heartCanvas = document.getElementById('heartGalleryCanvas');
    const masonryContainer = document.getElementById('masonryGalleryContainer');
    const btnHeart = document.getElementById('btnHeartView');
    const btnGrid = document.getElementById('btnGridView');

    // Auto-detect responsive viewport: default to grid on mobile
    if (window.innerWidth < 820) {
        currentViewMode = 'grid';
        btnHeart.classList.remove('active');
        btnGrid.classList.add('active');
        document.getElementById('heartGalleryViewport').style.display = 'none';
        masonryContainer.classList.remove('hidden');
    }

    // Render both layouts
    renderHeartGallery();
    renderMasonryGrid();

    // Event listeners for toggle buttons
    btnHeart.addEventListener('click', () => {
        currentViewMode = 'heart';
        btnHeart.classList.add('active');
        btnGrid.classList.remove('active');
        document.getElementById('heartGalleryViewport').style.display = 'flex';
        masonryContainer.classList.add('hidden');
        renderHeartGallery();
    });

    btnGrid.addEventListener('click', () => {
        currentViewMode = 'grid';
        btnGrid.classList.add('active');
        btnHeart.classList.remove('active');
        document.getElementById('heartGalleryViewport').style.display = 'none';
        masonryContainer.classList.remove('hidden');
    });

    window.addEventListener('resize', () => {
        if (currentViewMode === 'heart') {
            renderHeartGallery();
        }
    });
}

/**
 * Parametric Heart Curve Formula:
 * x = 16 * sin^3(t)
 * y = 13 * cos(t) - 5 * cos(2t) - 2 * cos(3t) - cos(4t)
 */
function renderHeartGallery() {
    const canvas = document.getElementById('heartGalleryCanvas');
    if (!canvas) return;
    canvas.innerHTML = '';

    const width = canvas.offsetWidth || 1000;
    const height = canvas.offsetHeight || 650;
    const centerX = width / 2;
    const centerY = height / 2 - 20;

    const scaleX = width > 800 ? 25 : width > 500 ? 18 : 12;
    const scaleY = width > 800 ? 21 : width > 500 ? 15 : 10;

    const totalPhotos = galleryPhotos.length;
    
    // Distribute photos into outer heart loop (30) and inner heart loop (17)
    const outerCount = Math.min(30, totalPhotos);
    const innerCount = totalPhotos - outerCount;

    galleryPhotos.forEach((photo, index) => {
        let t, scaleFactor, xVal, yVal;

        if (index < outerCount) {
            // Outer Heart Loop
            t = (index / outerCount) * Math.PI * 2;
            scaleFactor = 1.0;
        } else {
            // Inner Concentric Heart Loop
            const innerIndex = index - outerCount;
            t = (innerIndex / innerCount) * Math.PI * 2;
            scaleFactor = 0.62;
        }

        // Parametric equations
        const rawX = 16 * Math.pow(Math.sin(t), 3);
        const rawY = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));

        const posX = centerX + rawX * scaleX * scaleFactor;
        const posY = centerY + rawY * scaleY * scaleFactor;

        // Create DOM photo node
        const node = document.createElement('div');
        node.className = 'heart-photo-node';
        node.style.left = `${posX}px`;
        node.style.top = `${posY}px`;

        node.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" loading="lazy">
            <div class="photo-tooltip">${photo.title} (${photo.date})</div>
        `;

        node.addEventListener('click', () => openLightbox(index));
        canvas.appendChild(node);
    });
}

function renderMasonryGrid() {
    const container = document.getElementById('masonryGalleryContainer');
    if (!container) return;
    container.innerHTML = '';

    galleryPhotos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'masonry-item';
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" loading="lazy">
            <div class="masonry-overlay">
                <div class="masonry-title">${photo.title}</div>
                <div class="masonry-date">${photo.date}</div>
            </div>
        `;
        item.addEventListener('click', () => openLightbox(index));
        container.appendChild(item);
    });
}

// ==========================================================================
// 4. TIMELINE LOGIC
// ==========================================================================
function initTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;

    timelineMilestones.forEach(item => {
        const card = document.createElement('div');
        card.className = 'timeline-card';
        card.innerHTML = `
            <div class="timeline-node">
                <i class="fa-solid fa-heart"></i>
            </div>
            <div class="timeline-body">
                <img src="${item.image}" alt="${item.title}" class="timeline-img">
                <span class="timeline-tag">${item.tag}</span>
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-card-title">${item.title}</h3>
                <p class="timeline-caption">${item.caption}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// ==========================================================================
// 5. REASONS I LOVE YOU & QUOTE GENERATOR LOGIC
// ==========================================================================
function initReasons() {
    const grid = document.getElementById('reasonsGrid');
    if (!grid) return;

    loveReasons.forEach(reason => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <span class="reason-num">${reason.number}</span>
                    <i class="fa-solid ${reason.icon} reason-icon"></i>
                    <h3 class="reason-title">${reason.title}</h3>
                    <span class="flip-hint">Click or hover to reveal</span>
                </div>
                <div class="flip-card-back">
                    <p class="reason-text">"${reason.text}"</p>
                </div>
            </div>
        `;
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
        grid.appendChild(card);
    });
}

function initQuoteGenerator() {
    const quoteText = document.getElementById('quoteText');
    const btnNext = document.getElementById('btnNextQuote');
    let quoteIndex = 0;

    if (btnNext && quoteText) {
        btnNext.addEventListener('click', () => {
            quoteIndex = (quoteIndex + 1) % romanticQuotes.length;
            quoteText.style.opacity = '0';
            setTimeout(() => {
                quoteText.textContent = romanticQuotes[quoteIndex];
                quoteText.style.opacity = '1';
            }, 200);
        });
    }
}

// ==========================================================================
// 6. LIGHTBOX MODAL LOGIC
// ==========================================================================
let currentPhotoIndex = 0;

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    const overlay = document.querySelector('.lightbox-overlay');

    if (!lightbox) return;

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', closeLightbox);

    prevBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
        updateLightboxContent();
    });

    nextBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % galleryPhotos.length;
        updateLightboxContent();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });
}

function openLightbox(index) {
    currentPhotoIndex = index;
    updateLightboxContent();
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateLightboxContent() {
    const photo = galleryPhotos[currentPhotoIndex];
    document.getElementById('lightboxImg').src = photo.src;
    document.getElementById('lightboxDate').textContent = photo.date;
    document.getElementById('lightboxTitle').textContent = photo.title;
    document.getElementById('lightboxCaption').textContent = photo.caption;
    document.getElementById('lightboxCounter').textContent = `${currentPhotoIndex + 1} / ${galleryPhotos.length}`;
}

// ==========================================================================
// 7. AMBIENT MUSIC PLAYER (With Soft Web Audio Synthesis Fallback)
// ==========================================================================
function initMusicPlayer() {
    const fab = document.getElementById('btnMusicToggle');
    const toast = document.getElementById('musicToast');
    const statusText = document.getElementById('musicStatusText');

    let isPlaying = false;
    let audioContext = null;
    let oscillatorInterval = null;

    fab.addEventListener('click', () => {
        isPlaying = !isPlaying;

        if (isPlaying) {
            fab.classList.add('playing');
            showToast('Playing Soothing Romantic Melody 🎵');
            playAmbientMelody();
        } else {
            fab.classList.remove('playing');
            showToast('Music Paused');
            stopAmbientMelody();
        }
    });

    function showToast(msg) {
        statusText.textContent = msg;
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }

    // Synthesize soothing ambient piano-like chords using Web Audio API
    function playAmbientMelody() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23]; // C, E, G, C5, A, F
        let noteIdx = 0;

        oscillatorInterval = setInterval(() => {
            if (!isPlaying) return;
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(notes[noteIdx], audioContext.currentTime);

            gain.gain.setValueAtTime(0.08, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 2.5);

            osc.connect(gain);
            gain.connect(audioContext.destination);

            osc.start();
            osc.stop(audioContext.currentTime + 2.5);

            noteIdx = (noteIdx + 1) % notes.length;
        }, 800);
    }

    function stopAmbientMelody() {
        if (oscillatorInterval) {
            clearInterval(oscillatorInterval);
        }
    }
}

// ==========================================================================
// 8. SCROLL ANIMATIONS (Intersection Observer)
// ==========================================================================
function initScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-card').forEach(card => {
        observer.observe(card);
    });
}
