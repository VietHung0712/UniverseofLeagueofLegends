export function animationSlide(container, dir) {
    const items = container.children;
    if (dir === 1) {
        container.appendChild(items[0]);
    } else if (dir === 0) {
        container.prepend(items[items.length - 1]);
    }
}