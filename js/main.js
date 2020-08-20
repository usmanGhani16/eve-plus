// animation
new WOW().init();


// Smoothe scroll 

$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 600);
    }
});

$('.navbar .dropdown').hover(function () {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function () {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
});
// navigation animation on scroll down


window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".navbar").style.padding = "8px 16px";
        document.querySelector(".navbar").style.background = "rgba(0, 0, 0, 0.7)";
        document.querySelector(".navbar-brand").style.fontSize = "20px";
        document.querySelector(".navbar").style.border = "none";
    } else {
        document.querySelector(".navbar").style.padding = "25px 18px";
        document.querySelector(".navbar").style.background = "none";
        document.querySelector(".navbar-brand").style.fontSize = "25px";
        document.querySelector(".navbar").style.borderBottom = "#ddd 1px solid";

    }
}

// get profile name

function myFunction() {
    var name = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = name;
}


function fixed() {
    document.querySelector("#fixed").style.padding.right = "25px";
    document.querySelector("#fixed").innerHTML = "Help Line : " + "0900-78601";

}


function fixed1() {
    document.querySelector("#fixed").style.padding = "13px";
    document.querySelector("#fixed").innerHTML = '<i class="fas fa-phone fa-1x">' + '</i>';
}

//jason
var ReportData1 = {
    "Name": "Kritika Chaudhry Murder Case",
    "Date": "13-June 2017",
    "Location": "Mumbai, INDIA"
};

document.getElementById("n1").innerHTML = "Name: " + ReportData1.Name;

document.getElementById("d1").innerHTML = "Date: " + ReportData1.Date;

document.getElementById("l1").innerHTML = "Location: " + ReportData1.Location;