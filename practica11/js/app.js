(function(){

  var app = angular.module('store', []);

  app.controller('CardController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
      console.log(this.tab);
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
      console.log(this.tab);
		};
	});
})();
