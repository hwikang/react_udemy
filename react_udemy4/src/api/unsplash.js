
import axios from 'axios';

//
export default axios.create({    //            
    
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 231c7b80b76a3597d5f3535d7d1992a4307791fe02b8f2b138c282a0d75ccae1'
    }
})