## Inspiration
There's not always someone around to ask your coding questions to, so Agent Kodi was built as a 24/7 quick response buddy to help you find answers to any of your coding questions. Agent Kodi is built using custom NLP logic, so you can interact with her through simple texts!

## What it does
Kodi can answer questions like:
* What is Python?
* Tell me about Node
* Define Inheritance
* How do I install python on my mac?
* How do I fix a ClassNotFound exception?
* Find me examples of chatbots using node
* I'm looking for examples of twitter bootstrap


## How I built it

I started by using the shell bot started code provided from the Developer Circle posting and then started building out a webservice. I aggregated and loaded a PostgreSQL database with popular terminology as a starting point for Kodi's knowledge. I then added custom logic and entities to a wit.ai application, which gave my bot a unique NLP. I tested locally and then deployed my bot on a centos 7 server. I integrated the node.js app with several APIs: wikipedia, github and stackoverflow.

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

I'm familiar with javascript but in a much lighter context than this project required. Node gave me quite a few headaches, especially when it came to [Error: Can't set headers after they are sent.](https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client)

I've never actually run an https server on my own so creating the keys correctly, signed by CA was a new experience.

I finally figured out javascript callbacks and how to write my own unique functions utilizing this features. It was an uphill battle, but so worth it! 

## Accomplishments that I'm proud of
This entire project! This was my first bot of any kind, and on top of that I was utilizing several new frameworks and APIs - node.js, stackoverflow, facebook messenger. It really was meant to be a learning experience and I got much more out of it than expected :)

## What I learned
* I learned how to build a node application from start to finish, manage packages, and generate and integrate certs to make it a secure server.
* How to install create and customize a postgres database on a server.
* Using DigitalOcean for deployments/hosting.
* How to use ngrok for redirecting to localhost on http/https


## What's next for Kodi
Due to the limited time constraints of the hackathon and only having a single developer resource, Agent Kodi is at the very preliminary stages of development. In the future the following features will be added:
* Increased terminology recognition & understanding
* Enrich results with links to definitions, similar terms
* Ability to learn new terms from users
* Semantic network of terms to find things related to one another through heirachy.
* Pagination of results

## Known Issues
List of known bugs/limitations:
* One
* Two
* Three
* Four
