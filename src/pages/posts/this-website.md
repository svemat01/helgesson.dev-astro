---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Building Helgesson.dev
description: The technologies and ideas behind this website.
publishDate: 24 Dec 2021
draft: true
author: jakob
---
# Todays new internet
Making this website was a very intressting process including me learning many new ways of website development. Our usual way of making websites has often been to just create a new repo and throw in a couple of html css and js files, but todays internet are changing, we want more advanced websites with high levels of interactivity.

These needs for high levels of interactivity **maade** have given sparks to projects such as React, Vue, Svelte and Angular. These projects are all classed under the same group, javascript frameworks.

## The big problem
With many javascript frameworks, the initial html page is basically empty and all the content has to be loaded in with the help of our javascript frameworks.

This is not only a problem that we put often unnessecary extra load on the device loading the website. It can also worsen our SEO score resulting in us getting ranked lower in search results. While some SEO crawler including google's can actually render a javascript framework based website, it will still result in a lower score since it's widely agreed within the SEO community that the speed to load the page can be hugely important.

The bigger problem comes with SEO crawlers that dont have javascript rendering support, in that case we might not be indexed at all since the page would just be empty.

## The solution
How can we resolve this issue then?

That question has given way to many side projects to our javascript frameworks. For react, this has been Next.js. For Svelte, this is now SvelteKit. These solutions are what we call SSE (Server side rendering). SSE is really awesome in many ways, it can allow us to dynamically change the content depending on who loads the site or where their GEO-IP location is.

While SSE wouldn't technically be required in such cases since we could create an API for this information where our javascript framework would load said dynamic date on site load, but then we would still be stuck at the same SEO and processing load problem. Using SSE we can ship a small to no amount of javascript to the end client by handeling it all on the server. This type of SSE is often run every time someone loads the page, tho it may be cached using either an internal or external service.

## What did I choose?
