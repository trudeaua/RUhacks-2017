import express from 'express';
import CourseController from '../controllers/course-controller';
import LoginController from '../controllers/login-controller';
import UniversityController from '../controllers/university-controller';
import CourseInfoController from '../controllers/courseinfo-controller';
const api = express.Router();

api.get('/', function(req, res){
    res.send("Hello World")
});

api.route('/Course')
    .put(CourseController.createCourse)
	.get(CourseController.retrieveCourse)
	.post(CourseController.updateCourse)
	.delete(CourseController.deleteCourse);
api.route('/Course/bulk')
    .put(CourseController.generateCourses)
    .get(CourseController.getAllCourses)
    .delete(CourseController.deleteCourses);

api.route('/Login')
	.put(LoginController.createLogin);
api.route('/Login')
	.get(LoginController.createLogin);
api.route('/Login')
	.post(LoginController.createLogin);
api.route('/Login')
	.delete(LoginController.createLogin);

api.route('/University')
	.put(UniversityController.createUniversity);
api.route('/University')
	.get(UniversityController.createUniversity);
api.route('/University')
	.post(UniversityController.createUniversity);
api.route('/University')
	.delete(UniversityController.createUniversity);

api.route('/CourseInfo')
	.put(CourseInfoController.createCourseInfo);
api.route('/CourseInfo')
	.get(CourseInfoController.createCourseInfo);
api.route('/CourseInfo')
	.post(CourseInfoController.createCourseInfo);
api.route('/CourseInfo')
	.delete(CourseInfoController.createCourseInfo);
export default api;