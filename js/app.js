import { resources } from "./data/resources.js";

const state = {
  searchText: "",
  activeCategory: "all",
  showFavOnly: false,
};

const categories = Object.keys(resources);

function renderResources() {
  const app = document.getElementById("app");

  if (!app) return;

  app.innerHTML = "<p>Loading...</p>";
}