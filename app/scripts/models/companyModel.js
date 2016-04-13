import Backbone from 'backbone';

const CompanyModel = Backbone.Model.extend({
	initialize: function(){
      console.log('these are unicorns');
  	},
	defaults: {
		id: null,
		name: '',
		location: '',
		logo: '',
		website: '',
		featured: false
	},
	idAttribute: 'id',
	urlRoot: ''	
});

export default CompanyModel