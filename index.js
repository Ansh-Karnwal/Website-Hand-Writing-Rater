const canvas = new handwriting.Canvas(document.getElementById("canvas"), 10);
canvas.set_Undo_Redo(true, true);
canvas.setLineWidth(5);
canvas.setCallBack(function(data, err) {
    if (err) throw err;
    const wordCharacterList = ['F', 'e', 'a', 's', 't'];
    let count = 0;
    let score = 0;
    let position = 0;
    console.log(data);
    for (let i = 0; i < 50; i++) {
        try {
            if (count == 5) {count = 0;}
            if (wordCharacterList.at(count) == (data.at(position)).at(count)) {
                score += 2.7;
            }
            else {
                score -= 1.1;
            }
            if (count == 4) {
                if (wordCharacterList.length < (data[position]).length
                    || wordCharacterList.length > (data[position]).length) {
                    score -= 5.4;
                }
            }
            if (((i+1) % 5) == 0) {position++;}
            count++;
        } catch (Exception) {}
    }
    let textColor;
    let selected;
    if (score <= 30) {selected = 'selected3'; textColor = 'text3';}
    else if (score <= 60) {selected = 'selected2'; textColor = 'text2';}
    else if (score <= 90) {selected = 'selected1'; textColor = 'text1';}
    const barCount = 50;
    const wrapper = document.querySelectorAll('.progress');
    const percent = Math.round(50 * Math.round(score)/100);
    for (let index = 0; index < barCount; index++) {
        wrapper[0].innerHTML -= ``;
    }
    wrapper[0].innerHTML -= ``;
    for (let index = 0; index < barCount; index++) {
        const className = index < percent ? selected : '';
        wrapper[0].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
    }
    if (score < 0) {
        wrapper[0].innerHTML += `<p class="selected percent-text ${textColor}">0%</p>`;
    }
    else {
        wrapper[0].innerHTML += `<p class="selected percent-text ${textColor}">${Math.round(score)}%</p>`;
    }
    const tips = document.getElementById('tips');
    if (selected.localeCompare('selected3') == 0) {
        tips.textContent = "To improve your handwriting follow the tips below\n" +
            "1. Write slower in order to get better quality in the writing\n" +
            "2. Have a relaxed grip when writing\n" +
            "3. Practice writing on paper. It is important to find a writing utensil that can give the best output when writing\n" +
            "4. For more tips visit https://tinyurl.com/3hae3mya";
    }
    else if (selected.localeCompare('selected2') == 0) {
        tips.textContent = "To improve your handwriting follow the tips below\n" +
            "\n1. Try writing letters closer to improve quality\n" +
            "2. Find the best way to hold the writing utensil\n" +
            "3. Avoid excess lines or dots and keep a consistent and proper letter shape\n" +
            "4. For more tips visit https://tinyurl.com/3hae3mya";
    }
    else if (selected.localeCompare('selected1') == 0) {
        tips.textContent = "Congratulations, your handwriting is excellent here are some fun things you can do\n" +
            "1. Try to learn cursive (If not known)\n" +
            "2. Experiment with new writing styles\n" +
            "3. Find new writing utensils and see which one is best\n" +
            "4. For more tips visit https://tinyurl.com/2bs4s6pc";
    }
});
canvas.set_Undo_Redo(true, true);

const openFile = function (file) {
    const input = file.target;
    const reader = new FileReader();
    const outputOCR = document.getElementById("output-ocr");
    reader.onload = function () {
        const dataURL = reader.result;
        Tesseract.recognize(
            dataURL,
        ).then(({ data: { text } }) => {
            outputOCR.textContent = text;
        })
    };
    reader.readAsDataURL(input.files[0]);
};
