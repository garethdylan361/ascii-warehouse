ProductSortHandler = (function() {

    var self = {};

    //initialized click listeners for each of the sort links
    self.handleSort = function (renderer) {
        $('#sort-by-size').click(function(e) {sort(renderer, e, "size");});
        $('#sort-by-price').click(function(e) {sort(renderer, e, "price");});
        $('#sort-by-id').click(function(e) {sort(renderer, e, "id");})
    }

    //multipurpose sort function. Disables normal behavior for a link and sorts the products.
    var sort = function(renderer, e, sortBy) {
        e.preventDefault();
        renderer.sortProducts(sortBy);
    }

    return self;

})();

if(typeof module !== 'undefined') {
    module.exports = ProductSortHandler;
}