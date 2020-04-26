export default ({ Component, Color }) => {
    Object.defineProperty(Component.prototype, "description", {
        get () {
            const { name } = this.constructor;
            const position = this.getAbsolutePosition();
            return `a ${Color.from(this.options.fill).description} ${name} at ${position.description}`;
        },
    });
};
