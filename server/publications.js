Meteor.publish('positexts', function(){
	var random = _.sample(Positexts.find().fetch());
    return Positexts.find({_id: random && random._id});
});
