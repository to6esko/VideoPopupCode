import React from 'react';

import Pop from './pages/pop';

const urlAddress = [
    {
        url: ''
    }
];
export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            urlAddress
        }
    }
    render() {
        return (
            <div>
                <Pop urlAddress={this.state.urlAddress}/>
                </div>
        )
    }
}