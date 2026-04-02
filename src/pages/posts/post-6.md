---
layout: ../../layouts/MarkdownPostLayout.astro
title: Day 6 
author: 'Darryl `Ryuujisan32` Williams'
description: "I had some challenges, but asking in the community really helped!"
image:
    url: "https://docs.astro.build/assets/rays.webp"
    alt: "The Astro logo on a dark background with rainbow rays."
pubDate: 2026-03-20
tags: ["astro", "learning in public", "refactoring"]
---
**Published on:** 2026-03-20

Today I learned how to make a toggling menu to display my nav links in site, well, at least that's the part I went through in the tutorial. I've built interactive menus before. What I did notice about this tutorial is that there is an error in some of the code. The nav links should have been set to:

    .nav a {
        display: none;
    }
    
Catching this bug took a little longer than I care to admit. It should have been obvious immediately. This is one of those instances where it's important to read ALL code that you past into your codebase. This goes for tutorials, LLMS, etc. 

Read. Your. Damn. Code! 
