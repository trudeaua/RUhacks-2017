import Response from './response-controller.js';
import * as firebase from 'firebase';

export default {

    /**
     * SCHEDULE SCHEMA:
     * code: String
     * university: String
     * courses: [course_id]
     */

    createSchedule(req, res) {
        let schedule = req.body;
        firebase.database().ref().child('schedules').push(schedule).then(function(snapshot){
            Response.sendMessage(res, 'Successfully created schedule');
        });
    },
    retrieveSchedule(req, res){
        firebase.database().ref('/schedules/').orderByChild('code').equalTo(req.query.code).once('value').then(function(snapshot) {
            if (snapshot.val() === null){
                Response.sendFailure(res, 'No schedule found');
            } else {
                Response.sendObject(res, 'val', snapshot.val());
            }
        });
    },
    updateSchedule(req, res) {
        let schedule = req.body;
        firebase.database().ref('/schedules/' + req.query.id).set(schedule).then(function(snapshot) {
            Response.sendMessage(res, 'Successfully updated schedule.');
        });
    },
    deleteSchedule(req, res) {
        firebase.database().ref('/schedules/' +req.query.id).remove().then(function(snapshot){
            Response.sendMessage(res, 'Successfully deleted schedule');
        });
    },

    clearSchedules(req, res) {
        firebase.database().ref('/schedules/').remove().then(function(snapshot){
            Response.sendMessage(res, 'Successfully deleted schedules');
        });
    }
};