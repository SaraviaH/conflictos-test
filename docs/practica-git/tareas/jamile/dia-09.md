# Guía de Práctica — Jamile (Día 09)

## 1. Nombre de la persona
**Jamile**

## 2. Día de práctica
**Día 09 de 15** — Almacenamiento temporal de trabajo en curso con `git stash` (`stash push -m`, `stash list`, `stash show`, `stash pop`) y estructuración de `pages/rembolso.html`.

## 3. Objetivo de aprendizaje de Git
Integrar primero la rama de Adriana en el Turno 1 y, en el Turno 2, practicar el uso de `git stash` para guardar temporalmente el trabajo en curso sobre `pages/rembolso.html`, cambiar de rama con el directorio limpio, regresar y recuperar el avance con `git stash pop`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/adriana-dia09-tienda-vip`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/jamile-dia09-reembolso`).

---

## 5. Lista de 2 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (HTML Cabecera):** Actualizar el idioma (`lang="es"`), el `<title>` y vincular los estilos globales, Bootstrap y Font Awesome en `pages/rembolso.html`.
2. **Tarea 2 (HTML Cuerpo y Componentes):** Reemplazar el `<button>Reembolso</button>` suelto de `pages/rembolso.html` por una página estructurada con Header, tarjeta central de solicitud de reembolso conectada a `envios.html` y `contacto.html`, y Footer dinámico.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/rembolso.html` (líneas 1–12, archivo completo).

---

## 7. Cambio que debe efectuar

### En las Tareas 1 y 2 (`pages/rembolso.html`)
Actualmente `pages/rembolso.html` contiene únicamente un esqueleto básico de 12 líneas:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>Reembolso</button>
    
</body>
</html>
```
Reemplázalo por la estructura completa integrada con Luxe Glow Cosmetics:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Política y solicitud de reembolso garantizado de 30 días en Luxe Glow Cosmetics.">
  <title>Luxe Glow Cosmetics | Solicitud de Reembolso</title>
  <link rel="icon" type="image/svg+xml" href="../assets/icons/favicon.svg">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="../css/global/variables.css">
  <link rel="stylesheet" href="../css/global/base.css">
  <link rel="stylesheet" href="../css/components/header/header.css">
  <link rel="stylesheet" href="../css/components/footer/footer.css">
</head>
<body data-root=".." data-page="rembolso">
  <header id="site-header"></header>

  <main class="container flex-grow-1 py-5">
    <section class="luxe-state-box mx-auto" style="max-width: 680px;">
      <span class="status-tag"><i class="fas fa-rotate-left me-1" aria-hidden="true"></i> Garantía 30 Días</span>
      <h1 class="font-serif display-6 fw-bold text-burgundy-dark mb-3">Solicitud de Reembolso</h1>
      <p class="text-muted mb-4">
        Si tu producto permanece cerrado en su empaque original sellado dentro de los primeros 30 días desde su recepción, gestionamos tu reembolso íntegro sin complicaciones.
      </p>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a href="contacto.html" data-route="pages/contacto.html" class="btn btn-luxe-primary">
          <i class="fas fa-envelope me-2" aria-hidden="true"></i>Iniciar Solicitud en Contacto
        </a>
        <a href="envios.html" data-route="pages/envios.html" class="btn btn-luxe-outline">
          Ver Condiciones de Envíos &amp; Devoluciones
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

---

## 8. Resultado esperado
Al abrir `pages/rembolso.html` en el navegador, en lugar de un botón gris sin estilos se presenta una página con el encabezado, la tipografía, los botones borgoña/dorado y el pie de página de Luxe Glow Cosmetics.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/rembolso.html`.
2. Comprueba que cargan el Header y el Footer y que los dos botones centrales navegan a `pages/contacto.html` y `pages/envios.html`.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`feat/adriana-dia09-tienda-vip`)
```bash
git fetch origin
git switch --track origin/feat/adriana-dia09-tienda-vip
git log --oneline -n 3
git diff main...feat/adriana-dia09-tienda-vip
# Tras verificar pages/tienda.html en el navegador:
git switch main
git pull --ff-only origin main
git merge --no-ff feat/adriana-dia09-tienda-vip -m "Merge branch 'feat/adriana-dia09-tienda-vip' into main"
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2 (Practicando `git stash`)
```bash
git switch main
git switch -c feat/jamile-dia09-reembolso

# 1. Actualiza primero el <head> de pages/rembolso.html (Tarea 1) y guarda el archivo en VS Code.
git status

# 2. Practica guardar tu avance en la pila temporal (stash) antes de hacer commit:
git stash push -m "Avance de cabecera HTML en rembolso.html"
git status
# Observa que rembolso.html volvió a su estado inicial y el directorio está limpio.
git stash list
git stash show -p stash@{0}

# 3. Cambia un momento a main y regresa a tu rama:
git switch main
git switch feat/jamile-dia09-reembolso

# 4. Recupera tu trabajo con git stash pop:
git stash pop
git add pages/rembolso.html
git commit -m "Actualizar idioma, titulo y hojas de estilo en rembolso.html"

# 5. Completa el cuerpo (<main>, scripts y footer) de la Tarea 2 y haz el segundo commit:
git add pages/rembolso.html
git commit -m "Estructurar tarjeta de solicitud y componentes en rembolso.html"

git push -u origin feat/jamile-dia09-reembolso
```

---

## 11. Criterios para considerar la tarea terminada
- Practicaste `git stash push -m`, `git stash list`, `git stash show -p` y `git stash pop`.
- `pages/rembolso.html` quedó estructurada y funcional con 2 commits en `feat/jamile-dia09-reembolso`.
- Adriana revisó e integró tu rama en `main`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Adriana la rama `feat/jamile-dia09-reembolso` para que compruebe `http://localhost:5500/pages/rembolso.html`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Recuerda que `pages/rembolso.html` tenía seguimiento previo en Git (ya existía con 12 líneas), por lo que `git stash push` lo guarda sin necesidad de flags adicionales. Si alguna vez creas un archivo completamente nuevo (*untracked*) y quieres guardarlo en el stash, necesitarías usar `git stash push -u -m "..."`.

