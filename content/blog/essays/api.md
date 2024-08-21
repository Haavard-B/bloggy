---
title: API
description: A summary of many conference talks
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd250-pdgekko00057-image_4.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ece37a7f3ee9478d63c81ace88421dcd
readButton: Read more
readable: true
---

![What is good design?](https://i.gyazo.com/ab7f72f20090bf6be5444e7239f11f2e.png)

## Quick tip

Instead of working with what you have, work with what you wish you had.
Await implementation for as long as possible becayse you will probably change your mind ten times before you are satisfied with the solution.

## Notes from around the world

- You can't please everybody. Displease everybody equally
- Expect failures. iterate on failure to improve the api
- The api should do one thing, and it should do it well
- Should be easy to explain
- good names drive development and good design
- "As small as possible, but no smaller"
- "When in doubt, leave it out"
- You can always add, but it's harder to remove
    - Going from strict to lose gives you more control
    - Going from lose to strict breaks compatability
- Have as few concepts as possible needed to learn
- Have the api do a lot without having to learn a lot
- Don't make the client do anything the library could do
- Avoid return values that demand additional validation or processing
- Don't force the clients to use exceptions for control flow
- Don't fail siltently
- Users should not be surprised by behavior
- Fail fast. Ideally at compile time
- Use appropriate parameter and return types
- Use consistent parameter ordering
- No exceptions
    - Or at least enforce error handling if it is common for something to crash
- Simply return values
- Do only what it needs to do
- Avoid extra flexibilty
- Avoid unneeded application logic
- Who are you building the api for ?
- YAGNI
- Don't play the guessing game
- Talk to your clients and find out what they want

## some indicators that an api is 'good'
- Easy to learn
- Easy to use
- Hard to misuse
- Forces you to do it the right way

## Creating an api
- Sceptically gather requirements
    - Most people don't know what they want
- Keep the specs short (A4 paper) *(makes it easy to modify and do **big** refactorings)*

## some notes from [John](https://web.stanford.edu/~ouster/CS349W/lectures/abstraction.html)

Powerful interfaces eventually need a lot of features, but most of them aren't used very often.

Identify the common case by asking: "what's the simplest it can possibly be?"

Make the common case as simple as possible, then find a way to support the special cases without complicating the common case.

<content-quote quote="It's hard for really smart people to design sweet interfaces because things don't seem complicated to them." person="John Ousterhout" source="Stanford lecture" url="https://web.stanford.edu/~ouster/CS349W/lectures/abstraction.html"  icon="mdi-human-male-board">
</content-quote>


<content-seperator space="xl">

</content-seperator>

# Naming things

Choose names at the correct level of abstraction.
The smaller the scope, the less descriptive the name can be.

## A few guidelines
- Avoid misleading names
- Avoid names with similar meanings within the same scope
- Avoid hard to read characters *(i, l, 1)*
- Names should describe side effects
- Keep names short and descriptive
- avoid noise *(EntityFactoryAbstractManagerTransformer)*
- With time you will get a better understanding of your domain, which will make old names bad. Simply update names which need improvement


<content-seperator space="xl">

</content-seperator>

## Sources

*(I can't remember where I found everything)*

- [How To Design A Good API and Why it Matters - Google TechTalks](https://www.youtube.com/watch?v=aAb7hSCtvGw&t=5s)
- [Designing Abstractions](https://web.stanford.edu/~ouster/CS349W/lectures/abstraction.html)
