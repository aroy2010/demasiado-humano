<%*
// ============================================================
// PLANTILLA DE PUBLICACIÓN: Obsidian → Hugo + Blowfish
// Blog: El Blog de Adriel | Tema: Naturaleza Serena
// ============================================================

// 1. Selección de sección (categoría principal)
const secciones = {
    "posts": "Reflexiones personales",
    "lecturas": "Lecturas y reseñas",
    "escritos_creativos": "Escritos creativos",
    "acerca": "Sobre el blog"
};
const nombresSecciones = Object.values(secciones);
const seleccionNombre = await tp.system.suggester(nombresSecciones, Object.keys(secciones));
if (!seleccionNombre) {
    new Notice("❌ Publicación cancelada: no se seleccionó sección.");
    return;
}

// 2. Captura de metadatos
const titulo = await tp.system.prompt("📝 Título del post");
if (!titulo || titulo.trim() === "") {
    new Notice("❌ Publicación cancelada: el título es obligatorio.");
    return;
}
const descripcion = await tp.system.prompt("📄 Descripción breve (para SEO y tarjetas)");
const etiquetasRaw = await tp.system.prompt("🏷️ Etiquetas (separadas por comas)");
const esBorrador = await tp.system.suggester(["Sí (borrador)", "No (publicar)"], [true, false]);

// 2.1 Autor (nuevo campo)
const autorPorDefecto = "Adriel";
const esOtroAutor = await tp.system.suggester(
    ["Yo (Adriel)", "Otro autor invitado"],
    [false, true]
);
let autorFinal = autorPorDefecto;
if (esOtroAutor) {
    const nombreAutor = await tp.system.prompt("✍️ Nombre del autor invitado");
    if (nombreAutor && nombreAutor.trim() !== "") {
        autorFinal = nombreAutor.trim();
    } else {
        autorFinal = autorPorDefecto;
        new Notice("ℹ️ No se ingresó nombre. Se usará 'Adriel' como autor por defecto.");
    }
}

// 3. Sanitización de etiquetas
let etiquetasArray = [];
if (etiquetasRaw && etiquetasRaw.trim() !== "") {
    etiquetasArray = etiquetasRaw
        .split(",")
        .map(tag => tag.trim().toLowerCase().replace(/\s+/g, '-'))
        .filter(tag => tag !== "");
}

// 4. Fechas
const fechaIso = tp.date.now("YYYY-MM-DD");
const fechaHora = tp.date.now("YYYY-MM-DDTHH:mm:ssZ");

// 5. Generación de slug sanitizado
const slugBase = titulo
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
const slug = `${tp.date.now("YYYY-MM")}-${slugBase}`;

// 6. Rutas
const pathBase = `${seleccionNombre}/${tp.date.now("YYYY")}/${tp.date.now("MM")}/${slug}`;
const rutaFinal = `${pathBase}/index.md`;

// 7. Verificación de existencia
if (await app.vault.adapter.exists(rutaFinal)) {
    new Notice("⚠️ Error: Ya existe un post con ese título en esta fecha. Elige otro título.");
    return;
}

// 8. Creación recursiva de carpetas
const niveles = [
    seleccionNombre,
    `${seleccionNombre}/${tp.date.now("YYYY")}`,
    `${seleccionNombre}/${tp.date.now("YYYY")}/${tp.date.now("MM")}`,
    pathBase
];
for (const nivel of niveles) {
    if (!(await app.vault.adapter.exists(nivel))) {
        await app.vault.createFolder(nivel);
    }
}

// 9. Construcción del front matter (ANTES del movimiento)
const etiquetasYaml = etiquetasArray.length > 0 
    ? "\n  - " + etiquetasArray.join("\n  - ")
    : "";

const frontMatter = `---
title: "${titulo}"
author: "${autorFinal}"
date: ${fechaIso}
lastmod: ${fechaHora}
description: "${descripcion || titulo}"
summary: "${descripcion || titulo}"
categories: ["${seleccionNombre}"]
tags: [${etiquetasYaml}
]
# Configuración específica de Blowfish
showDate: true
showReadingTime: true
showWordCount: true
showTableOfContents: false
showAuthor: true
featureImage: "feature.webp"
draft: ${esBorrador}
---`;
%>
<% frontMatter %>

# <% titulo %>

> *<% descripcion || "Reflexión en la sección: " + seleccionNombre %>*

---
<% await tp.file.move(rutaFinal) %>