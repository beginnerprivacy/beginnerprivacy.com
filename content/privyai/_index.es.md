---
title: PrivyAI (Beta)
toc: false
---
<div class="chat-container">
    <button id="clearButton" title="Borrar Chat">🔄</button>
    <div class="chat-output" id="chatOutput"></div>
    <div class="input-container">
        <input type="text" id="userInput" placeholder="Escribe tu mensaje aquí..." />
        <button id="sendButton">Enviar</button>
    </div>
    <div id="loadingMessage">Cargando modelo, por favor espere...</div>
</div>

<script type="module">
    import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js';

    let chatPipeline;

    async function initLLM() {
        document.getElementById('loadingMessage').style.display = 'block';

        try {
            chatPipeline = await pipeline('text2text-generation', 'Xenova/LaMini-Flan-T5-783M', {
                quantized: true
            });
            console.log("Model loaded successfully.");
        } catch (error) {
            console.error("Error initializing LLM:", error);
            alert("Failed to load the model. Please check the console for details.");
        } finally {
            document.getElementById('loadingMessage').style.display = 'none';
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        initLLM();
        const aiContainer = document.createElement('div');
        aiContainer.className = 'message-container ai-message-container';
        const aiAvatar = document.createElement('div');
        aiAvatar.className = 'avatar ai-avatar';
        const aiBubble = document.createElement('div');
        aiBubble.className = 'message-bubble ai-message';
        aiBubble.textContent = "¡Hola! Soy PrivyAI, tu asistente de privacidad. Pregúntame cualquier cosa sobre privacidad/seguridad 🕵️ Ejecutándose localmente en tu navegador (Beta) - por favor verifica la información importante de manera independiente.";
        aiContainer.appendChild(aiAvatar);
        aiContainer.appendChild(aiBubble);
        document.getElementById('chatOutput').appendChild(aiContainer);

        document.getElementById('sendButton').addEventListener('click', async () => {
            const userInput = document.getElementById('userInput').value.trim();
            if (!userInput) return;

            const userContainer = document.createElement('div');
            userContainer.className = 'message-container user-message-container';
            
            const userBubble = document.createElement('div');
            userBubble.className = 'message-bubble user-message';
            userBubble.textContent = userInput;
            
            const userAvatar = document.createElement('div');
            userAvatar.className = 'avatar user-avatar';
            
            userContainer.appendChild(userBubble);
            userContainer.appendChild(userAvatar);
            document.getElementById('chatOutput').appendChild(userContainer);
            
            document.getElementById('userInput').value = '';

            const aiContainer = document.createElement('div');
            aiContainer.className = 'message-container ai-message-container';
            
            const aiAvatar = document.createElement('div');
            aiAvatar.className = 'avatar ai-avatar';
            
            const aiBubble = document.createElement('div');
            aiBubble.className = 'message-bubble ai-message';
            aiBubble.textContent = "Thinking..."; // Loading indicator
            
            aiContainer.appendChild(aiAvatar);
            aiContainer.appendChild(aiBubble);
            document.getElementById('chatOutput').appendChild(aiContainer);

            document.getElementById('chatOutput').scrollTop = document.getElementById('chatOutput').scrollHeight;

            setTimeout(async () => {
                try {
                    const response = await chatPipeline(userInput, {
                        max_new_tokens: 200,
                        temperature: 0.7,
                        callback_function: (beams) => {
                            aiBubble.textContent = beams[0].output_text; // Update with partial response if needed
                            document.getElementById('chatOutput').scrollTop = document.getElementById('chatOutput').scrollHeight;
                        }
                    });

                    aiBubble.textContent = response[0].generated_text;
                    document.getElementById('chatOutput').scrollTop = document.getElementById('chatOutput').scrollHeight;

                } catch (error) {
                    console.error("Error during chat completion:", error);
                    aiBubble.textContent = "Sorry, I encountered an error. Please try again.";
                }
            }, 0);
        });
    });

    document.getElementById('clearButton').addEventListener('click', () => {
        document.getElementById('chatOutput').innerHTML = '';
    });
</script>