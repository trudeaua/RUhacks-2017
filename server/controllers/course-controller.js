import Course from '../models/course.js';
import Response from './response-controller.js';

export default {
    createCourse(req, res) {
        let course = new Course(req.body);
        course.save(function(err) {
            if (err) {
                Response.sendError(res, err);
            } else {
                Response.sendMessage(res, 'Course created.');
            }
        });
    }
};