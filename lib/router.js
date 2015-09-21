// adding routes so we can wait on spotify

Router.route('/', function () {
  this.render('body', {
    // data: function () { return Items.findOne({_id: this.params._id}); }
    waitOn: function(){
      Accounts.loginServicesConfigured();
    }
  });


});

Router.route('/redirect');
