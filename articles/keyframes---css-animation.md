---
title: "@keyframes - CSS Animation"
date: 2023-08-24
id: 13
author: "Y345"
authorGithub: "https://github.com/Y345ez"
tags:
  - Guide
  - CSS
---

Animations are pretty cool, aren't they? yes, they are, but you might think adding
animations to the website is complex and challenging. But what if I say you can add
some pretty cool animation using CSS?

## Let's get started

We can add animation to our website using CSS `@keyframes` it's just as easy as writing normal CSS. In CSS using the `animation` property we can add some basic animations to Div or to any text.

## Syntax

We can use the `animation` property in CSS.

```css
.container {
  animation: time identifier animation_style;
}

@keyframes identifier {
  /* Keyframes */
}
```

You see in CSS we can add animation frame by frame which is pretty cool and you can do so much just with `@keyframes` in CSS. Let's see an example.

## Example

Let's assume we have div in html with class `container`.

```html
<div class="container"></div>
```

Here we are trying to create animation that automatically changes color frame by frame.

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gdg3mfhq3pomvxgn2ye5.gif)

Let's write our CSS now!

```css
.container {
  background-color: red;
  animation: 3s changeColor infinite;
}

@keyframes changeColor {
  0% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }

  70% {
    background-color: green;
  }
  100% {
    background-color: red;
  }
}
```

## Explaination

Let's understand the code a bit more. Here we had a div with a class name of `container` we used `.continer` in the CSS file to target the specific.

Now to the div, we added the CSS `animation` property,

```
animation: 3s changeColor infinite;
```

And after adding the animation property we added `@keyframes` to animate the div.
Let's understand `@keyframes`.

In CSS `@keyframes` are used to give animation to the `animation` property. For the `@keyframes` identifier we use the same identifier we added in the `animation` property in CSS

```
animation: 3s changeColor infinite;

@keyframes changeColor{
  /**Same name as identifier in animation property. */
}
```

Let's divide the `@keyframes`

```
@keyframes changeColor {
  0% {
    background-color: red;
  }
  50% {`
    background-color: yellow;
  }

  70% {
    background-color: green;
  }
  100% {
    background-color: red;
  }
```

Now as you can we provided some frames like `0%`, `10%` etc. Now it represents the framing of animation. Here what I mean is when animation just started the frame will be `0%` when animation is finished half the frames will be `50%` when animation is finished the frames will be `100%`.

So basically in this block of `@keyframes` code, we added some frames like when the animation frame is `0%` background-color of `.container` will be red. just like that, we change the color according to the frames.

When the animation is running it will look something like this,

![Preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gdg3mfhq3pomvxgn2ye5.gif)

So yeah that's the most basic of `@keyframes` and CSS animations.

## Animation Delay property

CSS animation has some more properties like,

`animation-delay`: The value/Time provided in this property will delay the animation by that value/time

> If we add `animation-delay: 1s;` then the animation will run after `1 second`

So yeah CSS animation still has more properties to learn but we'll end this basics article here. Thank you for reading!
