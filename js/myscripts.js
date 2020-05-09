window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 1px 20px";
    document.getElementById("img-responsive").style.fontSize = "25px";
    document.getElementById("navbar").style.width ="100%";
    document.getElementById("navbar-right").style.marginTop = "-1px";
  } else {
    document.getElementById("navbar").style.padding = "";
    document.getElementById("img-responsive").style.fontSize = "35px";
  }
}