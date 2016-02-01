Positexts = new Mongo.Collection('positexts');

Positexts.attachSchema(new SimpleSchema({
  message: {
    type: String
  },
  author: {
    type: String
  },
  link: {
    type: String
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
  	autoValue: function () {
  		return this.UserId ()
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