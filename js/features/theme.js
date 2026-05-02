import { save, load } from "../utils/storage.js";

const KEY = "devlinks-theme";

export function initTheme() {
    const saved = load(KEY, "dark");
    applyTheme(saved);
}

export function toggleTheme() {
    const isLight = document.body.classList.toggle("light");
    const theme = isLight ? "light" : "dark";
    save(KEY, theme);
    updateThemeButton(isLight);
}

function applyTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("light", isLight);
    updateThemeButton(isLight);
}

function updateThemeButton(isLight) {
    const btn = document.getElementById("toggleTheme");
    if (btn) btn.textContent = isLight ? "🌙" : "☀️";
}