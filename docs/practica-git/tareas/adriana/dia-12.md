# Guía de Práctica — Adriana (Día 12)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 12 de 15** — Uso seguro de `git reset --soft`, `git reset --mixed` y auditoría de movimientos con `git reflog`.

## 3. Objetivo de aprendizaje de Git
Comprender y practicar en tu propia rama (antes de hacer `push`) la diferencia real entre `git reset --soft HEAD~1` (que deshace el commit dejando los cambios preparados en verde) y `git reset --mixed HEAD~1` (que deshace el commit dejando los cambios sin preparar en los archivos), y consultar `git reflog` para ver cómo Git registra cada movimiento de `HEAD`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/jamile-dia12-mensajes-contacto`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/adriana-dia12-mensajes-tienda`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (JS):** Enriquecer el mensaje de notificación Toast al suscribirse al Círculo Privado VIP en `js/pages/tienda.js`.
2. **Tarea 2 (JS):** Mejorar el mensaje Toast al procesar la compra (`checkout()`) en `js/utils/cart.js`.
3. **Tarea 3 (Práctica de `reset` y `reflog`):** Practicar `git reset --soft HEAD~1`, `git reset --mixed HEAD~1` y `git reflog` sobre tus commits locales antes de publicarlos en GitHub.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `js/pages/tienda.js` (línea 211).
- `js/utils/cart.js` (línea 127).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`js/pages/tienda.js`, línea 211)
Busca dentro de `bindControls()` en el evento `submit` de `vipForm`:
```javascript
        if (window.Cart) {
          window.Cart.showToast('¡Bienvenida al Círculo Privado! Tu código de 15% es <b>LUXE15</b>');
        }
```
Actualízalo a:
```javascript
        if (window.Cart) {
          window.Cart.showToast('¡Bienvenida al Círculo Privado Luxe Glow! Tu código de 15% de descuento es <b>LUXE15</b>.');
        }
```

### En la Tarea 2 (`js/utils/cart.js`, línea 127)
Busca dentro del método `checkout()`:
```javascript
  checkout() {
    this.showToast('¡Pedido simulado con éxito! Gracias por tu preferencia en Luxe Glow.');
```
Actualízalo a:
```javascript
  checkout() {
    this.showToast('¡Pedido registrado con éxito! Gracias por confiar tu ritual a Luxe Glow Cosmetics.');
```

---

## 8. Resultado esperado
- En `pages/tienda.html`, al ingresar un correo en el formulario «Únete al Círculo Privado Luxe Glow», la notificación emergente muestra el nuevo mensaje con `LUXE15`.
- Al añadir un producto al carrito y pulsar «Procesar Compra», aparece el mensaje mejorado de confirmación de pedido.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/tienda.html`.
2. En el banner oscuro inferior, escribe `adriana@ejemplo.com` y pulsa **Obtener 15%**: comprueba el texto del Toast en la esquina inferior derecha.
3. Añade cualquier producto al carrito, pulsa **Procesar Compra** en el panel lateral y comprueba el nuevo mensaje del Toast.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`feat/jamile-dia12-mensajes-contacto`)
```bash
git fetch origin
git switch --track origin/feat/jamile-dia12-mensajes-contacto
git log --oneline -n 3
git diff main...feat/jamile-dia12-mensajes-contacto
# Tras probar los dos formularios en pages/contacto.html:
git switch main
git pull --ff-only origin main
git merge --no-ff feat/jamile-dia12-mensajes-contacto -m "Merge branch 'feat/jamile-dia12-mensajes-contacto' into main"
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2 (Practicando `--soft`, `--mixed` y `reflog`)
```bash
git switch main
git switch -c feat/adriana-dia12-mensajes-tienda

# 1. Realizar la Tarea 1 en js/pages/tienda.js y hacer un commit de prueba
git add js/pages/tienda.js
git commit -m "Commit temporal tienda"

# 2. Practicar git reset --soft HEAD~1 (deshace el commit pero deja el archivo en Staging verde):
git reset --soft HEAD~1
git status
# Observa que js/pages/tienda.js sigue en verde ('Changes to be committed').

# 3. Volver a hacer el commit con el mensaje definitivo:
git commit -m "Actualizar mensaje Toast de suscripcion VIP en js/pages/tienda.js"

# 4. Realizar la Tarea 2 en js/utils/cart.js y hacer un commit
git add js/utils/cart.js
git commit -m "Commit temporal carrito"

# 5. Practicar git reset --mixed HEAD~1 (deshace el commit y saca el archivo de Staging, pero conserva el código):
git reset --mixed HEAD~1
git status
# Observa que js/utils/cart.js está en rojo ('Changes not staged for commit') con tus cambios intactos.

# 6. Volver a preparar y confirmar con mensaje definitivo:
git add js/utils/cart.js
git commit -m "Mejorar mensaje Toast de confirmacion de compra en js/utils/cart.js"

# 7. Consultar la bitácora de movimientos con git reflog:
git reflog -n 8

# 8. Publicar la rama en GitHub
git push -u origin feat/adriana-dia12-mensajes-tienda
```
- **Qué buscas aprender:** Comprobar que `--soft` y `--mixed` te permiten reorganizar o corregir commits locales sin perder una sola línea de código, y que `git reflog` guarda el rastro de todos los commits intermedios.

---

## 11. Criterios para considerar la tarea terminada
- Practicaste `git reset --soft HEAD~1`, `git reset --mixed HEAD~1` y `git reflog` sin usar `--hard`.
- Tu rama `feat/adriana-dia12-mensajes-tienda` contiene los 2 commits limpios y fue publicada e integrada por Jamile.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Jamile la rama `feat/adriana-dia12-mensajes-tienda` indicando que pruebe el formulario VIP en `pages/tienda.html` y el botón «Procesar Compra» del carrito.

## 13. Qué debe hacer si encuentra un error o un conflicto
- **Advertencia clave:** Nunca ejecutes `git reset --hard`, ya que borraría las modificaciones de tus archivos. Y recuerda usar `reset` únicamente sobre commits locales que aún no hayas subido con `git push`.

