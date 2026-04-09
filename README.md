# 🚀 My Personal Dev Blog

A high-performance, responsive personal blog built with **Astro** and **Markdown**. This repository serves as the single source of truth for my technical writing, project updates, and software engineering insights.

## 🛠 Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generator)
- **Styling:** [CSS]
- **Content:** Markdown / MDX
- **Deployment:** [Netlify]
- **Version Control:** Git

## 📋 Key Features

- **SEO Optimized:** Built-in sitemap, open graph tags, and fast-loading assets.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **Fast Performance:** Zero-bundle JavaScript by default thanks to Astro's island architecture.
- **Dark Mode:** System-aware theme switching.

## 🚀 Getting Started

If you would like to use my blog as a template to start your own, here is how you can get started.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18.14.1 or higher).

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/DarrylWilliams32/FirstAstroDeployment.git](https://github.com/DarrylWilliams32/FirstAstroDeployment.git)

### Install Dependencies

Open your bash terminal and run the following command:

    `npm install`

### Start Development Server

Now type the following command in your terminal to start the local server:

    `npm run dev`

### Build for Production

Depending on how you deploy your blog, you might not to use this much. This can be a quick way identify any production level bugs.

    `npm run build`

If you did have no crital errors that cause the build to fail, you should see a 'success' message.

**Note:**
This is not foolproof, as some deployments might encounter problems that are not identified via the build command. Test both to make sure.

### Adding New Posts

The content for this template is created via Markdown files. You will want to go into your src/pages/posts folder and create a new .md file. It can be any title you want, just make sure that it's a Markdown file. There is already logic in place that will populate this posts into a list on your 'Blog' page. 

### Editing Metadata for Blog Posts

The metadata for your blog posts are located at the top of your markdown file. You will create a 'gate' using 3 hyphons.

    ```---


    ---

Within that gate will be your metadata that looks like this:

    ```---
    layout: ../../layouts/MarkdownPostLayout.astro
    title: 'Your Post Title'
    pubDate: 2026-01-01
    description: 'A brief summary of the post.'
    author: 'Your Name'
    tags: ["tech", "coding"]
    ---

### Common Errors for Deployment

This repo was originally deployed to Netlify. Netflify is very specific about how metadata must be written. A common reason that your blog isn't deploying correctly may be that you have an extra space after the colon in your metadata. 

When it comes to debugging, check the small things first before you dive down the rabbit hole!

Did you find this template useful? It's not required at all, but if you would like to donate to this or future projects, you can donate [here.](https://donate.stripe.com/3cs5lGda765X0nK288)