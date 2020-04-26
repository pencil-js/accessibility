export default ({ Container }) => {
    /**
     * Make a flat array from a Container
     * @param {Container} container - Any Pencil Container
     * @return {Array<Container>}
     */
    function flatten (container) {
        container.children.sort((a, b) => a.options.zIndex - b.options.zIndex);

        const firstPositiveIndex = container.children.findIndex(child => child.options.zIndex >= 0);
        const pivotIndex = firstPositiveIndex === -1 ? container.children.length : firstPositiveIndex;

        const childrenBehind = container.children.slice(0, pivotIndex);
        const childrenBefore = container.children.slice(pivotIndex);

        const recursive = children => children.reduce((list, child) => list.concat(flatten(child)), []);

        return [
            ...recursive(childrenBehind),
            container,
            ...recursive(childrenBefore),
        ];
    }

    Object.defineProperty(Container.prototype, "description", {
        get () {
            const list = flatten(this).map(({ description }) => description);
            const { length } = list;
            const join = "and";

            return `${list.slice(0, length - 1).join(", ")} ${join} ${list[length - 1]}`;
        },
    });
};
