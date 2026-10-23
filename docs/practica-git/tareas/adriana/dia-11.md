# Guía de Práctica — Adriana (Día 11)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 11 de 15** — Segundo ejercicio de conflicto controlado (en JSON), uso de `git merge --abort` como red de seguridad y resolución definitiva en el rol de Integradora.

## 3. Objetivo de aprendizaje de Git
Desarrollar primero la página `pages/historial.html` y actualizar la diapositiva 3 de `data/carousel.json` en el Turno 1; luego, en el Turno 2 (como Revisora e Integradora de la rama de Jamile), encontrarse con un conflicto controlado al integrar en `main`, practicar primero `git merge --abort` para comprobar que todo vuelve a la normalidad, y seguidamente ejecutar de nuevo `git merge` para resolver el conflicto en `data/carousel.json`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Desarrolladora** (en la rama `feat/adriana-dia11-historial`).
- **Turno 2 (Cierre):** **Revisora e Integradora** (de la rama `feat/jamile-dia11-carrusel-perfumeria`, practicando `git merge --abort` y resolución de conflicto en `main`).

---

## 5. Lista de 3 tareas concretas

1. **Tarea 1 (HTML):** Construir la estructura HTML5 completa para el archivo vacío `pages/historial.html` (actualmente de 0 bytes).
2. **Tarea 2 (JSON):** Actualizar la etiqueta `"tag"` y el botón primario de la diapositiva 3 (`id: "maquillaje-velvet"`) en `data/carousel.json`.
3. **Tarea 3 (Integración en Turno 2):** Al integrar la rama `feat/jamile-dia11-carrusel-perfumeria` en `main`, practicar `git merge --abort` ante el conflicto en `data/carousel.json` y luego volver a ejecutar `git merge` para resolverlo definitivamente.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/historial.html` (archivo completo).
- `data/carousel.json` (diapositiva 3 `id: "maquillaje-velvet"`, líneas 40–55).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`pages/historial.html`)
El archivo `pages/historial.html` está vacío (0 bytes). Escribe en él la siguiente estructura conectada a los componentes del proyecto:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Historial y seguimiento de pedidos Luxe Glow Cosmetics.">
  <title>Luxe Glow Cosmetics | Historial de Pedidos</title>
  <link rel="icon" type="image/svg+xml" href="../assets/icons/favicon.svg">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="../css/global/variables.css">
  <link rel="stylesheet" href="../css/global/base.css">
  <link rel="stylesheet" href="../css/components/header/header.css">
  <link rel="stylesheet" href="../css/components/footer/footer.css">
</head>
<body data-root=".." data-page="historial">
  <header id="site-header"></header>

  <main class="container flex-grow-1 py-5">
    <section class="luxe-state-box mx-auto" style="max-width: 680px;">
      <span class="status-tag"><i class="fas fa-box-open me-1" aria-hidden="true"></i> Mi Cuenta &amp; Pedidos</span>
      <h1 class="font-serif display-6 fw-bold text-burgundy-dark mb-3">Historial de Pedidos</h1>
      <p class="text-muted mb-4">
        Consulta el estado de tus órdenes recientes o explora nuestro catálogo botánico para iniciar un nuevo ritual de cuidado.
      </p>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a href="tienda.html" data-route="pages/tienda.html" class="btn btn-luxe-primary">
          <i class="fas fa-bag-shopping me-2" aria-hidden="true"></i>Ir a Tienda Oficial
        </a>
        <a href="envios.html" data-route="pages/envios.html" class="btn btn-luxe-outline">
          Consultar Plazos de Envío
        </a>
      </div>
    </section>
  </main>

  <div id="site-footer"></div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
  <script src="../js/utils/paths.js"></script>
  <script src="../js/utils/data-service.js"></script>
  <script src="../js/utils/cart.js"></script>
  <script src="../js/core/component-loader.js"></script>
  <script src="../js/components/header/header.js"></script>
  <script src="../js/components/footer/footer.js"></script>
  <script src="../js/core/app-init.js"></script>
</body>
</html>
```

