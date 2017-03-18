import Response from './response-controller.js';
import * as firebase from 'firebase';

export default {
    createCourse(req, res) {
        let course = req.body;
        firebase.database().ref().child('courses').push(course).then(function(snapshot){
            Response.sendMessage(res, 'Successfully created course');
        });
    }
};