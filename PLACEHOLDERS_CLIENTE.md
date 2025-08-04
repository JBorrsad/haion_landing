# Guía de Placeholders para Personalizar la Web

Esta página web está preparada con placeholders que necesitas llenar con la información de tu cliente. Aquí tienes todos los campos que necesitas personalizar:

## 📄 Página Principal (index.astro)

- `[NOMBRE_EMPRESA]` - Nombre de la empresa del cliente
- `[TITULO_PRINCIPAL]` - Título que aparecerá en la pestaña del navegador
- `[DESCRIPCION_META]` - Descripción para SEO (máximo 160 caracteres)

## 🦸 Sección Hero (Encabezado principal)

- `[ESTADO_EMPRESA]` - Estado actual (ej: "Abierto", "Nuevo", "Establecido desde 2020")
- `[SALUDO_PRINCIPAL]` - Saludo principal (ej: "¡Hola! Somos TuEmpresa")
- `[PALABRA_CLAVE_EMPRESA]` - Palabra clave que define la empresa (ej: "Innovación", "Calidad", "Excelencia")
- `[DESCRIPCION_PRINCIPAL]` - Primera línea de descripción
- `[PROPUESTA_VALOR]` - Segunda línea de descripción
- `[LLAMADA_ACCION]` - Tercera línea de descripción

### 🖼️ Imagen Hero

- Reemplazar `/haion_landing/logo-empresa.jpg` con el logo de la empresa

## 🏢 Sección "Sobre Nosotros"

- `[DESCRIPCION_EMPRESA_CORTA]` - Descripción breve de qué hace la empresa
- `[SERVICIOS_PRINCIPALES]` - Lista de servicios principales
- `[PROPUESTA_VALOR_DETALLADA]` - Explicación de qué los hace únicos
- `[DESCRIPCION_EQUIPO]` - Descripción del equipo de trabajo
- `[METODOLOGIA_TRABAJO]` - Cómo trabajan
- `[TECNOLOGIAS_HERRAMIENTAS]` - Tecnologías que usan (si aplica)
- `[RESULTADO_OBJETIVO]` - Qué logran para sus clientes
- `[VALORES_EMPRESA]` - Valores fundamentales
- `[OBJETIVOS_PROYECTOS]` - Objetivos que persiguen en cada proyecto
- `[VISION_FUTURO_EMPRESA]` - Visión a futuro de la empresa
- `[LLAMADA_CONTACTO]` - Invitación a contactar

### 🖼️ Imagen Empresa

- Reemplazar `/haion_landing/imagen-empresa.jpg` con una imagen representativa

## 🛠️ Sección Servicios (6 servicios disponibles)

Para cada servicio (SERVICIO_1 hasta SERVICIO_6):

- `[SERVICIO_X_TITULO]` - Nombre del servicio
- `[SERVICIO_X_DESCRIPCION]` - Descripción del servicio
- `[SERVICIO_X_CARACTERISTICA_1]` - Primera característica
- `[SERVICIO_X_CARACTERISTICA_2]` - Segunda característica
- `[SERVICIO_X_CARACTERISTICA_3]` - Tercera característica

## 📞 Sección Contacto

### Información de Contacto

- `[MENSAJE_CONTACTO_INTRODUCCION]` - Mensaje de introducción para contacto
- `[EMAIL_EMPRESA]` - Email de contacto de la empresa
- `[TELEFONO_WHATSAPP]` - Número de WhatsApp (formato: 34123456789)
- `[TEXTO_WHATSAPP]` - Texto para WhatsApp
- `[URL_LINKEDIN_EMPRESA]` - URL del LinkedIn de la empresa
- `[TEXTO_LINKEDIN]` - Texto para LinkedIn
- `[DIRECCION_EMPRESA]` - Dirección física de la empresa

### Formulario de Contacto

