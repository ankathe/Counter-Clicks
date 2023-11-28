import React from 'react';

function Counter({numClicks}){
    return(
        <div className="counter">
            {numClicks}
        </div>
    )
}

export default Counter;