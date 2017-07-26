ProductGridRenderer = (function() {
    return {
        new : function(elementId) {
            var self = {};

            var sortBy = null;

            // Used it initialize Renderer
            self.init = function(){
                self.appendProductsAndAdsHtml(elementId, 21, 0, null);
            }

            //Allows sorting of products
            self.sortProducts = function(sort){
                $('#products').html("");
                sortBy = sort;
                removeLoadingCog();
                self.appendProductsAndAdsHtml(elementId, 21, 0);
            }

            //Appends rendered product grid with single ad after 20 results to a specific element
            self.appendProductsAndAdsHtml = function (elementId, limit, page) {
                var productHandler = ProductHandler.new();
                appendRenderedLoadingCog(elementId);
                var sort = (sortBy) ? "&sort=" + sortBy : "";
                productHandler.getProducts('?limit=' + limit + '&skip=' + (21 * page) + sort, function (data) {
                    //needed to split because I kept getting and error not allowing me to parse the JSON being passed from the server.
                    var splitJSON = data.split("\n");
                    if(splitJSON.length > 0 && splitJSON[0] !== "") {
                        var renderedHtml = renderProductsGridHTML(splitJSON);
                        renderedHtml += AdHandler.renderAdHTML(RandomIdGenerator.generate());
                        appendRenderedHtmlToElement(elementId, renderedHtml);
                        ScrollHandler.handleScrollEvent(self, elementId);
                    } else {
                        appendEndOfProducts();
                    }
                    removeLoadingCog();
                });
            }

            //Will append an end of catalogue message when the use has view all of the products
            var appendEndOfProducts = function() {
                $(elementId).append('<div class="panel panel-default">'
                    + '<div class="panel-body">'
                    + '~ end of catalogue ~'
                    + '</div>'
                    + '</div>');
            }

            //removes the loading cog after the results have been displayed
            var removeLoadingCog = function() {
                $('#loading-cog').remove();
            }

            //inserts a loading cog onto the screen while results are loading
            var appendRenderedLoadingCog = function(elementId) {
                $(elementId).after('<div id="loading-cog" class="panel panel-default">'
                    + '<div class="panel-body">'
                    + '<i class="fa fa-cog fa-spin" style="font-size:24px"></i> '
                    + 'Please be patient, we are fetching you more ASCII products :)...'
                    + '</div>'
                    + '</div>');
            }

            //appends the rendered html to the element
            var appendRenderedHtmlToElement = function (elemntId, renderedHtml) {
                $(elementId).append(renderedHtml);
            }

            //Builds the html for a product grid
            var renderProductsGridHTML = function (splitJSON) {
                var renderedProductGridHtml = "";
                for (var i = 1; i < splitJSON.length; i++) {
                    if (splitJSON[i]) {
                        var product = JSON.parse(splitJSON[i]);
                        renderedProductGridHtml += handleProductRowHtmlRendering(i);
                        renderedProductGridHtml += ProductRenderer.renderIndividualProductHtml(product.price, product.size, product.face, product.date);
                    }
                }
                return '<div class="panel panel-default"><div class="panel-body">' + renderedProductGridHtml + '</div></div>';
            }

            //Will insert a row before or after a set of products - builds rows with 4 columns
            var handleProductRowHtmlRendering = function (i) {
                var renderedProductRowHtml = "";
                if (i !== 1 && i % 4 === 1) renderedProductRowHtml += "</div>";
                if (i % 4 === 1) renderedProductRowHtml += "<div class=\"row\">";
                return renderedProductRowHtml;
            }

            return self;
        }
    };
})();
