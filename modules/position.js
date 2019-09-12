export default ({ Position }) => {
    Position.prototype.description = function description () {
        return `[${this.x}, ${this.y}]`;
    };
};
