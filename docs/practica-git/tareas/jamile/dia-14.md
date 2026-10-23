# Guía de Práctica — Jamile (Día 14)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 14 de 15** — Flujo colaborativo autónomo con menos instrucciones guiadas y limpieza de ramas locales (`git branch --merged` y `git branch -d`).

## 3. Objetivo de aprendizaje de Git
Ejecutar con autonomía el rol de **Desarrolladora** en el Turno 1 y el de **Revisora e Integradora** en el Turno 2 sin depender de copiar cada comando paso a paso, y depurar las ramas locales de días anteriores que ya fueron integradas en `main` comprobándolas antes con `git branch --merged main`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/jamile-dia14-articulos-diario`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/adriana-dia14-ficha-ingredientes`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 1 como Desarrolladora)

1. **Tarea 1 (JSON):** Actualizar el título del cuarto artículo (`id: "noche"`) en `data/articles.json`.
2. **Tarea 2 (JSON):** Actualizar la etiqueta `"tag"` del sexto artículo (`id: "comunidad"`) en `data/articles.json`.
3. **Tarea 3 (HTML):** Actualizar el texto de la insignia superior de la caja de suscripción en `pages/diario.html`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `data/articles.json` (líneas 41 y 58).
- `pages/diario.html` (línea 41).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`data/articles.json`, artículo `id: "noche"`, líneas 38–42)
Busca:
```json
      "id": "noche",
      "category": "rituales",
      "tag": "Sueño & Piel · 4 min de lectura",
      "title": "El turno de noche: por qué la piel ama dormir profundamente",
```
Actualiza `"title"` a:
```json
      "id": "noche",
      "category": "rituales",
      "tag": "Sueño & Piel · 4 min de lectura",
      "title": "El turno de noche: cronobiología y reparación celular profunda",
```

### En la Tarea 2 (`data/articles.json`, artículo `id: "comunidad"`, líneas 56–60)
Busca:
```json
      "id": "comunidad",
      "category": "comunidad",
      "tag": "Comunidad & Filosofía · 2 min de lectura",
      "title": "Comparte tu ritual #LuxeGlow: Belleza real sin filtros",
```
Actualiza `"tag"` a:
```json
      "id": "comunidad",
      "category": "comunidad",
      "tag": "Comunidad & Filosofía · 3 min de lectura",
      "title": "Comparte tu ritual #LuxeGlow: Belleza real sin filtros",
```

### En la Tarea 3 (`pages/diario.html`, línea 41)
Busca dentro de `<section class="newsletter-box">`:
```html
      <span class="badge bg-gold text-dark fw-bold px-3 py-1 mb-2" style="letter-spacing: 1px;">Suscripción Mensual</span>
```
Cámbialo por:
```html
      <span class="badge bg-gold text-dark fw-bold px-3 py-1 mb-2" style="letter-spacing: 1px;">Edición Editorial Gratuita</span>
```

---

## 8. Resultado esperado
En `pages/diario.html`, el cuarto artículo lleva por título **«El turno de noche: cronobiología y reparación celular profunda»**, el sexto artículo indica `3 min de lectura` y la caja inferior de suscripción muestra la insignia **«EDICIÓN EDITORIAL GRATUITA»**.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/diario.html`.
2. Revisa las tarjetas de los artículos 4 y 6 y la insignia dorada de la sección inferior de suscripción.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

*(Hoy trabajas con instrucciones de nivel autónomo. Si tienes dudas sobre algún comando, consulta [`09-flujos-completos.md`](../../cuaderno-git/09-flujos-completos.md)).*

### Fase 1: Turno 1 — Desarrollar `feat/jamile-dia14-articulos-diario` y limpiar ramas antiguas
1. Sitúate en `main` y actualízalo desde `origin/main` con avance rápido (`--ff-only`).
2. Consulta qué ramas locales ya están fusionadas en `main`:
   ```bash
   git branch --merged main
   ```
3. Elimina de forma segura (`git branch -d`) las ramas locales de días anteriores que aparezcan en esa lista (conservando `main`).
4. Crea y cámbiate a la rama `feat/jamile-dia14-articulos-diario`.
5. Registra un primer commit con los cambios de `data/articles.json` (Tareas 1 y 2) y un segundo commit con el cambio de `pages/diario.html` (Tarea 3).
6. Publica tu rama en `origin` estableciendo seguimiento (`-u`).

### Fase 2: Turno 2 — Revisar e integrar `feat/adriana-dia14-ficha-ingredientes`
1. Actualiza las referencias remotas de `origin` y localiza la rama publicada por Adriana con `git branch -r`.
2. Descárgala con seguimiento (`git switch --track`).
3. Revisa sus commits (`git log`) y sus diferencias respecto a `main` (`git diff main...feat/adriana-dia14-ficha-ingredientes`).
4. Comprueba `pages/ingredientes.html` en Live Server, cambia a `main`, actualízalo, fusiona con `git merge --no-ff` y publica `main`.

---

## 11. Criterios para considerar la tarea terminada
- Limpiaste tus ramas locales antiguas ya fusionadas usando `git branch --merged main` y `git branch -d`.
- Publicaste los 2 commits de `feat/jamile-dia14-articulos-diario` y en el Turno 2 revisaste e integraste `feat/adriana-dia14-ficha-ingredientes` de forma autónoma.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Adriana el nombre de la rama `feat/jamile-dia14-articulos-diario` para que revise `data/articles.json` y `pages/diario.html`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si `git branch -d` rechaza borrar alguna rama antigua, verifica primero con `git log main..<rama> --oneline` por qué esa rama tenía algún commit no integrado en `main`, y nunca uses `-D` sin antes comprobarlo.

