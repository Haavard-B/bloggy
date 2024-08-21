---
title: Semantic leaks in a compiled language
description: (draft) Enforce your rules (in a kind way)
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd250-pdgekko00028-image_5.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=26f1c5cdb005be6bf328dee9ec6c3462
readButton: wow
readable: true
---

Each method has its own set of tasks and responsibilities,
and programmers share a common goal to produce maintainable code.

But what if one piece of code leaks its responsibilities to someone else?
How can the programmer know what the code might do, without looking at it?

## Why semantic leaks are bad

What is being returned by a method is the only way of communicating with the programmer
without having to read the inner workings of the method.

If the programmer needs to read the method it is using in order to know what it might expect is a bad solution.
Maybe `calculateMeaningOfLife()` can return both `null` and `42`.
When null is returned without you expecting it, a bug might occur.
You could document this behavior, but who reads documentation?


The method should force the programmer to write a safe and clean solution.
It would be better if you could get help from your compiler to enforce these rules.

```java
calculate_meaning_of_life {
    if result_is_ready r {
        shout("The meaning of life is {r}")
    }
    if still_waiting_for_answer {
        whisper("Not yet ready")
    }
}
```

If this method were to change later on, you would not be allowed to compile.

## Why leaky semantics are bad

Leaky semantic rules from a method leads to arbitrary requirements for every piece of code that consumes the method, making the code:

- More Complex
- More Coupled
- Harder to maintain

## How to fix ?

- Are you forcing the programmer to know of the internal workings of a method?
- Is it hard for the programmer to make mistakes?
- Does the method make life easy for the programmer?

The api is what sits between the system and the consumer.
The instant someone starts using your api, they are depending on every bit of functinoality it brings.

[This](https://www.youtube.com/watch?v=heh4OeB9A-c) is one of the best talks I have heard about how to design an api.
I would recommend watching, as it gives tons of valuable information.

## Conclusion

We shouldn't write code that makes it hard to write code.

We should write code that makes it easy to write code.