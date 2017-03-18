import Response from './response-controller.js';
import * as firebase from 'firebase';

export default {
    createSchedule(req, res) {
        let schedule = req.body;
        firebase.database().ref().child('schedules').push(schedule).then(function(snapshot){
            Response.sendMessage(res, 'Successfully created schedule');
        });
    },
    retrieveSchedule(req, res){
        firebase.database().ref('/schedules/' + req.query.id).once('value').then(function(snapshot) {
            Response.sendObject(res, 'val', snapshot.val());
        });
    },
    updateSchedule(req, res) {
        let course = req.body;
        firebase.database().ref('/schedules/' + req.query.id).set(schedule).then(function(snapshot) {
            Response.sendMessage(res, 'Successfully updated schedule.');
        });
    },
    deleteSchedule(req, res) {
        firebase.database().ref('/schedules/' +req.query.id).remove().then(function(snapshot){
            Response.sendMessage(res, 'Successfully deleted schedule');
        });
    }
};