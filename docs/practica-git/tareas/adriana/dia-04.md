# Guía de Práctica — Adriana (Día 04)

## 1. Nombre de la persona
**Adriana**

## 2. Día de práctica
**Día 04 de 15** — Inspección de ramas remotas (`git fetch`, `git branch -r`, `git branch -a`), seguimiento con `git switch --track` y finalización del catálogo facial/maquillaje.

## 3. Objetivo de aprendizaje de Git
Dominar la diferencia entre `git branch`, `git branch -r` y `git branch -a` antes y después de ejecutar `git fetch origin`, crear una rama local de seguimiento con `git switch --track origin/...` para revisar la rama de Jamile y, en el Turno 2, publicar cambios propios con `git push -u`.

## 4. Rol del día
- **Turno 1 (Apertura):** **Revisora e Integradora** (de la rama `feat/jamile-dia04-fragancias`).
- **Turno 2 (Cierre):** **Desarrolladora** (en la rama `feat/adriana-dia04-catalogo-facial`).

---

## 5. Lista de 3 tareas concretas (para tu Turno 2 como Desarrolladora)

1. **Tarea 1 (JSON):** Corregir el nombre (con espacio final), la descripción incompleta y activar como destacado (`"featured": true`) el producto `id: 106` en `data/products.json`.
2. **Tarea 2 (JSON):** Reemplazar la descripción genérica (`"El mejor  contorno de ojos ."`) y añadir insignia `"badge": "Clínico"` al producto `id: 109` en `data/products.json`.
3. **Tarea 3 (JSON):** Corregir el nombre y la redacción de la descripción del producto `id: 110` (Base Fluida) en `data/products.json`.

---

## 6. Archivo y ruta exactos donde debe trabajar
- `data/products.json` (objetos con `"id": 106` en líneas 135–146, `"id": 109` en líneas 210–222 e `"id": 110` en líneas 235–242).

---

## 7. Cambio que debe efectuar

### En la Tarea 1 (`data/products.json`, producto `id: 106`, líneas 135–146)
Busca:
```json
      "id": 106,
      "name": "Crema Nutritiva de Noche ",
      "category": "facial",
      "categoryName": "Cuidado Facial",
      "price": 62.50,
      "originalPrice": 75.00,
      "description": "Tratamiento intensivo de noche formulado .",
      "image": "assets/images/products/crema_noche_peptidic.png",
      "imageAlt": "Envase de vidrio rosado esmerilado y tapa dorada de la Crema Nutritiva de Noche Peptidic",
      "published": true,
      "featured": false,
```
Y cámbialo por:
```json
      "id": 106,
      "name": "Crema Nutritiva de Noche Peptidic",
      "category": "facial",
      "categoryName": "Cuidado Facial",
      "price": 62.50,
      "originalPrice": 75.00,
      "description": "Tratamiento intensivo de noche formulado con tetrapéptidos, ácido hialurónico y manteca de karité para reafirmar el rostro.",
      "image": "assets/images/products/crema_noche_peptidic.png",
      "imageAlt": "Envase de vidrio rosado esmerilado y tapa dorada de la Crema Nutritiva de Noche Peptidic",
      "published": true,
      "featured": true,
```

### En la Tarea 2 (`data/products.json`, producto `id: 109`, líneas 210–222)
Busca:
```json
      "id": 109,
      "name": "Contorno de Ojos Lumière C-Peptide",
      "category": "facial",
      "categoryName": "Cuidado Facial",
      "price": 46.00,
      "originalPrice": 54.00,
      "description": "El mejor  contorno de ojos .",
      "image": "assets/images/products/contorno_ojos_lumiere.png",
      "imageAlt": "Dosificador perlado y aplicador dorado de masaje del Contorno de Ojos Lumière C-Peptide",
      "published": true,
      "featured": false,
      "badge": null,
```
Y cámbialo por:
```json
      "id": 109,
      "name": "Contorno de Ojos Lumière C-Peptide",
      "category": "facial",
      "categoryName": "Cuidado Facial",
      "price": 46.00,
      "originalPrice": 54.00,
      "description": "Contorno de ojos iluminador con vitamina C estabilizada, cafeína botánica y péptidos descongestivos.",
      "image": "assets/images/products/contorno_ojos_lumiere.png",
      "imageAlt": "Dosificador perlado y aplicador dorado de masaje del Contorno de Ojos Lumière C-Peptide",
      "published": true,
      "featured": false,
      "badge": "Clínico",
```

