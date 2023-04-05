import React from 'react';
import PropTypes from 'prop-types';
import './InfoCard.css';


class InfoCard extends React.Component {
  
    static propTypes = {
        goods: PropTypes.shape({
              code: PropTypes.number.isRequired,
              count: PropTypes.number.isRequired,
              price: PropTypes.number.isRequired,
              productname: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired,
     })
    };

    render() {

        return (
            
            <table className='InfoCard'>
                <tbody>
                    <tr>
                        <td>Информация</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={this.props.goods.url} alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {`Название: ${this.props.goods.productname}`}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {`Цена: ${this.props.goods.price} руб`}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {`Количество: ${this.props.goods.count} шт`}
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
};

export default InfoCard;