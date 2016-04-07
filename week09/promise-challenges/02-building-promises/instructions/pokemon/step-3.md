# Pokemon API - Find Abilities

If you have gotten this far, congratulations! The last step was a huge challenge and increase in difficulty. You're now likely very prepared to take the next step which is accessing individual resources on the returned Pokemon.

Add a new method called `abilities` that allows you to realize all the abilities of the Pokemon, or return just one by name. For example, we should be able to use the following to access all the information for the Pokemon Ekans:

```javascript
var PokemonAPI = require('./src/pokemon')

api = new PokemonAPI();
api.pokemon('ekans').done(function (result) {
  console.log(result);
});
```

With that, we should get back a response that includes an abilities key which points towards an array of objects:

```javascript
{ 
  abilities:
   [ { name: 'intimidate', resource_uri: '/api/v1/ability/22/' },
     { name: 'shed-skin', resource_uri: '/api/v1/ability/61/' },
     { name: 'unnerve', resource_uri: '/api/v1/ability/127/' } ]
}
```

We want to access all of those abilities so that the final result is something like this:

```javascript
[ { created: '2013-11-03T15:05:59.529961',
    description: '',
    id: 22,
    modified: '2013-11-03T15:05:59.529917',
    name: 'Intimidate',
    resource_uri: '/api/v1/ability/22/' },
  { created: '2013-11-03T15:05:59.597372',
    description: '',
    id: 61,
    modified: '2013-11-03T15:05:59.597336',
    name: 'Shed-skin',
    resource_uri: '/api/v1/ability/61/' },
  { created: '2013-11-03T15:05:59.706885',
    description: '',
    id: 127,
    modified: '2013-11-03T15:05:59.706845',
    name: 'Unnerve',
    resource_uri: '/api/v1/ability/127/' } ]
```

In order to resolve multiple Promises at once, the best way to do so is to use [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). `Promise.all()` takes an array of Promises and resolves them all!

![Ekans - The Pokemon for people who like shorts because they're easy to wear](http://pokeapi.co/media/img/23.png)

* * *

##### Before moving on to the next section, answer the following:

1. Remove the `x` from the next describe block and get the code to pass!
  * Consider using `.map()` to go from an array of abilities found in the Pokemon to an array of Promises!
1. Are you noticing any duplicated code? Try and __DRY__ up your requests!

__That's it... for now!__

[[Back](step-2.md)]