import express from 'express';
import CourseController from '../controllers/course-controller';

const api = express.Router();

api.get('/', function(req, res){
    res.send("Hello World")
});

api.route('/Course')
    .put(CourseController.createCourse);

export default api;