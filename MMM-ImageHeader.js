/* Magic Mirror
 * Module: MMM-ImageHeader
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-ImageHeader", {

    defaults: {
        headerImage: 'modules/MMM-ImageHeader/pix/YOUR_IMAGE_NAME', // local path to your image or internet url to image.
    },

    start: function() {
        self = this;
        this.url = '';

        if (this.config.headerImage != '') {
            this.url = this.config.headerImage;
        }
    },

    getStyles: function() {
        return ["MMM-ImageHeader.css"]
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        var image = document.createElement("img");
        if (this.config.headerImage != '') {
            image.src = this.url;
            image.className = "photo";
        }

        wrapper.appendChild(image);
        return wrapper;
    }
});