---
title: Abstractions
description: Draft
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd250-pdgekko00028-image_5.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=26f1c5cdb005be6bf328dee9ec6c3462
readButton: Curious?
readable: true
---


The client should not be able to see the implementation through the interface.

Managing complexity is the primary goal.
Design can help by minimizing the amount of complexity a person has to deal with at any given time.

A class should not have assumptions that break encapsulation.

the purpose of abstraciont is not to be vague, but to create a new semantic level in which one can be absolutely precise.

The competent programmer knows the limitations of his skill.

Programmers shouldn't waste time debugging.


Price of software has dropped, but the cost of producing has not. We can not expect society to accept this.
We must learn to program in an order of magniture more effectively.


...
I see no with the lack of competence of imposing mechanically as it seems to need some sort of automatic theoreom proven.
...

a common variable all of the great thinkers has is the focus on the limitation of the human brain and how much information the mind can mentally juggle. Thus abstraction can help achieve in making vastly complex systems. When the power of abstraction is taken advantage of, the complexity does not have to grow in the same speed as the amount of lines and functionality that is added to the system.

One way of avoiding intellectual managability is to do the principles Edgar is known for. Absence of `goto` statements and only one place where the code exits in a routine. There are many ways to handle complexity, and it all depends on the situation. Some times abstraction is not necessarily the wisest to do, but more than not it will benefit the system.


For the time being, and perhaps forever the second ruleset of presents themselves as elements of dicipline required from the programmer.

Tests are good at showing the presence, not the absence of bugs. Currently tests are the only way to verify the semantic working of a system. Edgar mentions this in his speech as well.


....


[Recommended talk](https://www.youtube.com/watch?v=kX0prJklhUE)

"The purpose of abstraction is not to be vague, but to create  new semantic level in which one can be absolutely precise."
-Edsger W dijkstra

"Abstraction is not about making things more general. It is about making things as precise as possible."
___

DRAFT!

Yesterday I listened to Edgar Dijkstra's [The humble programmer](https://www.youtube.com/watch?v=0dGXRK8FUVg) speech when he received the Turing award.

What was interesting was how what he talks about is so relevant to these days, and his view on the constant improvement of the computer's performance and how programming and software will always be a difficult subject.

I know other people like Robert C. Martin has been referencing Edgar Dijkstra for a long time, but not until i listened to his speech did i realize how much he has inspired other great thinkers.

A fun part of the speech is when he is introduced and his recognition of the **art** and science of software he has contributed. So many people refer to the field of software as an art, and the reason is there is a lot of.....


<content-quote quote="The effective exploitation of his powers of abstraction must be regarded as one of the most vital activities of a competent programmer" person="Edgar Dijkstra" source="The humble programmer" url="https://www.youtube.com/watch?v=0dGXRK8FUVg"  icon="mdi-post">
</content-quote>




# abstractions


Before considering abstractions, consider whether it adds value. Abstraction should grow alongside your growing understanding of the domain. It is not about making things less concrete, but rather as specific as possible.

## How to make good abstractions

- Make simpler types
- Abstract with simplicity in mind
- Simplify problem before solving them
- Easy to read and understand
    - Should not have to go inside the class/method in order to understand what it does
    - Easy api
- Hide as much information as possible
    - Less code to read
    - Less code to learn
- Easy to reuse
- The code is in the right place. *(Practise this diligently)*

Some times called information hiding or separation of concern.
Abstraction is closely related to api design as they both try to make life as easy as possible for you.
