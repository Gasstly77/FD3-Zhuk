const ShopList = React.createClass({

    displayName: 'ShopList',

    getDefaultProps: function() {
        return {
            shopName: "Неверное наименование магазина",
            goodsArr: [{id:0, name:'нет товара', price: 'нет цены', url: 'изображение не найдено', counter: 'нет на складе' }]
        }
    },

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        goods:React.PropTypes.arrayOf(
          React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            count: React.PropTypes.number.isRequired,
            price: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired,
          })
        )
    
      },

    render: function (){

        const goods = this.props.goodsArr.map((i) => {
            return React.DOM.tr({ key: i.id, className: 'Product' },
                React.DOM.td({ className: 'goodsImg' },
                    React.DOM.img({ src: i.url, alt: i.name },)),
                React.DOM.td({}, i.name),
                React.DOM.td({}, `${i.price} руб`),
                React.DOM.td({}, `${i.count} шт`),
            );
        })
        const theadArr = ["URL фотографии", "Название", "Цена", "Количество"].map((i) => {
            return React.DOM.td({ key: i, className: 'GoodsThead' }, i);
        })

        return React.DOM.table({ className: 'ShopList' },
            React.DOM.caption({ className: 'ShopCaption' }, this.props.shopName),
            React.DOM.thead({ className: 'ShopName' },
                React.DOM.tr({}, theadArr)),
            React.DOM.tbody({}, goods),
        );
    },

    });