### En la Tarea 2 (`data/carousel.json`, diapositiva 3 `id: "maquillaje-velvet"`, líneas 40–51)
Busca:
```json
      "id": "maquillaje-velvet",
      "tag": "Acabado Seda & Terciopelo",
      "tagIcon": "fa-wand-magic-sparkles",
      "title": "Maquillaje de Tratamiento con Pigmentos Puros",
      "subtitle": "Fórmulas sensoriales infusionadas con activos hidratantes, minerales de cuarzo rosa y estuches bañados en oro para realzar tus facciones sin resecar.",
      "image": "assets/images/carousel/slide_maquillaje.png",
      "imageAlt": "Colección de labiales aterciopelados, paleta iluminadora y base de seda Luxe Glow",
      "primaryBtn": {
        "label": "Descubrir Maquillaje",
```
Cambia `"tag"` y `"primaryBtn.label"`:
```json
      "id": "maquillaje-velvet",
      "tag": "Maquillaje Mineral & Velvet",
      "tagIcon": "fa-wand-magic-sparkles",
      "title": "Maquillaje de Tratamiento con Pigmentos Puros",
      "subtitle": "Fórmulas sensoriales infusionadas con activos hidratantes, minerales de cuarzo rosa y estuches bañados en oro para realzar tus facciones sin resecar.",
      "image": "assets/images/carousel/slide_maquillaje.png",
      "imageAlt": "Colección de labiales aterciopelados, paleta iluminadora y base de seda Luxe Glow",
      "primaryBtn": {
        "label": "Explorar Maquillaje Velvet",
```

---

## 8. Resultado esperado
`pages/historial.html` deja de ser un archivo vacío de 0 bytes y se muestra como una página completa con Header, Footer y enlaces funcionales. Además, en el Turno 2 el archivo `data/carousel.json` integra sin errores de sintaxis tanto los ajustes de la diapositiva 3 como los de la diapositiva 4 hechos por Jamile.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/historial.html` y verifica que el Header y el Footer se montan automáticamente.
2. En `http://localhost:5500/index.html`, verifica que las 4 diapositivas del carrusel se muestran y que no hay errores de parseo JSON en la consola (F12).

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Desarrolladora (Turno 1)
```bash
git switch main
git pull --ff-only origin main
git switch -c feat/adriana-dia11-historial

git add pages/historial.html
git commit -m "Crear estructura HTML completa para pages/historial.html"

git add data/carousel.json
git commit -m "Actualizar tag y boton primario de diapositiva 3 en carousel.json"

git push -u origin feat/adriana-dia11-historial
```

### Fase 2: Como Revisora e Integradora del Turno 2 (`feat/jamile-dia11-carrusel-perfumeria`)
```bash
# 1. Descargar y revisar la rama de Jamile
git fetch origin
git switch --track origin/feat/jamile-dia11-carrusel-perfumeria
git log --oneline -n 3

# 2. Volver a main e intentar la fusión (surgirá un conflicto controlado en data/carousel.json)
git switch main
git pull --ff-only origin main
git merge feat/jamile-dia11-carrusel-perfumeria
# -> Aparece CONFLICT (content): Merge conflict in data/carousel.json

# 3. Practicar primero cancelar la fusión de forma segura con git merge --abort:
git status
git merge --abort
git status
# Comprueba que 'main' volvió a estar 100% limpio ('working tree clean').

# 4. Ahora volver a lanzar el merge y resolver el conflicto manualmente:
git merge feat/jamile-dia11-carrusel-perfumeria
# Abre data/carousel.json, deja en la diapositiva 3 "tag": "Maquillaje Mineral & Velvet" y
# conserva todos los cambios de Jamile en la diapositiva 4. Borra <<<<<<<, ======= y >>>>>>>.
git add data/carousel.json
git commit -m "Resolver conflicto en data/carousel.json e integrar rama de Jamile"
git push origin main
```

---

## 11. Criterios para considerar la tarea terminada
- `pages/historial.html` funciona correctamente con Header y Footer.
- Practicaste `git merge --abort` durante un conflicto real y comprobaste con `git status` que restaura el estado limpio.
- Resolviste el conflicto en `data/carousel.json` manteniendo un JSON válido y publicaste `main`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 1, entrega a Jamile la rama `feat/adriana-dia11-historial` para que la revise e integre en `main`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Al resolver conflictos en un archivo `.json`, presta especial atención a las comas `,` al final de las propiedades y a no borrar llaves `{` o `}`. Comprueba siempre que el carrusel cargue en `index.html` antes de hacer `git push origin main`.

