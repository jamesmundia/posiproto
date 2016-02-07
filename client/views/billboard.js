Template.billboard.events({
	'click .getposi' : function(){
	Session.set('onPosi', 'on Posi test');
    Session.get('onPosi');
    var onPosi = Session.get('onPosi');
    console.log(onPosi);
	}
});