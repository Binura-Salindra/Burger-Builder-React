import React, {Component} from 'react';
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICE = {
    salad:0.5,
    cheese: 0.6,
    meat: 1.4,
    bacon: 0.6
};

class BurgerBuilder extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchasableState : false,
        purchasing : false
    };

    updatePurchasableState (ingredients){
        const sum = Object.keys(ingredients)
            .map(igKey =>{
               return ingredients[igKey];
            })
            .reduce((sum,el)=> {
                return sum + el;
            },0);
        this.setState({purchasableState: sum > 0})
    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    };

    purchaseCloseHandler = () =>{
        this.setState({purchasing : false})
    };

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice:newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchasableState(updatedIngredients);

    };
    removeIngredientHandler = (type) =>{

        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice:newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchasableState(updatedIngredients);
    };

    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return(
            <Auxiliary>
                <Modal show ={this.state.purchasing} modalClose={this.purchaseCloseHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded ={this.addIngredientHandler}
                    ingredientRemove ={this.removeIngredientHandler}
                    disabled = {disableInfo}
                    purchasable ={this.state.purchasableState}
                    ordered ={this.purchaseHandler}
                    price ={this.state.totalPrice}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;