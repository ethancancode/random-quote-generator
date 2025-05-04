# Random Quote Generator

A fun and beginner-friendly project that shows random quotes based on the user's mood. Built with simple HTML, CSS, and JavaScript, this quote generator includes three categories: Motivational, Sad, and Funny.

## 🔗 Demo

[View Live](https://ethancancode.github.io/random-quote-generator/)

## 🛠️ Features

- Click a button to generate a quote that matches your mood
- Three quote categories:
  - 💪 **Motivational**
  - 😢 **Sad**
  - 😂 **Funny**
- Clean and responsive design
- All logic handled with vanilla JavaScript

## 📦 How It Works

- Each quote type is stored in a separate array (`motivquotes`, `sadquotes`, and `funnyquotes`)
- When you click one of the buttons, a random quote from the corresponding category is displayed
- This is done using basic **JavaScript event handling** and **DOM manipulation**

## 🧠 Code Breakdown

Here’s how quotes are shown:

```js
function showRandomQuote(quotes) {
    var index = Math.floor(Math.random() * quotes.length);
    quoteDiv.textContent = quotes[index];
}
```

## 👨‍💻 Author
Made by @ethancancode
