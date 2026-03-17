---
title: "Reflexión: <% tp.file.title %>"
date: <% tp.date.now("YYYY-MM-DD") %>
draft: true
categories: ["Citas y Reflexiones"]
tags: ["#literatura", "#reflexión"]
# Metadatos de la obra
autor: "<% tp.file.cursor(1) %>"
obra: "<% tp.file.cursor(2) %>"
año: 
tema: "" 
---

### 📖 La Cita
> "<% tp.file.selection() %>"
> — **<% tp.file.cursor(1) %>**, *<% tp.file.cursor(2) %>*.

---

### 🧠 Mi Reflexión (Vena Creativa)
<% tp.file.cursor(3) %>

---
**Relacionado con:**
-