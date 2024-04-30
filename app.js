const express = require('express');
const app = express();
const router = require('./routes');
const port = 8080;

app.use(router);
app.listen(port, () => console.log(`server running on port ${port}`));


