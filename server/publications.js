Meteor.publish('positexts', function () {
		return Positexts.find({}, {limit:1})
		return this.ready();

  });

//	var random = _.sample(Positexts.find().fetch());
  //  return Positexts.find({_id: random && random._id});
