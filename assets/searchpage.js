
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
    return sParameterName[1];}}}
    var q = getUrlParameter('q');
    if (q === undefined) {
      document.location.replace('/');}
    if (q === '') {
      document.location.replace('/');}
      const qf = q.replaceAll('+', '%20');
    const qfc = decodeURIComponent(qf);
    checkForBangs(q);
    document.getElementById('searchbox').value = qfc;
    window.addEventListener('popstate', function (event) {
      q = getUrlParameter('q');
    if (q === undefined) {
      document.location.replace('/');}
    if (q === '') {
      document.location.replace('/');}
      qf = q.replaceAll('+', '%20');
    qfc = decodeURIComponent(qf);
    checkForBangs(q);
    document.getElementById('searchbox').value = qfc;});
    document.title = qfc + " - Clickette Search";
    $(".Post_Description_Text").keydown(function(e){
    if (e.keyCode == 13 && !e.shiftKey) {
    e.preventDefault();
    document.getElementById("searcharea").submit();
    return false;}});
    const queryString = window.location.search;
    if (queryString.includes("?raw=true")) {
      document.location.replace("/search/raw?q=" + q);}
    if (queryString.includes("&raw=true")) {
      document.location.replace("/search/raw?q=" + q);}
    $(window).scroll(function(e){ 
      var $el = $('.fixedElement'); 
      var isPositionFixed = ($el.css('position') == 'fixed');
      if ($(this).scrollTop() > 200 && !isPositionFixed){ 
        $el.css({'position': 'fixed', 'top': '0px'});}
      if ($(this).scrollTop() < 200 && isPositionFixed){
        $el.css({'position': 'static', 'top': '0px'}); 
      }});
      if (window.matchMedia("(min-width: 937px)").matches) {
      console.log('Device: Desktop')
      } else {
      console.log('Device: Mobile');
      document.location.replace('https://www.clickette.net/mobile.html');
    }