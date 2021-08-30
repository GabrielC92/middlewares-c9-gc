const fs = require('fs');
const path = require('path');
const rutasFilePath = path.join(__dirname,'..','logs','userLogs.txt');

module.exports = (req,res,next) => {
    fs.appendFileSync(rutasFilePath, `El usuario ingresó a la ruta: ${req.url}\n`, 'utf-8');
    next();
}