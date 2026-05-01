import { resources } from "./data/resources.js";

const state = {
  searchText: "",
  activeCategory: "all",
  showFavOnly: false,
};

const categories = Object.keys(resources);