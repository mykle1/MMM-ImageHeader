/* Magic Mirror
 * Module: MMM-ImageHeader
 *
 * By Mykle1
 * MIT Licensed.
 */

Module.register("MMM-ImageHeader", {
	// Default module config.
	defaults: {
		headerImage: '', // local path to your image or internet url to image.
                         // Example: 'modules/MMM-ImageHeader/pix/1.jpg'
	},

	start: function () {
		self = this;
		this.url = '';
	
		if (this.config.headerImage != '') {
			this.url = this.config.headerImage;
		}
	},

	getStyles: function () {
		return ["MMM-ImageHeader.css"]
	},

	// Override dom generator.
	getDom: function () {
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
