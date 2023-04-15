import { Component } from "react";
import { Link } from "react-router-dom";
import imagCategoriaH from '../../Assets/Images/shop/category/category-1.jpg'

class CardCategoriaHorizontal extends Component{
    render() {
        return (
            <div className="category-box">
                <Link to={'/catalogo'}>
                    <img src={imagCategoriaH} alt="" />
                    <div className="content">
                        <h3>Peluches Medianos</h3>
                        <p>Shop New Season Clothing</p>
                    </div>
                </Link>
            </div>                      
        );
    }

}

export default CardCategoriaHorizontal;