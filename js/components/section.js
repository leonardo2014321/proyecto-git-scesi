
import { createCard } from "./card.js";

/**
 * @param {string} title - Nombre visible de la categoría
 * @param {Array}  items - Array de recursos
 * @param {Function} onFavChange - callback para re-render al cambiar favorito
 * @returns {HTMLElement}
 */
export function createSection(title, items, onFavChange) {
    const section = document.createElement("section");
    section.className = "section";

    const label = title.charAt(0).toUpperCase() + title.slice(1);
    section.innerHTML = `<h2 class="section-title">${label}</h2>`;

    const grid = document.createElement("div");
    grid.className = "cards-grid";

    items.forEach(item => {
        grid.appendChild(createCard(item, onFavChange));
    });

    section.appendChild(grid);
    return section;
}
