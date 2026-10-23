# Guía de Práctica — Adriana (Día 07)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 07 de 15** — Flujo de revisión con solicitud de ajuste: publicar un commit adicional en una rama que ya estaba en GitHub antes de integrarla.

## 3. Objetivo de aprendizaje de Git
Aprender cómo actuar cuando una revisora solicita un cambio adicional antes de aprobar la fusión: añadir un nuevo commit a la misma rama ya publicada (sin reescribir el historial con `--amend`) y subirlo con `git push origin <rama>`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/adriana-dia07-envios`, incluyendo un ciclo de retroalimentación con Jamile).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/jamile-dia07-faq`).

---

## 5. Lista de 3 tareas concretas

1. **Tarea 1 (HTML):** Actualizar el plazo estimado de entrega para `CDMX & Área Metropolitana` en la tabla de tarifas de `pages/envios.html`.
2. **Tarea 2 (HTML):** Añadir un quinto paso informativo sobre el comprobante de abono en la lista ordenada «Cómo solicitar una devolución» de `pages/envios.html`.
3. **Tarea 3 (CSS — En respuesta a la revisión de Jamile):** Cambiar el borde discontinuo (`dashed`) por continuo (`solid`) en `.policy-icon` dentro de `css/pages/envios.css` y publicar el commit adicional en la misma rama.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/envios.html` (líneas 80–85 y 110–115).
- `css/pages/envios.css` (líneas 43–55).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`pages/envios.html`, líneas 80–85)
Busca la primera fila del `<tbody>` en la tabla de plazos:
```html
            <tr>
              <td>CDMX &amp; Área Metropolitana</td>
              <td>2 días hábiles</td>
              <td>Gratis &gt; $50 / $5.99</td>
              <td>Entrega en horario hábil (9:00 – 18:00 h)</td>
            </tr>
```
Cambia `<td>2 días hábiles</td>` por:
```html
            <tr>
              <td>CDMX &amp; Área Metropolitana</td>
              <td>1 – 2 días hábiles (Express)</td>
              <td>Gratis &gt; $50 / $5.99</td>
              <td>Entrega en horario hábil (9:00 – 18:00 h)</td>
            </tr>
```

### En la Tarea 2 (`pages/envios.html`, líneas 110–115)
Busca la lista ordenada `<ol>` bajo «Cómo solicitar una devolución»:
```html
          <ol class="small text-muted mb-0">
            <li>Escribe a <strong>contacto@luxeglow.com</strong> indicando tu número de pedido.</li>
            <li>Te enviaremos una guía prepagada e instrucciones de embalaje.</li>
            <li>Entrega el paquete sellado en la sucursal aliada más cercana.</li>
            <li>Recibe tu reembolso en un lapso de 5 a 7 días hábiles tras la revisión.</li>
          </ol>
```
Añade el quinto paso:
```html
          <ol class="small text-muted mb-0">
            <li>Escribe a <strong>contacto@luxeglow.com</strong> indicando tu número de pedido.</li>
            <li>Te enviaremos una guía prepagada e instrucciones de embalaje.</li>
            <li>Entrega el paquete sellado en la sucursal aliada más cercana.</li>
            <li>Recibe tu reembolso en un lapso de 5 a 7 días hábiles tras la revisión.</li>
            <li>Recibirás un comprobante por correo electrónico en cuanto se procese el abono.</li>
          </ol>
```

### En la Tarea 3 (`css/pages/envios.css`, líneas 43–55 — Tras el primer aviso de revisión de Jamile)
Busca `.policy-icon`:
```css
.policy-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-rose-dusty);
  color: var(--color-burgundy-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border: 1px dashed var(--color-gold);
}
```
Cambia la última línea (`border: 1px dashed var(--color-gold);`) por:
```css
  border: 1.5px solid var(--color-gold);
```

---

## 8. Resultado esperado
En `pages/envios.html`, la tabla muestra `1 – 2 días hábiles (Express)` para CDMX, la guía de devolución incluye 5 pasos numerados y los tres iconos circulares superiores lucen un borde dorado continuo en armonía con la página de Ingredientes.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/envios.html`.
2. Revisa la primera fila de la «Tabla de Plazos y Tarifas» y los 5 puntos de «Cómo solicitar una devolución».
3. Tras realizar la Tarea 3, verifica que los círculos de los iconos de «Envío Express», «Devolución 30 Días» y «Pago Seguro» tienen borde continuo.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1 con ciclo de revisión)
```bash
# Paso A: Crear la rama y subir primero las Tareas 1 y 2
git switch main
git pull --ff-only origin main
git switch -c feat/adriana-dia07-envios

git add pages/envios.html
git commit -m "Actualizar plazo CDMX y pasos de devolucion en envios.html"
git push -u origin feat/adriana-dia07-envios
# -> Avisa a Jamile para que descargue la rama y la revise.
# -> Jamile revisará la rama y te pedirá completar la Tarea 3 (borde continuo en envios.css) antes de fusionar.

# Paso B: Añadir el commit de corrección (Tarea 3) SIN usar --amend
git status
git add css/pages/envios.css
git commit -m "Cambiar borde de .policy-icon a continuo en envios.css"
git push origin feat/adriana-dia07-envios
# -> Avisa a Jamile que ya subiste el nuevo commit para que ella haga git pull en esa rama e integre en main.
```
- **Qué buscas aprender:** Cuando una rama ya fue subida a GitHub y descargada por tu compañera, cualquier corrección se agrega como un **nuevo commit** normal seguido de `git push`.

### Fase 2: Como Revisora e Integradora del Turno 2 (`feat/jamile-dia07-faq`)
```bash
git fetch origin
git switch --track origin/feat/jamile-dia07-faq
git log --oneline -n 4
git diff main...feat/jamile-dia07-faq
# Tras probar el buscador y la pregunta #9 en pages/faq.html:
git switch main
git pull --ff-only origin main
git merge feat/jamile-dia07-faq
git push origin main
```

---

## 11. Criterios para considerar la tarea terminada
- Subiste primero el commit de `pages/envios.html` y luego, como ejercicio de corrección de revisión, subiste el segundo commit de `css/pages/envios.css` a la misma rama `feat/adriana-dia07-envios`.
- Jamile actualizó la rama con `git pull` e integró ambos commits en `main`.
- En el Turno 2 revisaste e integraste `feat/jamile-dia07-faq`.

## 12. Qué debe entregar a su compañera para la revisión
1. Primero el nombre de la rama `feat/adriana-dia07-envios` con el primer commit.
2. Después de aplicar la observación, el aviso de que el segundo commit ya fue publicado en `origin/feat/adriana-dia07-envios`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- **Recuerda:** No uses `git commit --amend` en el Paso B porque Jamile ya tiene descargado el primer commit en su computadora; si usaras `--amend`, le generarías una divergencia de historial al hacer `git pull`.

