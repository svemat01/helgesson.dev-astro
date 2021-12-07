---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Hello Luc!
publishDate: 12 Sep 2021
name: test
value: 128
description: Just a Hello World Post!
image: {
  src: https://img.helgesson.dev/lucfunny.png,
  alt: testy testy
}
---
# test

This is so cool!

Do variables work {frontmatter.value * 2}?

```js
console.log('test')
```
