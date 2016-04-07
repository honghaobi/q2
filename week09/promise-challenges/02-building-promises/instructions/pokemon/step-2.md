# Pokemon API - The First Step

We're going to begin to create an API object that will allow us to search for the different resources provided by the URI. For example, if we request a single Pokemon we'll notice a number of resources with a url where we can find more information:

```json
{
    "abilities": [
        {
            "name": "volt-absorb",
            "resource_uri": "/api/v1/ability/10/"
        },
        {
            "name": "quick-feet",
            "resource_uri": "/api/v1/ability/95/"
        }
    ],
    "attack": 65,
    "catch_rate": 0,
    "created": "2013-11-03T15:05:41.528778",
    "defense": 60,
    "egg_cycles": 0,
    "ev_yield": "",
    "evolutions": [],
    "exp": 184,
    "growth_rate": "",
    "happiness": 0,
    "height": "8",
    "hp": 65,
    "male_female_ratio": "",
    "modified": "2013-11-23T13:13:28.250363",
    "name": "Jolteon",
    "national_id": 135,
    "pkdx_id": 135,
    "resource_uri": "/api/v1/pokemon/135/",
    "sp_atk": 110,
    "sp_def": 95,
    "species": "",
    "speed": 130,
    "weight": "245"
}
```

_Please note I cut out a bunch of information._

You'll notice that "abilities" has some brief information about the abilities for our Pokemon but the rest lives under that resource_uri. Our goal is to create an Object so that we can access the information inside those abilities via the following:

```javascript
api.pokemon('jolteon').abilities().done();
```

Let's start by getting back information about the Pokemon itself.

![Jolteon - The spikiest Eevee evolution](http://pokeapi.co/media/img/135.png)

* * *

##### Before moving on to the next section, answer the following:

1. Remove the `x` from the first two describe blocks. We'll need to get both of these to pass before moving on to the next section.
  * You'll need to create an Object that has methods called `pokemon` and `done`.
  * Each of your requests to the Pokemon API will be pretty similar. Consider separating requests to their own function.
  * The Object you need to call `.done()` on needs to be an instance of the API Object; however, you'll also need to keep track of the Promise chain that is getting created. Remember that you can assign Promises to values and that instances can store values as properties!
1. Create a new test similar to the first inside of `.pokemon()` but with a new Pokemon you choose and get it to pass.
1. Use node-replay to record the response from the Pokeapi. Test that it works by disconnecting from the wifi and retrying your tests!

[[Back](step-1.md)] - [[Continue](step-3.md)]