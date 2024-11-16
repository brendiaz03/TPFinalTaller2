const express = require('express');
const db = require('./db');
const cors = require('cors');
const app = express();
const port = 3000;

//app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
  }));
  app.use(express.json());


// Endpoint para crear una nueva tarea (POST)
app.post('/tareas', (req, res) => {
    const { titulo, descripcion, completada = false } = req.body;
    const query = 'INSERT INTO tareas (titulo, descripcion, completada) VALUES (?, ?, ?)';
    db.query(query, [titulo, descripcion, completada], (err, result) => {
        if (err) {
            console.error('Error al crear la tarea:', err);
            return res.status(500).send('Error al crear la tarea');
        }
        res.status(201).json({ id: result.insertId, titulo, descripcion, completada });
    });
});

// Endpoint para obtener todas las tareas (GET)
app.get('/tareas', (req, res) => {
    const query = 'SELECT * FROM tareas';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send('Error al obtener las tareas');
        res.json(results);
    });
});

// Endpoint para obtener una tarea por ID (GET)
app.get('/tareas/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM tareas WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send('Error al obtener la tarea solicitada');
        if (results.length === 0) return res.status(404).send('Tarea no encontrada');
        res.json(results[0]);
    });
});

// Endpoint para actualizar una tarea por ID (PUT)
app.put('/tareas/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, completada } = req.body;
    const query = 'UPDATE tareas SET titulo = ?, descripcion = ?, completada = ? WHERE id = ?';
    db.query(query, [titulo, descripcion, completada, id], (err, result) => {
        if (err) return res.status(500).send('Error al actualizar la tarea');
        if (result.affectedRows === 0) return res.status(404).send('Tarea no encontrada');
        res.send('Tarea actualizada');
    });
});

// Endpoint para marcar una tarea como completada (PATCH)
app.patch('/tareas/:id/completada', (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE tareas SET completada = TRUE WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).send('Error al marcar la tarea como completada');
        if (result.affectedRows === 0) return res.status(404).send('Tarea no encontrada');
        res.send('Tarea marcada como completada');
    });
});

// Endpoint para borrar una tarea por ID (DELETE)
app.delete('/tareas/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tareas WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).send('Error al eliminar la tarea');
        if (result.affectedRows === 0) return res.status(404).send('Tarea no encontrada');
        res.send('Tarea eliminada');
    });
});

app.listen(port, () => {
    console.log(`API escuchando y funcionando en http://localhost:${port}`);
});
