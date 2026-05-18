¡Excelente elección, colega! Con **Dataview**, pasamos de tener un "archivador pasivo" a tener un "asistente de investigación" que trabaja mientras duermes. Para un médico, esto es como tener un panel de signos vitales de su propio pensamiento; para un escritor, es el mapa del tesoro de sus historias.

Aquí tienes los bloques de código (DQL - Dataview Query Language) para tu **Índice Maestro**. Solo tienes que copiarlos y pegarlos en la nota `000_INDICE_MAESTRO`.

---

## 🏛️ Tu Panel de Control con Dataview

### 1. El "Termómetro" de Actividad (Últimas 5 notas creadas)

Este bloque te mostrará en qué has estado pensando últimamente en tu laboratorio, sin importar el tema. Es ideal para retomar el hilo tras un turno largo.

Fragmento de código

```
LIST
FROM "00_LABORATORIO"
SORT file.ctime DESC
LIMIT 5
```

---

### 2. Vena Médica: El Consultorio de Ideas

Aquí agruparemos automáticamente todo lo que lleve el tag `#medicina`. Imagina que estás revisando "casos" de tu propia memoria.

Fragmento de código

```
TABLE tags AS "Ejes", file.mday AS "Última edición"
FROM "00_LABORATORIO"
WHERE contains(tags, "#medicina")
SORT file.mday DESC
```

---

### 3. Vena Literaria: La Biblioteca de Semillas

Aquí aparecerán tus chispazos creativos. He configurado este bloque para que busque específicamente el tag `#literatura`.

Fragmento de código

```
LIST
FROM "00_LABORATORIO"
WHERE contains(tags, "#literatura")
SORT file.name ASC
```

---

### 4. Estado de Publicación (Conexión con Hugo)

Este es el más útil para tu rol de editor. Te dirá qué artículos en la carpeta `content` están marcados como **borrador (`draft: true`)**. Es tu lista de "pendientes por operar".

Fragmento de código

```
TABLE description AS "Gancho Literario", categories AS "Sección"
FROM "content"
WHERE draft = true
SORT date DESC
```

---

## 🛠️ Requisito para que esto funcione (El "Protocolo")

Para que Dataview pueda "leer" tus notas, debemos ser disciplinados con el Frontmatter. Asegúrate de que tus notas en el laboratorio tengan siempre esta estructura mínima (puedes añadirla a tus plantillas de **Templater**):

YAML

```
---
tags: [medicina, reflexion, idea-semilla] # Usa comas para separar
date: 2026-03-26
---
```

> **Consejo de AROY1962:** No te obsesiones con poner mil etiquetas. Con que pongas el tema principal (`#medicina` o `#literatura`), Dataview hará el resto del trabajo sucio por ti.

---

### Un pequeño "truco" estético

Si quieres que tu Índice Maestro se vea más limpio, puedes usar el plugin **"Buttons"** (opcional) para crear un botón que diga "Nueva Nota Médica" o "Nuevo Relato", que dispare automáticamente la plantilla de Templater en la carpeta correcta.

### Siguiente paso sugerido:

**¿Te gustaría que te enseñe cómo hacer una "Consulta Cruzada"?** Por ejemplo, una lista de notas que hablen de _Medicina_ Y _Literatura_ al mismo tiempo (donde se cruzan tus dos pasiones). Es ahí donde suelen nacer tus mejores ensayos para el blog.

¡Dime cuando hayas probado estos códigos en tu índice y vemos cómo responden!