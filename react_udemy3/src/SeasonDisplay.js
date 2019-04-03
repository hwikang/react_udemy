import './seasonDisplay.css';
import React from 'react'

const SeasonDisplay = (props) =>{

    const season = getSeason(props.lat,new Date().getMonth)
    //console.log(season)
   const {text,iconName} = seasonConfig[season]  // object를 이런식으로 부를수있음
    //object 에서 text icon 각각 빼가서 배열에 넣어줌

    return (
        //component 이름과 root div의 클래스네임을 맞춘다.
        <div className={`season-display ${season}`}>
          <i className={`icon massive ${iconName} icon-left`}></i>
            <h1>{text}</h1>
          <i className={`icon massive ${iconName} icon-right`}></i>
        </div>
    )
}

const seasonConfig = {
    summer : {
        text : 'lets hit the beach',
        iconName : 'sun outline'
    },
    winter : {
        text: 'burr.. it is cold',
        iconName : 'snowflake'
    }
}

const getSeason = (lat,month) =>{
    let season = ''
    if(month>2 && month<9){
        lat>0 ? season='summmer' : season='winter'
    }else{
        lat>0 ? season='winter' : season='summer'
    }
    return season
}




export default SeasonDisplay