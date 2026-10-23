# Guía de Práctica — Adriana (Día 06)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 06 de 15** — Descarga explícita con `git switch -c <rama> --track origin/<rama>` y mejoras en componentes reutilizables (Footer, Tarjeta de Producto y Catálogo).

## 3. Objetivo de aprendizaje de Git
Practicar en el Turno 1 la variante explícita `git switch -c nombre-rama --track origin/nombre-rama` para revisar el trabajo de Jamile con recursos gráficos, e implementar en el Turno 2 tres mejoras independientes en tres archivos distintos (componente HTML, hoja CSS de componente y archivo JSON de datos) registrando un commit por cada archivo.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/jamile-dia06-banner-ingredientes`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/adriana-dia06-tarjetas-producto`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (Componente HTML):** Completar el enlace faltante en la columna «Ayuda» del pie de página (`components/footer/footer.html`, línea 44).
2. **Tarea 2 (Componente CSS):** Ajustar la altura de imagen y añadir un borde inferior dorado sutil en `.luxe-product-card__media` (`css/components/product-card/product-card.css`).
3. **Tarea 3 (JSON):** Añadir `"originalPrice": 46.00` y marcar como destacada (`"featured": true`) la `Paleta Iluminadora Rose Quartz Glow` (`id: 111`) en `data/products.json`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `components/footer/footer.html` (líneas 40–45).
- `css/components/product-card/product-card.css` (líneas 25–30).
- `data/products.json` (producto `id: 111`, líneas 260–271).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`components/footer/footer.html`, líneas 40–45)
Busca la lista bajo el título `Ayuda`:
```html
        <ul class="list-unstyled mb-0">
          <li><a data-route="pages/faq.html" href="pages/faq.html" class="luxe-footer-link">Preguntas frecuentes</a></li>
          <li><a data-route="pages/envios.html" href="pages/envios.html" class="luxe-footer-link">Envíos</a></li>
          <li><a data-route="pages/ingredientes.html" href="pages/ingredientes.html" class="luxe-footer-link">Ingredientes</a></li>
         
        </ul>
```
En la línea 44 vacía, añade el enlace a `Ritual de cuidado` para igualar los 4 elementos de la columna contigua:
```html
        <ul class="list-unstyled mb-0">
          <li><a data-route="pages/faq.html" href="pages/faq.html" class="luxe-footer-link">Preguntas frecuentes</a></li>
          <li><a data-route="pages/envios.html" href="pages/envios.html" class="luxe-footer-link">Envíos</a></li>
          <li><a data-route="pages/ingredientes.html" href="pages/ingredientes.html" class="luxe-footer-link">Ingredientes</a></li>
          <li><a data-route="pages/ritual.html" href="pages/ritual.html" class="luxe-footer-link">Ritual de cuidado</a></li>
        </ul>
```

### En la Tarea 2 (`css/components/product-card/product-card.css`, líneas 25–30)
Busca `.luxe-product-card__media`:
```css
.luxe-product-card__media {
  position: relative;
  height: 265px;
  overflow: hidden;
  background: var(--color-rose-dusty);
}
```
Actualízalo a:
```css
.luxe-product-card__media {
  position: relative;
  height: 275px;
  overflow: hidden;
  background: var(--color-rose-dusty);
  border-bottom: 1px solid rgba(212, 175, 55, 0.18);
}
```

### En la Tarea 3 (`data/products.json`, producto `id: 111`, líneas 260–271)
Busca:
```json
      "id": 111,
      "name": "Paleta Iluminadora Rose Quartz Glow",
      "category": "maquillaje",
      "categoryName": "Maquillaje",
      "price": 39.00,
      "originalPrice": null,
      "description": "Cuarteto de polvos iluminadores y rubor horneado con minerales puros de cuarzo rosa y perla micronizada.",
      "image": "assets/images/products/paleta_rose_quartz.png",
      "imageAlt": "Paleta Iluminadora Rose Quartz Glow abierta en estuche oro rosa con cuatro tonos luminosos",
      "published": true,
      "featured": false,
```
Cambia `"originalPrice"` a `46.00` y `"featured"` a `true`:
```json
      "id": 111,
      "name": "Paleta Iluminadora Rose Quartz Glow",
      "category": "maquillaje",
      "categoryName": "Maquillaje",
      "price": 39.00,
      "originalPrice": 46.00,
      "description": "Cuarteto de polvos iluminadores y rubor horneado con minerales puros de cuarzo rosa y perla micronizada.",
      "image": "assets/images/products/paleta_rose_quartz.png",
      "imageAlt": "Paleta Iluminadora Rose Quartz Glow abierta en estuche oro rosa con cuatro tonos luminosos",
      "published": true,
      "featured": true,
```

---

## 8. Resultado esperado
- En el pie de página de todo el sitio, la columna «Ayuda» muestra el cuarto enlace «Ritual de cuidado».
- Las tarjetas de producto tienen una línea divisoria dorada sutil bajo la imagen y 275px de altura.
- La «Paleta Iluminadora Rose Quartz Glow» muestra su precio anterior tachado (`$46.00`) junto al precio actual (`$39.00`).

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/tienda.html`.
2. Comprueba que la tarjeta de «Paleta Iluminadora Rose Quartz Glow» muestra `$39.00` y `$46.00` tachado.
3. Desplázate al pie de página y haz clic en el nuevo enlace «Ritual de cuidado» bajo la columna «Ayuda» para verificar que navega a `pages/ritual.html`.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`feat/jamile-dia06-banner-ingredientes`)
```bash
git fetch origin
git branch -r
# Practicar la forma explícita con -c y --track:
git switch -c feat/jamile-dia06-banner-ingredientes --track origin/feat/jamile-dia06-banner-ingredientes
git diff --name-status main...feat/jamile-dia06-banner-ingredientes
git diff main...feat/jamile-dia06-banner-ingredientes
# Tras revisar pages/ingredientes.html en el navegador:
git switch main
git pull --ff-only origin main
git merge feat/jamile-dia06-banner-ingredientes
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2 (3 commits atómicos)
```bash
git switch main
git switch -c feat/adriana-dia06-tarjetas-producto

# Commit 1: Footer HTML
git add components/footer/footer.html
git commit -m "Anadir enlace a Ritual de cuidado en columna Ayuda del footer"

# Commit 2: Product Card CSS
git add css/components/product-card/product-card.css
git commit -m "Ajustar altura y borde inferior de imagen en product-card.css"

# Commit 3: Producto 111 en JSON
git add data/products.json
git commit -m "Destacar Paleta Iluminadora Rose Quartz (111) y asignar precio original"

git log --oneline -n 4
git push -u origin feat/adriana-dia06-tarjetas-producto
```

---

## 11. Criterios para considerar la tarea terminada
- Descargaste la rama de Jamile usando `git switch -c ... --track origin/...` y la integraste en `main`.
- Creaste 3 commits independientes (uno por archivo) en `feat/adriana-dia06-tarjetas-producto` y la publicaste en GitHub.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Jamile la rama `feat/adriana-dia06-tarjetas-producto` indicando que tiene 3 commits que puede inspeccionar con `git log --oneline -n 3` y `git diff --name-status main...feat/adriana-dia06-tarjetas-producto`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si en `components/footer/footer.html` el enlace no funciona desde Inicio o desde una subpágina, verifica que incluiste tanto `data-route="pages/ritual.html"` como `href="pages/ritual.html"`, ya que `js/utils/paths.js` utiliza `data-route` para ajustar la ruta relativa automáticamente.

