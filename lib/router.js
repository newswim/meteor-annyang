// adding routes so we can wait on spotify

Router.route('/', function () {
  this.render('', {
    waitOn: function(){
      Accounts.loginServicesConfigured();
    }
  });


});

Router.route('/redirect');
