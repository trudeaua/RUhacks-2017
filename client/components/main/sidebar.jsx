import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';
import sa from 'superagent';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table';

import {browserHistory} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);
        this.state = {
            university: 'University of Toronto',
		content:[]
        };

    }
    getCourses(){
		let context = this;
		var ajaxResult=[];
        sa.get('/api/course/bulk/').query({ university: this.state.university}).end(function(err,res){
            
			console.log(res.body.value);
			for(let k in res.body.value){
				ajaxResult.push(res.body.value[k]);
			}
			console.log(ajaxResult);
			
			context.setState({content:ajaxResult});
        });
		
    }
    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper}>
                <h1>Sidebar</h1>
                <RaisedButton id="loadBtn" label='load courses' onClick={this.getCourses}/>
				<input type="text" style={styles.searchBar} placeholder="Search For Courses..."/>
				<div className="scrollBox" style={styles.scrollBox}>
					
                        {this.state.content.map( (row, index) => (
                            <ul key={index}>
                                <input type="checkbox" style={styles.className} className="classData"/>{" " + row.faculty + " " + row.code + ": " + " " + row.name}
                            </ul>
                        ))}
				</div>
				<button style={styles.button}>Add</button>
				<button style={styles.button}>Auto Fit</button>
            </div>
        );
    }
}

Sidebar.styles = {
scrollBox:{
	height:"300px",
	width:"100%",
	border:"1px solid #ccc",
	borderTop:"none",
	font:"16px/26px Georgia, Garamond, Serif",
	overflow:"auto",
	marginBottom:"1em",
},
classData:{
	font:"16px/26px Georgia, Garamond, Serif",
},
searchBar:{
	marginTop:"1em",
	background:"#fff !important",
	width:"100%",
	padding:".5em .75em",
	border: "1px solid #BBBBBB",
	borderBottom:"none",
	fontSize:"18px",
	textAlign:"center",
	color:"grey",
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
}
};

export default Sidebar;