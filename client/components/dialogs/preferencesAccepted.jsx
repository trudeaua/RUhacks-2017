import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';
import sa from 'superagent';

import {browserHistory} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

class ScheduleCreated extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);
        this.dismiss = this.props.dismiss;
        this.state = {
            code: this.props.code
        };
    }
    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper} className="text-center">
                <h1>Preferences</h1>
				<h3> Please select your preferences: </h3>
				<p> Breaks </p>
				<form action = ""> 
					<div class = "nobreaks">
						<input type = "radio" name= "preferences" value = "NoBreak"> No breaks please! <br>
					</div>
					
					<div class = "breaks">
						<input type = "radio" name= "preferences" value = "Breaks"> Breaks please! <br>
					</div>
		
					<div class = "doesntmatter">
					<input type = "radio" name= "preferences" value = "Doesntmatter"> It doesn't matter! <br>
					</div>
		
				</form> <br>
		
				<p>Classes</p>
				
				<form action = ""> 
				<div class = "earlyclasses">
					<input type = "radio" name= "preferences" value = "EarlyClasses"> Early classes please! <br>
				</div>
		
				<div class = "lateclasses">
					<input type = "radio" name= "preferences" value = "LateClasses"> Late classes please! <br>
				</div>
		
				<div class = "doesntmatter">
				<input type = "radio" name= "preferences" value = "Doesntmatter"> It doesn't matter! <br>
				</div>
		
				</form>
		
                 <RaisedButton label="Submit!" primary={true} onClick={this.dismiss}/>
           </div>
			
			
        );
    }
}

ScheduleCreated.styles = {

};

export default ScheduleCreated;