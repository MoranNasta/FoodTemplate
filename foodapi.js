const readXlsxFile = require('read-excel-file/node')

// File path.
readXlsxFile('./Foodapi.xlsx').then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
  return rows
})

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
