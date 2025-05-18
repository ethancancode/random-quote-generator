   var motivquotes = [
       "The only way to do great work is to love what you do. - Steve Jobs",
        "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "You miss 100% of the shots you don't take. - Wayne Gretzky",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
   ];

   var sadquotes = [
        "Tears come from the heart and not from the brain. - Leonardo da Vinci",
        "The good times of today are the sad thoughts of tomorrow. - Bob Marley",
        "The saddest thing about betrayal is that it never comes from your enemies. - Unknown",
        "Behind every sweet smile, there is a bitter sadness. - Unknown",
        "Every man has his secret sorrows which the world knows not. - Henry Wadsworth Longfellow",
        "The word 'happiness' would lose its meaning if it were not balanced by sadness. - Carl Jung",
        "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. - Lao Tzu",
        "The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
        "The saddest summary of a life contains three descriptions: could have, might have, and should have. - Unknown"
   ];

   var funnyquotes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Parallel lines have so much in common. It's a shame they'll never meet.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I'm reading a book about mazes. I got lost in it.",
        "Why did the bicycle fall over? Because it was two-tired!",
        "Why did the math book look sad? Because it had too many problems.",
        "I told my computer I needed a break. Now it won't stop sending me vacation ads."
   ];
   
   var generatemotiv = document.getElementById("motiv_button");
   var generatesad = document.getElementById("sad_button");
   var generatefunny = document.getElementById("funny_button");
   var quoteDiv = document.getElementById("generated_quote");
   var copyButton = document.getElementById("copy_text");

   function showRandomQuote(quotes) {
    var index = Math.floor(Math.random() * quotes.length);
    quoteDiv.textContent = quotes[index];
    copyButton.style.display = "inline-block";
}

   function copyText() {
      navigator.clipboard.writeText(quoteDiv.textContent);
      alert("Quote copied to keyboard!");
   }

if (generatemotiv) generatemotiv.onclick = () => showRandomQuote(motivquotes);
if (generatesad) generatesad.onclick = () => showRandomQuote(sadquotes);
if (generatefunny) generatefunny.onclick = () => showRandomQuote(funnyquotes);
if (copyButton) copyButton.onclick = copyText;

