const PDFDocument = require("pdfkit")

const buildPDF  = (shopData , dataCallBack , endCallBack)=>{
    const doc = new PDFDocument()
    doc.on("data" , dataCallBack)
    doc.on("end" , endCallBack)
    .fontSize(20)
    .text("hello world")

     // Loop through the shop data and add it to the PDF
  shopData.forEach(shop => {
    doc.text(`Name: ${shop.name}, Location: ${shop.shopLocation}, Phone: ${shop.phoneNumber}`);
    // Add more fields as needed
  });
    doc.end()
}


module.exports = {buildPDF}