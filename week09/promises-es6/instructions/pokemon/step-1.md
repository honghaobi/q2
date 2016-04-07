# Pokemon API - Testing APIs

As you found out in the last step, we have a limited number of calls per resource to this API. You'll still want to test the responses from external services but you won't want to go over your limit -- for paid APIs, this could even mean incurring costs just for testing!

We can use [node-replay](https://github.com/assaf/node-replay) to record the responses we receive from external APIs. These responses are then stored and read back whenever we make a similar request.

You'll find our recorded responses at `test/fixtures/pokeapi.co`.

![Slaking - The lazy programmer of Pokemon](http://pokeapi.co/media/img/289.png)

* * *

##### Before moving on to the next section, answer the following:

1. What was the last date these requests were run?
1. Read through the docs for node-replay.
  * How would you re-record the API responses?
  * How do you change where the responses are saved?

[[Back](step-0.md)] - [[Continue](step-2.md)]