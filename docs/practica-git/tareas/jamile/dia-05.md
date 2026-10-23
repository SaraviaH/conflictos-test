# Guía de Práctica — Jamile (Día 05)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 05 de 15** — Alcance de `git fetch origin` frente a `git fetch origin main`, uso de `git pull --ff-only` y mejoras en la página de Contacto.

## 3. Objetivo de aprendizaje de Git
Comprobar en el Turno 1 que `git fetch origin main` actualiza únicamente la referencia de `main` y no descarga las ramas nuevas de Adriana hasta ejecutar `git fetch origin`, revisar con `git diff main...rama` y, en el Turno 2, desarrollar las mejoras de `pages/contacto.html` y `css/pages/contacto.css`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/adriana-dia05-carrusel`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/jamile-dia05-contacto`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (HTML):** Ampliar el horario de atención telefónica incluyendo los sábados en `pages/contacto.html`.
2. **Tarea 2 (HTML):** Añadir una nueva opción al selector desplegable «Motivo de consulta» (`#contact-subject`) en el formulario de `pages/contacto.html`.
3. **Tarea 3 (CSS):** Añadir `transition: var(--transition);` en la clase `.contact-info-item` dentro de `css/pages/contacto.css`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/contacto.html` (líneas 50 y 93–98).
- `css/pages/contacto.css` (líneas 25–34).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`pages/contacto.html`, línea 50)
Busca dentro del bloque «Teléfono Directo»:
```html
              <strong class="text-burgundy-dark">Teléfono Directo</strong><br>
              <span class="small text-muted">+52 (55) 8900-3456<br>Lun – Vie 9:00 – 18:00 h</span>
```
Actualiza el horario a:
```html
              <strong class="text-burgundy-dark">Teléfono Directo</strong><br>
              <span class="small text-muted">+52 (55) 8900-3456<br>Lun – Vie 9:00 – 18:00 h | Sáb 10:00 – 14:00 h</span>
```

### En la Tarea 2 (`pages/contacto.html`, líneas 93–98)
Busca el elemento `<select id="contact-subject">`:
```html
                <select id="contact-subject" class="form-select form-control-luxe">
                  <option value="general">Consulta general</option>
                  <option value="skincare">Asesoría de ritual y tipo de piel</option>
                  <option value="pedidos">Pedidos, envíos y devoluciones</option>
                  <option value="inci">Consulta sobre ingredientes INCI</option>
                </select>
```
Añade una quinta opción sobre el programa de reciclaje y envases Refill:
```html
                <select id="contact-subject" class="form-select form-control-luxe">
                  <option value="general">Consulta general</option>
                  <option value="skincare">Asesoría de ritual y tipo de piel</option>
                  <option value="pedidos">Pedidos, envíos y devoluciones</option>
                  <option value="inci">Consulta sobre ingredientes INCI</option>
                  <option value="sostenibilidad">Programa de reciclaje y envases Refill</option>
                </select>
```

### En la Tarea 3 (`css/pages/contacto.css`, líneas 25–34)
Busca `.contact-info-item`:
```css
.contact-info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
  background: var(--color-rose-soft);
  border-radius: 16px;
  border: 1px solid rgba(212, 175, 55, 0.18);
  margin-bottom: 1rem;
}
```
Añade `transition: var(--transition);` al final del bloque:
```css
.contact-info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
  background: var(--color-rose-soft);
  border-radius: 16px;
  border: 1px solid rgba(212, 175, 55, 0.18);
  margin-bottom: 1rem;
  transition: var(--transition);
}
```

---

## 8. Resultado esperado
En `pages/contacto.html`, la tarjeta de información muestra la atención de sábados (`Sáb 10:00 – 14:00 h`), el menú desplegable del formulario permite elegir «Programa de reciclaje y envases Refill» y los bloques de información cuentan con transición CSS suave.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/contacto.html`.
2. Revisa el horario bajo «Teléfono Directo».
3. Haz clic en el selector desplegable «Motivo de consulta» y verifica que aparecen las 5 opciones.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`feat/adriana-dia05-carrusel`)
```bash
# 1. Comprobar que git fetch origin main NO trae la rama nueva de Adriana:
git fetch origin main
git branch -r
# Observa que origin/feat/adriana-dia05-carrusel aún no está en la lista.

# 2. Ahora ejecutar git fetch origin completo:
git fetch origin
git branch -r
# Comprueba que ahora sí aparece origin/feat/adriana-dia05-carrusel.

# 3. Descargar con seguimiento, inspeccionar diferencias con tres puntos (...) e integrar:
git switch --track origin/feat/adriana-dia05-carrusel
git diff --name-status main...feat/adriana-dia05-carrusel
git diff main...feat/adriana-dia05-carrusel
# Tras comprobar el carrusel en index.html:
git switch main
git pull --ff-only origin main
git merge feat/adriana-dia05-carrusel
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2
```bash
git switch main
git switch -c feat/jamile-dia05-contacto

# Commit 1: Cambios en HTML (Tareas 1 y 2)
git add pages/contacto.html
git commit -m "Ampliar horario de atencion y opciones de motivo en contacto.html"

# Commit 2: Cambio en CSS (Tarea 3)
git add css/pages/contacto.css
git commit -m "Anadir transicion suave a .contact-info-item en contacto.css"

git push -u origin feat/jamile-dia05-contacto
```

---

## 11. Criterios para considerar la tarea terminada
- Comprobaste en la terminal la diferencia entre `git fetch origin main` y `git fetch origin` antes de revisar la rama de Adriana.
- Creaste 2 commits separados en `feat/jamile-dia05-contacto` y la publicaste con `-u`.
- Adriana revisó e integró tu rama en `main`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Adriana el nombre de tu rama `feat/jamile-dia05-contacto` indicando que verifique el horario y el selector del formulario en `pages/contacto.html`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al hacer `git pull --ff-only origin main` Git responde `Already up to date.`, recuerda que significa que tu rama `main` local ya está en el último commit de `origin/main` y puedes continuar con normalidad.

