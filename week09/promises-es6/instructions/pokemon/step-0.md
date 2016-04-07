# Pokemon API - Understanding the API

Now that you have a solid understanding of Promises, let's get to really using it as it's intended -- to handle asynchronous requests! We're going to be practicing using the [__Pokeapi__](http://pokeapi.co/). It's a great tool for practicing Promises as different resources (e.g. pokemon, type, ability) have different paths.

> Please note that we'll be accessing v1 of the API.

Make a cURL request or use [HTTPie](https://github.com/jkbrzt/httpie) to make a request to: `http://pokeapi.co/api/v1/sprite/80/`:

```json
{
  "created": "2013-11-16T17:20:40.254558",
  "id": 80,
  "image": "/media/img/79.png",
  "modified": "2013-11-16T17:20:40.254530",
  "name": "Slowpoke_auto",
  "pokemon": {
    "name": "slowpoke",
    "resource_uri": "/api/v1/pokemon/79/"
  },
  "resource_uri": "/api/v1/sprite/80/"
}
```

This end point gives us information on a particular sprite! For example, adding the `"image"` URI to the Pokeapi domain will result in the following image:

![Slowpoke - Slightly smarter than the average chicken](http://pokeapi.co/media/img/79.png)

Which is great! That's a cute Slowpoke.

Notice the `"resource_uri"` keys as well. The one listed under `"pokemon"` points towards the entire Pokemon object, which returns much more information than just a sprite. We're going to build queries that will return information about the Pokemon as well as fill out some of those resources that require a separate call.

* * *

##### Before moving on to the next section, answer the following:

1. On the main page (or in your terminal) make a request to the resource_uri above (i.e. `/pokemon/79`) and take a look at the data structure.
  * What are some of the keys that have a `"resource_uri"` nested underneath it? Find `"sprites"` and at least 3 others.
  
1. Take a look at [the Docs](http://pokeapi.co/docs/).
  * How many requests per resource per IP address can you make?

  300

[[Continue](step-1.md)]
