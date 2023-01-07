// var openFile = function(file) {
//     var input = file.target;
//     var reader = new FileReader();
//     reader.onload = function(){
//         var dataURL = reader.result;
//         var output = document.getElementById('output');
//         output.src = dataURL;
//     };
//     reader.readAsDataURL(input.files[0]);
// };

// Tesseract.recognize(
//     'https://tesseract.projectnaptha.com/img/eng_bw.png',
//     'eng',
// ).then(({ data: { text } }) => {
//     console.log(text);
// })

const canvas = new handwriting.Canvas(document.getElementById("canvas"), 10);
canvas.set_Undo_Redo(true, true);
canvas.setLineWidth(5);
canvas.setCallBack(function(data, err) {
    if (err) throw err;
    console.log(data);
});
canvas.set_Undo_Redo(true, true);