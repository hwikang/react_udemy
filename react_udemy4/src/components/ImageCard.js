import React from 'react'

class ImageCard extends React.Component{
    constructor(props){
        super(props)

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.imageRef) //이미지의 정보들이있음
        console.log(this.imageRef.current.clientHeight)
    }

    render(){
        const {alt_description,urls} = this.props.image;  //이렇게 가져올수있다!!!
        return(
            <div>
                <img alt={alt_description}
                    src ={urls.regular}
                    ref={this.imageRef}
                
                />
            </div>
        )
    }
}

export default ImageCard;