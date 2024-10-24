// Get the necessary DOM elements
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

// Function to append message to the chat box
function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the bottom
}

// Event listener for send button
sendBtn.addEventListener('click', () => {
    const userInput = chatInput.value.trim();
    if (userInput !== '') {
        appendMessage(userInput, 'user');
        chatInput.value = '';
        // setTimeout(() => {
        //     botReply();
        // }, 500);
    }
});

// Bot reply function
// function botReply() {
//     const replies = ['Hello!', 'How can I help you?', 'Nice to meet you!', 'Thanks for reaching out.'];
//     const randomReply = replies[Math.floor(Math.random() * replies.length)];
//     appendMessage(randomReply, 'bot');
// }

// Allow "Enter" key to send message
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});