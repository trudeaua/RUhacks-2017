import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';
import sa from 'superagent';

import {browserHistory} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

class Preferences extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);

        this.state = {

        };
    }

    onTimeChange(){

    }
    onGapChange(){

    }
    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper} className="text-center">
                <h1>Preferences</h1>
                <SelectField
                    floatingLabelText="Time Preference"
                    onChange={this.onSelectChange}
                    value={this.state.university}
                    style={{margin: '2% 0 2% 0', textAlign:'left'}}>
                    <MenuItem value='No Preference' primaryText="No Preference" />
                    <MenuItem value='Prefer Mornings' primaryText="Prefer Mornings" />
                    <MenuItem value='Prefer Afternoons' primaryText="Prefer Afternoons" />
                </SelectField><br/>
                <SelectField
                    floatingLabelText="Course Gap Preference"
                    onChange={this.onSelectChange}
                    value={this.state.university}
                    style={{margin: '2% 0 2% 0', textAlign:'left'}}>
                    <MenuItem value='No Preference' primaryText="No Preference" />
                    <MenuItem value='Prefer Short Gaps' primaryText="Prefer Short Gaps" />
                    <MenuItem value='Prefer Long Gaps' primaryText="Prefer Long Gaps" />
                </SelectField><br/>
                <RaisedButton label="Generate"/>
            </div>
        );
    }
}
Preferences.styles = {

};

export default Preferences;