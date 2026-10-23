# Guía de Práctica — Adriana (Día 08)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 08 de 15** — Fusiones explícitas (`git merge --no-ff`), gráfico de historial (`git log --graph`) y descarte seguro con `git restore` y `git restore --staged`.

## 3. Objetivo de aprendizaje de Git
Integrar ramas dejando un commit de fusión explícito mediante `git merge --no-ff`, visualizar las bifurcaciones con `git log --oneline --graph --decorate --all` y practicar en tu rama cómo sacar un archivo del área de preparación (`git restore --staged`) y cómo descartar una edición accidental en el directorio de trabajo (`git restore`).

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/jamile-dia08-diario`, integrándola con `--no-ff`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/adriana-dia08-ritual`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (HTML):** Ampliar el consejo práctico (`.tip-box`) del paso 1 («Mañana — Protección & Luz») en `pages/ritual.html`.
2. **Tarea 2 (HTML):** Añadir un quinto error frecuente a evitar en la tarjeta «Errores frecuentes que conviene evitar» de `pages/ritual.html`.
3. **Tarea 3 (CSS):** Destacar las cajas de consejo `.tip-box` añadiendo un borde izquierdo dorado de `4px` en `css/pages/ritual.css`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `pages/ritual.html` (líneas 53–56 y 117–122).
- `css/pages/ritual.css` (líneas 78–83).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`pages/ritual.html`, líneas 53–56)
Busca dentro del paso 1 («Mañana — Protección & Luz»):
```html
          <div class="tip-box small">
            <i class="fas fa-lightbulb text-gold me-1" aria-hidden="true"></i>
            <strong>Consejo:</strong> Aplica de la textura más fluida a la más densa mediante presiones suaves con las palmas.
          </div>
```
Amplíalo a:
```html
          <div class="tip-box small">
            <i class="fas fa-lightbulb text-gold me-1" aria-hidden="true"></i>
            <strong>Consejo:</strong> Aplica de la textura más fluida a la más densa mediante presiones suaves y espera 2 minutos antes del protector solar.
          </div>
```

### En la Tarea 2 (`pages/ritual.html`, líneas 117–122)
Busca la lista bajo «Errores frecuentes que conviene evitar»:
```html
          <ul class="small text-muted mb-0">
            <li class="mb-1">Cambiar todos los productos de tu rutina el mismo día.</li>
            <li class="mb-1">Frotar el rostro con fuerza al secarlo con la toalla.</li>
            <li class="mb-1">Olvidar extender el sérum y la crema hacia el cuello y el escote.</li>
            <li>Abandonar un tratamiento a los pocos días: la piel necesita al menos 28 días para completar su ciclo celular.</li>
          </ul>
```
Añade `class="mb-1"` al cuarto elemento e incorpora un quinto punto:
```html
          <ul class="small text-muted mb-0">
            <li class="mb-1">Cambiar todos los productos de tu rutina el mismo día.</li>
            <li class="mb-1">Frotar el rostro con fuerza al secarlo con la toalla.</li>
            <li class="mb-1">Olvidar extender el sérum y la crema hacia el cuello y el escote.</li>
            <li class="mb-1">Abandonar un tratamiento a los pocos días: la piel necesita al menos 28 días para completar su ciclo celular.</li>
            <li>Aplicar exfoliantes intensivos la misma noche en que estrenas un activo nuevo.</li>
          </ul>
```

### En la Tarea 3 (`css/pages/ritual.css`, líneas 78–83)
Busca `.tip-box`:
```css
.tip-box {
  background: var(--color-rose-soft);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 16px;
  padding: 1.15rem;
}
```
Añade `border-left: 4px solid var(--color-gold);`:
```css
.tip-box {
  background: var(--color-rose-soft);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-left: 4px solid var(--color-gold);
  border-radius: 16px;
  padding: 1.15rem;
}
```

---

## 8. Resultado esperado
En `pages/ritual.html`, los tres bloques de consejos prácticos lucen una franja lateral izquierda dorada de 4px, el consejo matutino indica la pausa de 2 minutos previa al fotoprotector y la lista de errores frecuentes cuenta con 5 recomendaciones dermatológicas.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/ritual.html`.
2. Verifica que las tres cajas `.tip-box` tienen el borde izquierdo dorado más grueso y que los textos de las Tareas 1 y 2 aparecen correctamente.

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`feat/jamile-dia08-diario`) con `--no-ff`
```bash
git fetch origin
git switch --track origin/feat/jamile-dia08-diario
git log --oneline -n 4
git diff main...feat/jamile-dia08-diario
# Tras verificar pages/diario.html en el navegador:
git switch main
git pull --ff-only origin main
git merge --no-ff feat/jamile-dia08-diario -m "Merge branch 'feat/jamile-dia08-diario' into main"
git log --oneline --graph --decorate -n 6
git push origin main
```

### Fase 2: Como Desarrolladora del Turno 2 (practicando `git restore` y `git restore --staged`)
```bash
git switch main
git switch -c feat/adriana-dia08-ritual

# 1. Ejercicio de práctica de git restore:
#    Realiza las Tareas 1, 2 (en pages/ritual.html) y 3 (en css/pages/ritual.css).
#    Prepara ambos archivos y luego saca ritual.css del área de preparación:
git add pages/ritual.html css/pages/ritual.css
git status
git restore --staged css/pages/ritual.css
git status
# Observa cómo css/pages/ritual.css volvió a 'Changes not staged' SIN perder tus cambios.

# 2. Confirmar el primer commit solo con pages/ritual.html
git commit -m "Ampliar consejo matutino y lista de errores frecuentes en ritual.html"

# 3. Ahora preparar y confirmar css/pages/ritual.css
git add css/pages/ritual.css
git commit -m "Destacar borde izquierdo dorado en .tip-box dentro de ritual.css"

git push -u origin feat/adriana-dia08-ritual
```

---

## 11. Criterios para considerar la tarea terminada
- Integraste `feat/jamile-dia08-diario` usando `git merge --no-ff` y verificaste el gráfico con `git log --oneline --graph --decorate`.
- Practicaste `git restore --staged` para separar los commits de `feat/adriana-dia08-ritual`.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Jamile la rama `feat/adriana-dia08-ritual` para que la revise e integre en `main` usando también `git merge --no-ff`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Recuerda la diferencia clave: `git restore --staged <archivo>` solo desmarca un archivo del área de preparación (no borra código), mientras que `git restore <archivo>` sí descarta las modificaciones no preparadas del archivo.

