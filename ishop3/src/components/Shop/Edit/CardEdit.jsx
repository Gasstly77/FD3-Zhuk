import React from 'react';
import PropTypes from 'prop-types';
import './CardEdit.css';



class CardEdit extends React.Component {

    static propTypes = {
        goods: PropTypes.shape({
              code: PropTypes.number.isRequired,
              count: PropTypes.number.isRequired,
              price: PropTypes.number.isRequired,
              productname: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired
     }),
        cbSaveChange: PropTypes.func,
        cbEditCancel: PropTypes.func,
        cbDisableButtons: PropTypes.func
    };

    state = {
        currName:this.props.goods.productname,
        currPrice:this.props.goods.price,
        currCount:this.props.goods.count,
        currUrl:this.props.goods.url,
        productnameErr:"",
        priceErr:"",
        countErr:"",
        urlErr:"",
        valid:true
    };

    changeName = (eo) => {
        this.setState({currName:eo.target.value},this.validate);
    };

    changePrice = (eo) => {
        this.setState({currPrice:parseFloat(eo.target.value)},this.validate);
    };


    changeCount = (eo) => {
        this.setState({currCount:parseFloat(eo.target.value)},this.validate);
    };


    changeUrl = (eo) => {
        this.setState({currUrl:eo.target.value},this.validate);
    };

    saveProduct = (eo) => {
        this.props.cbSaveChange(this.props.goods.code,{productname:this.state.currName, price:this.state.currPrice, count:this.state.currCount, url:this.state.currUrl})
    };

    validate = () => {
        let productnameErr="", priceErr="", countErr="", urlErr="",valid;
        if (this.state.currName.length<3)
            productnameErr="название слишком короткое";
        if (isNaN(this.state.currPrice) || (this.state.currPrice) <= 0)
            priceErr="введите стоимость";
        if (isNaN(this.state.currCount) || (this.state.currCount) < 0)
            countErr="укажите количество";
        if (this.state.currUrl.length<0 || !this.state.currUrl.includes('http'))
            urlErr="неверный url изображения";
        if (this.props.productname !== this.state.currName || this.props.price !== this.state.price || this.props.count !== this.state.count || this.props.url !== this.state.url )
            this.props.cbDisableButtons();
        valid=(!productnameErr)&& (!priceErr)&& (!countErr)&& (!urlErr);    
        this.setState({productnameErr, priceErr, countErr, urlErr, valid});

    };

    cancel = () => {
        this.props.cbEditCancel()
    };

    render () {

        return (
            
            <table className='CardEdit'>
                <tbody>
                    <tr>
                        <td>Редактирование товара</td>
                    </tr>
                    <tr>
                        <td>
                           Название:
                        </td>
                        <td>
                            <input value={this.state.currName} type="text" onChange={this.changeName} autoComplete="off" />
                        </td>
                        <td className='validerror'>
                            {this.state.productnameErr}
                        </td>
                    </tr>
                    <tr>
                        <td>
                           Цена:
                        </td>
                        <td>
                            <input value={this.state.currPrice} type="number" onChange={this.changePrice} autoComplete="off" />
                        </td>
                        <td className='validerror'>
                            {this.state.priceErr}
                        </td>
                    </tr>
                    <tr>
                        <td>
                           Количество:
                        </td>
                        <td>
                            <input value={this.state.currCount} type="number" onChange={this.changeCount} autoComplete="off" />
                        </td>
                        <td className='validerror'>
                            {this.state.countErr}
                        </td>
                    </tr>
                    <tr>
                        <td>
                           Ссылка на изображение:
                        </td>
                        <td>
                            <input value={this.state.currUrl} type="text" onChange={this.changeUrl} autoComplete="off" />
                        </td>
                        <td className='validerror'>
                            {this.state.urlErr}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" disabled={!this.state.valid} value="Сохранить" onClick={this.saveProduct} />
                        </td>
                        <td>
                            <input type="button" value="отмена" onClick={this.cancel}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        )

    }

};

export default CardEdit;