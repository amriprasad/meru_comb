const ipt = document.getElementById("input");
const opt = document.getElementById("output");

const otherRadioButton = document.getElementById("orb");
const otherInput = document.getElementById("oinp");

otherRadioButton.addEventListener("click", () => {
    otherInput.focus();
});
otherInput.addEventListener("input", () => {
    otherRadioButton.click();
    otherRadioButton.value = otherInput.value;
});

function preview() {
    opt.innerHTML = "<p class='w3-xlarge w3-center'>"+document.getElementById("titinput").value+"</p>" + ipt.value;
    MathJax.Hub.Typeset();
};

// How many subsets of size {k} does a set of size {n} have?

function generateCaptcha() {
    const n = Math.floor(Math.random()*5)+4;
    const k = Math.floor(Math.random()*2)+2;
    document.getElementById("cap-question").innerText = `How many subsets of size ${k} does a set of size ${n} have?`;
    document.getElementById("cap-question").setAttribute("data", `${n},${k}`);
}
function checkAnswer(answer, n, k) {
    return answer == factorial(n)/(factorial(k)*factorial(n-k));
}
function checkCaptcha(event) {
    event.preventDefault();
    var answer = parseInt(document.getElementById("cap-answer").value);
    var data = document.getElementById("cap-question").getAttribute("data").split(",");
    if(checkAnswer(answer, data[0], data[1])) {
        document.getElementById("submit-button").disabled = "";
    }else{
        document.getElementById("cap-answer").classList.add("w3-red");
        document.getElementById("submit-button").disabled = true;
        setTimeout(() => {
            document.getElementById("cap-answer").classList.remove("w3-red");
            generateCaptcha();
        }, 250);
    }
}
window.addEventListener("load", generateCaptcha);
function factorial(n) {
    var i,k;
    for(i = 2,k = 1;i <= n;k*=i,i++);
    return k;
}
