const fs=require('fs');fs.mkdirSync('www/lib',{recursive:true});
fs.copyFileSync('index.html','www/index.html');
const m={'pdf-lib/dist/pdf-lib.min.js':'pdf-lib.min.js','pdfjs-dist/legacy/build/pdf.min.js':'pdf.min.js','pdfjs-dist/legacy/build/pdf.worker.min.js':'pdf.worker.min.js','jszip/dist/jszip.min.js':'jszip.min.js'};
for(const k in m)fs.copyFileSync('node_modules/'+k,'www/lib/'+m[k]);
