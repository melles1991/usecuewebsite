---
title: Multilingual Jekyll websites
---

There are many guides for making multilingual Jekyll websites. Most of them involve plugins, and [I do not like plugins](https://jekyllcodex.org/without-plugins). After trying several approaches, I found a way that is as easy as it is elegant.

Whenever I needed a multilingual Jekyll website in the past, I always copied my complete project and translated it. This is relatively easy and keeps the codebase simple, but it made maintenance and adjustments a tedious job. The logical alternative, besides using a plugin, was to use themes. However, I do not like the added complexity of themes either. I like to keep things simple.

Fortunately, I got inspired by [a post from Koos Looijesteijn](https://www.kooslooijesteijn.net/blog/multilingual-website-with-jekyll-collections). He used a smart way of using collections and Jekyll defaults. I have slightly adjusted his solution, so it respects all types of collections and sets the language parameter based on a folder WITHIN each collection. To make it as elegant as possible I use the [ISO language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the folder names. Note that the solution works not only for posts, but for all custom collections and even for pages.

The file structure should look like:
```
_posts
  en
    2020-01-01-test-post.md
    2020-01-02-second-post.md
  nl
    2020-01-01-testbericht.md
    2020-01-02-tweede-bericht.md
```
The '_config.yml' file should look like:
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
The 'header.html' file should start with:
```
{% raw %}{% assign languageurl = page.language | append: '/' | prepend: '/' %}{% endraw %}
```
The layout files should loop over the content like:
```
{% raw %}{% assign siteposts = site.posts | where_exp: 'page','page.path contains languageurl' %}
{% for item in siteposts %}
  ...
{% endfor %}{% endraw %}
```

Sure... your code base (layout files) will get polluted by if-else statements requesting the correct language, but it is very manageable. I immediately put my money where my mouth was and refactored this website into a single code base. It worked like a charm. Additionally, I got rid of the .nl domain name. I redirected all URL's to the .com domain in a 'nl' directory. I expect my [Dutch pages](/nl/) to benefit from the higher page rank on the .com domain.