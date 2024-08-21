---
title: Microservices
description: A good one-size-fits-not-all solution
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd250-pdgekko00057-image_4.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ece37a7f3ee9478d63c81ace88421dcd
readButton: Read more
readable: true
---

There are many good reasons why structuring your organization into smaller teams can be a good approach.
Giving teams responsibility makes them proud of delivering requested features as they are responsible for its quality and stability. They also feel like they own the solution, which makes them put their heart into it.

### But what about structuring your **system** into smaller components ?

microservices and microservice acrhitecture is a hot topic and many large companies have taken advantage of it.

## Such architecture has many benefits which suits **larger** projects:

- autonomous and independent teams
- possibility to scale services based on how much load they are receiving, thus being able to reduce server capacity where it is not needed.
- highly decoupled systems, where a service might only be responsible for one thing
- one service can consume features from another service without caring how it implements it. *(All it needs to know is that the service will do its job perfectly)*
- deployed independently *(thus reducing risk of deployment)*
- if something crashes, not all servies crashes, which reduces downtime and makes the system more resilient
- smaller code bases makes it easier for developers to jump into the code

microservices seems to be fixing many problems that people might encounter throughout the lifecycle of a project.

Bigger companies also have **thousands** of engineers all working together in smaller teams with different responsibilities.

Microservices are thus *also* used for scaling people. Thousands of developers all work on different features and they require an environment that allows them to move quickly and independently.

# "This sounds too good to be true!!"

Like all things in life, there are downsides of microservice architecture. Nothing is free in this world.
- it requires more maintanence
- different types of complexity and other issues are introduced
- harder to create a 1:1 environment for local development
- The cost of setting it up is much higher *(and you might never come to a point where microservices pay off)*
- Not every company needs the same amount of scalability or resilience as Netflix.

 Complexity is one of many prices you need to pay.

 Even if you decide to follow this architecture you still need to properly execute it, which might be hard.
 If your teams has a track record of failing to uphold conventions, writing unmaintanable code and not being able to build robust, stable and scalable software, then those problems will not be fixed by microservises.

 **IT IS NOT** a silver bullet, **AND WILL NOT** fix your problems. It will solve problems that some companies have, at the cost of complexity and time spent on maintaining additional complexity.

 Before starting with microservices, you should be able to create well-structured projects and monolithic applications. People think the word monolith means *bad* and *ugly* codebase, however that is not the case. just like it exists tons of horrific monolithic projects, there will also be microservice oriented projects that will make you scream.

 ## Use microservices if you truly need its benefits and you can afford its expenses

 Bad code is bad code and bad architecture is bad architecture. No matter what design principles you decide to go for you can't expect a magic pill that will make life easy for you. Making good architecture requires work. Nothing comes for free.

 Monolith applications also has its downsides, but a well strucutred modular monolith can easily be migrated to a microservice if the benefits of such arcitecture starts to outweight the monolithic strucutre.
