import * as modules from "./modules";

export default {
    name: "@pencil/accessibility",
    install: (Pencil) => {
        Object.keys(modules).forEach(key => modules[key](Pencil));
    },
};
