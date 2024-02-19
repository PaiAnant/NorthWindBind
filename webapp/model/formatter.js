sap.ui.define([], () => {
    "use strict";

    return {
        formatImage: function (base64String) {
            // Convert base64 string to binary
            var binaryString = window.atob(base64String);

            // Convert binary to Uint8Array
            var uint8Array = new Uint8Array(binaryString.length);
            for (var i = 0; i < binaryString.length; i++) {
                uint8Array[i] = binaryString.charCodeAt(i);
            }

            // Create blob from Uint8Array
            var blob = new Blob([uint8Array], { type: 'image/jpeg' });

            // Create object URL from blob
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(blob);

            return imageUrl;
        },

        formatPhotoUrl: function (sPhoto) {
            // Assuming sPhoto contains the base64 encoded image data
            // Construct a data URL for the image
            if (sPhoto) {
                return "data:image/jpeg;base64," + sPhoto; // Assuming the image format is JPEG
            } else {
                // If no photo is available, you can provide a default image URL
                return "path/to/default/image.jpg";
            }
        }

    };
});