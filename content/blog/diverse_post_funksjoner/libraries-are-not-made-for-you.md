---
title: Libraries are not made for you
description: Think twice before letting it touch your code
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdfma7-pdfamouspainting061001-image-01.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=4d272ddad26f9d4af5f2aff87f7741e3
readButton: Curious?
readable: true
---

There is nothing wrong about writing code which directly depends on libraries, 
but you no longer get to decide how the code reads.
This can lead to noisy code.

## Directly using third-party libraries

```java
...
var retry = Retry.custom()
    .maxAttempts(3)
    .delay(Duration.ofSeconds(2))
    .build();

Try.ofsupplier(Retry.decorateCheckedSupplier(retry, () -> restTemplate.exchange(
    "/path", HttpMethod.POST, new Httpentity<>(headers, requestBody) ResponseBody.class)
).recover(t -> log.warn("error={}", t)).get();
```

### pros

- Ready for usage right away
- Very explicit on what happens

### cons

- Verbose
- Less flexibility on how the code reads *(which might lead to less readable code)*
- Can't easily be reused
- Library can have a style which is inconsistent with existing codebase

## Using self-built/abstracted solutions

```java
httpClient.post("/path", headers, requestBody, ResponseBody.class);
```

### pros

- Ability to design your own interface *(making it more readable)*
- Unused methods and features are hidden, making it easier to consume the api
- Simplicity
- Not directly dependant on third-party libraries

### cons

- You hide the fact that there is a circuit breaker implemented *(if it is important to know this you could rename the class to be more explicit)*
- There is simply no need to wrap it. Maybe it is only used one or two places.

*(This is very biased as i have not listed up many cons. Feel free to point out some cons)*

## Why?

Though we introduce more code to maintain
the benefits in the long run definitely outweighs its downsides.

One could argue that "Now i have to write more code just to make it a little tidier".
Remember that code is meant to be read. If it was not meant to be read we could just code in binary.

## Always using the api in a consistent way

If you are on a team and you use a library, chances are that library can be used in hundreds of ways.
Your team might say; "we use it like this". Instead of having it be an unwritten rule on how to use it, you can hardcode exactly how it is to be used.

This makes it easier for new people to start using it, and avoid misuing ut.

## Libraries are not designed to fit **your** needs

Though you can use [resilience4j](https://resilience4j.readme.io/docs/circuitbreaker) for creating a solid solution, you will most likely use a mere **0.1%** of what it has to offer.

The rest that you are not using will clutter up your auto completion feature in your IDE and it will show you 100 things you **can do**, but probably will **never do**.

# Conclusion

I remember I saw a presentation on this topic.
The punchline was "A good library should not demand you to do anything it could do for you".

Code should be easy to write, not hard.

Code should be easy to read, not hard.

## also important

todo write more
Do not tie yourself down to one provider
