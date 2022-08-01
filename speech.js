var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var querys = ['a'];

var recognition = new SpeechRecognition();
if (SpeechGrammarList) {
  // SpeechGrammarList is not currently available in Safari, and does not have any effect in any other browser.
  // This code is provided as a demonstration of possible capability. You may choose not to use it.
  var speechRecognitionList = new SpeechGrammarList();
  var grammar = '#JSGF V1.0; grammar querys; public <query> = ' + querys.join(' | ') + ' ;'
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
}
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
var diagnostic = document.querySelector('#searchbox');
var bg = document.querySelector('#voice');
var queryHTML= '';
querys.forEach(function(v, i, a){
  console.log(v, i);
  queryHTML += '<span style="background-query:' + v + ';"> ' + v + ' </span>';
});

bg.onclick = function() {
  recognition.start();
  console.log('Ready to receive a query.');
  document.getElementById("searchbox").placeholder = 'Listening...';
    setTimeout(function(){
        document.getElementById("searchbox").placeholder = 'Search the web...';
        }
        , 10000);
        setTimeout(function(){
            recognition.stop();
            }
            , 10000);
}
recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var query = event.results[0][0].transcript;
  diagnostic.value = query;
  const daform = document.getElementById('searcharea')
  daform.submit();
  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that query.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
