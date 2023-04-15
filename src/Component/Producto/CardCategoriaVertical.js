import { Component } from "react";
import imagCategoriaV from '../../Assets/Images/shop/category/category-3.jpg'

class CardCategoriaVertical extends Component{
    render() {
        return (
            <div className="category-box category-box-2">
                <a href="Ecommerce/CatalogoProductos">
                    <img src={imagCategoriaV} alt="" />
                    <div className="content">
                        <h3>Peluches Grandes</h3>
                        <p>Special Design Comes First</p>
                    </div>
                </a>
            </div>           
        );
    }

}

export default CardCategoriaVertical;