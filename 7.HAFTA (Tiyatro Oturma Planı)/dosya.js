document.querySelectorAll("#kontrol").forEach((checkbox, i) => {
    checkbox.addEventListener("change", function () {
        console.log("mesaj");
        if (checkbox.checked == true) {
            document.querySelectorAll("#sıra_no")[i].removeAttribute("disabled");
        } else {
            document.querySelectorAll("#sıra_no")[i].disabled = "false";
        }
    });
});
var isim = document.querySelectorAll(".nameinput");
var sıralar = document.querySelectorAll(".sıra");
var kontroll = document.querySelectorAll(".kontrol");
var cıktı = document.querySelectorAll(".sonuc");
var cıktı1 = document.querySelectorAll(".sonuc1");
var tablogorunum = document.getElementById("tablo");
var baslikgorunum = document.getElementById("baslik");

document.getElementById("kayıt").addEventListener("click", function () {
    console.log("bastı");
    console.log("isim     ", "     Sıra Numarası");
    isim.forEach((x, i) => {
        if (kontroll[i].checked == true) {
            tablogorunum.removeAttribute("hidden");
            baslikgorunum.removeAttribute("hidden");
            console.log(isim[i].innerHTML, "        " + sıralar[i].value)
            cıktı.forEach((x, i) => {
                if (kontroll[i].checked == true) {
                    cıktı[i].innerHTML = isim[i].innerHTML;
                    cıktı1[i].innerHTML = sıralar[i].value;
                    cıktı[i].removeAttribute("hidden");
                    cıktı1[i].removeAttribute("hidden");
                }
            });
        }
    });

});