### En la Tarea 3 (`data/products.json`, producto `id: 110`, líneas 235–242)
Busca:
```json
      "id": 110,
      "name": "Base Fluida ",
      "category": "maquillaje",
      "categoryName": "Maquillaje",
      "price": 44.00,
      "originalPrice": 52.00,
      "description": "Base de maquillaje lista para usar sérum de cobertura modulable con ácido hialurónico, niacinamida y acabado segunda piel.",
```
Y cámbialo por:
```json
      "id": 110,
      "name": "Base Fluida Silk Radiance SPF 30",
      "category": "maquillaje",
      "categoryName": "Maquillaje",
      "price": 44.00,
      "originalPrice": 52.00,
      "description": "Base de maquillaje en sérum de cobertura modulable con ácido hialurónico, niacinamida y acabado segunda piel.",
```

---

## 8. Resultado esperado
En `index.html`, la «Crema Nutritiva de Noche Peptidic» se suma a la cuadrícula de productos destacados. En `pages/tienda.html`, el Contorno de Ojos (`109`) luce la etiqueta superior «Clínico» con su descripción completa, y la Base Fluida (`110`) muestra su nombre completo con protección solar `SPF 30`.

---

## 9. Cómo comprobar que el cambio se realizó correctamente
1. Abre `http://localhost:5500/pages/tienda.html`.
2. Busca «Contorno» en la barra de búsqueda y verifica que la tarjeta muestra la insignia **«CLÍNICO»** arriba a la izquierda.
3. Busca «Base Fluida Silk Radiance SPF 30» y «Crema Nutritiva de Noche Peptidic» y comprueba sus textos en la tarjeta y en el modal de «Vista Rápida».

---

## 10. Comandos Git que debe practicar y qué busca aprender con ellos

### Fase 1: Como Revisora e Integradora del Turno 1 (`feat/jamile-dia04-fragancias`)
```bash
# 1. Comparar la salida de branch ANTES de hacer fetch
git branch
git branch -r
git branch -a

# 2. Actualizar referencias remotas y volver a consultar
git fetch origin
git branch -r
git branch -a

# 3. Crear rama local de seguimiento y revisar el trabajo de Jamile
git switch --track origin/feat/jamile-dia04-fragancias
git branch -vv
git log --oneline -n 3
git diff main...feat/jamile-dia04-fragancias

# 4. Integrar en main tras probar en el navegador
git switch main
git pull --ff-only origin main
git merge feat/jamile-dia04-fragancias
git push origin main
```
- **Qué buscas aprender:** Comprobar en la práctica que `git branch -a` no muestra las ramas nuevas del servidor hasta que ejecutas `git fetch origin`, y verificar con `git branch -vv` cómo queda configurado el seguimiento (`[origin/...]`).

### Fase 2: Como Desarrolladora del Turno 2
```bash
git switch main
git switch -c feat/adriana-dia04-catalogo-facial

# Commit 1: Productos faciales 106 y 109
git add data/products.json
git commit -m "Actualizar fichas de Crema de Noche Peptidic (106) y Contorno Lumiere (109)"

# Commit 2: Producto de maquillaje 110
git add data/products.json
git commit -m "Actualizar nombre y descripcion de Base Fluida Silk Radiance SPF 30 (110)"

git push -u origin feat/adriana-dia04-catalogo-facial
```

---

## 11. Criterios para considerar la tarea terminada
- Se verificó la diferencia entre `git branch`, `git branch -r` y `git branch -a` antes y después de `git fetch origin`.
- Se integró `feat/jamile-dia04-fragancias` en `main` antes de crear `feat/adriana-dia04-catalogo-facial`.
- Se publicaron los 2 commits de `feat/adriana-dia04-catalogo-facial` y fueron integrados por Jamile al cierre del día.

## 12. Qué debe entregar a su compañera para la revisión
En el Turno 2, entrega a Jamile el nombre de tu rama `feat/adriana-dia04-catalogo-facial` para que revise los productos `106`, `109` y `110`.

## 13. Qué debe hacer si encuentra un error o un conflicto
- Si al escribir `"badge": "Clínico"` olvidas poner las comillas dobles o la coma al final de la línea, el JSON dejará de cargar. Verifica siempre en `pages/tienda.html` que aparezcan los 12 productos antes de hacer commit.

