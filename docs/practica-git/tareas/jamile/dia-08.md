# Guía de Práctica — Jamile (Día 08)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 08 de 15** — Uso de `git restore` y `git restore --staged`, fusiones explícitas (`git merge --no-ff`) y mejoras en el Diario Botánico.

## 3. Objetivo de aprendizaje de Git
Practicar en el Turno 1 cómo desmarcar un archivo preparado usando `git restore --staged` sin perder tus modificaciones, y en el Turno 2 integrar la rama de Adriana utilizando `git merge --no-ff` e inspeccionando el árbol resultante con `git log --oneline --graph --decorate`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/jamile-dia08-diario`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/adriana-dia08-ritual`, integrándola con `--no-ff`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 1 como Desarrolladora)

1. **Tarea 1 (JSON):** Actualizar la etiqueta de lectura (`"tag"`) del primer artículo (`id: "clima"`) en `data/articles.json`.
2. **Tarea 2 (JSON):** Corregir la palabra `"refil"` por `"refill"` en el título del tercer artículo (`id: "packaging"`) en `data/articles.json`.
3. **Tarea 3 (CSS):** Añadir sombra sutil (`box-shadow: var(--shadow-sm);`) a las cajas de cita `.article-highlight-box` dentro del modal lector en `css/pages/diario.css`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `data/articles.json` (líneas 13 y 32).
- `css/pages/diario.css` (líneas 134–142).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`data/articles.json`, artículo `id: "clima"`, líneas 11–15)
Busca:
```json
      "id": "clima",
      "category": "rituales",
      "tag": "Ritual & Estaciones · 4 min de lectura",
      "title": "Cómo adaptar tu ritual al cambio de clima",
```
Cambia `"tag"` a:
```json
      "id": "clima",
      "category": "rituales",
      "tag": "Ritual & Estaciones · 5 min de lectura",
      "title": "Cómo adaptar tu ritual al cambio de clima",
```

### En la Tarea 2 (`data/articles.json`, artículo `id: "packaging"`, líneas 29–33)
Busca:
```json
      "id": "packaging",
      "category": "sostenibilidad",
      "tag": "Sostenibilidad · 3 min de lectura",
      "title": "Packaging que vuelve: refil, reciclaje y belleza limpia",
```
Corrige `"refil"` por `"refill"`:
```json
      "id": "packaging",
      "category": "sostenibilidad",
      "tag": "Sostenibilidad · 3 min de lectura",
      "title": "Packaging que vuelve: refill, reciclaje y belleza limpia",
```

### En la Tarea 3 (`css/pages/diario.css`, líneas 134–142)
Busca `.article-highlight-box`:
```css
.article-highlight-box {
  background: var(--color-rose-soft);
  border-left: 4px solid var(--color-gold);
  border-radius: 0 16px 16px 0;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: var(--color-burgundy-dark);
}
```
Añade `box-shadow: var(--shadow-sm);`:
```css
.article-highlight-box {
  background: var(--color-rose-soft);
  border-left: 4px solid var(--color-gold);
  border-radius: 0 16px 16px 0;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: var(--color-burgundy-dark);
  box-shadow: var(--shadow-sm);
}
```

---

## 8. Resultado esperado
En `pages/diario.html`, la tarjeta de sostenibilidad muestra el título corregido **«Packaging que vuelve: refill, reciclaje y belleza limpia»**, el primer artículo indica `5 min de lectura`, y al abrir cualquier artículo en el modal lector, la cita destacada luce un relieve suave con sombra.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/diario.html`.
2. Verifica el título corregido con `refill` en la tercera tarjeta.
3. Haz clic en **«Leer Artículo Completo»** en cualquiera de las tarjetas y verifica el estilo de la caja de cita destacada dentro del modal.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1 — Practicando `git restore --staged`)
```bash
git switch main
git pull --ff-only origin main
git switch -c feat/jamile-dia08-diario

# 1. Realiza las Tareas 1, 2 (en data/articles.json) y 3 (en css/pages/diario.css).
# 2. Prepara ambos archivos a la vez y practica sacar diario.css del área de preparación:
git add data/articles.json css/pages/diario.css
git status
git restore --staged css/pages/diario.css
git status
# Comprueba que css/pages/diario.css salió del área verde sin perder tus cambios.

# 3. Hacer el primer commit solo con data/articles.json:
git commit -m "Corregir titulo refill y tiempo de lectura en data/articles.json"

# 4. Ahora preparar y confirmar css/pages/diario.css:
git add css/pages/diario.css
git commit -m "Anadir sombra sutil a .article-highlight-box en diario.css"

git push -u origin feat/jamile-dia08-diario
```

### Fase 2: Como Revisora e Integradora del Turno 2 (`feat/adriana-dia08-ritual`) con `--no-ff`
```bash
git fetch origin
git switch --track origin/feat/adriana-dia08-ritual
git log --oneline -n 4
git diff main...feat/adriana-dia08-ritual
# Tras verificar pages/ritual.html en el navegador:
git switch main
git pull --ff-only origin main
git merge --no-ff feat/adriana-dia08-ritual -m "Merge branch 'feat/adriana-dia08-ritual' into main"
git log --oneline --graph --decorate -n 8
git push origin main
```

---

## 11. Criterios para considerar la tarea terminada
- Practicaste `git restore --staged` para separar tus cambios en 2 commits limpios dentro de `feat/jamile-dia08-diario`.
- En el Turno 2 integraste `feat/adriana-dia08-ritual` con `git merge --no-ff` y comprobaste el gráfico de ramas con `git log --oneline --graph --decorate -n 8`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Adriana la rama `feat/jamile-dia08-diario` para que revise `pages/diario.html` y la integre con `--no-ff`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al abrir `pages/diario.html` aparece el mensaje «No se pudieron cargar los artículos», verifica con `git diff data/articles.json` que no borraste las comillas ni la coma final de `"tag"` o `"title"`.

