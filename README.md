# 🦷 Dentist Website - Dr. Mariano Flores

Una página web moderna y profesional para clínicas dentales, desarrollada con Next.js y integrada con Airtable para gestión de citas y contenido dinámico.

## ✨ Características

- 📱 **Responsive Design** - Optimizado para desktop y móvil
- 🎨 **Interfaz Moderna** - Diseño limpio y profesional
- 📊 **Integración con Airtable** - Gestión dinámica de servicios, reseñas y citas
- 🔧 **Formulario de Citas** - Sistema completo de agendamiento
- 🌐 **SEO Optimizado** - Configuración para motores de búsqueda
- ⚡ **Alto Rendimiento** - Construido con Next.js 15

## 🛠️ Tecnologías

- **Framework:** Next.js 15.4.5
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Base de Datos:** Airtable
- **Deploy:** Vercel (Recomendado)
- **Íconos:** React Icons

## 🚀 Instalación Rápida

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/dentist-website.git
cd dentist-website
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Variables de Airtable (REQUERIDAS)
NEXT_PUBLIC_AIRTABLE_PAT=tu_personal_access_token_de_airtable
NEXT_PUBLIC_AIRTABLE_BASE=tu_base_id_de_airtable
```

**Importante:** Las variables deben tener el prefijo `NEXT_PUBLIC_` para ser accesibles en el cliente.

### 4. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 📋 Configuración de Airtable

### Tablas Requeridas

Tu base de Airtable debe contener las siguientes tablas:

#### 1. **Tabla de Citas** (`tblK016wXTAioZURc`)
- `Nombre Completo` (Texto)
- `Teléfono` (Texto)
- `Tipo de Servicio` (Texto)
- `Fecha` (Fecha)
- `Hora` (Texto)
- `Dentista` (Linked Record a tabla Dentistas)

#### 2. **Tabla de Dentistas** (`tblAeRust3zAUHkJm`)
- `Nombre` (Texto)
- `Especialidad` (Texto, opcional)
- `Disponible` (Checkbox, opcional)

#### 3. **Tabla de Servicios** (`tblyk6jA2Q7mQPz2U`)
- `Categoría` (Texto) - Nombre de la categoría del servicio
- `Servicio` (Texto) - Nombre específico del servicio
- `Orden` (Número) - Orden de visualización (1, 2, 3...)
- `Imagen` (Attachment, opcional) - Imagen del servicio

#### 4. **Tabla de Reseñas** (`tblCOI0myB4ZS6P5Q`)
- `Nombre` (Texto) - Nombre del cliente
- `Puntuación` (Número) - Calificación del 1 al 5
- `Reseña` (Texto largo) - Comentario del cliente
- `Imagen Cliente` (Attachment, opcional) - Foto del cliente

### Obtener Credenciales de Airtable

1. **Personal Access Token (PAT):**
   - Ve a [Airtable Developers](https://airtable.com/developers/web/api/introduction)
   - Crea un nuevo Personal Access Token
   - Asigna permisos de lectura y escritura a tu base

2. **Base ID:**
   - Ve a tu base de Airtable
   - En la URL encontrarás el ID: `https://airtable.com/app[BASE_ID]/...`
   - El Base ID empieza con `app`

## 🌐 Deploy en Vercel (Recomendado)

### Opción 1: Deploy con CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel --prod
```

### Opción 2: Deploy con GitHub

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard

### Configurar Variables de Entorno en Vercel

**⚠️ CRÍTICO:** Debes configurar las variables de entorno en Vercel:

1. Ve al dashboard de Vercel → Tu Proyecto → Settings → Environment Variables

2. Añade las siguientes variables:

```
NEXT_PUBLIC_AIRTABLE_PAT
Valor: tu_personal_access_token_de_airtable

NEXT_PUBLIC_AIRTABLE_BASE  
Valor: tu_base_id_de_airtable
```

3. Asegúrate de seleccionar **Production**, **Preview**, y **Development**

4. Haz un nuevo deploy para aplicar los cambios

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm run start

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página principal
│   └── [routes]/         # Rutas adicionales
├── components/           # Componentes React
│   ├── mobile/          # Componentes específicos para móvil
│   └── ...              # Componentes principales
├── services/            # Servicios e integraciones
│   └── airtable.ts     # Configuración de Airtable
└── hooks/              # Custom hooks
    └── useMobile.ts    # Hook para detección mobile
```

## ⚙️ Personalización

### Cambiar Colores del Tema

Los colores principales están definidos en los componentes. Busca y reemplaza:

- `#b7d778` - Verde principal
- `#345114` - Verde oscuro
- `#1b2839` - Azul oscuro

### Modificar Contenido

- **Información del dentista:** Edita `src/components/Header.tsx` y `src/components/Footer.tsx`
- **Servicios:** Se cargan dinámicamente desde Airtable
- **Reseñas:** Se cargan dinámicamente desde Airtable
- **Imágenes:** Coloca en la carpeta `public/`

## 🐛 Solución de Problemas

### Error: "Variables de entorno requeridas"
- Verifica que las variables en `.env.local` tengan el prefijo `NEXT_PUBLIC_`
- En Vercel, asegúrate de configurar las variables de entorno

### Error de conexión con Airtable
- Verifica que el Personal Access Token sea válido
- Confirma que el Base ID sea correcto
- Asegúrate de que las tablas tengan los nombres correctos

### Problemas de build
```bash
# Limpiar cache y reinstalar
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

## 📞 Soporte

Si encuentras algún problema o necesitas ayuda:

1. Revisa la documentación de [Next.js](https://nextjs.org/docs)
2. Consulta la [API de Airtable](https://airtable.com/developers/web/api/introduction)
3. Verifica la [documentación de Vercel](https://vercel.com/docs)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para clínicas dentales modernas**