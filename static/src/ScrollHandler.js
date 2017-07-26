ScrollHandler = (function() {

    var self = {};
    var page = 0;

    //gets the last rendered page.
    self.getPage = function() {
        return page;
    }

    //each time the scrollbar scrolls it checks if the user is at the bottom of the page and if they are adds a apge and adds new products/ads
    self.handleScrollEvent = function(renderer, elementId) {
        $(window).scroll(function () {
            if (isBottomOfPage()) {
                $(window).unbind('scroll');
                page++;
                renderer.appendProductsAndAdsHtml(elementId, 21, page);
            }
        });
    }

    //checks if user has scrolled to bottom of page
    var isBottomOfPage = function() {
        return $(window).scrollTop() + $(window).height() > $(document).height() - 100;
    }


    return self;

})();
