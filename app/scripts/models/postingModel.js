import Basckbone from 'backbone';

const PostingModel = Backbone.Model.extend({
	initialize: function(){
      console.log('these are unicorns');
  	},
	defaults: {
		id: null,
		title: '',
		company: '',
		location: '',
		date: '',
		description: '',
		tags: []
	},
	idAttribute: 'id',
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/jobs_for_unicorns/'
});

export default PostingModel