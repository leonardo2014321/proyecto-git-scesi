// js/features/filter.js
// Funciones puras de filtrado. No tocan el DOM.

/**
 * Filtra un array de recursos por texto (title o description).
 * @param {Array} items
 * @param {string} text
 */
export function filterBySearch(items, text) {
   if (!text.trim()) return items;
  const q = text.toLowerCase();
  return items.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.description.toLowerCase().includes(q)
  );
}

/**
 * Aplica búsqueda y (opcionalmente) filtra solo favoritos.
 * @param {Object} resourceMap  - { frontend: [...], backend: [...], ... }
 * @param {string} searchText
 * @param {string} activeCategory - "all" | nombre de categoría
 * @param {boolean} showFavOnly
 * @param {string[]} favorites
 */
export function applyFilters(resourceMap, searchText, activeCategory,showFavonly,favotites) {
  const categories = activeCategory === "all"
    ? Object.keys(resourceMap)
    : [activeCategory];

  const result = {};

  for (const cat of categories) {
    let items = resourceMap[cat] || [];
   if (showFavOnly) {
      items = items.filter(r => favorites.includes(r.title));
    }

    items = filterBySearch(items, searchText);

    result[cat] = items;
  }

}