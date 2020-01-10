MBDApp.factory("CookieModel", function() {

    /**
     * Reads a cookie 
     * @param {String} name
     */
    this.readCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }


    /**
     * Store a cookie
     * @param {String} name
     * @param {*} value
     * @param {Number} secoundsUntilExpires
     */
    this.setCookie = function setCookie(name, value, secoundsUntilExpires) {
        var d = new Date();
        d.setTime(d.getTime() + (secoundsUntilExpires * 1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }


    /**
     * Deletes a cookie
     * @param {String} name
     */
    this.deleteCookie = function(name) {
        this.setCookie(name, null, 0);
    }

    return this;
});