import React from 'react';
import PropTypes from 'prop-types';

import './ShopList.css';

import ProductList from './Elements/ProductList.jsx';
import InfoCard from './Information/InfoCard.jsx';
import CardEdit from './Edit/CardEdit.jsx';
import CardAdd from './Add/CardAdd.jsx';




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
            cardMode:0, // 0 - нет выделения, 1-просмотр, 2- редактирование, 3-новый продукт
            disableButtons:0 // 0 - кнопки активны, 1- кнопки не доступны
        };
  
      setActiveMod = (code) => {
        this.setState({isActive:code});
        this.setState({cardMode:1});
        this.setState({selected:true})
      };
  
      /*deleteProduct = (code) => {
        this.setState( {goodsArr:this.state.goodsArr.filter((el) => el.code !== code)});
        this.setState({cardMode:0});
      }; */

      deleteProduct = (code) => {
        let deleteIndex = goodsArr.findIndex(product => product.code == code);
        this.setState( {goodsArr:this.state.goodsArr.splice(deleteIndex)});
        this.setState({cardMode:0});
      };

      deleteProduct = (code) => {
        this.setState( {goodsArr:this.state.goodsArr.filter((el) => el.code !== code)});
        this.setState({cardMode:0});
      };

      SetEditMod = (code) => {
        this.setState({isActive:code});
        this.setState({cardMode:2});
        this.setState({selected:true})
      };

      saveChange = (code, newProduct) => {
        let goodsArr=[...this.state.goodsArr];
        let goodsIndex = goodsArr.findIndex(product => product.code == code);
        if (goodsIndex ==-1)
         return;
        let changedProduct={...goodsArr[goodsIndex]};
        changedProduct.productname = newProduct.productname;
        changedProduct.price = newProduct.price;
        changedProduct.count = newProduct.count;
        changedProduct.url = newProduct.url;
        goodsArr[goodsIndex] = changedProduct;
        this.setState({goodsArr})
        this.setState({disableButtons:0});        
      };

      editCancel = () => {
        this.setState({cardMode:0});
        this.setState({disableButtons:0});
      };

      disableButtons = () => {
        this.setState({disableButtons:1});
      };

      addMode = () => {
        this.setState({disableButtons:1});
        this.setState({cardMode:3});
        this.setState({isActive:null});
      };

      addProduct = (addedProduct) => {
        let goodsArr=[...this.state.goodsArr];
        let added={};
        let newCode = (goodsArr.length == 0) ? 0 : goodsArr.reduce((acc, curr) => acc.code > curr.code ? acc : curr );
        added.code = newCode.code+1;
        added.productname = addedProduct.productname;
        added.price = addedProduct.price;
        added.count = addedProduct.count;
        added.url = addedProduct.url;
        goodsArr.push(added);
        this.setState({goodsArr});
        this.setState({disableButtons:0});
        this.setState({cardMode:0});
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
                    disableButtons={this.state.disableButtons}
                    isActive={this.state.isActive}
                    cbSetActiveMod={this.setActiveMod}
                    cbSetEditMod={this.SetEditMod}
                    cbDeleteProduct={this.deleteProduct}
                />
            )
            });
  
        const theadArr = ["URL фотографии", "Название", "Цена", "Количество", "Удаление ", "Редактирование"].map((i) => {
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
                <table className='NewProductButton'>
                    <tbody>
                        <tr>
                            <td>
                                <button  disabled={this.props.disableButtons==1} onClick={(this.addMode)}>
                                    Новый продукт
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                {this.state.cardMode===1 && this.state.selected && 
                <InfoCard goods={activeProduct} />
                }
                {this.state.cardMode===2 && this.state.selected &&
                <CardEdit 
                    cbSaveChange={this.saveChange}
                    cbEditCancel={this.editCancel}
                    cbDisableButtons={this.disableButtons}
                    key={this.state.isActive} goods={activeProduct} />
                }
                {this.state.cardMode===3 &&
                <CardAdd 
                    cbAddProduct={this.addProduct}
                    cbEditCancel={this.editCancel}
                    cbDisableButtons={this.disableButtons}
                    key={this.state.isActive} goods={activeProduct} />
                }
                
            </div>
        
       );
    }
  
    };

    export default ShopList;