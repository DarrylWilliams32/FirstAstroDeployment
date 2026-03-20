---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Second Blog Post
author: 'Darryl `Ryuujisan32` Williams'
description: "After learning some Astro, I couldn't stop!"
image:
    url: "https://docs.astro.build/assets/arc.webp"
    alt: "The Astro logo on a dark background with a purple gradient arc."
pubDate: 2026-03-14
tags: ["astro", "blogging", "learning in public", "successes"]
---
**Published on:** 2026-03-14 

After a successful first week learning Astro, I decided to try some more. Ok, admittedly it wasn't a full week. But it was enough days to consider it close enough. I ran into some small issues that were causing my pages to get a 404 error. 

To make sure that I didn't break the current state of the app, I branched and worked on debugging this error. For some reason, the dev environment only had this error for pages created BEFORE a commit. Once the pages were commited, they no longer threw a 404 error. Since the problem has been identified, I merged the two branches and pushed to repo.