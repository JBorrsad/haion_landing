# Guía de Placeholders para Asesoría - Página Web

Esta página web está preparada para una asesoría fiscal, laboral y contable. Aquí tienes todos los campos que necesitas personalizar:

## 📄 Página Principal (index.astro)

- `[NOMBRE_ASESORIA]` - Nombre de la asesoría (ej: "Asesoría García & Asociados")

## 🦸 Sección Hero (Encabezado principal)

**Hero a pantalla completa con imagen de fondo:**

- **Imagen de fondo:** `bg.jpg` (ya configurada)
- **Overlay oscuro** para legibilidad del texto
- **Título:** `[NOMBRE_ASESORIA]`
- **Subtítulo:** "Fiscal · Laboral · Contable" (fijo)
- **Eslogan:** "Gestión clara, compromiso real." (fijo)
- **Descripción:** "Lo importante no es parecer expertos, sino serlo." (fijo)
- **CTAs:** "Solicita una reunión gratuita" + "Ver nuestros servicios" (fijo)
- **Indicador scroll** animado

## 🏢 Sección "Sobre Nosotros"

**Contenido fijo basado en estructura.txt con un placeholder:**

- Solo necesitas personalizar: `[NOMBRE_ASESORIA]`
- El resto del contenido está predefinido siguiendo el texto de estructura.txt

## 🛠️ Sección Servicios

**Servicios fijos basados en servicios+.txt:**

- 🧾 **Asesoría Fiscal** - "Optimizamos tu situación fiscal con inteligencia, no con trucos."
- 👷 **Asesoría Laboral** - "Las personas importan. Y el cumplimiento también."
- 📊 **Asesoría Contable** - "Tus números no son solo cifras: son decisiones."
- ⚖️ **Asesoría Jurídica** - "Protección legal integral para tu empresa."
- 🏢 **Asesoría Mercantil** - "Acompañamos el crecimiento de tu empresa."
- 🔒 **Servicios Especializados** - "Soluciones específicas para necesidades únicas."

_Los servicios están predefinidos. No requieren personalización._

## 🚀 Sección CTA (Llamada a la Acción)

**Contenido fijo basado en estructura.txt con un placeholder:**

- Título: "¿Buscas una asesoría que te hable con claridad, te entienda y actúe rápido?" (fijo)
- Subtítulo: "Podemos empezar hoy." (fijo)
- Solo personalizar: `[TELEFONO_ASESORIA]` - Número de teléfono para el botón de llamada

## 📞 Sección Contacto

### Información de Contacto

- `[MENSAJE_CONTACTO_INTRODUCCION]` - Mensaje de introducción
- `[EMAIL_EMPRESA]` - Email de contacto de la asesoría
- `[TELEFONO_WHATSAPP]` - Número de WhatsApp (formato: 34123456789)
- `[TEXTO_WHATSAPP]` - Texto descriptivo para WhatsApp
- `[URL_LINKEDIN_EMPRESA]` - URL del LinkedIn de la asesoría
- `[TEXTO_LINKEDIN]` - Texto descriptivo para LinkedIn
- `[DIRECCION_EMPRESA]` - Dirección física de la asesoría

### Formulario de Contacto Simplificado

**El formulario está predefinido según estructura.txt:**

- **Título:** "Puedes enviarnos un email con tu consulta o llamarnos por teléfono" (fijo)
- **Subtítulo:** "Contacto online" (fijo)
- **Campos:**
  - Nombre (obligatorio)
  - Correo electrónico (obligatorio)
  - Teléfono (obligatorio)
  - Mensaje breve (opcional)
- **Botón:** "Enviar consulta" (fijo)
- **Mensaje final:** "Te respondemos en menos de 24 horas." (fijo)

## 🎨 Estructura Final de la Página

```
🏠 Hero Section (Pantalla completa con bg.jpg)
   ├── [NOMBRE_ASESORIA]
   ├── "Fiscal · Laboral · Contable"
   ├── "Gestión clara, compromiso real"
   ├── "Lo importante no es parecer expertos, sino serlo"
   ├── 2 botones CTA
   └── Indicador scroll animado

🏢 Sobre Nosotros
   ├── Descripción de la asesoría (fijo)
   └── "Por qué elegirnos" (4 puntos fijos)

🛠️ Servicios (6 servicios predefinidos)
   ├── Asesoría Fiscal
   ├── Asesoría Laboral
   ├── Asesoría Contable
   ├── Asesoría Jurídica
   ├── Asesoría Mercantil
   └── Servicios Especializados

🚀 CTA
   ├── Mensaje motivador (fijo)
   └── Botón llamada: [TELEFONO_ASESORIA]

📞 Contacto
   ├── Información de contacto (personalizable)
   └── Formulario simple (fijo)
```

## 📝 **Campos que DEBES personalizar:**

### ✅ **Obligatorios (mínimo):**

1. `[NOMBRE_ASESORIA]` - Nombre de la asesoría
2. `[EMAIL_EMPRESA]` - Email de contacto
3. `[TELEFONO_ASESORIA]` - Teléfono principal
4. `[DIRECCION_EMPRESA]` - Dirección física

### 🔄 **Opcionales:**

5. `[TELEFONO_WHATSAPP]` - WhatsApp (si es diferente del principal)
6. `[URL_LINKEDIN_EMPRESA]` - LinkedIn de la empresa
7. `[MENSAJE_CONTACTO_INTRODUCCION]` - Mensaje personalizado de contacto

## 🎯 **Ventajas de esta estructura:**

- ✅ **Contenido profesional** ya redactado
- ✅ **Estructura probada** basada en Ilai Asesores
- ✅ **Servicios específicos** para asesorías
- ✅ **Formulario simple** y efectivo
- ✅ **Mínima personalización** requerida
- ✅ **Testimonios preparados** para futuro uso (comentados)

## 🚀 **Para empezar:**

1. Rellena los **4 campos obligatorios** mínimos
2. Personaliza los opcionales según necesites
3. ¡Tu página está lista para funcionar!

La página está diseñada para ser funcional desde el primer momento con mínima configuración.
