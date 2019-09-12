# Accessibility

This is a [Pencil.js](https://github.com/pencil-js/pencil.js) plugin to allow each object to describe itself for blind or visually impaired people.

## Installation

    npm install @pencil.js/accessibility

## Usage

You need to inject your `Pencil` object to `accessibility` to modify it's behavior.

```js
import Pencil from "pencil.js";
import accessibility from "@pencil.js/accessibility";

accessibility(Pencil);
```

## Example

```js
import Pencil from "pencil.js";
import accessibility from "@pencil.js/accessibility";

accessibility(Pencil);

const example = new Pencil.Circle([10, 20], 100, {
    fill: "#f00",
});

console.log(example.description());
// a red Circle of radius 100 at [10, 20]
```

## Contributions
You want to help us improve ? Please read [the contributing manual](https://github.com/pencil-js/pencil.js/blob/master/contributing.md).

## license

[MIT](license)
