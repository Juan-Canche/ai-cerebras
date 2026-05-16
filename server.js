import Cerebras from '@cerebras/cerebras_cloud_sdk';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

const puerto = process.env.PORT || 1234;

// Middleware
app.use(express.json());

// Cliente Cerebras
const client = new Cerebras({
  apiKey: process.env.CEREBRAS_API_KEY,
});

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Servidor funcionando',
  });
});

// Ruta IA
app.post('/ai', async (req, res) => {
  try {
    const { mensaje } = req.body;

    // Validaciones
    if (!mensaje) {
      return res.status(400).json({
        error: 'El campo mensaje es obligatorio',
      });
    }

    if (typeof mensaje !== 'string') {
      return res.status(400).json({
        error: 'mensaje debe ser un texto',
      });
    }

    if (!mensaje.trim()) {
      return res.status(400).json({
        error: 'mensaje no puede estar vacío',
      });
    }

    // Petición a Cerebras
    const completion = await client.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: mensaje,
        },
      ],
      //model: 'llama3.1-8b',
      model: 'gpt-oss-120b',
    });

    // Respuesta
    res.json({
      respuesta: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error interno del servidor',
    });
  }
});

// Iniciar servidor
app.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});