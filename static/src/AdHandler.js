AdHandler = (function() {

    var self = {};

    //renders a ad with a random unique id relative to the ad ids already used
    self.renderAdHTML = function (adId) {
        return '<div class="panel panel-default">'
            + '<div class="panel-body">'
            + ' <p>But first, a word from our sponsors:</p>'
            + '<img class="ad" src="/ad/?r=' +adId+ '"/>'
            + '</div>'
            + '</div>';
    }

    return self;

})();

if(typeof module !== 'undefined') {
    module.exports = AdHandler;
}