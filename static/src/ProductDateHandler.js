if(typeof require !== 'undefined') {
    var moment = require('../third-party/moment.js');
}

ProductDateHandler = (function() {

    var self = {};

    //returns the number of milliseconds in a day
    var getOneDayInMilliSeconds= function() {
       return 1000*60*60*24;
    }

    //returns the number of days in between two dates.
    self.getDaysPassedSince = function (olderDate, currentDate) {
        var differenceInMilliSeconds = currentDate-olderDate;
        var differenceInDays =  Math.round(differenceInMilliSeconds / getOneDayInMilliSeconds());
        return (!isNaN(differenceInMilliSeconds) && differenceInMilliSeconds > 0) ? differenceInDays : -1;
    }

    //returns a formatted date to be displayed for a product in a product grid.
    self.getFormattedPostedDate = function(unformattedPostedDate, currentDate) {
        currentDate = (currentDate === "") ? new Date() : new Date(currentDate);
        var differenceInDays = self.getDaysPassedSince(new Date(unformattedPostedDate), currentDate);
        var timeAgoFormatted = moment(unformattedPostedDate).from(currentDate);
        var mmdyyyyFormatted = moment(unformattedPostedDate).format('MMMM Do, YYYY');;
        return (differenceInDays >= 7) ? mmdyyyyFormatted : timeAgoFormatted;
    }

    return self;

})();

if(typeof module !== 'undefined') {
    module.exports = ProductDateHandler;
}