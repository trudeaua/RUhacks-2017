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
api.route('/Course/bulk')
    .put(CourseController.generateCourses)
    .get(CourseController.getAllCourses)
    .delete(CourseController.deleteCourses);

api.route('/Schedule')
	.put(ScheduleController.createSchedule)
	.get(ScheduleController.retrieveSchedule)
	.post(ScheduleController.updateSchedule)
	.delete(ScheduleController.deleteSchedule);
api.route('/Schedule/bulk').delete(ScheduleController.clearSchedules);
export default api;