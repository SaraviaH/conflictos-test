# Guía de Práctica — Jamile (Día 02)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 02 de 15** — Preparación selectiva por archivo (`git add <archivo>`), auditoría con `git diff --staged` y `git show`, y corrección del componente Header.

## 3. Objetivo de aprendizaje de Git
Abrir hoy la jornada como **Desarrolladora (Turno 1)** actualizando `main`, creando la rama `fix/jamile-dia02-header` y preparando commits separados para el CSS y el HTML del encabezado; luego, en el **Turno 2**, actuar como **Revisora e Integradora** de la rama `fix/adriana-dia02-nosotros` creada por Adriana.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `fix/jamile-dia02-header`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `fix/adriana-dia02-nosotros`).

---

## 5. Lista de 2 tareas concretas (para tu Turno 1 como Desarrolladora)

1. **Tarea 1 (Componente CSS):** Corregir el color de fondo rojizo (`rgba(184, 48, 48, 0.94)`) y el borde inferior verde (`rgba(55, 212, 120, 0.22)`) de `.luxe-navbar` en `css/components/header/header.css`.
2. **Tarea 2 (Componente HTML):** Actualizar el texto informativo de la franja superior `.luxe-topbar` en `components/header/header.html` para destacar el envío express y las muestras botánicas de cortesía.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `css/components/header/header.css` (líneas 24–31).
- `components/header/header.html` (línea 4).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`css/components/header/header.css`, líneas 24–31)
Busca la regla `.luxe-navbar`:
```css
.luxe-navbar {
  background: rgba(184, 48, 48, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(55, 212, 120, 0.22);
  transition: var(--transition);
  padding: 0.85rem 0;
}
```
Reemplaza `background` y `border-bottom` por los tonos crema y dorado de la marca:
```css
.luxe-navbar {
  background: rgba(255, 253, 251, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.22);
  transition: var(--transition);
  padding: 0.85rem 0;
}
```

### En la Tarea 2 (`components/header/header.html`, línea 4)
Busca dentro de `.luxe-topbar`:
```html
    <span><i class="fas fa-truck me-2 text-gold" aria-hidden="true"></i>Envío Express Gratis en compras superiores a $50</span>
```
Actualízalo a:
```html
    <span><i class="fas fa-truck me-2 text-gold" aria-hidden="true"></i>Envío Express Gratis en compras superiores a $50 | Muestras botánicas en cada pedido</span>
```

---

## 8. Resultado esperado
La barra de navegación principal (`.luxe-navbar`) de todas las páginas del sitio deja de tener el fondo rojo oscuro y el borde verde, recuperando su superficie crema translúcida sobre la que resaltan con nitidez el logotipo borgoña y los enlaces del menú.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/index.html` y `http://localhost:5500/pages/tienda.html`.
2. Comprueba que la barra de navegación superior es blanca/crema translúcida con una línea inferior dorada sutil.
3. Comprueba en la barra superior borgoña oscuro (`.luxe-topbar`) el nuevo texto con `| Muestras botánicas en cada pedido`.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1)
```bash
# 1. Asegurar que tu main local tiene integrada la última tarea del Día 01
git switch main
git fetch origin
git pull --ff-only origin main
git status

# 2. Crear y cambiar a la rama del Día 02
git switch -c fix/jamile-dia02-header

# 3. Realiza ambos cambios en el editor, pero prepáralos en dos commits distintos con git add <archivo>:
git status
git diff css/components/header/header.css
git add css/components/header/header.css
git diff --staged
git commit -m "Restaurar fondo crema translucido y borde dorado en header.css"

git diff components/header/header.html
git add components/header/header.html
git diff --staged
git commit -m "Ampliar mensaje de envio y muestras en topbar de header.html"

# 4. Inspeccionar el último commit con git show y publicar la rama
git log --oneline -n 3
git show HEAD
git push -u origin fix/jamile-dia02-header
```

### Fase 2: Como Revisora e Integradora del Turno 2 (cuando Adriana publique `fix/adriana-dia02-nosotros`)
```bash
git fetch origin
git branch -r
git switch --track origin/fix/adriana-dia02-nosotros
git log --oneline -n 4
git diff main...fix/adriana-dia02-nosotros
git show HEAD
# Tras revisar pages/nosotros.html en el navegador:
git switch main
git pull --ff-only origin main
git merge fix/adriana-dia02-nosotros
git push origin main
git status
```

---

## 11. Criterios para considerar la tarea terminada
- Creaste 2 commits separados en `fix/jamile-dia02-header` usando `git add <archivo>` y la publicaste en GitHub.
- Adriana revisó e integró tu rama en `main`.
- En el Turno 2 descargaste, revisaste en el navegador e integraste en `main` la rama `fix/adriana-dia02-nosotros`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Adriana el nombre exacto de tu rama `fix/jamile-dia02-header` indicando que verifique el encabezado superior en cualquier página del sitio.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al iniciar el Día 02 notas que tu `main` local no tiene tus propios cambios del final del Día 01 (porque Adriana hizo el merge en su computadora), recuerda que siempre debes ejecutar `git switch main && git pull --ff-only origin main` al comenzar el día.

