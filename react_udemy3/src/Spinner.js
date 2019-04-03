import React from 'react';

const Spinner = (props) =>{
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

//message 를 지정해주지않으면 이거로 사용함
Spinner.defaultProps ={
    message: 'Loading...'
}

export default Spinner;