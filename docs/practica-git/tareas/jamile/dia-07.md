# Guía de Práctica — Jamile (Día 07)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 07 de 15** — Revisión exigente con solicitud de cambio adicional en la rama remota antes de fusionar, y ampliación del Centro de Ayuda (`pages/faq.html`).

## 3. Objetivo de aprendizaje de Git
Practicar en el Turno 1 un flujo de revisión real en dos pasos: descargar la rama de Adriana (`feat/adriana-dia07-envios`), solicitarle que añada un commit adicional de estilo en esa misma rama antes de aprobarla, descargar ese nuevo commit con `git pull --ff-only origin feat/adriana-dia07-envios` y recién entonces integrarla en `main`. En el Turno 2, desarrollar las mejoras de `pages/faq.html` y `css/pages/faq.css`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/adriana-dia07-envios`, solicitando un commit adicional antes de integrar).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/jamile-dia07-faq`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (HTML):** Ampliar los términos de ejemplo en el `placeholder` del buscador interactivo `#faq-search-input` de `pages/faq.html`.
2. **Tarea 2 (HTML):** Añadir una novena pregunta frecuente (`#faqHeading9` / `#f9`) al acordeón `#faqAccordion` en `pages/faq.html`.
3. **Tarea 3 (CSS):** Aumentar el margen inferior entre elementos del acordeón en `css/pages/faq.css`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/faq.html` (líneas 32 y 141).
- `css/pages/faq.css` (líneas 58–64).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`pages/faq.html`, línea 32)
Busca el input del buscador:
```html
        <input type="search" id="faq-search-input" class="form-control faq-search-input" placeholder="Buscar duda (ej. parabenos, piel sensible, envío...)" aria-label="Buscar en preguntas frecuentes">
```
Actualiza el `placeholder` a:
```html
        <input type="search" id="faq-search-input" class="form-control faq-search-input" placeholder="Buscar duda (ej. ácido hialurónico, rastreo, piel sensible, envío...)" aria-label="Buscar en preguntas frecuentes">
```

### En la Tarea 2 (`pages/faq.html`, justo después del cierre del ítem `#f8` en la línea 141)
Busca el cierre del octavo `.accordion-item` (antes del `</div>` que cierra `#faqAccordion` en la línea 142) y añade el noveno `.accordion-item`:
```html
          <div class="accordion-item">
            <h2 class="accordion-header" id="faqHeading9">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#f9" aria-expanded="false" aria-controls="f9">
                ¿Cómo puedo rastrear mi pedido una vez enviado?
              </button>
            </h2>
            <div id="f9" class="accordion-collapse collapse" aria-labelledby="faqHeading9" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                En cuanto tu orden sale de nuestro atelier, recibirás un correo automático con tu número de guía y el enlace directo de seguimiento en tiempo real. También puedes consultar los tiempos por región en <a href="envios.html" data-route="pages/envios.html" class="text-burgundy fw-bold">Envíos &amp; Devoluciones</a>.
              </div>
            </div>
          </div>
```

### En la Tarea 3 (`css/pages/faq.css`, líneas 58–64)
Busca `.accordion-luxe .accordion-item`:
```css
.accordion-luxe .accordion-item {
  border: 1px solid rgba(243, 230, 227, 0.85);
  border-radius: 16px !important;
  margin-bottom: 0.75rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
```
Cambia `margin-bottom: 0.75rem;` por:
```css
  margin-bottom: 1rem;
```

---

## 8. Resultado esperado
En `pages/faq.html`, el acordeón cuenta con 9 preguntas frecuentes, mayor separación vertical entre tarjetas y, al escribir `"rastreo"` en el buscador superior, el script `js/pages/faq.js` filtra en vivo y muestra la nueva pregunta #9.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/faq.html`.
2. Haz clic en la nueva pregunta **«¿Cómo puedo rastrear mi pedido una vez enviado?»** para verificar que se despliega y se pliega con normalidad.
3. Escribe `rastreo` en el cuadro de búsqueda superior y comprueba que el filtro en vivo deja visible la nueva pregunta.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`feat/adriana-dia07-envios` en dos pasos)
```bash
# Paso A: Descargar el primer envío de Adriana
git fetch origin
git switch --track origin/feat/adriana-dia07-envios
git log --oneline -n 3
git diff main...feat/adriana-dia07-envios
# -> Observa que Adriana modificó pages/envios.html, pero falta actualizar .policy-icon en css/pages/envios.css.
# -> NO fusiones todavía: pide a Adriana que realice su Tarea 3 y haga git push a la misma rama.

# Paso B: Cuando Adriana te avise que subió el segundo commit a feat/adriana-dia07-envios:
git status
git fetch origin
git status
# Observa que git status te indica que tu rama local está 1 commit por detrás ('behind by 1 commit').
git pull --ff-only origin feat/adriana-dia07-envios
git log --oneline -n 3
git show HEAD

# Paso C: Ahora que los 2 commits están completos y verificados en el navegador, integrar en main:
git switch main
git pull --ff-only origin main
git merge feat/adriana-dia07-envios
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2
```bash
git switch main
git switch -c feat/jamile-dia07-faq

# Commit 1: Buscador y pregunta #9 en pages/faq.html
git add pages/faq.html
git commit -m "Actualizar buscador y anadir pregunta sobre rastreo en faq.html"

# Commit 2: Espaciado en css/pages/faq.css
git add css/pages/faq.css
git commit -m "Aumentar margen inferior de items del acordeon en faq.css"

git push -u origin feat/jamile-dia07-faq
```

---

## 11. Criterios para considerar la tarea terminada
- Practicaste retener la integración del Turno 1 hasta recibir y descargar con `git pull --ff-only` el segundo commit correctivo de Adriana en `feat/adriana-dia07-envios`.
- Publicaste los 2 commits de `feat/jamile-dia07-faq` y fueron integrados por Adriana en `main`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Adriana la rama `feat/jamile-dia07-faq` indicando que pruebe la pregunta #9 y el buscador en `pages/faq.html`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Verifica que el nuevo bloque de la pregunta #9 quede **dentro** de `<div class="accordion accordion-luxe" id="faqAccordion">` y no afuera, para que tanto Bootstrap como el buscador de `js/pages/faq.js` lo reconozcan como parte del acordeón.

