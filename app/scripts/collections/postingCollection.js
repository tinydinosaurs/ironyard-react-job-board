import Backbone from 'backbone';
import PostingModel from '../models/postingModel';


const PostingCollection = Backbone.Collection.extend({
	model: PostingModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/jobs_for_unicorns/'
});


var unicornJobPosts = new PostingCollection();

export default unicornJobPosts