# A Subset of JavaScript

## Rules

- Must use `"use strict"`
- Don't use `var`
- Don't use `function`, use `=>` to declare functions
- Use `const` for functions, `let` or `const` for variables
- Don't use `func()` sugar for functions in objects
- Don't use `arguments`, use `...`
- Don't use `this`, `class`, `get`, `set`
- Don't use `==`, `!=`
- Don't use `for`...`in`
- Don't use `function*`, `yield`, `yield*`
- Don't use `with`
- Don't use exceptions (`try`, `catch`, `throw`, `finally`), **except** for dealing with API
- Only do closure where it helped, not to show off your FP knowledge
- Use object as namespace to group functions (when necessary) 

## Examples

See `demo/bouncing-balls`, compare wtih [Bouncing Ball](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice) ([source code](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main-finished.js)) from MDN Learning Area. 

## No OOP?

> the equivalent of constructor is below, actually looks similiar to `struct` in C.  
~~~ js
// `this` in the function will point to `Window`, so there can't be member functions.
const Vector3 = () => ({
    x: 0,
    y: 0,
    z: 0,
})
~~~

~~~ js
const Vector3 = (x, y, z) => ({
    x, y, z
})
~~~

- Complex "type":
~~~ js
const Person = () => ({
    name: {
        first: "",
        last: "",
    },
    age: 0,
    gender: "",
    interests: "",
})
~~~

- (not) Composition: 
~~~ js
const Sprite = () => ({
    actor: Person(),
    pos: Vector3()
})
~~~

- (not) Inheritance:
~~~ js
const Hero = () => {
    let m = Sprite()
    m.hp = 100
    return m
}
~~~

> Note:  
> Some browsers may optimize ordinary OOP/constructor version better, maybe because the js engine are much familiar with that usage.  
> However, primary concern of JavaStrict is to write clean, safe and understandable code, if you want more performance, maybe you should use [WASM](https://en.wikipedia.org/wiki/WebAssembly) instead of optimizing javascript.  
> (this style actually performs much better than OOP in low level languages due to no object overhead and alternative cache friendlier data structures and algorithms, see [Data-Oriented Design](https://en.wikipedia.org/wiki/Data-oriented_design)).

## See Also

- [Jessie](https://github.com/endojs/Jessie), another subset of ECMAScript
- [What is "this"](https://www.youtube.com/watch?v=kb0Af7dzCTs), tips/rant of `this`
- [Orthodox C++](https://gist.github.com/bkaradzic/2e39896bc7d8c34e042b), C++ subset