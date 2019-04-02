import React from 'react';
import ReactDOM from 'react-dom';
//state가 업데이트되면 rerender한다

class App extends React.Component{
    constructor(props){ //reactcomponent 오버라이딩에의해 존재
        //제일먼저 실행된다.
        super(props); //ReactComponent , 꼭 해야함,첫번쨰

        this.state ={
            lat:null
        }

    }

    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),  //성공시
            (err) => console.log(err)  //실패시
    
        )
        return <div>Latitude: </div>
    }
}
ReactDOM.render(<App/>, document.querySelector("#root"))