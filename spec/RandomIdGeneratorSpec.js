
describe("RandomIdGenerator", function () {
    var RIG = require('../static/src/RandomIdGenerator.js');


    //Used this from google since it is for testing purposes.
    var checkForDuplicates = function(ids) {
        var sorted_arr = ids.slice().sort();
        var results = [];
        for (var i = 0; i < ids.length - 1; i++) {
            if (sorted_arr[i + 1] === sorted_arr[i]) {
                results.push(sorted_arr[i]);
            }
        }
        return results;
    }

    //This was an interesting one to test, I decided to generator a huge list of ids and make sure there were no duplicates.
    it("should be able to generate unique random ids", function () {

        var ids = [];
        for(var i = 0; i < 100; i++) {
            ids.push(RIG.generate());
        }

        expect(checkForDuplicates(ids).length).toEqual(0);
    });

});