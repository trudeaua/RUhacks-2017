import express from 'express';
import CourseController from '../controllers/course-controller';
import ScheduleController from '../controllers/schedule-controller';
const api = express.Router();

api.get('/', function(req, res){
    res.send("Hello World")
});

api.route('/Course')
    .put(CourseController.createCourse)
	.get(CourseController.retrieveCourse)
	.post(CourseController.updateCourse)
	.delete(CourseController.deleteCourse);

api.route('/Schedule')
	.put(ScheduleController.createLogin);
	.get(ScheduleController.retrieveLogin);
	.post(ScheduleController.updateLogin);
	.delete(ScheduleController.deleteLogin);

export default api;