RandomIdGenerator = (function() {

    var self = {};
    var usedIds = [];

    //public generate method to initialize generation of a random id
    self.generate = function() {
        return getAdId(generateRandomId());
    }

    // loops through itself until it has a random unique result.
    var getAdId = function(returnId) {
        if(idHasBeenUsed(returnId)) {
            returnId = getAdId(generateRandomId());
        } else {
            usedIds.push(returnId);
        }
        return returnId;
    }

    //generates a random number
    var generateRandomId = function() {
        return Math.floor(Math.random() * 1000);
    }

    //checks if id has been used in this instance before
    var idHasBeenUsed = function(id) {
        return (usedIds.indexOf(id) !== -1);
    }

    return self;

})();

if(typeof module !== 'undefined') {
    module.exports = RandomIdGenerator;
}