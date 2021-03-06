import React from 'react';

export default class Pop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPop: true,
            showEnter: false
        }
    }

    validateInput(event) {
        let valueInput = event.target.value;
        let message = 'Please "Paste" your You Tube address!!!'
        if (valueInput.length >= 3 && valueInput.length <= 4) {
            return alert(message);
        }
    }

    
    handlePopClick() {
        this.setState(prevState => ({
            showPop: !prevState.showPop
        }));
    }
    handleEnterClick() {
        this.setState(prevState => ({
            showEnter: !prevState.showEnter
        }));
    }
    
    getUrl(event) {
        event.preventDefault();
        let urlValue = this.refs.urlValue;
        let value = urlValue.value;
        this.props.handleSubmit(value);
        this.refs.urlValue.value = "";
    }
    
    
    closeButton() {
        const showEnter = this.state.showEnter;
        if (!showEnter) {
            return null;
        } else {
            return (
                <div onClick={this.handleEnterClick.bind(this)} >
                        <button onClick={this.getUrl.bind(this)} className="pop-btn">Enter</button>
                </div>
            )
        }
    }

    enterButton(props) {
        const showPop = this.state.showPop;
        if (!showPop) {
            return null;
        } else {
            return (
                <div>
                    <div className="pop" >
                        <form className="pop-form">
                            <div onChange={this.validateInput.bind(this)}>
                                <input value={this.props.value} onPaste={this.handleEnterClick.bind(this)} ref="urlValue" type="text" className="pop-input" placeholder="Enter your You Tube address..." />
                            </div>
                            <div onClick={this.handlePopClick.bind(this)}>
                                {this.closeButton()}
                            </div>   
                        </form>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.enterButton()}
            </div>
        )
    }
}