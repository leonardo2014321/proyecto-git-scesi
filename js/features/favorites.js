import { save, load } from "../utils/storage.js";

const KEY = "devlinks-favorites";

export function getFavorites() {
    return load(KEY, []);
}

export function isFavorite(title) {
    return getFavorites().includes(title);
}

export function toggleFavorite(title) {
    let favs = getFavorites();

    if (favs.includes(title)) {
        favs = favs.filter(f => f !== title);
    } else {
        favs.push(title);
    }

    save(KEY, favs);
    return favs.includes(title); // retorna si quedó como favorito
}