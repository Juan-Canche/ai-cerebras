# API IA con Express y Cerebras

API REST simple desarrollada con Node.js y Express que permite generar respuestas usando modelos de inteligencia artificial mediante Cerebras.

## Tecnologías

- Node.js
- Express
- dotenv
- Cerebras SDK

---

# Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

Entra al proyecto:

```bash
cd tu-repositorio
```

Instala las dependencias:

```bash
npm install
```

---

# Configuración

Crea un archivo `.env` en la raíz del proyecto:

```env
PORT=1234
CEREBRAS_API_KEY=tu_api_key
MODEL=gpt-oss-120b
```

---

# Ejecutar el proyecto

```bash
node server.js
```

Servidor disponible en:

```text
http://localhost:1234
```

---

# Endpoints

## GET /

Verifica que el servidor está funcionando.

### Respuesta

```json
{
  "mensaje": "Servidor funcionando"
}
```

---

## POST /ai

Genera una respuesta usando inteligencia artificial.

### URL

```text
http://localhost:1234/ai
```

### Body

```json
{
  "mensaje": "Hola"
}
```

### Respuesta

```json
{
  "respuesta": "Hola, ¿en qué puedo ayudarte?"
}
```

---

# Ejemplo con fetch

```js
fetch('http://localhost:1234/ai', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    mensaje: 'Explica qué es Node.js',
  }),
})
.then(res => res.json())
.then(data => console.log(data));
```

---

# Dependencias principales

Instalación manual:

```bash
npm install express dotenv @cerebras/cerebras_cloud_sdk
```

---

# Estructura del proyecto

```text
proyecto/
│
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

# Variables de entorno

| Variable | Descripción |
|---|---|
| PORT | Puerto del servidor |
| CEREBRAS_API_KEY | API Key de Cerebras |
| MODEL | Modelo de IA utilizado |

---

# Autor

Juan Ángel Canché Góngora