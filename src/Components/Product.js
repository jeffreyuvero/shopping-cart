import React from 'react'
import {connect} from 'react-redux'
import { getProduct } from '../Action/getProduct';


class Product extends React.Component{

    componentDidMount(){
        this.props.getProduct(); 
    }


    componentDidUpdate = (prevprops, nextprops) => {
        const { products } = this.props; 
        console.log(products)
    }
    render(){
        
        return(
            <>
                Product
                {
                    products == undefined? 
                        <div></div>
                    :
                    products.map((prod, index) => {
                        <p>{prod.title}</p>
                    })
                }
            </>
        )
    }
}



const mapStateToProps = ( state ) => {
    return{
        products: state.products
    } 
}
export default connect(mapStateToProps, {getProduct})(Product); 