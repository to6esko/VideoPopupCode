import React from 'react';
import _ from 'lodash';

import NavVideo from './navVideo';


export default class RenderItems extends React.Component{
    
    renderItems() {
        const props = _.omit(this.props, 'urlAddress');
        return _.map(this.props.urlAddress, (todo, i) =>
            <div key={i}>    
                <NavVideo  {...todo} {...props} />
            </div>    
        )
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}