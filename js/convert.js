// Translation data for the game
const translations = {
    en: {
        info: 'Move with arrow keys or swipe, fire with the space bar or touch. The invaders get faster and drop more bombs as you complete each level!',
        startGame: 'Press Space to Start',
        gameOver: 'Game Over!',
        playAgain: 'Press Space to Play Again',
        lives: 'Lives',
        score: 'Score',
        level: 'Level',
        rocketWords: [
            'Fire', 'Earth', 'Water', 'Wind', 'Sky',
            'Light', 'Energy', 'Power', 'Speed', 'Strength',
            'Wisdom', 'Courage', 'Hero', 'Victory', 'Battle'
        ]
    },
    sa: {
        info: 'तीर के कुंजियों का उपयोग करें या स्वाइप करें, अंतरिक्ष बार या टच से फायर करें। प्रत्येक स्तर पूरा करने पर आक्रमणकारियों की गति तेज हो जाती है और वे अधिक बम गिराते हैं!',
        startGame: 'स्पेस दबाकर शुरू करें',
        gameOver: 'खेल समाप्त!',
        playAgain: 'स्पेस दबाकर फिर से खेलें',
        lives: 'जीवन',
        score: 'स्कोर',
        level: 'स्तर',
        rocketWords: [
            '\u0915\u0930',  // कर
            '\u0915\u0932',  // कल
            '\u092A\u093E',  // पा
            '\u0915\u0941',  // कु
            '\u0915\u094D\u0937',  // क्ष
            '\u0917\u094C',  // गौ
            '\u091C\u0932',  // जल
            '\u091C\u094D\u091E\u093E\u0928',  // ज्ञ
            '\u0938\u0942\u0930\u094D\u092F',  // सूर्य
            '\u091A\u0902\u0926\u094D\u0930',  // चंद्र
            '\u0917\u0941\u0930\u0941',  // गुरु
            '\u0935\u093F\u091C\u094D\u091E\u093E\u0928',  // विज्ञान
            '\u092A\u0941\u0937\u094D\u091F\u0915',  // पुष्टक
            '\u0938\u0902\u0917\u0940\u0924',  // संगीत
            '\u092A\u094D\u0930\u0915\u093E\u0936'  // प्रकाश
        ]
    }
};

// Default language
let currentLanguage = 'en';

// Function to toggle language
document.getElementById('languageToggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'sa' : 'en';

    // Update the button text
    document.getElementById('languageToggle').innerText =
        currentLanguage === 'en' ? 'Switch to Sanskrit' : 'Switch to English';

    // Update game text
    updateText();
});

// Function to update text dynamically
function updateText() {
    const infoElement = document.getElementById('info');
    if (infoElement) {
        infoElement.innerText = translations[currentLanguage].info;
    }

    // Change rocket words
    if (typeof game !== 'undefined') {
        game.currentLanguage = currentLanguage;
        game.rocketWords = translations[currentLanguage].rocketWords;
    }
}
