export default ({ Color }) => {
    Color.prototype.description = function description () {
        return this.name;
    };
};
