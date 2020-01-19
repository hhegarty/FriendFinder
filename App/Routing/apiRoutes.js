var path = require('path');

// Import friends list //

var friends = require('../Data/friend.js');

// Export API Routes //

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        var userResponse = userInput.scores;

        // Calculate best match //

        var matchName = "";
        var matchImage = "";
        var totalDifference = 1000;

        // Examine all friends in the list // 

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponse.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponse[j]);
            }

            if (diff < totalDifference) {
                totalDifference = diff
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        // add new user // 
        
        friends.push(userInput);

        // Send correct response //

        res.json({ status: 'Ok', matchName: matchName, matchImage: matchImage });

    });

};