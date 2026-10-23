# Guía de Práctica — Adriana (Día 09)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 09 de 15** — Almacenamiento temporal de cambios locales con `git stash` (`stash push -m`, `stash list`, `stash show`, `stash pop`).

## 3. Objetivo de aprendizaje de Git
Practicar qué hacer cuando tienes cambios sin confirmar y necesitas cambiar de rama o atender una consulta sin hacer un commit incompleto: guardar el trabajo en la pila temporal con `git stash push -m "..."`, inspeccionar la pila con `git stash list` y recuperarlo con `git stash pop`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/adriana-dia09-tienda-vip`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/jamile-dia09-reembolso`).

---

## 5. Lista de 3 tareas concretas

1. **Tarea 1 (HTML):** Actualizar la cuarta píldora estadística del encabezado de Tienda (`.store-stat-pill`) en `pages/tienda.html`.
2. **Tarea 2 (HTML):** Actualizar la insignia superior de la sección «Círculo Privado Luxe Glow» (`.vip-club-card`) en `pages/tienda.html`.
3. **Tarea 3 (CSS):** Añadir una transición suave (`transition: var(--transition);`) a las píldoras estadísticas `.store-stat-pill` en `css/pages/tienda.css`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/tienda.html` (líneas 39 y 139).
- `css/pages/tienda.css` (líneas 29–41).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`pages/tienda.html`, línea 39)
Busca la cuarta `.store-stat-pill`:
```html
<span class="store-stat-pill"><i class="fas fa-star text-gold me-2" aria-hidden="true"></i>4.9 / 5 Valoración Global</span>
```
Cámbiala por:
```html
<span class="store-stat-pill"><i class="fas fa-star text-gold me-2" aria-hidden="true"></i>4.9 / 5 (+800 Reseñas Verificadas)</span>
```

### En la Tarea 2 (`pages/tienda.html`, línea 139)
Busca dentro de `.vip-club-card`:
```html
<span class="badge bg-gold text-dark fw-bold text-uppercase px-3 py-1 mb-2" style="letter-spacing:1px">Membresía Gratuita</span>
```
Cámbiala por:
```html
<span class="badge bg-gold text-dark fw-bold text-uppercase px-3 py-1 mb-2" style="letter-spacing:1px">Círculo Exclusivo · Membresía Gratuita</span>
```

### En la Tarea 3 (`css/pages/tienda.css`, líneas 29–41)
Busca `.store-stat-pill`:
```css
.store-stat-pill {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 30px;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-burgundy-dark);
  box-shadow: var(--shadow-sm);
}
```
Añade `transition: var(--transition);` al final del bloque:
```css
.store-stat-pill {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 30px;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-burgundy-dark);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}
```

---

## 8. Resultado esperado
En `pages/tienda.html`, el hero de la tienda muestra `4.9 / 5 (+800 Reseñas Verificadas)` y el banner inferior del Club VIP presenta la insignia `CÍRCULO EXCLUSIVO · MEMBRESÍA GRATUITA`.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/tienda.html`.
2. Comprueba la cuarta píldora bajo el párrafo principal del hero y la insignia dorada del bloque oscuro inferior «Únete al Círculo Privado Luxe Glow».

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1 — Practicando `git stash`)
```bash
git switch main
git pull --ff-only origin main
git switch -c feat/adriana-dia09-tienda-vip

# 1. Realiza primero la Tarea 1 en pages/tienda.html (sin hacer add ni commit todavía)
git status

# 2. Simula que necesitas volver un momento a main con el directorio limpio:
#    Guarda tu avance temporalmente en el stash con mensaje descriptivo
git stash push -m "Avance parcial de pildora de resenas en tienda.html"
git status
# Observa que ahora dice 'working tree clean'
git stash list
git stash show -p stash@{0}

# 3. Cambia a main un instante y regresa a tu rama:
git switch main
git switch feat/adriana-dia09-tienda-vip

# 4. Recupera tus cambios desde el stash:
git stash pop
git status

# 5. Completa la Tarea 2 en pages/tienda.html y haz el primer commit:
git add pages/tienda.html
git commit -m "Actualizar pildora de resenas e insignia VIP en tienda.html"

# 6. Realiza la Tarea 3 en css/pages/tienda.css y haz el segundo commit:
git add css/pages/tienda.css
git commit -m "Anadir transicion suave a .store-stat-pill en tienda.css"

git push -u origin feat/adriana-dia09-tienda-vip
```

### Fase 2: Como Revisora e Integradora del Turno 2 (`feat/jamile-dia09-reembolso`)
```bash
git fetch origin
git switch --track origin/feat/jamile-dia09-reembolso
git log --oneline -n 4
git diff main...feat/jamile-dia09-reembolso
# Tras abrir http://localhost:5500/pages/rembolso.html y comprobar su diseño:
git switch main
git pull --ff-only origin main
git merge --no-ff feat/jamile-dia09-reembolso -m "Merge branch 'feat/jamile-dia09-reembolso' into main"
git push origin main
```

---

## 11. Criterios para considerar la tarea terminada
- Practicaste `git stash push -m`, `git stash list`, `git stash show -p` y `git stash pop`, comprobando al final con `git stash list` que la pila quedó vacía.
- Publicaste `feat/adriana-dia09-tienda-vip` y en el Turno 2 revisaste e integraste `feat/jamile-dia09-reembolso`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Jamile la rama `feat/adriana-dia09-tienda-vip` para que revise `pages/tienda.html` y `css/pages/tienda.css`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si ejecutas `git stash pop` estando parada en la rama equivocada, aplica los cambios pero deshazlos o vuelve a hacer `git stash push` antes de cambiarte a la rama correcta `feat/adriana-dia09-tienda-vip`.

