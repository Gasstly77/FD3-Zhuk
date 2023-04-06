import React from 'react';
import PropTypes from 'prop-types';


class ProductList extends React.Component {
  
    static propTypes = {
              code: PropTypes.number.isRequired,
              count: PropTypes.number.isRequired,
              price: PropTypes.number.isRequired,
              productname: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired,
              cbDeleteProduct: PropTypes.func,
              cbSetActiveMod: PropTypes.func,
              cbSetEditMod: PropTypes.func,
              isActive: PropTypes.number,
              disableButtons: PropTypes.number,
      };
  
      clicked = () => {
        this.props.cbSetActiveMod(this.props.code)
      };
  
       deleteElement = (e) => {
        e.stopPropagation();        
        const isDelete = window.confirm("Вы действительно хотите удалить?");
        isDelete && this.props.cbDeleteProduct(this.props.code);
      };

      editElement = (e) => {
        e.stopPropagation();
        this.props.cbSetEditMod(this.props.code)

      };
     
      render() {
  
        return ( 
            
            <tr className={(this.props.isActive === this.props.code)? 'Product Active' : 'Product'} onClick={this.props.disableButtons==0 ? this.clicked : undefined}>
                <td className= 'goodsImg'>
                    <img src = {this.props.url} alt = {this.props.productname} />
                </td>
                <td>
                    {this.props.productname}
                </td> 
                <td>
                    {`${this.props.price} руб`} 
                </td>
                <td>
                    {`${this.props.count} шт`}
                </td>
                <td>
                    <button  disabled={this.props.disableButtons==1} onClick={this.deleteElement}>
                        Удалить
                    </button>
                </td>
                <td>
                    <button disabled={this.props.disableButtons==1} onClick={this.editElement}>
                        Редактировать
                    </button>
                </td>
            </tr>
        );
    
    }
                
};

export default ProductList;