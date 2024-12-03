document.getElementById("sendMessageBtn").addEventListener("click", function() {
    const message = document.getElementById("messageInput").value;
    if (message) {
        // Append the message to the chat area
        const messageContainer = document.getElementById("messagesContainer");
        const newMessage = document.createElement("div");
        newMessage.classList.add("message");
        newMessage.textContent = message;
        messageContainer.appendChild(newMessage);
        
        // Clear the message input field
        document.getElementById("messageInput").value = '';
    }
});
