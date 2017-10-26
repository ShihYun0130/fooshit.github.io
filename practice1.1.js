function countBMI() {
    var weight = $('#enterWeight').val();
    var height = $('#enterHeight').val();
    //----------practice1.1-------------------------
    var a = weight;
    var b = height;
    var bmi;
    var result;
    //----------practice1.2-------------------------
    bmi = a / ((b / 100) * (b / 100));
    //----------practice1.3-------------------------
    if (bmi >= 25) {
        result = "Your BMI is a little bit high QQ.";
    } else {
        result = ;
    }
    var resultBMI = document.getElementById("NumberBMI");
    resultBMI.innerHTML = "Your BMI is just fine :)).";
}