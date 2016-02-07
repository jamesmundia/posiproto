Template.billboard.events ({
	'click .findPosi': function(){
		Meteor.call('findPosi', function (error, result){
			if (result){
				Session.set('foundPosi', result);
			}// end of if statement
		}) // end of meteor call		
	} // end of click function
})// end of billboard events