import Backbone from 'backbone';
import PostingModel from '../models/postingModel';


const PostingCollection = Backbone.Collection.extend({
	model: PostingModel,
	url: 'http://tiny-za-server.herokuapp.com/collections/job_posts_dl'
});


var unicornJobPosts = new PostingCollection();

export default PostingCollection