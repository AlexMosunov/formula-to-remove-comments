export * as yourCode from './yourdirectory/index.js'

// comment
let g = 'g'; // comment 
const deleteComments = function(code) {
    
    let commentsRegex = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
    let result = code.replace(commentsRegex, "");
    return result;                                               
};
    

let myCode = function() {
    var a =5;
    var b = 6;
    var sum = a + b; // this is comment
    /* 
    this is a long comment;
    */
};
