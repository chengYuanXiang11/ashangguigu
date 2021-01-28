var fs =  require('fs');
var check =  require(' syntax-error');

var file =  __dirname  +  '/ddd/views/newsedit.ejs' ;
var src =  fs.readFileSync(file);

var err =  check(src,file);
if(错误){
    console.错误(' ERROR DETECTED '  +  Array(62).join('！'));
   控制台.错误(错误);
   控制台.error(Array(76).join(' - '));
}