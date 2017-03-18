import express from 'express';
import CourseController from '../controllers/course-controller';

const api = express.Router();

api.get('/', function(req, res){
    res.send("Hello World")
});

api.route('/Course')
    .put(CourseController.createCourse);
api.route('/Course')
	.get(CourseController.createCourse);
api.route('/Course')
	.post(courseController.createCourse);
api.route('/Course')
	.delete(courseController.createCourse);

api.route('/Login')
	.put(LoginController.createLogin);
export default api;