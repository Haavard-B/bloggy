---
title: Some words on architecture
description: And its many available patterns
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd215-14_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=5a82fe53373f13cd1e5d599903b2764a
readButton: Curious?
readable: true
---

DRAFT!


Fancy words:
- IOC
  - Inversion Of Control
- DIP
  - Dependency Inversion Principle (the D in S.O.L.I.D.)


I saw a video on Hexagonal architecture, which is basically IOC/DIP on steroids.


The video caught my interest because of its promise to [enforce practises by design](https://www.youtube.com/watch?v=zPYmH7s3988).

By `practises` he referred to principles like `SOLID` and not depending on raw implementations.

Practises are, as Edger Dijkstra calls; the second thing needed in order to create software, and the reason why software engineering is an art as well as a scientific field.

I can definetely see the benefits of a highly decoupled system like this,
What i didn't like is its cost of implementing,
its introducing of less clear paths of how logic flows, and bloated codebases.

Even though you can pat yourself on the back saying you have zero dependencies on paper the code is still in need of a database,
the code just doesn't know how it is implemented. The programmer knows.

That means the code in theory is highly decoupled and modularized,
but the human mind can only pretend that it too has no idea how anything outside of the class he is working with is implemented.
This is good for intellectual managability of a system, but i am not satisfied with this approach if i were to choose how to write code.

When i was at the end of the conference I wondered whether there was some solution which would have a solution to my worries.

# Options

You have the layered architecture, which is basically the same as the hexagonal architecture but without the strong focus on separating absolutely everything into seperate modules. Dependencies points inwards and is visualized as layers with the domain at the core (since the domain shouldn't rely on a db or an external service), while hexagonal architecture is simply "ports and adapters", aka no layers.

Let's say we have a project following the hexagonal architecture. Each module has no dependencies.
That means `HotelBooker` doesn't know about the `booked_rooms` table. I am not a fan of this.
Think of a microservice, where each microservice has its own db and its own schemas. It makes so much sense that `hotel-booking-microservice` has a table of `booked_rooms`. Of course when we look into the implementation of the domain logic we won't see it executing queries directly as that would be stupid and not inline with the *single responsibility principle*, but it still has a direct relationship between the database implementation and the domain implementation. There are no abstraction to hide what implementation the domain logic is depending on. It is clear. Still we have managed to achieve abstraction while at the same time relying on a concrete implementation. WHILE AT THE SAME TIME keeping the logical flow and intellectual managability at the lowest possible level.

<content-quote quote="You get bonus points for making connections [and dependencies] as obvious as possible" person="Steve McConnel" source="Code complete" icon="mdi-book-open-page-variant">
</content-quote>

# vertical slicing

When a hexagonal architecture seperates the databe schema from the domain logic it is a semantic breach of encapsulation.
The database module needs to know of the `booked_rooms` schema, when everything related to the `hotel-booking` should be encapsulated within its own module. 

What i would decouple would be the database, and if i truly wanted to hide the implementation i would call the module `persistence-thingy`.
The `hotel-booking-module` could then have full control of the schemas, while at the same time not be coupled to a concrete database or any external libraries.

This is nothing new, and is called vertical slicing, which is built upont the principle of "Code that is related should be close together".

I would suggest googling more on this topic. I will not share any sources as my goal is not to brainwash anyone.

Vertical architecture is what has been my goto way of writing code, as it promotes encapsulation, high coheviveness and low coupling without the additional cost of less clear paths of flow which the hexagonal pattern promotes.

Just enough architecture
