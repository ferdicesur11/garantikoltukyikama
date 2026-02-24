import { services, companyInfo, features, testimonials, comparisonImages } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initContent();
    initComparisonSlider();
    initMobileMenu();
    initScrollTop();
});


function initContent() {

    document.getElementById('contact-address').textContent = companyInfo.address;
    document.getElementById('contact-phone').textContent = companyInfo.phone;
    document.getElementById('google-map').src = companyInfo.mapUrl;

    lucide.createIcons();
}


function initComparisonSlider() {
    const container = document.getElementById('comparison-slider');
    

    container.innerHTML = `
        <div class="comparison-image-wrapper relative w-full h-full">
            <!-- After Image (Background) -->
            <img src="${comparisonImages.after}" class="comparison-image absolute inset-0 w-full h-full object-cover" alt="After Cleaning">
            <span class="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-0">SONRA</span>

            <!-- Before Image (Overlay) -->
            <div class="comparison-overlay" id="comp-overlay">
                <img src="${comparisonImages.before}" class="comparison-image absolute inset-0 w-full h-full object-cover" style="width: 200%; max-width: none;" alt="Before Cleaning" id="comp-before-img">
                <span class="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">ÖNCE</span>
            </div>
        </div>
        
        <!-- Handle -->
        <div class="comparison-handle" id="comp-handle">
            <i data-lucide="chevrons-left-right" class="w-5 h-5 text-slate-600"></i>
        </div>
    `;

    lucide.createIcons();

    const overlay = document.getElementById('comp-overlay');
    const handle = document.getElementById('comp-handle');
    const beforeImg = document.getElementById('comp-before-img');
    let isDragging = false;


    const updateSlider = (x) => {
        const rect = container.getBoundingClientRect();
        let percentage = ((x - rect.left) / rect.width) * 100;
        
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;

        overlay.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
        







        beforeImg.style.width = `${rect.width}px`; 
    };


    container.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSlider(e.clientX);
    });


    container.addEventListener('touchstart', () => isDragging = true);
    window.addEventListener('touchend', () => isDragging = false);
    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        updateSlider(e.touches[0].clientX);
    });


    new ResizeObserver(() => {
        const rect = container.getBoundingClientRect();
        beforeImg.style.width = `${rect.width}px`;
    }).observe(container);
}


function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });


    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}


function initScrollTop() {
    const btn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.remove('opacity-0', 'translate-y-10');
        } else {
            btn.classList.add('opacity-0', 'translate-y-10');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
