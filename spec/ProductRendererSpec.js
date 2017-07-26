
describe("ProductRenderer", function () {
    var ProductRender = require('../static/src/ProductRenderer.js');

    //This is pretty straight forward, since posted date is always changing, I decided to check if they we successfully added to the rendered string.
    it("should be able to render ad HTML", function () {
       var productRenderer = ProductRender.renderIndividualProductHtml(50, 15, ":)", "August 1, 1992");
       expect(productRenderer.indexOf('class="ascii"') !== -1).toEqual(true);
        expect(productRenderer.indexOf('class="posted"') !== -1).toEqual(true);
    });

});