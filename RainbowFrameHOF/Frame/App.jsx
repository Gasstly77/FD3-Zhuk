import React from 'react';
import { withRainbowFrame } from './withRainbowFrame.jsx'
import DoubleButton from './DoubleButton.jsx'

const style = {
    width: 700,
    margin: 'auto',
    textAlign: 'center',
}

class App extends React.Component {

    render() {
        let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];

        let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

        return (
            <div style={style}>
                <DoubleButton caption1="однажды" caption2="пору" cbPressed={num => alert(num)} >в студёную зимнюю</DoubleButton>
                <br />
                <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={num => alert(num)}>
                    вышел, был сильный
                </FramedDoubleButton>
            </div>

        );
    }
}

export default App;