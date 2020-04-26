export default ({ Position }) => {
    Object.defineProperty(Position.prototype, "description", {
        get () {
            return `[${this.x}, ${this.y}]`;
        },
    });
};
