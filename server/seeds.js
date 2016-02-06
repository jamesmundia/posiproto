Meteor.startup(function () {
  if (Positexts.find().count() === 0) {
  	Positexts.insert ({message: "Choose to see this moment with love...",
	author: "GB", link: "www.gb.com"
		}); // end of Positexts insert
	} 
}) //end of startup function