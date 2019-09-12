export default ({ Input, Math }) => {
    Input.prototype.description = function description () {
        const { name } = this.constructor;
        const percent = Math.map(this.value, this.options.min, this.options.max, 0, 100);
        const position = this.getAbsolutePosition();
        return `a ${name} at ${position.description()} of value ${this.value} (${Math.round(percent)}%)`;
    };
};
