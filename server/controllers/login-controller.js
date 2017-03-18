import Response from './response-controller.js';
import * as firebase from 'firebase';

export default {
    createLogin(req, res) {
        let Login = {};
        Login.name = req.body.name;
        Login.password = req.body.password;
        firebase.database().ref().child('logins').push(course).then(function(snapshot){
            Response.sendMessage(res, 'Successfully created login');
        });
        firebase.database().ref().child('logins').get(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully Grabbed login');
        });
        firebase.database().ref().child('logins').put(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully create login');
        });
        firebase.database().ref().child('logins').post(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully updated login');
        });
        firebase.database().ref().child('logins').delete(course).then(function(snapshot){
        	Response.sendMessage(res, 'Successfully removed login');
        });
    }
};