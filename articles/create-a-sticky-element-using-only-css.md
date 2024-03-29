---
title: "Create a Sticky Element using only CSS"
date: 2021-08-28
id: 1
author: "Y345"
authorGithub: "https://github.com/Y345ez"
tags:
  - Tutorial
  - CSS
---

Hey there, web developers! Want to make an element on your website stick to the top of the screen as users scroll down? Well, you're in luck! With just a few lines of CSS, you can create a fantastic sticky element effect. Let's dive right into it! 🚀💻

## Sticky Element

```css
div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
```

An element with `position: sticky;` is the key to creating our sticky magic! This style positions the element based on the user's scroll position.

As the user scrolls down, the sticky element behaves as `relative` until it reaches a certain offset position in the viewport. At that point, it "sticks" in place just like `position: fixed;`, keeping it visible even as the rest of the content scrolls.

**Important Note:** While `position: sticky;` is well-supported in modern browsers, be aware that Internet Explorer and Edge 15 (and earlier versions) do not support sticky positioning. Fear not, though! For Safari compatibility, you'll need to add the `-webkit-` prefix (as shown in the example above). Also, remember that you must specify at least one of `top`, `right`, `bottom`, or `left` for the sticky positioning to work correctly.

And that's it! You now have a sticky element that'll enhance your website's user experience. 🌟
