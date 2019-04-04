import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'

class App extends React.Component{
    state ={
        images : []   //빈어레이가 null 보다 낳음
    }

     onSearchSubmit = async (term)=> {
        //console.log(term);
        const response = await unsplash.get('/search/photos',{
            params : { query:term } ,

        });

       console.log(this)  //searchbar 가 함수를 실행시켯기에  this 가 됨
        this.setState({
            images: response.data.results
        })
        
    }
    render(){
    return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found : {this.state.images.length} images
        </div>
    ) 
    }
}

export default App;