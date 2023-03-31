const ProductList = React.createClass({

    displayName: 'ProductList',

    propTypes: {
              code: React.PropTypes.number.isRequired,
              count: React.PropTypes.number.isRequired,
              price: React.PropTypes.number.isRequired,
              productname: React.PropTypes.string.isRequired,
              url: React.PropTypes.string.isRequired,
              cbDeleteProduct:React.PropTypes.func,
              cbSetActiveMod:React.PropTypes.func,
              isActive:React.PropTypes.number,
      },

      clicked: function(){
        this.props.cbSetActiveMod(this.props.code)
      },

       deleteElement: function(e) {
        e.stopPropagation();        
        const isDelete = window.confirm("Вы действительно хотите удалить?");
        isDelete && this.props.cbDeleteProduct(this.props.code);
      },
     
      render: function() {

        return React.DOM.tr (
            {className:(this.props.isActive === this.props.code)? 'Product Active' : 'Product',
            onClick:this.clicked},
            React.DOM.td({ className: 'goodsImg' },
                React.DOM.img({ src: this.props.url, alt: this.props.productname })),
            React.DOM.td({}, this.props.productname),
            React.DOM.td({}, `${this.props.price} руб`),
            React.DOM.td({}, `${this.props.count} шт`),
            React.DOM.td({ className: 'inputButton' },
                React.DOM.input( {type:'button', value:'удалить', onClick:this.deleteElement} )),
        )
        }
                
    }
    
    );