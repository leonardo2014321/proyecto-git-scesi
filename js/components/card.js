// js/components/card.js
// Crea y devuelve un elemento DOM de tipo "card" para un recurso.

import { isFavorite, toggleFavorite } from "../features/favorites.js";

/**
 * @param {Object} resource - { title, description, link, icon, tag }
 * @param {Function} onFavChange - callback cuando cambia favorito (para re-render si hace falta)
 */
export function createCard(resource, onFavChange) {
    const isFav = isFavorite(resource.title);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-header">
        <div class="card-icon">
            <span class="material-symbols-outlined">${resource.icon || "link"}</span>
        </div>
        <span class="card-tag">${resource.tag || "RESOURCE"}</span>
        </div>

        <h3 class="card-title">${resource.title}</h3>
        <p class="card-desc">${resource.description}</p>

        <div class="card-footer">
        <button class="btn-open">Open Link ↗</button>
        <button class="btn-fav ${isFav ? "active" : ""}" title="Guardar en favoritos">
            ${isFav ? "★" : "☆"}
        </button>
        </div>
    `;

    // Abrir enlace
    card.querySelector(".btn-open").addEventListener("click", () => {
        window.open(resource.link, "_blank", "noopener");
    });

    // Toggle favorito
    card.querySelector(".btn-fav").addEventListener("click", (e) => {
        const nowFav = toggleFavorite(resource.title);
        e.currentTarget.classList.toggle("active", nowFav);
        e.currentTarget.textContent = nowFav ? "★" : "☆";
        if (onFavChange) onFavChange();
    });

    return card;
}
