import React from 'react';
import { connect } from 'react-redux';
import Popup from './PopupComponent';



export class ProductComponent extends React.Component {

    //Kolla om det finns en default klass och returnerar en klass.
    productClass(item) {
        if (item.properties.default) {
            return 'productCard default';
        }
        return 'productCard';
    }

    //Kollar om produkten har en campaign
    campaignElement(product) {
        if (product.properties.campaign) {
            return (
                <div className="productCardCampaign" key={product.id}>
                    <span className="kampanjSpan">Kampanj</span>
                </div>
            );
        }
        //Om ingen kampanj finns returna inget
        return '';
    }

    
        
    render() {

        // console.log(this.props.texts);
        // Sorterar produkterna
        let products = this.props.userSelectGroupProduct;
        products = products.sort(function (a, b) {
            return a.order - b.order;
        });

        //Hämtar pris
        const cardsTexts = (titleTextKey) => {
            if (!this.props.texts) {
                return '';
            }
        const text = this.props.texts.find(function(element) {
                return element.id === titleTextKey
            });
            if (typeof text === 'object') {
                return text.message
            } 
            return '';
        }

        const dataAmountText = (dataAmountTextKey) => {
            if (!this.props.texts) {
                return '';
            }
        const text = this.props.texts.find(function(element) {
                return element.id === dataAmountTextKey
            });
            if (typeof text === 'object') {
                return text.message + (" GB")
            } 
            return '';
        }

        // Hämtar texten till längst ner i kortet
        const campaignTexts = (campaignInfoTextKey) => {
            if (!this.props.texts) {
                return '';
            }
        const text = this.props.texts.find(function(element) {
                return element.id === campaignInfoTextKey
            });
            if (typeof text === 'object') {
                return text.message
            } 
            return '';
        }


        //Hämtar text som syns under ladda knappen på cards.
        const cardsDesc = (descriptionTextKey) => {
            if (!this.props.texts) {
                return '';
            }
        const text = this.props.texts.find(function(element) {
                return element.id === descriptionTextKey
            });

            if (typeof text === 'object') {
                const innerHTML = {__html: text.message
                    .replace('{{iconTalk}}', '<div class="phoneIcon"></div>')
                    .replace('{{iconMessage}}', '<br /><div class="messageIcon"></div>')};
                return <div className="iconsDiv" dangerouslySetInnerHTML={innerHTML}/>
                }
            return '';
            
        }


        return (

            <div className="productWrapper">
                    { products.map((product) => {
                        return (
                                <div className={this.productClass(product)} key={product.id}>
                                    {this.campaignElement(product)}
                                
                                    <div className={product.properties.titleTextKey}></div>
                                    <div className="productName">
                                        <div className="dataGB">
                                            {dataAmountText(product.properties.dataAmountTextKey)}
                                        </div>
                                        <div className="dataPrice">
                                            {cardsTexts(product.properties.titleTextKey)}
                                        </div>
                                    </div>
                                
                                <div className="bottomCardWrapper">
                                    <div className="productButton">LADDA</div>
                                    <div className="campaignOffersIcons">
                                        {cardsDesc(product.properties.descriptionTextKey)}
                                    </div>
                                    <div className="campaignText">
                                        {campaignTexts(product.properties.campaignInfoTextKey)}
                                    </div>

                                    <div className="cardReadMore">
                                       <Popup product={product} />
                                    </div>
                                </div>

                                </div>
                        );
                    })
                    }         
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        userSelectGroupProduct: state.userSelectGroupProduct,
        texts: state.texts,
        cardsTexts: state.cardsTexts,
        cardsDesc: state.cardsDesc,
        popupTexts: state.popupTexts,
        campaignTexts: state.campaignTexts,
        dataAmountText: state.dataAmountText

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);

