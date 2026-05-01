// js/utils/storage.js
// Wrapper simple para localStorage con manejo de errores.

export function save(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
  }
}

export function load(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.warn("No se pudo leer localStorage:", e);
    return fallback;
  }
}
