import React from 'react';

const PhotoContainer=({title,number})=>{
    const pictures=[];
    const byTwo=number/2;
    let currentNumber=1;
for (let index = 0; index < 2; index++) {
    let index2=1
    const picture=[];
    while(index2<=byTwo){

        picture.push(<img loading="lazy" key={currentNumber} src={window.location.origin+`/images/${title}/${title+' ('+currentNumber+')'}.jpg`} alt={title+'('+currentNumber+')'}/>);
        currentNumber++;
        index2++;
    }   
    
    pictures.push(picture)
} 

    return(
    <>
    <div className="title" key={title} id={title}> <span>B10💙</span></div>
    <div className="container">
        {

                 pictures.map((picture,index)=> (
                    <div className="column" id={title}>
                        {
                            picture.map((item,index2)=>item)
                        }
                 </div>
                 )) 
            
        }
    </div>
    </>
    );
}

export default PhotoContainer;