function countBMI() {
    var weight = document.getElementById("enterWeight").value;
    var height = document.getElementById("enterHeight").value;
    //----------practice1.1-------------------------
    var a = weight;
    var b = height;
    var bmi;
    var result;
    //----------practice1.2-------------------------
    bmi = a / ((b / 100) * (b / 100));
    //----------practice1.3-------------------------
    if (bmi >= 25) {
        var resultBMI = document.getElementById("BMINumber");
        resultBMI.innerHTML = "Your BMI is a little bit high QQ.";
    } else {
        var resultBMI = document.getElementById("BMINumber");
        resultBMI.innerHTML = "Your BMI is just fine :))."; ;
    }
}