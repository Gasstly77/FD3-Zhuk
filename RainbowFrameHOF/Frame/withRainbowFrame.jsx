import React from 'react';


export const withRainbowFrame = (colors) => (Fragment) => ({ ...props }) => {

    let phrase=<Fragment {...props}/>;
            for ( let color of colors) {
                phrase=<div style={{border:`solid 5px ${color}`}}>{phrase}</div>
            }
            return phrase;
};