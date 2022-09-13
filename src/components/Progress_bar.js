import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        position: "sticky",
        top: 0,
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
      }
      
      const Childdiv = {
        position: "sticky",
        top: 0,
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        textAlign: 'right'
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
      </div>
    </div>
    )
}
  
export default Progress_bar;
