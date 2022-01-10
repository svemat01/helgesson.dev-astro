---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Link from '../../components/Link.astro'
title: Todays Web Dev and making this website
description: The technologies and ideas behind this website.
publishDate: 10 Dec 2022
draft: false
author: jakob
---
# Todays Web Dev and making this website
Making this website was a very intressting process including me learning many new ways of website development. Our usual way of making websites has often been to just create a new repo and throw in a couple of html css and js files, but todays internet are changing, we want more advanced websites with high levels of interactivity.

These needs for high levels of interactivity made have given sparks to projects such as React, Vue, Svelte and Angular. These projects are all classed under the same group, javascript frameworks.

## The big problem
With many javascript frameworks, the initial html page is basically empty and all the content has to be loaded in with the help of our javascript frameworks.

This is not only a problem that we put often unnessecary extra load on the device loading the website. It can also worsen our SEO score resulting in us getting ranked lower in search results. While some SEO crawler including google's can actually render a javascript framework based website, it will still result in a lower score since it's widely agreed within the SEO community that the speed to load the page can be hugely important.

The bigger problem comes with SEO crawlers that dont have javascript rendering support, in that case we might not be indexed at all since the page would just be empty.

## The solution
How can we resolve this issue then?

That question has given way to many side projects to our javascript frameworks. For react, this has been Next.js. For Svelte, this is now SvelteKit. These solutions are what we call SSR (Server side rendering). SSR is really awesome in many ways, it can allow us to dynamically change the content depending on who loads the site or where their GEO-IP location is.

While SSR wouldn't technically be required in such cases since we could create an API for this information where our javascript framework would load said dynamic date on site load, but then we would still be stuck at the same SEO and processing load problem. Using SSR we can ship a small to no amount of javascript to the end client by handeling it all on the server. This type of SSR is often run every time someone loads the page, tho it may be cached using either an internal or external service.

## Can we combine them?
Yes! and that's the kind of system I wanted. My two criterias were:
* No depending on client side hydrating
* and No runtime SSR

The kind of system can be achieved via build time SSR, aka instead of rendering the website everytime someone requests our site, we build it into static html files when we deploy our website, this is often called a Static Site Generator or SSG. This leaves us without any unnessesary javascript on the client side to load in the content, but it also doesn't require us to use an actual server for hosting our website. With the static html files that gets created on build time, we can deploy them to something like `netlify` `vercel` or `github pages` which all allow you to host static pages for free.

## Astro, my choice for Build Time SSR
At first I was messing around with Svelte and SvelteKit with their static adapter which somewhat turns SvelteKit from a SSR to an SSG, but it wasn't really fully ideal for my sittuation.

Then via my great friend and co-worker [@lucemans](https://luc.contact/) I was enlightened about a project called [Astro](https://astro.build/) which fits all my requirements and is perfect for my idea of a blog/website.

Unlike some other SSGs, Astro is a bit special in how it handles components, while it has it's own component language which to me seems like a bit of a mix between Svelte and Markdown, It also allows for other languages. The list is quite impressing, and it includes React, Preact, Svelte and Vue.

This way we can continue in our beloved way of making components and we can use whatever we feel is the best suited for the case. By default as said before, Astro ships the final build with no or barely any javascript code, but what if we're making some interactive components? Astro has an an solution for that, instead of allowing all javascript, it requires you to add a special attriubrute to the components you want to load the javascript for. The functionality is described [here in the docs](https://docs.astro.build/core-concepts/component-hydration/#hydrate-interactive-components). This way we can have a blazing fast website but still have access to the interactivity we love when we really need it.

## Deploying
Using astro, I could build static html files. As previously spoken about, we can deploy static websites to free hosting platforms. In my case I chose [Vercel](https://vercel.com/), this choice was due to it's very extensive free tier plan and aslo, however options such as Github/Gitlab pages are also very good choices.
