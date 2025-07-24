export function animationSlide(container, dir) {
    const items = container.children;
    if (dir === 1) {
        container.appendChild(items[0]);
    } else if (dir === 0) {
        container.prepend(items[items.length - 1]);
    }
}

export function getRegionName(regions) {
    if (!regions || !Array.isArray(regions)) return [];

    const result = [];
    for (let i = 0; i < regions.length; i++) {
        const region = regions[i];
        result[region.id] = region.name;
    }
    return result;
}

export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function scrollWithOffset(ref, offset = 80) {
    const element = ref.current;
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
        top,
        behavior: 'smooth'
    });
};

export function scrollHorizontal(container) {
    let isDragging = false;
    let startX = 0;
    let value = 0;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        container.classList.add('dragging');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const deltaX = e.pageX - startX;
        if (deltaX > 0) {
            value = -container.offsetWidth / 3;
        } else {
            value = container.offsetWidth / 3;
        }

        container.scrollBy({
            left: value,
            behavior: 'smooth'
        });

        startX = e.pageX;
    });

    ['mouseup', 'mouseleave'].forEach(event =>
        container.addEventListener(event, () => {
            isDragging = false;
            container.classList.remove('dragging');
        })
    );
}
