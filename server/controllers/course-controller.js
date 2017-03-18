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
        let data = [{
            university: 'Ryerson University',
            name: 'Calculus',
            faculty: 'Math',
            code: 'MTH 310',
            room: 'DSQ 24',
            lecture_times: [
                'M-11-13'
            ],
            tutorial_times: [
                'W-8-9'
            ]
        }, {
            university: 'Ryerson University',
            name: 'Data Structures and Algorithms',
            faculty: 'Computer Science',
            code: 'DSA 452',
            room: 'DSQ 12',
            lecture_times: [
                'T-15-16'
            ],
            tutorial_times: [
                'F-12-1'
            ]
        },
        {
            university: 'Ryerson University',
            name: 'Discrete Math I',
            faculty: 'Computer Science',
            code: 'MTH 21',
            room: 'DSQ 13',
            lecture_times: [
                'W-9-11'
            ],
            tutorial_times: [
                'R-10-11'
            ]
        },
        {
            university: 'Ryerson',
            name: 'Discrete Structure',
            faculty: 'Computer Science',
            code: 'CPS 420',
            room: 'TRS 216',
            lecture_times: [
                'T-8-9'
            ],
            tutorial_times: [
                'M-11-12'
            ]
        },
        {
            university: 'Ryerson University',
            name: 'Genetics',
            faculty: 'Science',
            code: 'BIO 456',
            room: 'LIB 072',
            lecture_times: [
                'F-15-16'
            ],
            tutorial_times: [
                'T-9-10'
            ]
        }];
        for (let i = 0; i < data.length; i++){
            firebase.database().ref().child('courses').push(data[i]);
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