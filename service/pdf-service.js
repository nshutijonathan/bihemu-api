const PDFDocument = require('pdfkit');
const fs = require('fs');
const buildPDF = (dataCallback , endCallback) => {
  const doc = new PDFDocument();
  doc.on("data" , dataCallback);
  doc.on("end" , endCallback)
    .fontSize(25)
    .text('This is a pdf test!')

    doc.end();
};
module.exports = {buildPDF};
