   var motivquotes = {
       'a': "The only way to do great work is to love what you do. - Steve Jobs",
       'b': "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
       'c': "Life is what happens when you're busy making other plans. - John Lennon",
       'd': "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
       'e': "You miss 100% of the shots you don't take. - Wayne Gretzky",
       'f': "It does not matter how slowly you go as long as you do not stop. - Confucius",
       'g': "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
       'h': "Believe you can and you're halfway there. - Theodore Roosevelt",
       'i': "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
   };

   var sadquotes = {
       'a': "Tears come from the heart and not from the brain. - Leonardo da Vinci",
       'b': "The good times of today are the sad thoughts of tomorrow. - Bob Marley",
       'c': "The saddest thing about betrayal is that it never comes from your enemies. - Unknown",
       'd': "Behind every sweet smile, there is a bitter sadness. - Unknown",
       'e': "Every man has his secret sorrows which the world knows not. - Henry Wadsworth Longfellow",
       'f': "The word 'happiness' would lose its meaning if it were not balanced by sadness. - Carl Jung",
       'g': "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. - Lao Tzu",
       'h': "The greatest happiness you can have is knowing that you do not necessarily require happiness. - William Saroyan",
       'i': "The saddest summary of a life contains three descriptions: could have, might have, and should have. - Unknown"
   };

   var happyquotes = {
       'a': "Why don't scientists trust atoms? Because they make up everything!",
       'b': "I told my wife she was drawing her eyebrows too high. She looked surprised.",
       'c': "I'm reading a book on anti-gravity. It's impossible to put down!",
       'd': "Parallel lines have so much in common. It's a shame they'll never meet.",
       'e': "Why did the scarecrow win an award? Because he was outstanding in his field!",
       'f': "I'm reading a book about mazes. I got lost in it.",
       'g': "Why did the bicycle fall over? Because it was two-tired!",
       'h': "Why did the math book look sad? Because it had too many problems.",
       'i': "I told my computer I needed a break. Now it won't stop sending me vacation ads."
   };

   var variables = 'abcdefghi';
   
   var generatemotiv = document.getElementById("motiv_button");
   var generatesad = document.getElementById("sad_button");
   var generatehappy = document.getElementById("happy_button");
   var quoteDiv = document.getElementById("generated_quote");

   var randomIndex;
   var currentVariable;
   var randomQuote;

   if (generatemotiv) {
       generatemotiv.onclick = function generateRandomQuotemotiv() {
           randomIndex = Math.floor(Math.random() * variables.length);
           currentVariable = variables[randomIndex];
           randomQuote = motivquotes[currentVariable]; 
           quoteDiv.textContent = randomQuote;
       };
   }

   if (generatesad) {
       generatesad.onclick = function generateRandomQuotesad() {
           randomIndex = Math.floor(Math.random() * variables.length);
           currentVariable = variables[randomIndex];
           randomQuote = sadquotes[currentVariable]; 
           quoteDiv.textContent = randomQuote;
       };
   }

   if (generatehappy) {
       generatehappy.onclick = function generateRandomQuotehappy() {
           randomIndex = Math.floor(Math.random() * variables.length);
           currentVariable = variables[randomIndex];
           randomQuote = happyquotes[currentVariable]; 
           quoteDiv.textContent = randomQuote;
       };
   }
