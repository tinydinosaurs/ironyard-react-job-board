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
	urlRoot: 'http://tiny-za-server.herokuapp.com/collections/job_posts_dl'
});

export default PostingModel