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
        
        const textArr = lines.map((el, id) => {
            return (
                <React.Fragment key={id}>
                    {id !== 0 && <br />} {el}
                </React.Fragment>
                    )
                })
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