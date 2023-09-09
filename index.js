//ok so this is continuing from the nodejs basic static server project. The index file in that project has some basic guidelines
//1) I installed express with the command npm i express

const express = require("express");
const path = require("path");

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};
//init middleware
app.use(logger);

//set a static folder
app.use("/", express.static(path.join(__dirname, "public")));

//We can do this, but if we do this, we have to create a route manually for every single page with the /path
// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
