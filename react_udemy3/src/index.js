import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
//state가 업데이트되면 rerender한다

class App extends React.Component{
    state ={
        lat:null, errMessage :''
    }
    //life cycle
    // constructor
    //render
    //componentDidmount - 1번 initial data등 처음필요한거 set up 할떄  -> render
            //여기에 데이터를 떄려넣는게 좋다
    //componentdidupdate - wait for update , rerender
    //componentwillunmount
    // componentDidMount(){
    //     console.log('rendered to the screen');
    // }

    // componentDidUpdate(){
    //     console.log('rerendered')
    // }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat:position.coords.latitude}),  //성공시
            (err) => this.setState({ errMessage: err.message })
               
        );
    }
    renderContent(){
        if(this.state.errMessage && !this.state.lat ){
            return <div>Error: {this.state.errMessage}</div>
 
        }else if(!this.state.errMessage && this.state.lat ){
            return <SeasonDisplay lat={this.state.lat}/>
            
        }else{
            return <Spinner message="Please allow your location"/>
        }
    }

    //render 는 자주 사용됨 , 1번쓸거는 궅이안넣어도됨
    render(){
       return(
           <div className="border red">
            {this.renderContent()}
           </div>
       )
    }
}
ReactDOM.render(<App/>, document.querySelector("#root"))


