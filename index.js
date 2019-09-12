import color from "./modules/color";
import component from "./modules/component";
import input from "./modules/input";
import position from "./modules/position";

export default (Pencil) => {
    color(Pencil);
    component(Pencil);
    input(Pencil);
    position(Pencil);
};
