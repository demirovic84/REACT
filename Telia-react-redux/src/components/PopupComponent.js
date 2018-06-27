import React from 'react';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';



export class PopupComponent extends React.Component {

    render() {
        const product = this.props.product;

        const popupTexts = (summaryTextKey) => {
            if (!this.props.texts) {
                return '';
            }
            const text = this.props.texts.find(function(element) {
                return element.id === summaryTextKey
            });

            if (typeof text === 'object') {
                return text.message
            } 
            return '';

        }

        return (
            <Popup arrow={false} trigger={<button className="readmoreBtn">Läs mer</button>}>
            {close => (
                <div className="popup_inner">
                    <button className="closeBtnTop"><a className="closeTop" onClick={close}>X</a></button>
                    <div className="popText">
                        {popupTexts(product.properties.summaryTextKey)}
                    </div>
                    <div className="closeButtons">
                        <button className="closeBtn"><a className="close" onClick={close}>X</a></button>
                        <button className="closeOK"><a className="closeOK" onClick={close}>OK</a></button>
                    </div>

                </div>
            )}
            </Popup>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        texts: state.texts
    };
};

export default connect(mapStateToProps)(PopupComponent);

