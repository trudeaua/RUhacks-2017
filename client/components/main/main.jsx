import React from 'react';
import lodash from 'lodash';
import {browserHistory} from 'react-router';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper}>
                <h1>Hello React!</h1>
            </div>
        );
    }
}

Main.styles = {

};

export default Main;