- `[TITULO_FORMULARIO_CONTACTO]` - Título principal del formulario
- `[SUBTITULO_FORMULARIO_CONTACTO]` - Subtítulo del formulario

#### Campos del Formulario

- `[ETIQUETA_NOMBRE]` - Etiqueta para campo nombre (ej: "Nombre y apellidos")
- `[PLACEHOLDER_NOMBRE]` - Placeholder para campo nombre
- `[ETIQUETA_TELEFONO]` - Etiqueta para campo teléfono
- `[PLACEHOLDER_TELEFONO]` - Placeholder para campo teléfono
- `[ETIQUETA_DIRECCION]` - Etiqueta para campo dirección
- `[PLACEHOLDER_DIRECCION]` - Placeholder para campo dirección
- `[ETIQUETA_EMAIL]` - Etiqueta para campo email
- `[PLACEHOLDER_EMAIL]` - Placeholder para campo email

#### Campos Desplegables

- `[ETIQUETA_TIPO_CLIENTE]` - Etiqueta para tipo de cliente (ej: "¿Eres?")
- `[OPCION_SELECCIONAR]` - Texto por defecto de selects (ej: "Selecciona una opción")
- `[TEXTO_OPCION_1]` - Primera opción del tipo de cliente
- `[VALOR_OPCION_1]` - Valor de la primera opción
- `[TEXTO_OPCION_2]` - Segunda opción del tipo de cliente
- `[VALOR_OPCION_2]` - Valor de la segunda opción
- `[TEXTO_OPCION_3]` - Tercera opción del tipo de cliente
- `[VALOR_OPCION_3]` - Valor de la tercera opción

- `[ETIQUETA_SERVICIO]` - Etiqueta para servicios (ej: "¿Qué servicio necesitas?")
- `[TEXTO_SERVICIO_1]` - Primer servicio disponible
- `[VALOR_SERVICIO_1]` - Valor del primer servicio
- `[TEXTO_SERVICIO_2]` - Segundo servicio disponible
- `[VALOR_SERVICIO_2]` - Valor del segundo servicio
- `[TEXTO_SERVICIO_3]` - Tercer servicio disponible
- `[VALOR_SERVICIO_3]` - Valor del tercer servicio

#### Mensaje y Política

- `[ETIQUETA_MENSAJE]` - Etiqueta para área de mensaje
- `[PLACEHOLDER_MENSAJE]` - Placeholder para área de mensaje
- `[TEXTO_POLITICA_PRIVACIDAD]` - Texto antes del enlace de política
- `[URL_POLITICA_PRIVACIDAD]` - URL a la política de privacidad
- `[TEXTO_LINK_POLITICA]` - Texto del enlace de política
- `[TEXTO_BOTON_ENVIAR]` - Texto del botón de enviar

## 🎨 Personalización Adicional

### Colores

La página usa una paleta de colores predefinida, pero puedes modificar:

- Los colores de cada tarjeta de servicio están diferenciados
- El esquema soporta modo claro y oscuro automáticamente

### Imágenes a reemplazar:

1. `/haion_landing/logo-empresa.jpg` - Logo para el hero
2. `/haion_landing/imagen-empresa.jpg` - Imagen para "Sobre Nosotros"

## 📝 Notas para el Cliente

1. **Servicios**: Puedes usar los 6 servicios completos o eliminar los que no necesites
2. **Textos**: Mantén los textos concisos para mejor experiencia visual
3. **Imágenes**: Usa imágenes de alta calidad (recomendado: formato JPG/PNG)
4. **Email y teléfono**: Verifica que funcionan correctamente antes de publicar

## 🚀 Después de llenar los placeholders

Una vez que tengas toda la información:

1. Reemplaza todos los placeholders marcados con `[PLACEHOLDER]`
2. Sube las imágenes al directorio `/public/haion_landing/`
3. Verifica que todos los enlaces funcionen
4. Prueba la página en dispositivos móviles y escritorio
