import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";


const DishDetail = (props) => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.dish.image} alt={props.dish.name} />
        <CardBody>
          <CardTitle> {props.dish.name}</CardTitle>
          <CardText>
            <p>{props.dish.description}</p>
            <p>Price :{props.dish.price}Tk Only</p>
          </CardText>
          <hr style ={{border: '2px solid green'}}/>
            
          <LoadComments  comments={props.dish.comments} />

        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
