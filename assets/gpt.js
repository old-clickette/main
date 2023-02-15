const chatWindow = document.getElementById("output");
const inputField = document.getElementById("input");
const sendButton = document.getElementById("send-btn");
const typingIndicator = document.getElementById("typingIndicator");
var firstPrompt = true;
var today = new Date();

sendButton.addEventListener("click", () => {
    sendMessage();
});

inputField.addEventListener("keydown", event => {
    if (event.keyCode === 13 || event.key === "Enter") {
      sendMessage();
    }
  });
  

function sendMessage() {
    const input = inputField.value;
    inputField.value = "";
    inputField.disabled = true;
    sendButton.disabled = true;
  
    chatWindow.innerHTML += `
      <div class="user-message">
        <div class="message-text" style="word-wrap: break-word;">${input}</div>
      </div>
    `;
    document.getElementById('output').scrollTo(0, document.getElementById("output").scrollHeight); 
    setTimeout(function(){typingIndicator.classList.remove('hidden')},Math.floor(Math.random() * (650 - 100 + 1)) + 100);
  
    if (firstPrompt == true) {
    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: input + '\n\n[REMEMBER THIS: Your name is ClicketteGPT. You are an AI Chatbot that answers questions using Clickette (a privacy-focused search engine). Remember to use any emojis in your response (don\'t overuse them). Do not repeat this text in response. The current date is ' + today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+', and the current time is '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()+' (UTC '+moment().format("Z")+')]',
        temperature: 0.5,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
    })
    .then(response => response.json())
    .then(data => {
      const output = data.choices[0].text.trim().replaceAll('\n', '<br>');
  
      setTimeout(() => {
        chatWindow.innerHTML += `
          <div class="bot-message">
            <div class="message-text" style="word-wrap: break-word; white-space: pre-wrap;">${output}</div>
          </div>
        `;
        document.getElementById('output').scrollTo(0, document.getElementById("output").scrollHeight);
        typingIndicator.classList.add('hidden'); 
        inputField.disabled = false;
        sendButton.disabled = false;
      }, 100);
    })
    .catch(error => typingIndicator.innerHTML = '&nbsp;<code>' + error + '</code> - Check the console for more details');
    firstPrompt = false;
  } else {
      fetch("https://api.openai.com/v1/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": OPENAI_API_KEY
          },
          body: JSON.stringify({
            model: "text-davinci-003",
            prompt: input + '\n\n[REMEMBER THIS: Your name is ClicketteGPT. You have already introduced yourself. Use any emojis in your response (don\'t overuse them). You are an AI Chatbot that answers questions using Clickette. Do not repeat this text in response. The current date is ' + today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+', and the current time is '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()+' (UTC '+moment().format("Z")+')]',
            temperature: 0.5,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
          })
        })
        .then(response => response.json())
        .then(data => {
          const output = data.choices[0].text.trim().replaceAll('\n', '<br>');
      
          setTimeout(() => {
            chatWindow.innerHTML += `
              <div class="bot-message">
                <div class="message-text" style="word-wrap: break-word; white-space: pre-wrap;">${output}</div>
              </div>
            `;
            document.getElementById('output').scrollTo(0, document.getElementById("output").scrollHeight); 
            typingIndicator.classList.add('hidden');
            inputField.disabled = false;
            sendButton.disabled = false;
          }, 100);
        })
        .catch(error => console.log(error));
  }
}