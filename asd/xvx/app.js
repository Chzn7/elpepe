const express = require('express');
const cors = require('cors');
const db = require('./conexion');

app.use(cors());
app.use(express.json());

app.post('/contacto', async (req, res) => {
    const { nombre, telefono, mensaje } = req.body;
    try {
        const sql = "INSERT INTO registros (usuario, telefono, mensaje) VALUES (?, ?, ?)";
        await db.query(sql, [nombre, telefono, mensaje]);
        res.json({ mensaje: '¡Datos guardados con éxito!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.listen(3000, () => console.log('🚀 Servidor en puerto 3000'));