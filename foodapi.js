const readXlsxFile = require('read-excel-file/node')

 const express = require("express");
 const app = express();
 const PORT = process.env.PORT || 3030;

// // your code


// })
  
// Readable Stream.
// readXlsxFile(fs.createReadStream('/path/to/file')).then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.
// })

// // Buffer.
// readXlsxFile(Buffer.from(fs.readFileSync('/path/to/file'))).then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.
// })
// app.get('/', function (req, res) {
  readXlsxFile('./Foodapi.xlsx').then((rows) => {
    // `rows` is an array of rows
    // each row being an array of cells.
    
    var value
    api=new Array
    ai=new Array
    
      
        //console.log(rows)
      for (let row = 1; row < rows.length-1; row++) {
        obj = new Object
        for (let col = 0; col < rows[0].length; col++) {
      
      //console.log(value)

      //console.log(rows[i][j])
      if(rows[row][col]!=null){
        value=rows[0][col]
        obj[value]=rows[row][col]
      }
      //console.log(api)
    }     // console.log(obj)
    // console.log(api)
    api.push(obj)
    //ai.push(api.concat())
    
    //console.log(api)
    //console.log(obj)
    //console.log(rows[0].length, rows[0])
    // rows.forEach(element => {
    //   console.log(element[0])
    // });

    
  }//api.push(obj)
 // console.log(api)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);

});
// // File path.
app.get('/', function (req, res) {
//   readXlsxFile('./Foodapi.xlsx').then((rows) => {
//     // `rows` is an array of rows
//     // each row being an array of cells.
//     api = new Object
   
     res.send(api)
  })