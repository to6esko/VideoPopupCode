import React from 'react';
import HeaderComments from './headerComments';


export default class NavVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deleteVideo: false }
    }

    addUrl(props) {
        //let urls = this.props.urlAddress;
        const { url } = this.props;
        //const {url} = this.props;
        console.log(url);

        let rexg = /(([a-zA-Z0-9\-_])+$)(?:&feature=related)?(?:[\w\-]{0})?/g
        let matches = url.match(rexg);

        let newUrl = "https://www.youtube.com/embed/" + matches;
        console.log('newUrl: ' + newUrl);
        const deleteVideo = this.state.deleteVideo;
        if (deleteVideo) {
            return null;
        } else {
            return (
                <div className="video-container">
                    <iframe src={`${newUrl}`} frameborder="0" allowfullscreen></iframe>
                </div>
            )
        }
    }

    handleDeleteClick() {
        this.setState(prevState => ({
            deleteVideo: !prevState.deleteVideo,
            deleteVideo: true
        }));
    }
    addImg() {
        const deleteVideo = this.state.deleteVideo;
        if (!deleteVideo) {
            return null;
        } else {
            return (
                <div className="video" >
                    <img src='img/video.jpg' alt="video" />
                </div>
            )
        }
    }
    showPage(props) {
        const { showPop } = this.props;
        if (!showPop) {
            return null;
        } else {
            return (
                <div>
                    <div className="backgroundApp">
                        <div>
                            <a href="#" className="close-icon"></a>
                        </div>
                        <div>
                            {this.addUrl()}
                            {this.addImg()}
                            {/*<NavVideo />*/}
                            <div className="btn">
                                <div className="btn-right">
                                    <ul>
                                        <li><img src="img/btn-edit.jpg" alt="edit" /></li>
                                        <li><img onClick={this.handleDeleteClick.bind(this)} src="img/btn-delete.jpg" alt="delete" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <HeaderComments />
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.showPage()}
            </div>
        )
    }
}