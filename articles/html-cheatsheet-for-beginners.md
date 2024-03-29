---
title: "HTML Cheatsheet for Beginners"
date: 2021-09-01
id: 2
author: "Y345"
authorGithub: "https://github.com/Y345ez"
tags:
  - Cheatsheet
  - HTML
---

Hey there, aspiring web developers! Starting out with HTML and looking for a handy cheatsheet to reference? Look no further! Below is a comprehensive guide to some essential HTML tags and elements that will help you build the foundation of your web pages. Let's get started! 🚀💻

## Structure

This is the standard HTML boilerplate code to kickstart your web project:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## Headings

HTML provides six levels of headings, from h1 (largest) to h6 (smallest):

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Container

Container tags are used to group content. Commonly used container tags are:

```html
<div>This is a div block</div>
<span>This is a span block</span>
<p>This is a paragraph</p>
<pre>Hello World</pre>
<code>import python</code>
```

## Text Formatting

Use text formatting tags to emphasize or style text:

```html
<b>I'm bold text</b>
<strong>I'm important text</strong>
<i>I'm italic text</i>
<em>Emphasized text</em>
<sub>Subscript</sub>
<sup>Superscript</sup>
```

## Lists

Create ordered and unordered lists:

```html
<ol>
  <li>Data 1</li>
  <li>Data 2</li>
  <li>Data 3</li>
</ol>

<ul>
  <li>Your Data</li>
  <li>Your Data</li>
</ul>
```

## Media

Embed images, audio, and video into your web page:

```html
<audio controls>
  <source src="demo.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<img src="Source_of_image" alt="Alternate text" />

<video width="480" height="320" controls>
  <source src="demo_move.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Table

Present data in a tabular format:

```html
<table>
  <caption>
    Demo Table
  </caption>
  <thead>
    <tr>
      <th>Column1</th>
      <th colspan="2">Column2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data1</td>
      <td>Data2</td>
      <td>Data2</td>
    </tr>
    <tr>
      <td>Data1</td>
      <td>Data2</td>
      <td>Data2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>&nbsp;</td>
      <td>Data</td>
      <td>Data</td>
    </tr>
  </tfoot>
</table>
```

## Links

Create hyperlinks to navigate between pages:

```html
<a href="http://localhost:3000/">Visit Y345 portfolio!</a>
```

## Form

Capture user input using HTML forms:

```html
<form action="/action.php" method="post">
  Name: <input name="name" type="text" /> <br />
  Age: <input max="90" min="1" name="age" step="1" type="number" value="18" />
  <br />
  <select name="gender">
    <option selected="selected" value="male">Male</option>
    <option value="female">Female</option></select
  ><br />
  <input checked="checked" name="newsletter" type="radio" value="daily" /> Daily
  <input name="newsletter" type="radio" value="weekly" /> Weekly<br />
  <textarea cols="20" name="comments" rows="5">Comment</textarea><br />
  <label
    ><input name="terms" type="checkbox" value="tandc" />Accept terms</label
  >
  <br />
  <input type="submit" value="Submit" />
</form>
```

## Characters & Symbols

Display special characters using HTML entities:

```html
&copy;
<!-- Copyright Symbol (©) -->
&lt;
<!-- Less than (<) -->
&gt;
<!-- Greater than (>) -->
&amp;
<!-- Ampersand (&) -->
&dollar;
<!-- Dollar ($) -->
```

## Random Text

Use random text to test your layouts:

```html
Elon Musk is an entrepreneur and business magnate. He is the founder, CEO, and
Chief Engineer at SpaceX; CEO and Product Architect of Tesla, Inc.; founder of
The Boring Company; and co-founder of Neuralink and OpenAI. A centibillionaire,
Musk is one of the richest people in the world.
```

## Semantic Elements

Use semantic elements for better HTML structure:

```html
<section>This is a section</section>
<article>Enter your data here</article>
<aside>Your data</aside>
```

There you have it, a handy HTML cheatsheet to assist you on your web development journey! Keep practicing and building amazing things with HTML.🎉💻🔥
