import Response from './response-controller.js';
import * as firebase from 'firebase';

export default {
    createCourse(req, res) {
        let course = req.body;
        firebase.database().ref().child('courses').push(course).then(function(snapshot){
            Response.sendMessage(res, 'Successfully created course');
        });
    },
    retrieveCourse(req, res){
        firebase.database().ref('/courses/' + req.query.id).once('value').then(function(snapshot) {
            Response.sendObject(res, 'val', snapshot.val());
        });
    },
    updateCourse(req, res) {
        let course = req.body;
        firebase.database().ref('/courses/' + req.query.id).set(course).then(function(snapshot) {
            Response.sendMessage(res, 'Successfully updated course.');
        });
    },
    deleteCourse(req, res) {
        firebase.database().ref('/courses/' +req.query.id).remove().then(function(snapshot){
            Response.sendMessage(res, 'Successfully deleted course');
        });
    }
};