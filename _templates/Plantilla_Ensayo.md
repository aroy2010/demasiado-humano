<%*
// 1. Pedir el título real al usuario
let title = await tp.system.prompt("Título del Ensayo (Humano)");
if (!title) { title = tp.file.title; }

// 2. (Opcional) Sugerir renombrar el archivo a formato seguro (snake_case)
// Si prefiere mantener su nombre manual, borre estas 3 líneas siguientes.
let fileName = title.toLowerCase().replace(/ /g, "_").replace(/[^a-z0-9_]/g, "");
await tp.file.rename(fileName); 
_%>
---
id: <% tp.file.creation_date("YYYYMMDDHHmm") %>
aliases: ["<% title %>"]
titulo: "<% title %>"
tipo: #ensayo 
estado: 🌳 provisional
tags: []
fuente: 
creado: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
actualizado: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
---

# <% title %>

### 🧠 Punto de partida
*(Lectura, visión, reflexión que genera la idea para este ensayo).*
<% tp.file.cursor() %>

---
### 🔍 Pilares de la idea o punto de partida
*(Elabore un listado o inventario de sus impresiones para escribir este ensayo).*

### 🤝 Relaciones 
- **Fuentes externas:** [[...]]
- **Concepto Relacionado:** [[...]]
- **Mis ideas de partida:**

### 📚 Referencias o Fuentes
* **Autor/Año:** * **Página:** * **Enlace Zotero/PDF:** ```

**Consejo de flujo:**
Cuando pase una idea de una "Nota Fugaz" a una "Nota Atómica":
1.  Cree la Atómica.
2.  Copie la referencia bibliográfica de la fugaz a la atómica.
3.  **Borre** la nota fugaz (o muévala a una carpeta "Archivo").

### Preguntas guía

