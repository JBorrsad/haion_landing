# Configuración Google Search Console - Haion Landing

## URLs generadas correctamente ✅

### Archivos principales:

- **robots.txt**: `https://jborrsad.github.io/haion_landing/robots.txt`
- **sitemap-index.xml**: `https://jborrsad.github.io/haion_landing/sitemap-index.xml`
- **sitemap-0.xml**: `https://jborrsad.github.io/haion_landing/sitemap-0.xml`

### Páginas incluidas en sitemap:

- `/` (home)
- `/contable/`
- `/fiscal/`
- `/laboral/`
- `/contacto/`
- `/servicios/`
- `/components/`

## Instrucciones para Google Search Console

### 1. Crear/verificar propiedad

- **Tipo**: Prefijo de URL
- **URL**: `https://jborrsad.github.io/haion_landing/`
- **Verificación**: Archivo HTML ya incluido (`google797a33d26b9463db.html`)

### 2. Enviar sitemap

En GSC → Sitemaps → Añadir nuevo sitemap:

```
https://jborrsad.github.io/haion_landing/sitemap-index.xml
```

### 3. Verificar robots.txt

GSC → Configuración → robots.txt debe mostrar:

```
User-agent: *
Allow: /
Sitemap: https://jborrsad.github.io/haion_landing/sitemap-index.xml
```

### 4. Inspeccionar URLs

Probar estas URLs en "Inspección de URL":

- `https://jborrsad.github.io/haion_landing/sitemap-index.xml`
- `https://jborrsad.github.io/haion_landing/`
- `https://jborrsad.github.io/haion_landing/fiscal/`
- `https://jborrsad.github.io/haion_landing/laboral/`

## ⚠️ Errores a evitar

1. **NO usar propiedad de dominio completo** (`jborrsad.github.io`)
2. **NO enviar rutas relativas** (`/sitemap-index.xml`)
3. **NO enviar sitemap.xml manual** si existe
4. **Todas las URLs deben terminar con `/`** (`trailingSlash: "always"`)

## Verificación post-despliegue

Verificar que devuelven **200 OK**:

- https://jborrsad.github.io/haion_landing/sitemap-index.xml
- https://jborrsad.github.io/haion_landing/sitemap-0.xml
- https://jborrsad.github.io/haion_landing/robots.txt
- https://jborrsad.github.io/haion_landing/
- https://jborrsad.github.io/haion_landing/fiscal/
- https://jborrsad.github.io/haion_landing/laboral/
