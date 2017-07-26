describe("ProductDateHandler", function () {
    var ProductDateHandler = require('../static/src/ProductDateHandler.js');

    //I started with a static 1 (The get days passed since was necessary for my formatting operations so this was the first test case.)
    it("should be able to get the difference between two days 1 day apart", function () {
        var daysPassed = ProductDateHandler.getDaysPassedSince(new Date('08/01/1992'), new Date('08/02/1992'));
        expect(daysPassed).toEqual(1);
    });

    //I then tested if it worked for dates in different months
    it("should be able to get the difference between two days 100 days apart", function () {
        var daysPassed = ProductDateHandler.getDaysPassedSince(new Date('08/01/1992'), new Date('11/09/1992'));
        expect(daysPassed).toEqual(100);
    });

    // Followed by dates in different years.
    it("should be able to get the difference between two days 1000 days apart", function () {
        var daysPassed = ProductDateHandler.getDaysPassedSince(new Date('08/01/1992'), new Date('04/28/1995'));
        expect(daysPassed).toEqual(1000);
    });

    // What if the current date passed in was less than the older date. This should never happen.
    it("should return -1 if current date is less than older date", function () {
        var daysPassed = ProductDateHandler.getDaysPassedSince(new Date('08/01/1992'), new Date('07/28/1992'));
        expect(daysPassed).toEqual(-1);
    });

    // Now that I was confident in my day difference calculator I could start working on my formatted
    it("should return a minute ago", function () {
        var formatted = ProductDateHandler.getFormattedPostedDate("August 1, 1970, 01:00:00 UTC", "August 1, 1970, 01:01:00 UTC");
        expect(formatted).toEqual("a minute ago");
    });

    // Next I needed to calculate a large amount such as 6 days ago.
    it("should return a minute ago", function () {
        var formatted = ProductDateHandler.getFormattedPostedDate("August 1, 1970, 01:00:00 UTC", "August 7, 1970, 01:01:00 UTC");
        expect(formatted).toEqual("6 days ago");
    });

    // Finally, what if the date exceeded 7 days I need to return the actual date.
    it("should return a minute ago", function () {
        var formatted = ProductDateHandler.getFormattedPostedDate("August 2, 1970, 12:05:00 UTC", "August 10, 1970, 12:01:00 UTC");
        expect(formatted).toEqual("August 2nd, 1970");
    });


});