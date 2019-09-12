export default ({ Component, Color }) => {
    Component.prototype.description = function description () {
        const { name } = this.constructor;
        const position = this.getAbsolutePosition();
        return `a ${Color.from(this.options.fill).description()} ${name} at ${position.description()}`;
    };
};
