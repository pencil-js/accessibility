# Accessibility

This is a [Pencil.js](https://github.com/pencil-js/pencil.js) plugin to allow each object to describe itself for blind or visually impaired people.

📢 I'm looking for someone with a visual deficiency and primarily using screen descriptor to help me out. Get in touch if you want to be part of the design process.


## Installation

    npm install @pencil.js/accessibility


## Usage

You need to tell `Pencil` to use the `accessibility` plugin to change its behavior.

```js
import Pencil from "pencil.js";
import accessibility from "@pencil.js/accessibility";

Pencil.use(accessibility);
```


## Example

```js
import Pencil from "pencil.js";
import accessibility from "@pencil.js/accessibility";

Pencil.use(accessibility);

const example = new Pencil.Circle([10, 20], 100, {
    fill: "#f00",
});

console.log(example.description());__
// a red Circle of radius 100 at [10, 20]
```


## Contributions
You want to help us improve ? Please read [the contributing manual](https://github.com/pencil-js/pencil.js/blob/master/contributing.md).


## License

[MIT](license)
