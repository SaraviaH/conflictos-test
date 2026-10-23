# Guía de Práctica — Jamile (Día 12)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 12 de 15** — Uso seguro de `git reset --soft`, `git reset --mixed` y consulta de bitácora con `git reflog`.

## 3. Objetivo de aprendizaje de Git
Experimentar en tu rama local (antes de hacer `push`) la diferencia exacta entre `git reset --soft HEAD~1` (deshace el commit manteniendo los archivos en el área de preparación) y `git reset --mixed HEAD~1` (deshace el commit y saca los archivos del área de preparación sin borrar tus cambios), y auditar el historial de movimientos de `HEAD` con `git reflog`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/jamile-dia12-mensajes-contacto`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/adriana-dia12-mensajes-tienda`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 1 como Desarrolladora)

1. **Tarea 1 (JS):** Actualizar el mensaje de notificación Toast al enviar el formulario de contacto en `js/pages/contacto.js` (línea 19).
2. **Tarea 2 (JS):** Actualizar el mensaje de notificación Toast al suscribirse al boletín informativo en `js/pages/contacto.js` (línea 37).
3. **Tarea 3 (Práctica de `reset` y `reflog`):** Practicar `git reset --soft HEAD~1`, `git reset --mixed HEAD~1` y `git reflog` sobre tus commits locales antes de publicarlos en GitHub.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `js/pages/contacto.js` (líneas 18–20 y 36–38).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`js/pages/contacto.js`, líneas 18–20)
Busca dentro del manejador de `contactForm`:
```javascript
      if (window.Cart) {
        window.Cart.showToast('¡Mensaje enviado con éxito! Nuestro equipo de asesoría te responderá en menos de 24 horas.');
      }
```
Actualízalo a:
```javascript
      if (window.Cart) {
        window.Cart.showToast('¡Mensaje enviado con éxito! Nuestro equipo de especialistas dermocosméticos te responderá en menos de 24 horas hábiles.');
      }
```

### En la Tarea 2 (`js/pages/contacto.js`, líneas 36–38)
Busca dentro del manejador de `newsletterForm`:
```javascript
      if (window.Cart) {
        window.Cart.showToast('¡Gracias por suscribirte! Recibirás nuestras novedades y lanzamientos exclusivos.');
      }
```
Actualízalo a:
```javascript
      if (window.Cart) {
        window.Cart.showToast('¡Suscripción confirmada! Recibirás nuestras guías botánicas y lanzamientos exclusivos.');
      }
```

---

## 8. Resultado esperado
En `pages/contacto.html`, tanto al enviar el formulario principal de consulta como al suscribirse al boletín de novedades, las notificaciones emergentes (Toast) en la esquina inferior derecha muestran los nuevos textos personalizados.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/contacto.html`.
2. En el recuadro izquierdo «¿Deseas recibir novedades?», ingresa `jamile@ejemplo.com` y pulsa **Suscribirme**: verifica el mensaje del Toast.
3. Completa los campos de «Envíanos un mensaje» (Nombre, Correo y Mensaje) y pulsa **Enviar Mensaje**: verifica el segundo Toast.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1 — Practicando `--soft`, `--mixed` y `reflog`)
```bash
git switch main
git pull --ff-only origin main
git switch -c feat/jamile-dia12-mensajes-contacto

# 1. Realizar la Tarea 1 en js/pages/contacto.js y crear un commit de prueba
git add js/pages/contacto.js
git commit -m "Mensaje temporal contacto"

# 2. Practicar git reset --soft HEAD~1 (deshace el commit conservando el archivo en Staging verde):
git reset --soft HEAD~1
git status
# Comprueba que js/pages/contacto.js sigue en verde ('Changes to be committed').

# 3. Confirmar con el mensaje definitivo del primer commit:
git commit -m "Personalizar mensaje Toast de formulario de asesoria en contacto.js"

# 4. Realizar la Tarea 2 en js/pages/contacto.js y hacer un commit temporal
git add js/pages/contacto.js
git commit -m "Mensaje temporal newsletter"

# 5. Practicar git reset --mixed HEAD~1 (deshace el commit y saca el archivo de Staging sin borrar código):
git reset --mixed HEAD~1
git status
# Comprueba que js/pages/contacto.js aparece en rojo ('Changes not staged') pero tu código sigue intacto.

# 6. Volver a preparar y confirmar el segundo commit definitivo:
git add js/pages/contacto.js
git commit -m "Actualizar mensaje Toast de suscripcion a novedades en contacto.js"

# 7. Inspeccionar la bitácora local de movimientos con git reflog:
git reflog -n 8

# 8. Publicar la rama en GitHub
git push -u origin feat/jamile-dia12-mensajes-contacto
```

### Fase 2: Como Revisora e Integradora del Turno 2 (`feat/adriana-dia12-mensajes-tienda`)
```bash
git fetch origin
git switch --track origin/feat/adriana-dia12-mensajes-tienda
git log --oneline -n 3
git diff main...feat/adriana-dia12-mensajes-tienda
# Tras probar en pages/tienda.html el formulario VIP y el carrito:
git switch main
git pull --ff-only origin main
git merge --no-ff feat/adriana-dia12-mensajes-tienda -m "Merge branch 'feat/adriana-dia12-mensajes-tienda' into main"
git push origin main
```

---

## 11. Criterios para considerar la tarea terminada
- Practicaste `git reset --soft HEAD~1`, `git reset --mixed HEAD~1` y `git reflog` sobre commits locales sin usar `--hard`.
- Publicaste los 2 commits de `feat/jamile-dia12-mensajes-contacto` y en el Turno 2 revisaste e integraste `feat/adriana-dia12-mensajes-tienda`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Adriana la rama `feat/jamile-dia12-mensajes-contacto` indicando que pruebe ambos formularios en `pages/contacto.html`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- **Recuerda:** Nunca utilices `git reset --hard` porque destruiría los cambios de tus archivos. Y nunca uses `reset` sobre commits que ya hayan sido subidos a GitHub con `git push`.

