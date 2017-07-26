
describe("AdHandler", function () {
    var AdHandler = require('../static/src/AdHandler.js');

    var testAd1;
    var testAd2;

    function buildTestAd(id) {
        return '<div class="panel panel-default">'
            + '<div class="panel-body">'
            + ' <p>But first, a word from our sponsors:</p>'
            + '<img class="ad" src="/ad/?r=' + id + '"/>'
            + '</div>'
            + '</div>';
    }

    beforeEach(function () {
        testAd1 = buildTestAd(5);
        testAd2 = buildTestAd(124);
    });

    //Initially created html and entered a static 5 to pass this test.
    it("should be able to render ad HTML", function () {
        var ad = AdHandler.renderAdHTML(5);
        expect(ad).toEqual(testAd1);
    });

    //add id variable to renderAdHtml to render dynamic ads
    it("should be able to render ad HTML", function () {
        var ad = AdHandler.renderAdHTML(124);
        expect(ad).toEqual(testAd2);
    });
});
