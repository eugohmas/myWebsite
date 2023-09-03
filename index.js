//ok so this is continuing from the nodejs basic static server project. The index file in that project has some basic guidelines
//1) I installed express with the command npm i express

const express = require('express');
const path = require('path');

const app = express();

//set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




