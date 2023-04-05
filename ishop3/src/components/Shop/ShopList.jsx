import React from 'react';
import PropTypes from 'prop-types';

import './ShopList.css';

import ProductList from './Elements/ProductList.jsx';
import InfoCard from 'C:/Users/Gastly/Documents/Learning/HomeTasks/FD3-Zhuk/ishop3/src/components/Information/InfoCard.jsx';



class ShopList extends React.Component {

  
    DefaultProps = {
        shopName: "Неверное наименование магазина",
         goodsArr: [{code:0, productname:'нет товара', price: 'нет цены', url: 'изображение не найдено', counter: 'нет на складе' }]
        };
  
    static propTypes = {
            shopName: PropTypes.string.isRequired,
            goods: PropTypes.arrayOf(PropTypes.shape({
              code: PropTypes.number,
              productname: PropTypes.string,
              price: PropTypes.number, 
              url: PropTypes.string,
              count: PropTypes.number
            }))
          };
  
      state = {
            selected:false,
            isActive: null,
            goodsArr:this.props.goodsArr,
            cardMode:0 // 0 - нет выделения, 1-просмотр, 2- редактирование, 3-удаление
        };
  
      setActiveMod = (code) => {
        this.setState({isActive:code});
        this.setState({cardMode:1});
        this.setState({selected:true})
      };
  
      deleteProduct = (code) => {
        console.log(code)
        this.setState( {goodsArr:this.state.goodsArr.filter((el) => el.code !== code)});
      };
  
      
    render() {

        const [activeProduct] = this.state.goodsArr.filter((ap) => ap.code === this.state.isActive)
  
        const goods = this.state.goodsArr.map( (i) => {
            return (
                <ProductList
                    key={i.code}
                    productname={i.productname}
                    code={i.code}
                    count={i.count}
                    price={i.price}
                    url={i.url}
                    isActive={this.state.isActive}
                    cbSetActiveMod={this.setActiveMod}
                    cbDeleteProduct={this.deleteProduct}
                />
            )
            });
  
        const theadArr = ["URL фотографии", "Название", "Цена", "Количество", "Удаление "].map((i) => {
            return <td key = {i} className = 'GoodsThead' >{i}</td>
        });
  
       return (
            <div className='container'>
                < table className='ShopList' >
                    <caption className= 'ShopCaption'>
                        {this.props.shopName}
                    </caption>
                    <thead className= 'ShopName'>
                        <tr>
                            {theadArr}
                        </tr>
                    </thead>
                    <tbody>
                        {goods}
                    </tbody>   
                </table>
                {this.state.cardMode===1 && this.state.selected && 
                <InfoCard goods={activeProduct} />
                }    
            </div>
        
       );
    }
  
    };

    export default ShopList;