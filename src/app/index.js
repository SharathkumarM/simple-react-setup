import React , { Component } from 'react';
import styles from './app.css';

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.message}>
                <div>
                    Hi Welcome to React App
                </div>
            </div>
        )
    }
}

export default App;