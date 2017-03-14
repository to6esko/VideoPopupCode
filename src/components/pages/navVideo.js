import React from 'react';

export default class NavVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state={showPage:false}
   }
    
    addUrl(props) {
        //let urls = this.props.urlAddress;
        const { url} = this.props;
       //const {url} = this.props;
       console.log(url);
       
        let rexg = /(([a-zA-Z0-9\-_])+$)(?:&feature=related)?(?:[\w\-]{0})?/g
        let matches = url.match(rexg);

        let newUrl = "https://www.youtube.com/embed/" + matches;
        console.log('newUrl: ' + newUrl);
        const { showPop } = this.props;
        if (!showPop) {
            return null;
        } else {
            return (
                <div className="video-container">
                    <iframe src={`${newUrl}`} frameborder="0" allowfullscreen></iframe>
                </div>
            )
        }
    }    
    showPage(props) {
        const {showPop} = this.props;
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
                            {/*<NavVideo />*/}
                            <div className="btn">
                                <div className="btn-right">
                                    <ul>
                                        <li><img src="img/btn-edit.jpg" alt="edit" /></li>

                                        <div>
                                            <li><img src="img/btn-delete.jpg" alt="delete" /></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/*<RenderItemsNav />*/}
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