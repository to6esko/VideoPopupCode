import React from 'react';
import FooterComments from './footerComments';


const comment = [
    {
        comments: ''
    }
];
function AddText(props) {
    return <div>{props.comments}</div>
}
export default class HeaderComments extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            showEnterButton: false,
            showDeleteButton: false,
            comment
        };
    }
    createComment(comments) {
        this.state.comment.push({ comments })
        this.setState({ comment: this.state.comment });
    }
   handleEnterClick() {
        this.setState({
            showEnterButton: true
        });
    }
    handleDeleteClick() {
        this.setState({
            showDeleteButton: true
        })
   }

   deleteComment(id) {
        _.remove(this.state.comment, todo =>
            todo.id === id);
        this.setState({ comment: this.state.comment });
    } 
   renderComments() {
        return _.map(this.state.comment, (todo, i) =>
            <AddText key={i} {...todo} />)
    } 
    /*
    onEnterClik() {
        this.setState(prevState => ({
            showEnterButton: !prevState.showEnterButton
        }));
    }
    */
    onEnterClick(event) {
        event.preventDefault();
        const createText = this.refs.createText;
        const value = createText.value;
        this.createComment(value);
        this.refs.createText.value = "";
    }
    onDeleteClick() {
        this.setState(prevState => ({
            showDeleteButton: !prevState.showDeleteButton,
            showEnterButton: false
        }));
    }
    enterButton(props) {
        const showEnterButton = this.state.showEnterButton;
        if (!showEnterButton) {
            return null;
        } else {
            return (
                <div>
                    <form>
                    <div onClick={this.handleDeleteClick.bind(this)}>
                        <button className="enter" onClick={this.onEnterClick.bind(this)}>Enter</button>
                    </div>
                    </form>    
                    <div>
                        {this.deleteButton()}
                    </div>
                </div>
            )

        }

    } 
   deleteButton(props) {
        const showDeleteButton = this.state.showDeleteButton;
        if (!showDeleteButton) {
            return null;
        } else {
            return (
                <div>
                    <div className="textBox">
                        <img src="img/snimka.jpg" alt="Stoyan" />
                        <div className="text">
                            <img src="img/stoqn.jpg" alt="Stoqn" />
                        </div>
                        <div className="gradient">
                            <img src="img/gradient.jpg" alt="gradient" />

                            <div className="commentText">
                                {this.renderComments()}
                                {/*<img src="img/text.jpg" alt="text" width="790" height="72" />*/}
                            </div>
                            <div onClick={this.onDeleteClick.bind(this)}>
                                <button className="delete" onClick={this.deleteComment.bind(this, this.props.comments)}>Delete</button>
                            </div>
                            <div>
                                <FooterComments />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="commentBox" >
                    <input onChange={this.handleEnterClick.bind(this)} ref="createText" type="text" className="comment" placeholder="comment..." />
                    <div className="border-bottom" />
                    {this.enterButton()}
                </div>
            </div>
        )
    }
}