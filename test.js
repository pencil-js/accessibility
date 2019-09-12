import test from "ava";
import Pencil from "pencil.js";
import accessibility from ".";

accessibility(Pencil);

test("Basic arc", (t) => {
    const arc = new Pencil.Arc([10, 20], 1, 2, 3, 4, {
        fill: "#f00",
    });

    t.is(arc.description(), "a red Arc at [10, 20]");
});

test("Input", (t) => {
    const slider = new Pencil.Slider([1, 2], {
        value: 12,
        min: 10,
        max: 20,
    });
    slider.fire(new Pencil.BaseEvent(Pencil.Container.events.attach, slider));

    t.is(slider.description(), "a Slider at [1, 2] of value 12 (20%)");
});
