import React from 'react';

const progressbar = ({value, max}) => {
    return (
        <div>
            <progress value={value} max={max}/>
        </div>
    );
};


export default progressbar;