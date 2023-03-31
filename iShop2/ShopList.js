const ShopList = React.createClass({

  displayName: 'ShopList',

  getDefaultProps: function() {
      return {
          shopName: "Неверное наименование магазина",
          goodsArr: [{code:0, productname:'нет товара', price: 'нет цены', url: 'изображение не найдено', counter: 'нет на складе' }]
      }
  },

  propTypes: {
      shopName: React.PropTypes.string.isRequired,
      goods:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number.isRequired,
          count: React.PropTypes.number.isRequired,
          price: React.PropTypes.number.isRequired,
          productname: React.PropTypes.string.isRequired,
          url: React.PropTypes.string.isRequired,
        })
      )
  
    },

    getInitialState: function() {
      return { 
          isActive: null,
          goodsArr:this.props.goodsArr
      };
    },

    setActiveMod: function(code) {
      this.setState({isActive:code});
    },

    deleteProduct: function(code) {
      this.setState( {goodsArr:this.state.goodsArr.filter((el) => el.code !== code)});
    },

    
  render: function (){

      const goods = this.state.goodsArr.map( (i) => 
          React.createElement(ProductList, 
              {key:i.code,productname:i.productname,code:i.code,count:i.count,
              price:i.price,url:i.url,
              isActive:this.state.isActive,
              cbSetActiveMod:this.setActiveMod,
              cbDeleteProduct:this.deleteProduct,}
          )
      );

      const theadArr = ["URL фотографии", "Название", "Цена", "Количество", "Удаление "].map((i) => {
          return React.DOM.td({key: i, className: 'GoodsThead' }, i);
      })

     return React.DOM.table({ className: 'ShopList' },
      React.DOM.caption({ className: 'ShopCaption' }, this.props.shopName),
      React.DOM.thead({ className: 'ShopName' },
      React.DOM.tr({}, theadArr)),
      React.DOM.tbody({}, goods),
     );
  },

  });
