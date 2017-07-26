ProductRenderer = (function() {

    var self = {};

    //renders an individual product
    self.renderIndividualProductHtml = function(price, size, ascii, postedDate) {
        return '<div class="col-sm-3">'
            + '<div class="panel panel-primary">'
            + renderProductPrice(price)
            + renderProductAscii(ascii, size)
            + renderProductPostedDate(postedDate)
            + '</div>'
            + '</div>';
    }

    //renders the price for an individual product
    var renderProductPrice = function (price) {
        return '<div class="panel-heading">'
            //formates price to 2 decmial points
            + '<h1 class="panel-title">$' + price.toFixed(2) + '</h1>'
            + '</div>';
    }

    //renders the ascii and size for an individual product
    var renderProductAscii = function (ascii, size) {
        return '<div class="panel-body">'
            + '<div style="font-size:' + size + 'px;" class="ascii">' + ascii + '</div>'
            + '</div>'
    }

    //renders the products posted date
    var renderProductPostedDate = function (postedDate) {
        return '<div class="panel-footer">'
            + '<small class="posted">Posted ' + ProductDateHandler.getFormattedPostedDate(postedDate, "") + '.</small>'
            + '</div>';
    }

    return self;

})();

if(typeof module !== 'undefined') {
    module.exports = ProductRenderer;
}
