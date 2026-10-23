# Guía de Práctica — Jamile (Día 06)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 06 de 15** — Incorporación de imágenes existentes del proyecto con `alt` accesible y descarga explícita con `git switch -c <rama> --track origin/<rama>`.

## 3. Objetivo de aprendizaje de Git
Desarrollar en el Turno 1 una mejora visual en `pages/ingredientes.html` utilizando un recurso gráfico real del repositorio (`assets/images/banners/hero_banner.png`) y ajustando `css/pages/ingredientes.css`; y en el Turno 2 practicar la forma explícita `git switch -c nombre-rama --track origin/nombre-rama` para revisar los 3 commits de la rama de Adriana.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/jamile-dia06-banner-ingredientes`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/adriana-dia06-tarjetas-producto`).

---

## 5. Lista de 2 tareas concretas (para tu Turno 1 como Desarrolladora)

1. **Tarea 1 (HTML + Imagen):** Incorporar en `pages/ingredientes.html` una imagen panorámica ilustrativa empleando el archivo real `../assets/images/banners/hero_banner.png` con su texto alternativo (`alt`), carga diferida (`loading="lazy"`) y proporción controlada.
2. **Tarea 2 (CSS):** Ajustar las dimensiones (`60px x 60px`) y cambiar el borde discontinuo por continuo en `.ingrediente-icon` dentro de `css/pages/ingredientes.css`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/ingredientes.html` (justo debajo de `</section>` de `.ingredientes-hero`, alrededor de la línea 31).
- `css/pages/ingredientes.css` (líneas 46–58).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`pages/ingredientes.html`, líneas 24–32)
Busca el cierre de `.ingredientes-hero`:
```html
    <section class="ingredientes-hero">
      <span class="status-tag"><i class="fas fa-flask me-1" aria-hidden="true"></i> Transparencia INCI</span>
      <h1 class="font-serif display-6 fw-bold text-burgundy-dark mb-3">Ingredientes que Hablan Claro</h1>
      <p class="lead text-muted mx-auto mb-0" style="max-width: 700px;">
        Formulación limpia no es un eslogan, es un método: activos botánicos trazables, péptidos biomiméticos de alta pureza y exclusión estricta de componentes irritantes.
      </p>
    </section>
```
Justo debajo de `</section>`, añade un contenedor con la imagen existente `../assets/images/banners/hero_banner.png`:
```html
    <div class="mb-4">
      <img src="../assets/images/banners/hero_banner.png" alt="Mesa de formulación botánica con pétalos frescos y frascos de cristal Luxe Glow" class="img-fluid rounded-4 shadow-sm w-100 border" style="max-height: 260px; object-fit: cover;" loading="lazy">
    </div>
```

### En la Tarea 2 (`css/pages/ingredientes.css`, líneas 46–58)
Busca `.ingrediente-icon`:
```css
.ingrediente-icon {
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
Actualiza `width`, `height` y `border` para que quede:
```css
.ingrediente-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-rose-dusty);
  color: var(--color-burgundy-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border: 1.5px solid rgba(212, 175, 55, 0.45);
}
```

---

## 8. Resultado esperado
En `pages/ingredientes.html`, bajo el bloque de título aparece un banner fotográfico panorámico de 260px de altura máxima con bordes redondeados, y los iconos de las 6 tarjetas de activos lucen un borde circular continuo.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/ingredientes.html`.
2. Comprueba que la imagen `hero_banner.png` se muestra nítida y sin deformarse (`object-fit: cover`).
3. Verifica que los iconos de las 6 tarjetas tienen borde continuo.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1)
```bash
git switch main
git pull --ff-only origin main
git switch -c feat/jamile-dia06-banner-ingredientes

# Commit 1: Imagen en pages/ingredientes.html
git add pages/ingredientes.html
git commit -m "Incorporar banner visual con atributo alt en ingredientes.html"

# Commit 2: Ajuste de iconos en css/pages/ingredientes.css
git add css/pages/ingredientes.css
git commit -m "Ajustar tamano y borde continuo de .ingrediente-icon en ingredientes.css"

git push -u origin feat/jamile-dia06-banner-ingredientes
```

### Fase 2: Como Revisora e Integradora del Turno 2 (`feat/adriana-dia06-tarjetas-producto`)
```bash
git fetch origin
git branch -r
# Practicar la forma explícita con -c y --track:
git switch -c feat/adriana-dia06-tarjetas-producto --track origin/feat/adriana-dia06-tarjetas-producto
git log --oneline -n 4
git diff --name-status main...feat/adriana-dia06-tarjetas-producto
# Inspeccionar un commit individual de Adriana con git show:
git show HEAD
# Tras comprobar el footer y la Paleta Rose Quartz en Tienda:
git switch main
git pull --ff-only origin main
git merge feat/adriana-dia06-tarjetas-producto
git push origin main
```

---

## 11. Criterios para considerar la tarea terminada
- La imagen `../assets/images/banners/hero_banner.png` carga sin error en `pages/ingredientes.html` y cuenta con atributo `alt` descriptivo.
- En el Turno 2 descargaste la rama de Adriana con `git switch -c ... --track origin/...`, inspeccionaste sus 3 commits y los integraste en `main`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Adriana la rama `feat/jamile-dia06-banner-ingredientes` para que verifique la imagen y los iconos en `pages/ingredientes.html`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Como `pages/ingredientes.html` está dentro de la subcarpeta `pages/`, recuerda que la ruta relativa hacia `assets/` debe empezar con `../` (`../assets/images/banners/hero_banner.png`). Si olvidas `../`, la imagen no cargará.

