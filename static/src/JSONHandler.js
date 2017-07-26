JSONHandler = (function() {
    return {
        new :function() {
            var self = {};

            //multi purpose get request function. I had trouble using JQUERY's $.get or $.getJSON (which I would normally use) so I created this.
            function getJSONRequest(url, callback) {
                var req = new XMLHttpRequest();
                req.overrideMimeType("application/json");
                req.open('GET', url, true);
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == "200") {
                        callback(req.responseText);
                    }
                }
                req.send(null);
            }

            //public method to load json. Seems a bit redundant, however I added this to make code more readable.
            self.load = function(url, callback) {
                getJSONRequest(url, callback)
            }

            return self;
        }
    }
})();
