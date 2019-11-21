const fs = require('fs'); //обьект с методами для работы с файлами - считывать ,изменять, создававть, атрибуты менять и тд
const file = process.argv[2]; // [0] - way to node , [1] - way to a file

const code = fs.readFileSync(file, 'utf-8');


const deleteComments = function(code) {
let commentsRegex = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
let result = code.replace(commentsRegex, "");
return result;                                              
};

const cleanCode = deleteComments(code);
fs.writeFileSync('result.js', cleanCode);