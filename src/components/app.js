import React from 'react';

import Pop from './pages/pop';
import RenderItems from './pages/renderItems';

const urlAddress = [
    {
        url: ''
    }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPop: false,
            urlAddress
        }
    }

    handleSubmit(url) {
        this.state.urlAddress.push({ url, showPop: true });
        this.setState({ urlAddress: this.state.urlAddress });
        console.log(url);
    }


    toggleUrl(url) {
        const foundUrl = _.find(this.state.urlAddress, todo =>
            todo.url === url);
        this.setState({ urlAddress: this.state.urlAddress });
    }

    deleteUrlAddress(id) {
        _.remove(this.state.urlAddress, todo =>
            todo.id === id);
        this.setState({ urlAddress: this.state.urlAddress });
    }
    
    render() {
        return (
            <div>
                <div>
                    <Pop
                        urlAddress={this.state.urlAddress}
                        handleSubmit={this.handleSubmit.bind(this)} />
                </div>
                <div>
                    <RenderItems
                        urlAddress={this.state.urlAddress}
                        toggleUrl={this.toggleUrl.bind(this)}
                        deleteUrlAddress={this.deleteUrlAddress.bind(this)}
                    />
                    

                </div>
                
            </div>
        )
    }
}