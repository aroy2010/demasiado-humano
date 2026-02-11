
# ¿Quieres que las publicaciones (posts) puedan enlazar a notas del garden con URLs públicas, o prefieres que los posts no enlacen a notas salvo cuando esas notas también estén publicadas?

Qué enlacen solo cuando estén publicadas.
Para el “público selectivo” del digital garden: ¿te parece más seguro el enfoque por carpeta (p. ej., content/garden/...) en lugar de “marcar con publish: true”?
Más seguro me parece por carpeta.

Perfecto: con tus decisiones, el sistema queda así: publicas **posts** y **garden** solo por carpeta (nada se publica “por error”), y tus posts solo enlazan a notas que ya estén publicadas.

## Estructura objetivo (carpetas publicables)

En Hugo, una sección es una subcarpeta dentro de `content/`, así que crea dos secciones publicables: `posts` y `garden`.[^1]

- `content/posts/` → artículos “cerrados” (blog).
- `content/garden/` → notas vivas publicables (selectivo).

Dentro de cada ítem publicable usarás leaf bundles (carpeta por página con `index.md`). En leaf bundles el archivo principal se llama `index.md` (y en branch bundles sería `_index.md`).[^2][^3]

## Proceso completo (end-to-end)

### 0) Preparación (una vez)

1) En la raíz del repo/vault crea:

- `notes/` (cuaderno, versionado).
- `drafts/` (borradores, NO versionado).
- `content/posts/` (publicable).
- `content/garden/` (publicable).[^3][^1]

2) En `.gitignore` agrega:

- `drafts/`
Así mantienes un solo vault, pero Git no sube borradores.[^4]

3) (Recomendado) Crea páginas de sección para navegación:

- `content/posts/_index.md` (branch bundle de la sección posts).
- `content/garden/_index.md` (branch bundle de la sección garden).[^1][^3]


### 1) Escritura (borrador)

1) Creas una nota en `drafts/tema-x.md` y escribes con wikilinks libremente (como método de pensamiento en red).
2) Cuando madura, la pasas a `notes/` si quieres conservarla como nota “viva” versionada antes de decidir publicación (tu cuaderno).

### 2) Decidir: ¿post o garden?

Criterio editorial (útil para no mezclar géneros):

- **Post**: texto relativamente cerrado, con arco argumental, “versión 1.0” (aunque luego lo edites).
- **Garden**: nota incremental, con hipótesis, conexiones, bibliografía viva, y revisiones frecuentes.


### 3) Publicar (crear bundle + llevar contenido)

Aquí respondo tu duda clave: sí, el contenido final debe terminar dentro de `index.md`, pero no es “pegar en una plantilla” en sentido estricto; es **crear el bundle** y colocar allí el contenido definitivo (moviendo o copiando desde `notes/`/`drafts/`). En leaf bundles, el contenido principal vive en `…/index.md`.[^3]

#### 3A) Publicar un post

1) Crea carpeta: `content/posts/titulo-corto/`
2) Crea archivo: `content/posts/titulo-corto/index.md`[^3]
3) Copia el texto final (desde `notes/` o `drafts/`) dentro de `index.md`.
4) Ajusta el front matter (mínimo):
```yaml
---
title: "Título público"
date: 2026-02-10
draft: true
tags: ["..."]
ShowToc: true
---
```

PaperMod expone variables de front matter para controlar ToC y otras conductas.[^5]
5) Coloca figuras/anexos del post dentro de la misma carpeta del bundle y enlázalos desde el Markdown. Hugo define que el bundle asocia recursos a ese contenido.[^3]

#### 3B) Publicar una nota del garden (selectivo por carpeta)

Igual lógica, solo cambia la sección:

1) `content/garden/titulo-corto/index.md`
2) Recursos al lado: `content/garden/titulo-corto/fig1.png`
Esto te da “publicación selectiva”: si no está dentro de `content/garden/`, no se publica.[^1][^3]

### 4) Enlaces: convertir solo lo que se publica

Como has elegido wikilinks en tu espacio de pensamiento, tu regla será:

- Antes de publicar (o al publicar), conviertes los enlaces que queden en `content/posts/**` o `content/garden/**` a enlaces Markdown compatibles.

Sí, se puede hacer de forma selectiva con el plugin “Wikilinks to MDLinks”, que permite convertir enlaces seleccionados entre wikilinks y enlaces Markdown.[^6][^7]

### 5) Previsualizar en localhost (control de calidad)

1) Ejecuta `hugo server` y revisa:

- Navegación de secciones (posts y garden).
- Resolución de imágenes/adjuntos en bundles.
- Enlaces internos (solo a notas publicadas, según tu regla).[^1][^3]


### 6) Publicación (GitHub/Cloudflare)

1) Cambia `draft: false` en lo que vas a publicar.[^5]
2) Commit/push (Obsidian Git o VS Code).

## Cómo automatizar la creación de carpetas (sin fricción)

Puedes hacerlo manual al inicio; cuando quieras estandarizar, la idea más limpia es usar “plantillas” (en Obsidian) para el front matter y/o usar un comando repetible para crear el bundle (carpeta + `index.md`). Hugo soporta la lógica de bundles y distingue `index.md` vs `_index.md` según sea leaf o branch.[^3]

Pregunta final para afinar sin ensayo-error:
¿Quieres que el garden tenga su propia entrada en el menú superior (p. ej., “Garden”), o prefieres acceder por enlaces/contexto desde posts? (Si lo quieres en menú, lo configuramos en `hugo.yaml`, y PaperMod soporta menús en el header).[^8][^9]
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19]</span>

<div align="center">⁂</div>

[^1]: https://gohugo.io/content-management/sections/

[^2]: https://www.angela1c.com/posts/2021/04/page-bundles/

[^3]: https://gohugo.io/content-management/page-bundles/

[^4]: https://www.freecodecamp.org/news/gitignore-file-how-to-ignore-files-and-folders-in-git/

[^5]: https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-variables/

[^6]: https://github.com/agathauy/wikilinks-to-mdlinks-obsidian

[^7]: https://github.com/agathauy/wikilinks-to-mdlinks-obsidian/blob/master/README.md

[^8]: https://gohugo.io/content-management/menus/

[^9]: https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-faq/

[^10]: https://discourse.gohugo.io/t/advanced-hugo-menus-multiple-menus/21895

[^11]: https://hugo-in-action.foofun.cn/docs/part1/chapter4/2/

[^12]: https://stackoverflow.com/questions/54971150/how-can-i-add-a-menu-for-each-content-type-in-hugo

[^13]: https://discourse.gohugo.io/t/how-do-i-add-the-index-md-page-of-a-branch-bundle-to-the-list-of-posts/40075

[^14]: https://www.gohugo.org/doc/extras/menus/

[^15]: https://github.com/PranavArya37/hugo-papermod-config

[^16]: https://gohugobrasil.netlify.app/content-management/menus/

[^17]: https://tuyenld.github.io/paperMod/posts/papermod/papermod-features/

[^18]: https://www.gohugo.org/doc/content/sections/

[^19]: https://www.youtube.com/watch?v=owTtKcunnzo

