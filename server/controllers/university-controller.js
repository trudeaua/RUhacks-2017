import Response from './response-controller.js';
import * as firebase from 'firebase';

export default {
    createUniversity(req, res) {
        let University = {};
        University.name = req.body.name;
        firebase.database().ref().child('universities').push(course).then(function(snapshot){
            Response.sendMessage(res, 'Successfully created University');
        });
        firebase.database().ref().child('universities').get(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully Grabbed University');
        });
        firebase.database().ref().child('universities').put(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully created University');
        });
        firebase.database().ref().child('universities').post(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully updated University');
        });
        firebase.database().ref().child('universities').delete(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully removed University');
        });
    }
};