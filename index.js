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

const wrapper = document.querySelectorAll('.progress');

const barCount = 50;
const percent1 = 50 * 90/100;
const percent2 = 50 * 60/100;
const percent3 = 50 * 30/100;

for (let index = 0; index < barCount; index++) {
    const className = index < percent1 ? 'selected1' : '';
    wrapper[0].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}
wrapper[0].innerHTML += `<p class="selected percent-text text1">90%</p>`

for (let index = 0; index < barCount; index++) {
    const className = index < percent2 ? 'selected2' : '';
    wrapper[1].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}
wrapper[1].innerHTML += `<p class="selected percent-text text2">60%</p>`

for (let index = 0; index < barCount; index++) {
    const className = index < percent3 ? 'selected3' : '';
    wrapper[2].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}
wrapper[2].innerHTML += `<p class="selected percent-text text3">30%</p>`