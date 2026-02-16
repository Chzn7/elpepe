const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());


app.post('/contacto', async (req, res) => {
    const { nombre, telefono, mensaje } = req.body;

    try {
      
        const sql = "INSERT INTO registros (usuario, telefono, mensaje) VALUES (?, ?, ?)";
        await db.query(sql, [nombre, telefono, mensaje]);
        
        res.json({ mensaje: '✅ ¡Guardado con éxito desde archivos separados!' });
    } catch (error) {
        console.error("Error al insertar:", error);
        res.status(500).json({ error: 'Hubo un problema con la base de datos' });
    }
});

app.listen(3000, () => {
    console.log('🚀 Servidor funcfcionando en http://localhost:3000');
    console.log('📂 Usando configuración de conexion.js');
});