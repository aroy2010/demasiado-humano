<%*
// 1. Definición del Título Humano
let title = await tp.system.prompt("Título del Ensayo (Creativo)");
if (!title) { title = tp.file.title; }

// 2. Normalización snake_case para la URL de Hugo
let fileName = title.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_")
    .replace(/[^a-z0-9_]/g, "");

await tp.file.rename(fileName);
_%>
---
# --- Metadatos de Publicación (Hugo/PaperMod) ---
title: "<% title %>"
date: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
draft: true
author: "AROY1962"
description: "" 
categories: ["Ensayos"]
tags: [ensayo]
showToc: true
# --- Gestión Interna (Zettelkasten) ---
id: <% tp.file.creation_date("YYYYMMDDHHmm") %>
aliases: ["<% title %>"]
estado: 🌳 provisional
creado: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
---

# <% title %>

### 🧠 Punto de partida
*(Reflexión, lectura o caso clínico que detona este ensayo).*
<% tp.file.cursor() %>

---

### 🏗️ Pilares y Estructura
*(Inventario de ideas o puntos clave antes de redactar).*
1. 
2. 

---

## El Ensayo

*(Comience aquí la redacción de su prosa cautivante).*

---

### 🤝 Relaciones y Referencias
- **Fuentes en la bóveda:** [[...]]
- **Conceptos Relacionados:** [[...]]
- **Bibliografía:** * *Autor/Año:* * *Vínculo:* ```

### 🛠️ Mejoras y Justificación Técnica

* **Automatización de Título y Archivo**: Mantiene el prompt de la **V1** para capturar el título creativo [cite: 17] y automatiza el renombrado a formato seguro (`snake_case`) para evitar errores en la web[cite: 19].
* **Compatibilidad con Hugo**: Incorpora el campo `draft: true`  y el formato de fecha ISO  de la **V2**, esenciales para que tu sitio web procese correctamente el archivo.
* **SEO y PaperMod**: He añadido el campo `description`, crucial para que tu audiencia encuentre tus textos mediante un resumen atractivo en el feed de la web.
* **Gestión de Identidad**: Conserva el `id` y los `aliases` [cite: 19] para que, aunque el archivo se llame técnicamente `ensayo_sobre_la_muerte.md`, puedas encontrarlo en Obsidian buscando "La brevedad del suspiro"[cite: 5].
* **Estructura Narrativa**: Mantiene las secciones de "Punto de partida" y "Pilares" de la **V1** [cite: 19], que actúan como el andamiaje necesario antes de lanzarte a la escritura fluida propuesta en la **V2**.

### 🩺 El Flujo de Trabajo Final

Cuando decidas que una idea de una **Nota Temporal** [cite: 12] merece ser un ensayo:
1.  Dispara esta plantilla.
2.  Traslada las referencias de la nota fugaz[cite: 21].
3.  **Elimina** la nota temporal para mantener tu bóveda limpia[cite: 22].

**¿Te gustaría que probemos este flujo creando un ensayo breve basado en alguna de las ideas que ya tienes en tu laboratorio?** Es el momento de ver cómo todas las piezas (Obsidian, Hugo y tu vena creativa) encajan perfectamente.