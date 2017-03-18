import express from 'express';
import CourseController from '../controllers/course-controller';
import LoginController from '../controllers/login-controller';

const api = express.Router();

api.get('/', function(req, res){
    res.send("Hello World")
});

api.route('/Course')
    .put(CourseController.createCourse)
	.get(CourseController.retrieveCourse)
	.post(CourseController.updateCourse)
	.delete(CourseController.deleteCourse);

api.route('/Login')
	.put(LoginController.createLogin);
api.route('/Login')
	.get(LoginController.createLogin);
api.route('/Login')
	.post(LoginController.createLogin);
api.route('/Login')
	.delete(LoginController.createLogin);

export default api;