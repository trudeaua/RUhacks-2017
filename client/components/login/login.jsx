import React from 'react';
import lodash from 'lodash';
import {browserHistory} from 'react-router';

class Login extends React.Component {
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

Login.styles = {

};

export default Login;