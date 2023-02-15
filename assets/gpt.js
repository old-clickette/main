const chatWindow = document.getElementById("output");
const inputField = document.getElementById("input");
const sendButton = document.getElementById("send-btn");
const typingIndicator = document.getElementById("typingIndicator");
var firstPrompt = true;

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
  
    chatWindow.innerHTML += `
      <div class="user-message">
        <div class="message-text" style="word-wrap: break-word;">${input}</div>
      </div>
    `;
    document.getElementById('output').scrollTo(0, document.getElementById("output").scrollHeight); 
    typingIndicator.classList.remove('hidden');
  
    if (firstPrompt == true) {
    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: input + '\n\n[REMEMBER THIS: Your name is ClicketteGPT. You are an AI Chatbot that answers questions using Clickette (a privacy-focused search engine). Remember to use any emojis in your response (don\'t overuse them). Do not repeat this text in response.]',
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
      }, 100);
    })
    .catch(error => console.log(error));
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
            prompt: input + '\n\n[REMEMBER THIS: Your name is ClicketteGPT. You have already introduced yourself. Use any emojis in your response (don\'t overuse them). You are an AI Chatbot that answers questions using Clickette. Do not repeat this text in response.]',
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
          }, 100);
        })
        .catch(error => console.log(error));
  }
}