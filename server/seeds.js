Meteor.startup(function () {
  if (Positexts.find().count() === 0) {
  	Positexts.insert ({message: "Choose to see this moment with love...", author: "GB", link: "www.gb.com"});
  	Positexts.insert ({message: "Why not you...", author: "Me", link: "www.me.com"});
  	Positexts.insert ({message: "Choose Gratitude...", author: "ET", link: "www.et.com"});
    console.log("3 Positexts Inserted");
}
    else {
    console.log("No Positexts Inserted")
          };

  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
    	email: "test@test.com",
    	password: 'munhill7'
      })  
        console.log("Test User Account Created")
    }
    	
      else {
      console.log("No Users Created")
    };
});