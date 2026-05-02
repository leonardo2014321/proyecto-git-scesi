// js/data/resources.js
// Lista de todos los recursos. Para agregar uno nuevo, añade un objeto a la categoría correspondiente.
// Estructura: { title, description, link, icon, tag }

export const resources = {

  frontend: [
    { title: "React",        description: "Librería para construir interfaces de usuario",    link: "https://react.dev",                   icon: "javascript",              tag: "CORE"      },
    { title: "Vue",          description: "Framework progresivo para interfaces web",         link: "https://vuejs.org",                   icon: "code",                    tag: "FRAMEWORK" },
    { title: "Angular",      description: "Framework completo de Google",                     link: "https://angular.io",                  icon: "code",                    tag: "FRAMEWORK" },
    { title: "Tailwind CSS", description: "Framework CSS utility-first",                      link: "https://tailwindcss.com",             icon: "css",                     tag: "STYLING"   },
    { title: "MDN",          description: "Documentación oficial de la plataforma web",       link: "https://developer.mozilla.org",       icon: "menu_book",               tag: "DOCS"      },
  ],

  backend: [
    { title: "Node.js",      description: "Entorno de ejecución JavaScript del lado servidor", link: "https://nodejs.org",                 icon: "dns",                     tag: "RUNTIME"   },
    { title: "Express",      description: "Framework web minimalista para Node.js",           link: "https://expressjs.com",               icon: "settings",                tag: "API"       },
    { title: "Django",       description: "Framework Python con baterías incluidas",           link: "https://www.djangoproject.com",       icon: "code",                    tag: "FRAMEWORK" },
    { title: "Spring Boot",  description: "Backend robusto para proyectos Java",              link: "https://spring.io",                   icon: "code",                    tag: "JAVA"      },
    { title: "Laravel",      description: "Framework PHP elegante y expresivo",               link: "https://laravel.com",                 icon: "code",                    tag: "PHP"       },
  ],

  tools: [
    { title: "VS Code",      description: "Editor de código moderno y extensible",            link: "https://code.visualstudio.com",       icon: "integration_instructions", tag: "EDITOR"   },
    { title: "GitHub",       description: "Plataforma de repositorios y colaboración",        link: "https://github.com",                  icon: "account_tree",            tag: "GIT"       },
    { title: "Postman",      description: "Testing y documentación de APIs",                  link: "https://postman.com",                 icon: "api",                     tag: "API"       },
    { title: "Docker",       description: "Contenedores para entornos reproducibles",         link: "https://docker.com",                  icon: "grid_view",               tag: "DEVOPS"    },
    { title: "Figma",        description: "Diseño de interfaces colaborativo en la nube",     link: "https://figma.com",                   icon: "design_services",         tag: "UI"        },
  ],

  learning: [
    { title: "FreeCodeCamp",     description: "Cursos gratuitos de programación web",         link: "https://freecodecamp.org",            icon: "school",                  tag: "FREE"      },
    { title: "Coursera",         description: "Cursos profesionales con certificaciones",     link: "https://coursera.org",                icon: "school",                  tag: "PRO"       },
    { title: "Udemy",            description: "Cursos variados a precios accesibles",         link: "https://udemy.com",                   icon: "school",                  tag: "PAID"      },
    { title: "Frontend Masters", description: "Cursos avanzados de frontend con expertos",   link: "https://frontendmasters.com",         icon: "school",                  tag: "ADV"       },
    { title: "Platzi",           description: "Escuela online enfocada en Latinoamérica",     link: "https://platzi.com",                  icon: "school",                  tag: "LATAM"     },
  ],

};
