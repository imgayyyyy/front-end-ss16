let sentence = prompt("");

let spaceCount = 1;
    for (let char of sentence) {
        if (char === " ") {
            spaceCount++;
        }
    }
alert(`so tu trong cau la : ${spaceCount}`);