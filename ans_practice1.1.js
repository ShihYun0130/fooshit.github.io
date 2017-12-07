function countBMI() {
    var weight = document.getElementById("enterWeight").value;
    var height = document.getElementById("enterHeight").value;
    //----------practice1.1-------------------------
    var x = weight;
    var y = height;
    var bmi;

    //----------practice1.2-------------------------
    bmi = x / ((y / 100) * (y / 100));
    //----------practice1.3-------------------------
    if (bmi >= 22) {
        var resultBMI = document.getElementById("BMINumber");
        resultBMI.innerHTML = "your BMI is:  " + bmi + ",and you have to go on a diet :((";
    } else {
        var resultBMI = document.getElementById("BMINumber");
        resultBMI.innerHTML = "your BMI is:  " + bmi + ",and your BMI is just fine :))";
    }
}