import Response from './response-controller.js';
import * as firebase from 'firebase';

export default {
    /*
    * COURSE SCHEMA:
    * university: string
    * name: string
    * faculty: string
    * code: string
    * room : string
    * lecture_times: [time]
    * tutorial_times: [time]
    *
    * TIME: M-12-15
    */

    createCourse(req, res) {
        let course = req.body;
        firebase.database().ref().child('courses').push(course).then(function(snapshot){
            Response.sendMessage(res, 'Successfully created course');
        });
    },
    retrieveCourse(req, res){
        firebase.database().ref('/courses/' + req.query.id).once('value').then(function(snapshot) {
            Response.sendObject(res, 'value', snapshot.val());
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
    },

    generateCourses(req, res){
        data = [{
            university: 'University of Toronto',
            name: 'Intro to ',
            faculty: 'CSC',
            code: '20',
            room: 'BA12',
            lecture_times: [
                'M-12-1'
            ],
            tutorial_times: [
                'W-12-1'
            ]
        }, {
            university: 'University of Toronto',
            name: 'Intro to ',
            faculty: 'CSC',
            code: '20',
            room: 'BA12',
            lecture_times: [
                'M-12-1'
            ],
            tutorial_times: [
                'W-12-1'
            ]
        }];
        for (let i = 0; i < data.length; i++){
            firebase.database().ref().child('courses').push(data);
        }
        Response.sendMessage(res, 'Successfully populated courses');
    },
    getAllCourses(req, res) {
        firebase.database().ref('/courses/').orderByChild("university").equalTo(req.query.university).once('value').then(function(snapshot){
            Response.sendObject(res, 'value', snapshot.val());
        });
    },
    deleteCourses(req, res) {
        firebase.database().ref('/courses/').remove().then(function(snapshot){
            Response.sendMessage(res, 'Successfully deleted courses');
        });
    }
};