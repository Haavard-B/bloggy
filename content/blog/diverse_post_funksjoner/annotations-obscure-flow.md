---
title: Implicit code might obscure structural flow
description: Implicit vs explicit handling
readButton: wow
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd158-03-nap.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=30784b2dc785a8e166a5a0ac154122e7
readable: true
---


## Implicit caching *(using annotations)*

```java
@Cacheable
List<Stock> getStocks();
```

### A few things happens when executing this method:
- It checks if cache is present
- It fetches stocks if cache was not present
- It updates cache

## Explicit caching

```java
stockCache.fetchIfPresent()
	.orElsePut(() -> getStocks());
```

### A few things *(also)* happens when executing this code:
- It checks if cache is present
- It fetches stocks if cache was not present
- It updates cache

## What's the difference ?

There is no change in behavior, The only difference is how we read and percieve the code.

The `explicit` way of handling caching lead us to a solution which reflects the structural flow of the program, which also makes the code easier to read and understand.

By writing `implicit` code, we force the reader to mentally execute the code in order to understand how the logic flows.
This can cause problems when a project grows and the logic flows in ways which is hard to follow by just reading the code.