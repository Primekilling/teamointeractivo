document.addEventListener('DOMContentLoaded', () => {
    const mainMessage = document.getElementById('mainMessage');
    
    // Función para crear mensajes flotantes
    const createFloatingLove = (x, y) => {
        const loveMessage = document.createElement('div');
        loveMessage.className = 'love-message';
        loveMessage.textContent = 'Te Amo ' + getRandomEmoji();
        loveMessage.style.left = `${x}px`;
        loveMessage.style.top = `${y}px`;
        document.body.appendChild(loveMessage);
        
        setTimeout(() => loveMessage.remove(), 3000);
    };

    // Emojis aleatorios
    const getRandomEmoji = () => {
        const emojis = ['❤️', '😘', '💋', '🥰', '😍', '💖', '💕', '✨', '🌟', '💘'];
        return emojis[Math.floor(Math.random() * emojis.length)];
    };

    // Maneja tanto clicks como toques
    const handleInteraction = (x, y) => {
        createFloatingLove(x, y);
        mainMessage.style.textShadow = '0 0 20px #ff4081, 0 0 40px #ff1493';
        setTimeout(() => {
            mainMessage.style.textShadow = '0 0 10px #ff4081, 0 0 20px #ff1493';
        }, 300);
    };

    // Eventos para mouse
    document.addEventListener('click', (e) => {
        handleInteraction(e.clientX, e.clientY);
    });

    // Eventos para pantallas táctiles
    document.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
    }, { passive: false });

    // Lluvia inicial de corazones
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFloatingLove(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight + 50
            );
        }, i * 200);
    }
});
