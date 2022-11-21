function enableMobileLayout() {
    var logo = document.getElementById("logo");
    var addonText = document.getElementById("addonText");
    var aboutText = document.getElementById("aboutText");
    addonText.classList.add("hidden");
    logo.classList.add("mobile-layout");
    aboutText.innerHTML = "<strong>About Clickette</strong>";
    }
    function disableMobileLayout() {
    var logo2 = document.getElementById("logo");
    var addonText = document.getElementById("addonText");
    var aboutText = document.getElementById("aboutText");
    addonText.classList.remove("hidden");
    logo2.classList.remove("mobile-layout");
    aboutText.innerHTML = "<strong>About Clickette</strong>";
    }
    var limit = 1;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
        headers: { 'X-Api-Key': '1HHHukaNEC5Kh3iDOLeZjQ==nxxKAnwy9XbK9bYM'},
        contentType: 'application/json',
        success: function(result) {
        printParsedFact(JSON.stringify(result));
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    function printParsedFact(string) {
        const txt = string;
        var txt1 = txt.replace("[", "");
            var txt2 = txt1.replace("]", "");
        
    var obj = JSON.parse(txt2);
    const fact = obj.fact;
        // console.log("Did you know? " + fact);
        addontext1 = document.getElementById('addonText');
        addontext1.innerHTML = '<h3>Did you know? ' + fact + '</h3>';
    }
    window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 791px)").matches) {
    disableMobileLayout();
    } else {
    enableMobileLayout();
    }
    })
    if (window.matchMedia("(min-width: 791px)").matches) {
    disableMobileLayout();
    } else {
    enableMobileLayout();}
    document.addEventListener('keydown', keyHandler, false);
    $(window).scroll(function(e){ 
      var $el = $('.fixedElement'); 
      var isPositionFixed = ($el.css('position') == 'fixed');
      if ($(this).scrollTop() > 200 && !isPositionFixed){ 
        $el.css({'position': 'fixed', 'top': '0px'}); 
      }
      if ($(this).scrollTop() < 200 && isPositionFixed){
        $el.css({'position': 'static', 'top': '0px'}); 
      } 
    });
var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
if (isMac) {
function setCookie(cname,cvalue) {
  document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

  let macWarningDismissed = getCookie("macWarningDismissed");
  if (macWarningDismissed == "") {
      alert('Warning: Some features on this website do not work as intended on macOS.');
       setCookie("macWarningDismissed", 'true');
     }
  }
}
