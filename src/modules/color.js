export default ({ Color }) => {
    Object.defineProperty(Color.prototype, "description", {
        get () {
            return this.name;
        },
    });
};
