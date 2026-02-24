const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serwuj pliki statyczne
app.use(express.static(path.join(__dirname, 'public')));

// Główna strona
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback - zawsze zwracaj index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`⛏️ MC Chat Logger działa na porcie ${PORT}`);
    console.log(`🌐 http://localhost:${PORT}`);
});