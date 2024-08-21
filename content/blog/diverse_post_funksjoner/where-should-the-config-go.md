---
title: Where should the configuration be?
description: A post mortem discussion
coverImage: https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd158-01-nap_1_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=ab30ef04868dab40093925bc69ca6427
readButton: read more
readable: true
---

Configuration can be put into different categories:
- behavior-changing configuration (max retriess, allowed input, boolean values)
- non-behavior-changing configuration (url, username, password, framwork-configuration)


# "It is much easier to see all the configuration of the application if it is at the same place"
That is true, but When will someone benefit from seeing both the `database username` and `list of endpoints with bypassed security` at the same time ?

The benefit of config files is not to have everything at one place.
The benefit is to extract certain values away from the code.
This is good whenever there are different values for different environments.

My personal vendetta against regular use of behavior-changing configuration is that it creates a more complex codebase which is harder to read, maintain and reason with.

<content-seperator space="xl">

*Only when truly needed should something be placed in a config file*

</content-seperator>


# "It makes it much easier to change behavior without having to look at the code"
That might sound true, but i would never change a value in the config file without seeing which places the code references that value.
Seeing where a factory method is used is much easier than seeing where fields from the config is used *(thanks to IDE's)*.

You can never be certain what the scope of a change is without looking at the code as it's the only source of truth.
*(look at [this](https://youtu.be/SxdOUGdseq4?t=860) section of a video for a talk on impact. todo: add more context and have it make sense that this video is linked here)*

If one field in the config is referenced 20 different places it probably indicates duplication and a lack of the single responsibility principle.

## Changing behavior with config files
What happens when the config is separated from the usage is that it makes it less clear what the code actually does. Let's look at an example:

```yaml
additional-fee:
    only-in-holiday-seasons: true
    amount: 1.50
```

*Let's assume these values are only used one place:*

```python
def calculate_fee(package, customer):
    fee = shipping_fee(package, customer)
    if config["additional-fee.only-in-holiday-seasons"] and today_is_holiday():
        return fee + config["additional-fee.amount"]
    else:
        return fee


fee = calculate_fee(package, customer)
bill(customer, fee)
```

It is obvious what the intention of the code is, but i have no idea what it actually does without also having to check the config file. Another way of solving it is to simply have the code be a `1:1` representation of what is actually happening.


```python
def calculate_fee(package, customer):
    fee = shipping_fee(package, customer)
    if today_is_holiday():
        return fee + 1.50
    else:
        return fee


fee = calculate_fee(package, customer)
bill(customer, fee)
```

The second example is without a doubt easier to read, and also easier to write tests for. Code that is never executed should not be in the project. If a boolean value toggles between what flow to execute there will always be one block of code that is never touched while running in production.

*(There are cases where this is desired. Maybe you want to disable 2captcha in all environments except production)*


## The boilerplate of getting config values into the code

A big class which uses 20 config values will overshadow the intent of the class, making the code harder to read.
When developers gets used to the noise they start ignoring it. Code which developers ignore is where bugs will be safe from extinction.

This noise will also infect the rest of the code. It will be harder to clearly understand its intent, thus demanding more cognitive resources from the developer.

If a class or file consumes 20 values from the config, it is a clear candidate for refactoring.

## The amount of mental energy needed
As the first example showed, in order to know what flow the program takes you have to open up the config file and find the declared fields.
When there are tons of config noise and you need to look for `external.inventory-system.special-holiday-discount.percentage` in order to find 
out what your program actually does.

Both time and energy is wasted.


### More mentally exhausting than you might think

Now that you have found the values in the config, you need to go back to the code and always have those values in mind when mentally executing the flow. This is an unnecessary cognitive load which makes the code less readable. Each time you see code referencing the config you will need to have in mind what the value is. Having `true` or `false` in the code would be much more readable.

```python
get("/inventory", parameters={ 
    "exclude_out_of_order_items": config["remote-system.inventory.exclude-out-of-order-items"]
})
```

```python
get("/inventory", parameters={ 
    "exclude_out_of_order_items": True
})
```

<content-seperator space="xl">

## Know thy' mind
*Studies and discoveries*

</content-seperator>

### Your brain is by nature curious
If you sit in a room while someone speaks on their phone, your brain will start to work in order to fill the gaps in order to figure out what the person on othe other end is saying and responding.

Similarly, if you can't see what a value is, your brain naturally desires to know what this o' holy hidden config value might be. is it `True`, is it `False`, is it `5`. Who knows? What a pain it is to be alive...

You will eventually surpress these desires but your brain will need to spend unnecessary energy each time it has to read the code, which will make it exhausted until it starts ignoring the noise *(which means it will be a nice place for a bug to hide from extinction)*.


### Your brain has limited fuel
This is an experiment where people either walked through the streets of new york, or through the park. They both walked the same distance and towards the same destination.

While walking through the streets of New York, you need to make sure you don't walk into someone or avoid breaking any written/unwritten rules. At the same time your brain needs to process and filter between what is important information and what's not *(noise, commercial signs, blinking lights and all the big detailed impressive buildings)*.

People who went through the park used less cognitive resources compared to the other group, thus performing much better on cognitive tasks which was done when they arrived.

It is the exact same with code. If you have to read through code which contains tons of details your brain will get tired.

Code should be just like a calm walk in the park. It should not requires a lot of mental energy to read, and no unecessary noise should be present while you take your sunday stroll through the code.

<content-seperator space="xl">

## Code which is prematurely complex benefits nobody
*Keep it simple for your own and others sake*

</content-seperator>


<content-quote quote="In general programmers are pretty smart people. Smart people sometimes like to show off their smarts by demonstrating their mental juggling abilities. One difference between a smart programmer and a professional programmer is that the professional understands that clarity is king. Professionals use their powers for good and write code that others can understand." person="Robert C. Martin" source="Clean code" icon="mdi-book-open-page-variant">
</content-quote>


If you can get by with writing code without needing to hide the value, then you should do so. If it is needed for various reasons to move something out of the code, then use config files. Start with the simplest solution and have **YAGNI** in mind.

From experience, configuration files are not maintained at the same level as the production code which means unused fields are present. There might be many reasons why that is so:

- config files are rarely maintained at the same level as code.
- The config file is not code and you will never need to look at the config file in its entirety. Compare this to production code where having the possiblity to read through the entirety is something which is done quite often and we constantly look for ways to increase readability by producing well-written code.


# "What if I want to use the values at multiple places?"
First of all, think of **YAGNI**. You might never use the value at multiple places. Secondly, only when it is **actually** needed at different places should you **first consider** making a class/method for reducing duplication by referencing a config value multiple places. I would consider multiple solutions before even thinking about copy-pasting `config["inventory-system.access-token"]` somewhere it is needed.

From experience, whenever I have seen a value has been used multiple places there has been no attempt at making a solution which follows common principles for achieving reusability, readability and **DRY**.

## An example
```py


h = Headers()
h.add("Authorization", config["inventory-system.access-token"])
h.add("language", config["inventory-system.user-id"])
h.add("username", config["inventory-system.username"])

get("/inventory", h)
```

These lines of code for creating headers might be repeated multiple places whenever the code calls the inventory-system. This could be moved into a class/method, encapsulating how the header is actually generated.

```py
get("/inventory", inventory_system_headers())
```

I have many times seen duplication like this so this is not just a simple example, but a realistic one as well.

## Conclusion

Some things makes perfect sense to have in the config but be pragmatic about what you actually add.
By prematurely adding values you will most likely lose more than you gain.

The argument of having the value in the config file so it will be easy to change does not apply most of the time and is a premature optimization.

<content-quote quote="I think externalizing all what looks like a configuration is probably not a good default. Instead we should start by keeping the parameters close to the code that uses it. Maybe start with private constants and then extract into separate configuration objects if we see need for that. Using text based configuration files or other ways of storing config outside of application code should be used when it is clearly needed for given scenario." person="Ürgo Ringo" source="Blog post" url="https://medium.com/transferwise-engineering/where-to-put-application-configuration-4a2a46bd1bdd" icon="mdi-post">
</content-quote>
