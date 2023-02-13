const ipt = document.getElementById("input");
const opt = document.getElementById("output");
function preview() {
    opt.innerHTML = ipt.value;
    MathJax.Hub.Typeset();
};