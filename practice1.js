function countBMI() {
    var weight = document.getElementById("enterWeight").value;
    var height = document.getElementById("enterHeight").value;
    //----------practice1.1-------------------------
    //宣告兩個變數，分別把他們的值變成為"weight"、"height"再宣告一個變數用來存取計算後的BMI值吧!
    var w = weight;
    var h = height;
    var bmi = 0;

    //----------practice1.2-------------------------
    //寫出BMI的計算公式吧!
    bmi = w / (h*h);
    //----------practice1.3-------------------------
    if(bmi > 22)/*這裡應該填上什麼條件式呢?*/
    {
        var resultBMI = document.getElementById("BMINumber");
        resultBMI.innerHTML = "your BMI is:  " + bmi + ",and you have to go on a diet :((";
    }
    else/*這裡應該填上什麼條件式呢?*/
    {
        var resultBMI = document.getElementById("BMINumber");
        resultBMI.innerHTML = "your BMI is:  " + bmi + ",and your BMI is just fine :))";
    }
}