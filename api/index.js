const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:4200', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));
app.use(express.json());

// Endpoint para crear una nueva tarea (Post)
app.post('/items', (req, res) => {
    const { titulo, descripcion } = req.body;
    const query = 'INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)';
    db.query(query, [titulo, descripcion], (err, result) => {
        if (err) {
          console.error('Error al crear la tarea:', err);
          return res.status(500).send('Error al crear la tarea');
        }
        res.status(201).json({ id: result.insertId, titulo, descripcion });
      });
      
  });

// Endpoint para obtener todas las tareas (GET)
app.get('/items', (req, res) => {
    const query = 'SELECT * FROM tareas';
    db.query(query, (err, results) => {
      if (err) return res.status(500).send('Error al obtener las tareas');
      res.json(results);
    });
  });

// Endpoint para obtener una tarea por ID (GET)
app.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM tareas WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) return res.status(500).send('Error al obtener la tarea solicitada');
      if (results.length === 0) return res.status(404).send('Tarea no encontrada');
      res.json(results[0]);
    });
  });

// Endpoint para actualizar una tarea por ID (PUT)
app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const query = 'UPDATE tareas SET titulo = ?, descripcion = ? WHERE id = ?';
    db.query(query, [titulo, descripcion, id], (err, result) => {
      if (err) return res.status(500).send('Error al actualizar la tarea');
      if (result.affectedRows === 0) return res.status(404).send('Tarea no encontrada');
      res.send('Item actualizado');
    });
  });

// Endpoint para borrar una tarea por ID (DELETE)
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tareas WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) return res.status(500).send('Error al eliminar la tarea');
      if (result.affectedRows === 0) return res.status(404).send('Tarea no encontrada');
      res.send('Item eliminado');
    });
  });

app.listen(port, () => {
  console.log(`API escuchando y funcionando en http://localhost:${port}`);
});
