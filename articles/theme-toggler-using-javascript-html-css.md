---
title: "Theme Toggler using Javascript, HTML, CSS"
date: 2021-09-06
id: 3
author: "Y345"
authorGithub: "https://github.com/Y345ez"
tags:
  - Tutorial
  - HTML
  - CSS
  - JavaScript
---

Hey there, fellow developers! Ever wanted to add a cool theme toggler to your website that lets users switch between a bright and vibrant light theme and a sleek and mysterious dark theme? Well, I've got great news for you! With just a few lines of Javascript code, we can make this happen. Let's dive into the exciting world of **coding**! 🚀💻

### Step 1️⃣: Adding HTML

```html
<!-- Time to write some html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>🌞🌚 Light & Dark Theme Toggler 🌞🌚</title>
    <link rel="stylesheet" href="./styles/style.css" />
  </head>
  <body>
    <div id="container" class="container theme">
      <h2>Hello World! 👋</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque veniam
        delectus corporis. Quasi nemo natus doloribus sed ipsam eius cupiditate
        pariatur eaque nesciunt veniam error, sint adipisci iste voluptatibus
        quos cum alias qui! Hic adipisci sunt ab reprehenderit, eaque deleniti
        dolorum nobis dicta officia eius animi pariatur dignissimos suscipit
        architecto iusto molestias odio autem. Aliquam quasi reprehenderit
        officia voluptate mollitia. At ipsum quae placeat.
      </p>
      <button onclick="themeToggle()">Switch Theme 🌓</button>
      <!--Theme toggle function which we are gonna create soon-->
    </div>
    <script src="./js/app.js"></script>

    <!--Link javascript file into the main index.html file-->
  </body>
</html>
```

Next, let's sprinkle some magic with CSS to style the page! 💅✨

### Step 2️⃣: Adding CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}

.theme {
  transition: all 300ms linear;
  background-color: rgb(22, 22, 22);
  color: rgb(214, 214, 214);
}

.container {
  font-size: 1.3rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

.container h1 {
  font-size: 3rem;
}

.container p {
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
}

.container button {
  font-size: 1.4rem;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  background-color: #757ff8;
  color: white;
  border-radius: 3rem;
  cursor: pointer;
}
```

You don't need any brief tutorial for CSS stuff as I've just aligned everything in the center. If you need help, you can check out [this blog post](http://localhost:3000/posts/div-centering-css) for a brief tutorial on how to align things in the center.

Finally, it's time to add some **Javascript** magic to the mix! 🎉🔮

```js
const container = document.getElementById("container");
// Define the main container or div with an id to get a reference to that code.

function themeToggle() {
  container.classList.toggle("theme");
}
```

And voilà, we're done! That was really easy, right? 😎 However, if you want to explore more advanced Javascript techniques, you can always dive deeper. But for now, this simple approach should do the trick!
