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