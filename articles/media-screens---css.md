---
title: "@media screens - CSS"
date: 2023-08-21
id: 10
author: "Y345"
authorGithub: "https://github.com/Y345ez"
tags:
  - Guide
  - CSS
---

## Introduction

While creating website you need to make sure that your website is responsive and works well in every device with any width. Using @media screens makes your website responsive and helps your website to be more efficient and allows the website to list in SEO higher rank.

In this blog post we'll cover up basic fundamentals about @meda queries in CSS so let's get started!

## Understanding @media

Let's understand the @media in CSS. Well this allows developers to specify specific component for specific defined width. Let us say we want `<div class="container">Hello there 👋!</div>` to have background color when device is mobile (I know it makes no sense but still) we want <div> to have background color when the user opens website in mobile phone so we use the @media to specify the width, how much width it should be to apply the background color property to `.container`. Let's see the syntax for @media and then we'll se example.

## Syntax

### Display width

```css
@media screen and (max-width: 768px) {
  /* Styles here for the device with width of 768px */
}
```

In this @media we defined that if the width is less than 768px than the code inside @media will execute. We provided maximum width for the device to apply the style inside @media.

> When width is less than 768px

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2wule7yddduhqykbg0ut.png)

> When width is greater than or equal to 768px

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a131s58aymhf0ysl7kg8.png)

### Display height

Just like width we can also use the @media for height of the display

```css
@media (height > 600px) {
  body {
    line-height: 1.4;
  }
}
```

> Check out the codepen example [here](https://codepen.io/preetsuthar17/pen/bGONYgm)

![compatibility](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/maz8vnurvoaaeccl5gn6.png)

So yeah that's the most basics about @media screens in css if you have any query feel free to ask in comment, Thank you for reading!
