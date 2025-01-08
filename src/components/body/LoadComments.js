import React from "react";
import dateFormat from 'dateformat';


const LoadComments = props =>{


    return(
        props.comments.map( comment =>{
           
         return (
            <div key = {props.id}>
                <p style={{color: "green"}}>Reviews</p>
                <hr/>
               <h5>{comment.author}</h5>
               <p> {comment.comment}</p>
               <p>{dateFormat(comment.date, "dd-mm-yyyy, h:MM:ss TT")}</p>
              <hr style ={{border: '0.5px solid black'}}/>
            </div>
         );

        })
    );
}

export default  LoadComments;