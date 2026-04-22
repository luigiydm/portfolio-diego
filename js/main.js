// ==========================================
// LIGHTBOX FUNCTIONALITY
// ==========================================
class Lightbox {
    constructor() {
        this.lightbox = null;
        this.lightboxContent = null;
        this.lastFocusedElement = null;
        this.init();
    }

    init() {
        // Create lightbox element
        this.createLightbox();

        // Add event listeners to gallery items
        this.bindGalleryItems();
    }

    createLightbox() {
        this.lightbox = document.createElement('div');
        this.lightbox.className = 'lightbox';
        this.lightbox.setAttribute('role', 'dialog');
        this.lightbox.setAttribute('aria-modal', 'true');
        this.lightbox.setAttribute('aria-hidden', 'true');
        this.lightbox.tabIndex = -1;

        const closeBtn = document.createElement('button');
        closeBtn.className = 'lightbox-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.type = 'button';
        closeBtn.setAttribute('aria-label', 'Close media preview');
        closeBtn.onclick = () => this.close();

        this.lightboxContent = document.createElement('div');
        this.lightboxContent.className = 'lightbox-content';

        this.lightbox.appendChild(closeBtn);
        this.lightbox.appendChild(this.lightboxContent);
        document.body.appendChild(this.lightbox);

        this.lightbox.onclick = (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        };

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.lightbox.classList.contains('active')) {
                this.close();
            }
        });
    }

    bindGalleryItems() {
        document.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                e.preventDefault();
                const media = galleryItem.querySelector('img, video');
                if (media) {
                    const src = galleryItem.dataset.lightboxSrc || media.currentSrc || media.src;
                    const type = galleryItem.dataset.lightboxType || media.tagName.toLowerCase();
                    const alt = galleryItem.dataset.lightboxAlt || media.getAttribute('alt') || '';
                    this.open(src, type, alt, galleryItem);
                }
            }
        });
    }

    open(src, type, alt = '', trigger = null) {
        this.lastFocusedElement = trigger;
        this.lightboxContent.innerHTML = '';

        if (type === 'video') {
            const video = document.createElement('video');
            video.src = src;
            video.controls = true;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            this.lightboxContent.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;
            this.lightboxContent.appendChild(img);
        }

        this.lightbox.classList.add('active');
        this.lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        this.lightbox.focus();
    }

    close() {
        this.lightbox.classList.remove('active');
        this.lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        const video = this.lightboxContent.querySelector('video');
        if (video) {
            video.pause();
        }

        this.lightboxContent.innerHTML = '';

        if (this.lastFocusedElement) {
            this.lastFocusedElement.focus();
        }
    }
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// ==========================================
// ACTIVE NAV LINK
// ==========================================
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const workPages = new Set([
        'index.html',
        'fighting.html',
        'mondongo.html',
        'minita-casita.html',
        'survival-horror.html'
    ]);

    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        if (href === currentPage) {
            link.classList.add('active');
        } else if (href === 'index.html' && workPages.has(currentPage)) {
            link.classList.add('active');
        }
    });
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
function initMobileMenu() {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'mobile-menu-toggle';
    toggleBtn.innerHTML = '<span></span><span></span><span></span>';
    toggleBtn.setAttribute('aria-label', 'Toggle Menu');
    toggleBtn.setAttribute('aria-expanded', 'false');

    document.body.appendChild(toggleBtn);

    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const closeMenu = () => {
        sidebar.classList.remove('mobile-open');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
    };

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
        toggleBtn.classList.toggle('active');
        toggleBtn.setAttribute('aria-expanded', sidebar.classList.contains('mobile-open') ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                closeMenu();
            }
        }
    });

    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
}

// ==========================================
// INIT ON LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    new Lightbox();
    initSmoothScroll();
    updateActiveNavLink();
    initMobileMenu();
});
