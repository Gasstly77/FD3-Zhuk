import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

    static propTypes = {
        text: PropTypes.string,
    };

    state = {
        textArr:null,
    }

    componentDidMount() {
        this.modifyText();
    }

    modifyText = () => {
        
        const lines = this.props.text.split(/<br *?\/?>/)
        
        let textArr=[];
        for ( let i=0; i<lines.length; i++ ) { 
                if ( i )
                textArr.push(<br key={i}  />);
            textArr.push(lines[i])            
        }
        this.setState({textArr:textArr})
    }

    render() {
        
        return (
            <div className='br2jsx'>
                {this.state.textArr}
            </div>
        );

}

}

export default BR2JSX;