import Response from './response-controller.js';
import * as firebase from 'firebase';

export default {
    createCourse(req, res) {
        let course = {};
        course.name = req.body.name;
        course.code = req.body.code;
        firebase.database().ref().child('courses').push(course).then(function(snapshot){
            Response.sendMessage(res, 'Successfully created course');
        });
        firebase.database().ref().child('courses').get(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully Grabbed course');
        });
        firebase.database().ref().child('courses').put(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully create course');
        });
        firebase.database().ref().child('courses').post(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully updated course');
        });
        firebase.database().ref().child('courses').delete(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully removed course');
        });pm
    }
};
//get grab
//put create
//post update
//delete