---
title: Multilingual Jekyll websites
---

There are many guides for making multilingual Jekyll websites. Most of them involve plugins, and [I do not really like plugins](https://jekyllcodex.org/without-plugins), because they execute [unknown code](https://www.usecue.com/blog/code-warriors/). Fortunately, I did not need them. After trying several approaches, I found a way that is as easy as it is elegant.

Whenever I needed a multilingual Jekyll website in the past, I always copied my complete project and translated it. This is relatively easy and keeps the codebase simple, but it made maintenance and adjustments a tedious job. The logical alternative, besides using a plugin, was to use themes. However, I do not like the added complexity of themes either. I like to keep things simple.

Fortunately, I got inspired by [a post from Koos Looijesteijn](https://www.kooslooijesteijn.net/blog/multilingual-website-with-jekyll-collections). He used a smart way of using collections and Jekyll defaults. I have slightly adjusted his solution, so it respects all types of collections and sets the language parameter based on a folder WITHIN each collection. To make it as elegant as possible I use the [ISO language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the folder names. Note that the solution works not only for posts, but for all custom collections and even for pages. 

## Quick start (step by step)

Step 1. Create folders with ISO language codes in your collection directory/directories:
```
_posts
  en
    2020-01-01-test-post.md
    2020-01-02-second-post.md
  nl
    2020-01-01-testbericht.md
    2020-01-02-tweede-bericht.md
```
Step 2. Adjust the '_config.yml' file to add the appropriate front matter defaults. The following code adds the 'page.language' variable to each post and sets the permalink:
```
defaults:
- scope:
    path: '_posts/en'
    type: 'posts'
  values:
    permalink: 'news/:title'
    language: en
- scope:
    path: '_posts/nl'
    type: 'posts'
  values:
    permalink: 'nieuws/:title'
    language: nl
```
Step 3. Loop over the content (in your layout file), like this:
```
{% raw %}{% assign siteposts = site.posts | where: 'language',page.language %}
{% for item in siteposts %}
  ...
{% endfor %}{% endraw %}
```

Step 4. We have now succesfully seperated our English and Dutch posts. Our layout file, however, is not yet translated. The nicest way to do this is to create a 'translations.yml' file with all strings that need to be translated. Place this file in the '_data' directory, and make sure it looks something like this:
```
speed_index:
  en: Speed index
  nl: Snelheidsindex
google_score:
  en: Google score
  nl: Google score
page_weight:
  en: Page weight
  nl: Paginagrootte
```

Step 5. To shorten the code in your layout files, place the following code in your 'header.html' file:
```
{% raw %}{% assign translations = site.data.translations %}{% endraw %}
```

Step 6. Finally, replace each English string with something like this:
```
{% raw %}{{ translations.speed_index[page.language] }}{% endraw %}
```

## Proof of the pudding

I immediately put my money where my mouth was and refactored this website into a single code base. It worked like a charm. Additionally, I got rid of the .nl domain name. I redirected all URL's to the .com domain in a 'nl' directory. I expect my [Dutch pages](/nl/) to benefit from the higher page rank on the .com domain.
