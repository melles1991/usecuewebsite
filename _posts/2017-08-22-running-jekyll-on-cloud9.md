---
title: Running Jekyll on Cloud9
---


If you start with Jekyll and not run Linux as an operating system you might have some difficulties setting things up. If everything else fails (or you want a quick solution) you can try Cloud9.

Cloud9 offers a full development environment in the cloud (running Linux). Their IDE is also quite good and their environments are also very useful for collaboration. Setting up Git is really simple (using the 'git clone' command). With Cloud9 you will be able to work from any computer with a browser, without installing anything.

Here is how it works:

1. create a free account on Cloud9 (https://c9.io)
2. create an empty project (Ubuntu) and follow these steps:
3. type on the command line: gem install jekyll
4. create an empty _config.yml file in the root
5. create a index.md file in the root
6. type on the command line: jekyll serve --host $IP --port $PORT --baseurl ''
7. your website is now running 'locally' on Cloud9

The content of your index.md file:

~~~
---
title: Home
---
Hello world!
~~~

With Cloud9 you can develop on Linux and feel like a pro. Try it! You will love it.