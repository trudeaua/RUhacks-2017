import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';
import {browserHistory} from 'react-router';

class Login extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);
        this.state = {
        };
    }

    onGo(){
    	browserHistory.push('/main');
	}

    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
<body style={styles.body}>
		<div id="content" style={styles.content}>
		<div style={styles.formContainer} className="form-container">
			
		  <form>
		  <h2 style={styles.h2}>Automatic Timetable Generator</h2>

		  <h4 style={styles.h2}>Select Your School</h4>
			<select placeholder="Schools" name="schools" className="dropdown" style={styles.dropdown}>
			  <option selected="selected" value="selected">Select a School...</option>
			  <option value="mcmaster">McMaster University</option>
			  <option value="uoft">University of Toronto</option>
			  <option value="ryerson">Ryerson University</option>
			</select>
			<button type="submit" className="button" style ={styles.button}>Generate My Timetable!</button>
		  <h4 style={styles.h2}>Or Input Your 4-Digit Code From A Previous Session</h4>
			<input type="text" style={styles.txt} placeholder="ID" name="ID" maxLength="4" className="txt"></input>

			<button type="submit" className="button" style ={styles.button}>Go To My Timetable!</button>

			<input type="text" style={styles.txt} placeholder="ID" name="ID" maxLength="4" className="txt"/>

			<button type="submit" className="button" style ={styles.button} onClick={this.onGo}>Go!</button>

		  </form>
		</div>
		</div>
	
</body>

        );
    }
}

Login.styles = {
	body:{
		fontSize:"small",
		font:"13px Arial, Helvetica, sansSerif",
		position:"relative",
		backgroundColor:"#EDF5FD"
		
	},
	content:{
		marginTop:"7em",
	},

	formContainer:{
		background:"white",
		padding:"3.5em",
		width:"500px",
		position:"relative",
		left:"50%",
		marginLeft:"-250px",
		border: "1px solid grey",
		boxShadow: "5px 5px 2px grey"
	},

	dropdown:{
		background:"#fff !important",
		width:"100%",
		padding:".5em .5em",
		border: "1px solid #BBBBBB",
		marginBottom:"10px",
		fontSize:"18px",
	},
	button:{
		padding:"1.2em",
		width:"100%",
		cursor:"pointer",
		marginBottom:"15px",
		fontSize:"1.3em",
		background:"#629CCD",
		color:"white",
		fontSize:"1em",
		fontWeight:"bold",
	},
	txt:{
		background:"#fff !important",
		width:"100%",
		padding:".5em .75em",
		border: "1px solid #BBBBBB",
		marginBottom:"10px",
		fontSize:"18px",
		textAlign:"center"
	},

	h2:{
		margin: "1.7em 0 .9em 0",
		color:"#629CCD",
		textAlign:"center"
	}

};

export default Login;