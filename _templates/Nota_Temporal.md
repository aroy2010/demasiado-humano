<%*
// 1. Solicitar título
let title = await tp.system.prompt("¿Qué idea capturaste?");

// 2. Validar entrada
if (!title) { 
    title = "Idea_" + tp.date.now("YYYYMMDD_HHmm"); 
}

// 3. Normalizar para Hugo (Limpieza de nombre)
let fileName = title.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");

// 4. Renombrar archivo
await tp.file.rename(fileName);
%>
---
id: <% tp.file.creation_date("YYYYMMDDHHmm") %>
aliases: ["<% title %>"]
titulo: "<% title %>"
tipo: #fleeting
estado: 🌱 semilla
creado: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
actualizado: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
tags: [chispa-creativa]
fuente: 
---

# 💡 <% title %>

### 🧪 La Idea en Crudo
<% tp.file.cursor() %>

---

### 🚀 Siguientes Pasos
- [ ] Procesar a Nota Atómica.
- [ ] Eliminar nota temporal.