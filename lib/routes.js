FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('mainLayout', {
		topnav: 'topnav',
		top: 'billboard',
		footer: 'footer'
    }); // end of layout notes
  }
});

FlowRouter.route('/positext', {
  name: 'positext',
  action() {
    BlazeLayout.render('mainLayout', {
		topnav: 'topnav',
		main: 'positext',
		footer: 'footer'
    }); // end of layout notes
  }
});

FlowRouter.route('/submit', {
  name: 'submit',
  action() {
    BlazeLayout.render('mainLayout', {
		topnav: 'topnav',
		main: 'insertPositextForm',
		footer: 'footer'
    }); // end of layout notes
  }
});