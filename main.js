
document.getElementById("btnTinh").onclick = function () {

    var cyrrentFormart = new Intl.NumberFormat('vn-VN');

    var ngaylam = document.getElementById("txtngaylam").value * 1;

    var tong = ngaylam * 100;

    console.log(tong);

    console.log(tong);

    var ketqua = "<div class='alert alert-success'>";
    ketqua += "<p> Ket qua ngay lam viet: ";
    ketqua += cyrrentFormart.format(tong);
    ketqua += "</p>";
    ketqua += "</div>";

    document.getElementById("kq").innerHTML = ketqua;

}


document.getElementById("btnTB").onclick = function () {


    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;
    var number4 = document.getElementById("number4").value * 1;
    var number5 = document.getElementById("number5").value * 1;
    var tb = (number1 + number2 + number3 + number4 + number5) / 5;

    console.log(tb);

    var ketquatb = "<div>"
    ketquatb += "<p> ket qua tb";
    ketquatb += tb;
    ketquatb += "</p>";
    ketquatb += "</div>";

    document.getElementById("kq1").innerHTML = ketquatb;
}

document.getElementById("btnUSD").onclick = function () {

    var USD = document.getElementById("USD").value * 1;

    var quydoi = USD * + (23.500) + ".000VND";


    document.getElementById("kq2").innerHTML = quydoi;
}



document.getElementById("btnUSD").onclick = function () {

    var USD = document.getElementById("USD").value * 1;

    var quydoi = USD * + (23.500) + ".000VND";


 
    document.getElementById("kq3").innerHTML = quydoi;


}

document.getElementById("btndt").onclick = function () {

    var dai = document.getElementById("dai").value*1
    var rong = document.getElementById("rong").value*1

    var dai1 = document.getElementById("dai").value*1
    var rong1 = document.getElementById("rong").value*1

    var dt=dai*rong;

    var cv= (dai1+rong1) *2;

    var ketquadt = "<div>"
    ketquadt += "<p> ket qua dt";
    ketquadt += dt;
    ketquadt += "</p>";
    ketquadt += "<p> ket qua cv";
    ketquadt += cv;
    ketquadt += "</p>";
    ketquadt += "</div>";


    document.getElementById("cv").innerHTML = ketquadt;
}

    document.getElementById("btnN").onclick =function (){

        var dayn=document.getElementById("dayn").value*1;

        var donvi1= Math.floor(dayn % 10);

        var hangchuc1=Math.floor(dayn / 10);


        var kqend=donvi1 + hangchuc1;  

        console.log(kqend);

        document.getElementById("end").innerHTML = kqend;
}



