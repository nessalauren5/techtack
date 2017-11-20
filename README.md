## Inspiration
Kodi is for developers who are tired of the bloat the search engines return when they are looking for quick answers. Built using custom NLP logic, Kodi can help you find answers to your programming problems through simple texts!
## What it does
Kodi can answer questions like:
* What is Python?
* Tell me about Node
* Define Inheritance
* How do I install python on my mac?
* How do I fix a ClassNotFound exception?
* Find me examples of chatbots using node
* I'm looking for examples of apache jena


## How I built it

I started by using the shell bot started code and building out a webservice. I added custom logic and entities to a wit.ai application, which gave my bot a unique NLP. I tested locally and then deployed my bot to digitalocean on a centos 7 server. I integrated the node.js app with several APIs: and also
### Agent Training
Agent Kodi is trained on over 3,000 programming terms. These terms range in the following categories: 
* Communications
* Build, Test, Deploy
* Data Structures & Algorithms
* Payments
* Operating Systems
* Collaboration
* Mobile
* Languages & Frameworks
* Application Utilities
* Design
* Assets and Media
* Programming Terms
* Monitoring
* Analytics
* Data Stores
* Back Office
* Operating System
* Support, Sales, and Marketing
* Libraries
* Application Hosting
* Datastores

The app uses 3 wit.ai entities: 
* intent - (custom defined trait) menu, description, how-to, examples
* wit/greetings - binary trait entity that captures greeting intents 
* wit/wikipedia_search_query - used to capture query text


## Challenges I ran into
So many! Here are a list of brick walls I hit along the way:

## Accomplishments that I'm proud of
This entire project! This was my first bot of any kind, and on top of that I was utilizing several new frameworks and APIs - node.js, stackoverflow, facebook messenger. 

## What I learned
I learned how to build a node application from start to finish, generate and integrate certs to make it a secure server.

## What's next for Kodi
