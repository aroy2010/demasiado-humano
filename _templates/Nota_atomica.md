<%*
// 1. Interfaz de entrada: Pedir el título humano
let title = await tp.system.prompt("Título de la Nota (Concepto)");
if (!title) { title = tp.file.title; }

// 2. Normalización de archivos para Hugo (snake_case)
// Esto asegura que la URL de tu web sea limpia y sin caracteres extraños
let fileName = title.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quita tildes
    .replace(/ /g, "_")
    .replace(/[^a-z0-9_]/g, "");

await tp.file.rename(fileName); 
_%>
---
id: <% tp.file.creation_date("YYYYMMDDHHmm") %>
title: "<% title %>"
aliases: ["<% title %>"]
estado: 🌳 permanente
tipo: #atomic
tags: [zettel, idea-semilla]
fuente: 
creado: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
# Campos para Hugo (PaperMod)
date: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
draft: true
categories: []
---

# <% title %>

### 🧠 Concepto Central
<% tp.file.cursor() %>

---

### 🔍 Contexto y Reflexión (Vena Creativa)
*(Desarrolle aquí la idea con sus propias palabras, conectando su perspectiva médica o literaria).*

### 🤝 Conexiones (Network)
- **Eje Temático (MOC):** [[...]]
- **Concepto Relacionado:** [[...]]

### 📚 Referencias
* **Autor/Obra:** * **Vínculo Externo:** ```

---

### 🛠️ ¿Por qué esta versión es la "Cirugía Perfecta"?

1.  **Nomenclatura Dual Automatizada:** El script transforma "La Inmortalidad en Borges" en un archivo llamado `la_inmortalidad_en_borges.md`[cite: 4]. Esto es vital para que **Hugo** genere URLs amigables[cite: 4]. Sin embargo, gracias a la propiedad `aliases`, en Obsidian podrás seguir buscando la nota por su título con tildes y espacios[cite: 5].
2.  **Identidad Única (ID):** El uso del formato `YYYYMMDDHHmm` como ID asegura que cada átomo de conocimiento sea único y rastreable, incluso si decides cambiarle el nombre al archivo en el futuro[cite: 4].
3.  **Doble Propósito (Obsidian + Hugo):** He añadido los campos `date`, `draft` y `categories`. Esto significa que si una nota atómica es tan potente que decides publicarla tal cual en tu blog, ya tiene el **Frontmatter** que Hugo necesita para procesarla.
4.  **Flujo de "Fuente Única de Verdad":** Al integrar el campo `fuente` y las conexiones, transformas una idea fugaz en un activo permanente[cite: 6, 10]. 

---

### 📝 El Protocolo de Transferencia

Para mantener la higiene de tu bovéda, te sugiero seguir el flujo que propusiste en la V2[cite: 7]:

1.  **Detectar el "Síntoma":** Identifica una idea valiosa en una "Nota Fugaz"[cite: 7].
2.  **Ejecutar la Biopsia:** Crea la nota con esta plantilla definitiva y traslada la esencia[cite: 8].
3.  **Limpieza Quirúrgica:** Borra o archiva la nota fugaz original[cite: 9]. La Nota Atómica es ahora tu **única fuente de verdad**[cite: 10].

---

### Siguiente paso sugerido:
**¿Te gustaría que configuremos un comando rápido (Hot-key) para que, al presionar una combinación de teclas, Obsidian cree automáticamente esta nota en tu carpeta de "Laboratorio"?** Así no tendrás que navegar por las carpetas mientras la inspiración está activa.
-