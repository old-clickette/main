
function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
var q = getUrlParameter('q');
const qf = q.replaceAll('+', '%20');
const qfc = decodeURIComponent(qf);
checkForBangs(q);
document.getElementById('searchbox').value = qfc;
window.addEventListener('popstate', function (event) {
  q = getUrlParameter('q');
  qf = q.replaceAll('+', '%20');
  qfc = decodeURIComponent(qf);
  checkForBangs(q);
  document.getElementById('searchbox').value = qfc;
});
document.title = qfc + " - Clickette Search";
$(".Post_Description_Text").keydown(function (e) {
  if (e.keyCode == 13 && !e.shiftKey) {
    e.preventDefault();
    document.getElementById("searcharea").submit();
    return false;
  }
});
const queryString = window.location.search;
$(window).scroll(function (e) {
  var $el = $('.fixedElement');
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200 && !isPositionFixed) {
    $el.css({ 'position': 'fixed', 'top': '0px' });
  }
  if ($(this).scrollTop() < 200 && isPositionFixed) {
    $el.css({ 'position': 'static', 'top': '0px' });
  }
});
if (window.matchMedia("(min-width: 937px)").matches) {
  console.log('Device: Desktop')
  setTimeout(function(){$(".gs-snippet").wrap("<div style='width: 40%;'></div>")},1000);
} else {
  console.log('Device: Mobile');
  document.getElementById('resultsbox').classList.remove("paddingbox");
  document.getElementById('formcontrol').innerHTML = `<form action="/search" id="searcharea" style="padding-top:20px;padding-left:0px !important;" class="nopadding"><a href="/"><img src="/assets/img/logo.png" style="width: 50%;" class="centre"></a><br>
<div class="input-group" style="padding-left: 30px; padding-right: 30px; width:100%;">
<input type="search" class="form-control Post_Description_Text" name="q" id="searchbox" style="resize:none;" rows="1" placeholder="Search the web...">
<div class="input-group-append"> <button class="btn btn-secondary" type="submit" style="height:38px;width:40.86px;"> <i class="fa fa-search"></i> </button> </div>
</div></form>`;
  document.getElementById('searchbox').value = qfc;
  
}
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

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
if (iOS() == true) {
  document.location.replace('/apple.html');
} else {
  console.log('Not on iOS');
}