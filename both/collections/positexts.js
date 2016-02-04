Positexts = new Mongo.Collection("positexts");

Positexts.attachSchema(new SimpleSchema({
	message: {
		type: String,
		label: "Message",
	},
	author: {
		type: String,
		label: "Who Said This?"
	},
		link: {
	    type: String,
	    label: "Where can we find this?"
  },
  createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
		return new Date ()
			},
		autoform: {
			type: "hidden"
				}
  },
  createdBy: {
  		type: String,
  		label: "created By",
  		autoValue: function() {
  		return Meteor.userId()
  	},
	  	autoform: {
	  		type: "hidden"
  					}
  },
  Random: {
  		type: Number,
  		label: "randomnumber",
  		autoValue: function () {
  		return Random.fraction()
  	},
  		autoform: {
  			type: "hidden"
  		}	
  	}
}));
