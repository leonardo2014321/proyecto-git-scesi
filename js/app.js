import { resources } from "./data/resources.js";
import { createSection } from "./components/section.js";
import { renderNavbar } from "./components/navbar.js";
import { applyFilters } from "./features/filter.js";
import { getFavorites } from "./features/favorites.js";
import { initTheme, toggleTheme } from "./features/theme.js";

const state = {
  searchText: "",
  activeCategory: "all",
  showFavOnly: false
};

const categories = Object.keys(resources);

function renderResources() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const filtered = applyFilters(
    resources,
    state.searchText,
    state.activeCategory
  );

  Object.entries(filtered).forEach(([category, items]) => {
    if (items.length > 0) {
      app.appendChild(
        createSection(category, items)
      );
    }
  });
}