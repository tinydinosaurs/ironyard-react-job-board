import Backbone from 'backbone';
import CompanyModel from '../models/companyModel';


const CompanyCollection = Backbone.Collection.extend({
	model: CompanyModel,
	url: 'http://tiny-za-server.herokuapp.com/collections/job_posts_dl'
});

export default CompanyCollection