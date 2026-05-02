
/**
 * @param {string[]} categories    
 * @param {string}   activeCategory
 * @param {Function} onSelect      
 */
export function renderNavbar(categories, activeCategory, onSelect) {
    const nav = document.getElementById("navbar");
    nav.innerHTML = "";

    // Botón "Todos"
    const allBtn = makeButton("Todos", activeCategory === "all", () => onSelect("all"));
    nav.appendChild(allBtn);

    // Un botón por categoría
    categories.forEach(cat => {
        const label = cat.charAt(0).toUpperCase() + cat.slice(1);
        const btn = makeButton(label, activeCategory === cat, () => onSelect(cat));
        nav.appendChild(btn);
    });
}

function makeButton(label, isActive, onClick) {
    const btn = document.createElement("button");
    btn.className = "nav-pill" + (isActive ? " active" : "");
    btn.textContent = label;
    btn.addEventListener("click", onClick);
    return btn;
}
