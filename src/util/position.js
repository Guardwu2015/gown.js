module.exports = {
    /**
     * center element on parent horizontally
     * @param elem
     * @param parent (optional)
     * @method centerHorizontal
     */
    centerHorizontal: function (elem, parent) {
        parent = parent || elem.parent;
        elem.x = Math.floor((parent.width - elem.width ) / 2);
    },

    /**
     * center element on parent vertically
     * @param elem
     * @param parent (optional)
     * @method centerVertical
     */
    centerVertical: function (elem, parent) {
        parent = parent || elem.parent;
        elem.y = Math.floor((parent.height - elem.height ) / 2);
    },

    /**
     * center element on parent
     * @param elem
     * @param parent (optional)
     * @method center
     */
    center: function (elem, parent) {
        PIXI_UI.centerVertical(elem, parent);
        PIXI_UI.centerHorizontal(elem, parent);
    },

    /**
     *
     * @param elem
     * @param parent (optional)
     */
    bottom: function (elem, parent) {
        parent = parent || elem.parent;
        elem.y = parent.y - elem.height;
    }
};