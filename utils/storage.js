// js/utils/storage.js
// Wrapper simple para localStorage con manejo de errores.

export function save(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
  }
}


