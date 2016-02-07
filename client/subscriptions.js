// Meteor.setInterval(function(){

Meteor.subscribe('positexts', function() {
	return Positexts.find({}, {limit: 1});
});

// }, 5000);

// old random code return Positexts.find({}, {_id:Random.choice(1)})