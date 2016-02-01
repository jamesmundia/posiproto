Meteor.publish('positexts', function(){
return Positexts.find({}, {limit: 1});
});


