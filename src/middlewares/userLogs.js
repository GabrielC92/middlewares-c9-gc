const fs = require('fs');
const path = require('path');
const rutasFilePath = path.join(__dirname,'..','logs','userLogs.txt');
const rutas = JSON.parse(fs.readFileSync(rutasFilePath,'utf-8'));

module.exports = {
    historial: (req,res,next) => {
        next();
    }
}