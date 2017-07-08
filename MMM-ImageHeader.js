/* Magic Mirror
 * Module: MMM-ImageHeader
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-ImageHeader", {

    defaults: {
        headerImage: "YOUR_IMAGE_NAME", // Local Image name - Example: myPictureName.jpg
		internetUrl: "",                // Only direct url to internet images
		},

    start: function() {
        self = this;
        this.url = "";
	//  this.url = 'modules/MMM-ImageHeader/pix/' + this.config.headerImage;

        if (this.config.headerImage != "") {
            this.url = "modules/MMM-ImageHeader/pix/" + this.config.headerImage;
        } else {
			this.url = this.config.internetUrl;
	}
    },

    getStyles: function() {
        return ["MMM-ImageHeader.css"]
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        var image = document.createElement("img");
		
		if (this.config.headerImage != "") {
			this.url = "modules/MMM-ImageHeader/pix/" + this.config.headerImage;
		} else {
			this.url = this.config.internetUrl;
	}
		
		
		
		
		
		
		
    //    if (this.config.headerImage != '') {
    //        image.src = this.url;
    //        image.className = "photo";
    //    }

        wrapper.appendChild(image);
        return wrapper;
    }
});