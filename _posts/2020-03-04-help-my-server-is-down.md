---
title: Help, my server is down!
---

I do not just build websites, I host them too. Hosting can be tricky, as databases get overloaded, certificates expire, servers run out of memory, open-source software gets hacked and hard disks crash. Yes, the internet is a fragile place. 

But what exactly happens when your server goes down? Is your website unavailable, and for how long? Do you lose data, or source code? I think about these questions on a daily basis, as it is my job to prevent this from happening and to limit the consequences. 

## Multiple backups

To keep the source code safe I keep all source code in Git repositories (a version control system). For most projects I keep a duplicate at my local machine(s). This makes the loss of source code very unlikely. To make sure not only the code, but also the data is safe, I use either the 'data is code' principle or 'rotating backups'. The first solution means that the data (content of these websites) is stored in Git along with the source code. The second solution is a more main-stream solution where the data is pulled to a backup server on a daily basis. We keep some versions of these backups and overwrite others, hence the 'rotating'. This allows me to restore to any point in time in the 'data is code' solution or to a large number of points in the 'rotating backups' solution.

## Minimizing down-time

Having a solid backup strategy is not enough. I also want to prevent as much down-time as possible. My premium hosting clients have DNS fail-over, which means they use two machines which are exact duplicates. One in an Amsterdam datacenter and one in a Frankfurt datacenter. If one server is unavailable the DNS automatically switches to the other server. Most of my regular clients, however, get served through a CDN (Cloudflare). If a server in this CDN goes down, the others take over. Even some (short) down-time of the origin server can be hidden or mitigated by a CDN. My clients have not experienced any significant down-time in the last four years. I know, because I have monitoring on all servers, which buys me a little extra time to find a solution when things go south.

## When it hits the fan

The most important thing is: have a plan. Yesterday the (un)expected happened: There was significant down-time on one of the origin servers from Cloudcannon at the middle of the day. The CDN was unable to prevent certain pages from going down, which lead to more than an hour of 'reduced service' (down-time). A worried client called me and said: 'Help, my website is down! Will you be able to recover?' I said I could migrate her website by simply re-deploying the Git repository to another server. A few minutes(!) later the website ran perfectly on Netlify infrastructure. She was relieved. If one of my premium hosting clients would have gone down, I would have grabbed a backup and recovered it (after a quick assessment of the problem).

## Lesson learned

My client was positively suprised. I had taken away her worries and added a lot of value to my hosting product. I realized she would have never known about this without the unfortunate down-time. Therefore I wrote this post. I want to let you know that I am prepared. I expect the unexpected and I have good security habits to minimize risks. For example: clients do not get direct access to the servers, not even to their own account. They have to access the server through their application. In this application I always limit their rights to only the things they really need. For direct access to the servers I never use passwords, but only asymmetric cryptography (cryptographic keys) and wherever possible I use encrypted disks and two factor authentication. 

What I am basically trying to say is: You can trust me, [I am an engineer](/about/).