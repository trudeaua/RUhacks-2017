import Response from './response-controller.js';
import * as firebase from 'firebase';

export default {
    createCourse(req, res) {
        let course = req.body;
        firebase.database().ref().child('course').push(course).then(function(snapshot){
            Response.sendMessage(res, 'Successfully created course');
        });
        firebase.database().ref().child('course').get(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully Grabbed course');
        });
        firebase.database().ref().child('course').put(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully create course');
        });
        firebase.database().ref().child('course').post(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully updated course');
        });
        firebase.database().ref().child('course').delete(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully removed course');
        });
    }
};
//get grab
//put create
//post update
//delete