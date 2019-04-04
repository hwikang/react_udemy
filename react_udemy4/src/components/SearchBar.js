import React from 'react';

class SearchBar extends React.Component{
    state ={
        term: ''
    }
   
    onFormSubmit =(e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term) //class based 일떈 this.props
        console.log(this.state.term)     //여기서 this 쓰려면 바인딩이필요함 arrow 펑션은 자동적으로 바인드해줌 , this 는 이컴포넌트임을
    }
    //this
    // 호출하는 방법에의해 결정된다 , 개의치 않게 하려면 bind 해야함
    // 호출한놈 === this 누가 실행했냐
    // Cannot read property 'state' of undefined 라는 메시지는 
    // undefined.state 를 콘솔에 찍었을떄와 같다.
    // this 는 이 컴포넌트를말한다. 그래서 this.함수이름, this.state 같이 쓸수있다 
    // 함수를 부른것 함수를 부른객체가 this가 된다! 위의 console log 에러는 this가 
    // 고치는법 - 생성자생성후 그안에 바인드 해서 오버라이트
    //         2. arrow function
    render(){
        return(
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image search</label>
                    <input type="text" value={this.state.term} onChange={(e)=> this.setState({term:e.target.value})}/>
                </div>
            </form> 
        </div>
        );
    }
   
}

export default SearchBar;