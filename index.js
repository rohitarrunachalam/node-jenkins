const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
    res.json({ message: "API is running! and this is the change two" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
