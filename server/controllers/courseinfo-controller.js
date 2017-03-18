import Response from './response-controller.js';
import * as firebase from 'firebase';

export default {
    createCourseInfo(req, res) {
        let courseInfo = {};
        courseInfo.name = req.body.name;
        courseInfo.code = req.body.code;
        courseInfo.time = req.body.time;
        courseInfo.room = req.body.room;
        courseInfo.length = req.body.length;
        firebase.database().ref().child('courseinfo').push(course).then(function(snapshot){
            Response.sendMessage(res, 'Successfully created courseinfo');
        });
        firebase.database().ref().child('courseinfo').get(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully Grabbed courseinfo');
        });
        firebase.database().ref().child('courseinfo').put(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully create courseinfo');
        });
        firebase.database().ref().child('courseinfo').post(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully updated courseinfo');
        });
        firebase.database().ref().child('courseinfo').delete(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully removed courseinfo');
        });
    }
};