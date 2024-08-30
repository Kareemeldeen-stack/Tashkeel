var word = document.getElementById("wordText");
var wordList = document.getElementsByClassName("word");
var getButton = document.getElementById("getButton");
var finalWords = document.getElementsByClassName("finalWord");
console.log(getButton);
console.log(finalWords);
getButton.addEventListener("click",(e)=>{
    var value = word.value;
    wordList[0].innerHTML = (value + "ُ");
    wordList[1].innerHTML = (value + "َ");
    wordList[2].innerHTML = (value + "ِ");
    wordList[3].innerHTML = (value + "ْ");
    wordList[4].innerHTML = (value + "ُه");
    wordList[5].innerHTML = (value + "َه");
    wordList[6].innerHTML = (value + "ِه");
    wordList[7].innerHTML = (value + "ُهم"); //
    wordList[8].innerHTML = (value + "َهم");
    wordList[9].innerHTML = (value + "ِهم");
    wordList[10].innerHTML = (value + "ُها");
    wordList[11].innerHTML = (value + "َها");
    wordList[12].innerHTML = (value + "ِها");
    wordList[13].innerHTML = (value + "ُهن");
    wordList[14].innerHTML = (value + "َهن");
    wordList[15].innerHTML = (value + "ِهن");
    wordList[16].innerHTML = (value + "ُهما");
    wordList[17].innerHTML = (value + "َهما");
    wordList[18].innerHTML = (value + "ِهما");
    finalWords[0].innerHTML = value;
    finalWords[1].innerHTML = ("ال"+value);
    finalWords[2].innerHTML = (value+"ه");
    finalWords[3].innerHTML = (value+"ها");
    finalWords[4].innerHTML = (value+"هما");
    finalWords[5].innerHTML = (value+"هم");
    finalWords[6].innerHTML = (value+"هن");
});

