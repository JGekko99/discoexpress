// Semplice integrazione chatbot
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbot = document.getElementById('chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    
    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.toggle('hidden');
        chatbotInput.focus();
    });
    
    chatbotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage('Utente', userMessage);
            chatbotInput.value = '';
            // Risposta semplice simulata
            let botResponse = getBotResponse(userMessage);
            setTimeout(() => {
                addMessage('Bot', botResponse);
            }, 500);
        }
    });
    
    function addMessage(sender, text) {
        const msg = document.createElement('div');
        msg.className = 'chat-message';
        msg.textContent = sender + ': ' + text;
        chatbotMessages.appendChild(msg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function getBotResponse(input) {
        // Risposte base (per integrazione reale, usare un API AI)
        const lower = input.toLowerCase();
        if (lower.includes('consiglia') || lower.includes('raccomanda')) {
            return "Certo! Dai un'occhiata alla nostra pagina Catalogo per raccomandazioni personalizzate.";
        } else if (lower.includes('orari')) {
            return "Siamo aperti dal lunedì al sabato, dalle 10:00 alle 20:00.";
        } else {
            return "Sono qui per aiutarti! Prova a chiedere dei nostri orari o consigli.";
        }
    }
});
