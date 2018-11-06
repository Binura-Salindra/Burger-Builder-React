import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) =>{

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return (<li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });

    return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients :</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType={"Danger"} clicked={props.purchaseClose}>CANCEL</Button>
            <Button btnType={"Success"} clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default orderSummary;