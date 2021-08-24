import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {    
            selectedDish: null
        }
        console.log('Menu Component constructer is invoked')
    }

    componentDidMount(){
        console.log('Menu Component componentDidMount')
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }
// If you click a card 

    render(){
// The Cards
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
               
                     
                            <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        console.log('Menu Component constructer is invoked')

        return(
             /* This is where if the dish you clicked is not null, it will shows the details
               {this.renderDish(this.state.selectedDish)} = if you click the cards above, this info will show about the dish below */ 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                
                <div className="row"> 
                <DishDetail dish={this.state.selectedDish} />
                </div>
            </div>
            
        );
    }

}

export default Menu;