const express = require('express');
const app = express();
const PORT = 3000;

// Simulamos una base de datos con retraso
app.post('/api/recompensas', (req, res) => {
    const delay = Math.random() * 1000; // Retraso aleatorio 1 seg
    setTimeout(() => {
        //  10% de las peticiones fallan 
        if (Math.random() > 0.9) {
            return res.status(500).send("Error: Base de datos saturada");
        }
        res.status(200).send("Recompensa guardada con éxito");
    }, delay);
});

app.listen(PORT, () => {
    console.log(`Servidor de Helldivers 2 corriendo en http://localhost:${PORT}`);
});

