import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array,
    };

    render() {

            let phrase=this.props.children;
            for ( let color of this.props.colors) {
                phrase=<div style={{border:`solid 5px ${color}`}}>{phrase}</div>
            }
            return phrase;
    }
}

export default RainbowFrame;