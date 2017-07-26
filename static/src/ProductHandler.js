ProductHandler = (function() {
    return {
        new :function() {
            var self = {};

            //gets all the products with specific params
            self.getProducts = function (params, callback) {
               var jsonHandler = JSONHandler.new();
               jsonHandler.load("api/products" + params, callback);
            }

            return self;
        }
    }
})();