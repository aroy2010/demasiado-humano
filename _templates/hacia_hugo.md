<%*
// 1. Selección de Sección
const secciones = ["posts", "escritos_creativos", "lecturas", "resena", "acerca"];
const seleccion = await tp.system.suggester(secciones, secciones);
if (!seleccion) return;

// 2. Captura de Datos
const titulo = await tp.system.prompt("Título de la obra");
const descripcion = await tp.system.prompt("Descripción breve (SEO)");
const etiquetas = await tp.system.prompt("Etiquetas (separadas por coma)");
const year = tp.date.now("YYYY");
const month = tp.date.now("MM");
const fechaIso = tp.date.now("YYYY-MM-DDTHH:mm:ssZ");

// 3. Generación de Slug Sanetizado
const slug = tp.date.now("YYYY-MM") + "-" + titulo.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');

const pathBase = `${seleccion}/${year}/${month}/${slug}`;
const rutaFinal = `${pathBase}/index.md`;

// 4. PROTOCOLO DE CREACIÓN RECURSIVA CON MANEJO DE ERRORES
if (await app.vault.adapter.exists(rutaFinal)) {
    new Notice("⚠️ Error: La carpeta o el post ya existen. Elige otro título o borra el anterior.");
    return;
}

const niveles = [seleccion, `${seleccion}/${year}`, `${seleccion}/${year}/${month}`, pathBase];
for (const nivel of niveles) {
    if (!(await app.vault.adapter.exists(nivel))) {
        await app.vault.createFolder(nivel);
    }
}

// 5. MOVIMIENTO AL LEAF BUNDLE
await tp.file.move(rutaFinal);
%>---
title: "<% titulo %>"
date: <% fechaIso %>
description: "<% descripcion %>"
summary: "<% descripcion %>"
categories: ["<% seleccion %>"]
tags: [<% etiquetas %>]
# Configuración Blowfish
showReadingTime: true
showWordCount: true
featureImage: "feature.jpg"
draft: true
---

# <% titulo %>

> *Iniciando registro narrativo en la sección: <% seleccion.toUpperCase() %>*

---