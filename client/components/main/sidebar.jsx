import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';
import sa from 'superagent';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table';

import {browserHistory} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);

        this.onSetContent = props.onSetContent;
        this.onGenerate = props.onGenerate;
        this.state = {
            university: 'University of Toronto',
			content:[],
			coursesList:[],
			values:[]
        };

    }
    getCourses(){
		let context = this;
		var ajaxResult=[];
        sa.get('/api/course/bulk/').query({ university: this.state.university}).end(function(err,res){
            
			console.log(res.body.value);
			for(let k in res.body.value){
				ajaxResult.push(res.body.value[k]);
				ajaxResult[ajaxResult.length-1]["key"] = k;
			}
			console.log(ajaxResult);
			
			context.setState({content:ajaxResult});
        });
    }
    generate(){
        this.onGenerate();
    }
    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper}>
                <RaisedButton id="loadBtn" label='import course data' onClick={this.getCourses}/>
				<input type="text" style={styles.searchBar} placeholder="Search For Courses..."/>
				<form className="scrollBox" style={styles.scrollBox}>
						
                        {this.state.content.map( (row, index) => (
                            <ul key={index}>
						<Checkbox type="checkbox" labelPosition='right' style={styles.classData} className="classData" value={[
							row.id+", "+row.university+", "+row.name+", "+row.faculty + ", " + row.code + ", " + row.room+", "+row.lecture_times+", "+row.tutorial_times]}/>
							{[" " + row.faculty + ", " + row.code + ", " + row.name]}
							</ul>
                       ))}
				</form>
				<button style={styles.button} onClick={this.addCourses}>Add</button>
				<button style={styles.button} onClick={this.generate}>Auto Fit</button>
            </div>
        );
    }
	addCourses(){
		var inputs = document.getElementsByTagName("input");

		for (var i = inputs.length -1 ; i>= 0; i--){
			if (inputs[i].type === "checkbox" && inputs[i].checked){
			this.state.values.push(inputs[i].value);}
		}
		console.log(this.state.values);
		this.onSetContent(this.state.values);
	}
}

Sidebar.styles = {
scrollBox:{
	height:"300px",
	width:"100%",
	border:"1px solid #ccc",
	borderTop:"none",
	overflow:"auto",
	marginBottom:"1em",
},
classData:{
	width:"100%"
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