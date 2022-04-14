## This town lives on your wall and runs itself. Check in now and then to see what they're up to, and occasionally change the course of its history.

---

## Dev notes

General - the town itself should run on a server which is queryable via api. You'll have to think about how this api works - does it get current state of each and every thing? Deltas? Chunked?

## Minimum Viable Product

-   Game map
-   With resources
-   And People
-   With needs
-   Who can act on those needs
-   ...upon the map
-   ...by getting and using the resources

### Entity-entities like phsycial ish

(Note - terminology - can refer to physical 'living' entities as 'actors')

-   Game map (tiles with resources and other attributes like is water or biome...)
-   Person
-   Creature
-   Fairy? Idk
-   Gnome
-   Altar
-   Tree and bush etc
-   Building (house, store...) extends Space (as in 'holding space for something')

### Less physical entities and stuffs

-   Job
-   Relationship
-   Goal
-   Personality
-   Group of people (abstract)
-   Group of ? Like idk a group of trees is a forest. Explore topology for that (proximity)
-   Weather?
-   Season (or - how close to each of the defined seasons - use matrix for Fun?)
-   Time (human standard - current date and time)
-   Time of day
-

### Capabilities

(also - remember Command pattern.)

-   can interact with ...all the differernt entities... this might stand to live in its own thing
-   can age
-   can die
-   can be born/created
-   has health points
-   can form relationships (one to one, one to many...and one-way too, like multiple people can have feel a way about a tree which doesn't feel anything back)
-   can move in game world
-   can move in time (??)
-   needs to sleep (also - gets tired)
-   needs to eat (also - gets hungry)
-   needs shelter (?)
-   drops something when destroyed (explore this - what is dropping, is it spawning an entity? how does dropped-entity cleanup happen - on a timer? Otherwise when trees fall and die......do they get decomposed?? dear lord)
-   is decomposable
-   is influencable (like as a viewer you can tap on it and influence it somehow)
-   has a position (in time AND spcae?)

### Influencing

Every so often (once a day? once an hour?) the viewer can influence the town in some tiny way.

### Game map

-   Has a size (1 unit = 1 metre)
-   Contains tiles with info, which relate to one another
-   Some of these tiles are kinda like entities?
