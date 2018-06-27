import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ItemComponent from '../components/ItemComponent';
import ProductComponent from '../components/ProductComponent';
import SelectedGroupPrices from '../components/SelectedGroupPrices';
import FooterComponent from '../components/FooterComponent';
import MiddleComponent from '../components/MiddleComponent';


require ('../styling/header.css');
require ('../styling/products.css');
require ('../styling/groups.css');
require ('../styling/popup.css');
require ('../styling/footer.css');
require ('../styling/middle.css');



class ItemList extends Component {

    constructor(props) {
        super(props);

        // Headers for backend
        var endpoint = axios.create({
            headers: {
                'x-smartrefill-api-version': '7',
                'x-smartrefill-application': 'telia-2.0',
                'x-smartrefill-environment': 'test',
                'x-smartrefill-inflow': 'web',
                'x-smartrefill-language': 'sv',
                'x-smartrefill-marketing-version': '2.0'
            }
            });
            
            // Accessing the Telia API with data
            //endpoint.get('/Pms/api/TELIA/v1/catalogs')
            //Om jag vill hämta från json fil istället ifall jag skulle ladda upp projektet online
            endpoint.get('/catalogs.json') //I public foldern
                .then((response) => {
                    const catalog = response.data.data.find( x => x.properties.default === null);
                    this.props.fetchData(catalog.groups);
                });
            
            // Accessing the second API with texts
            endpoint.get('/Refill/rest2/refill/se/telia/texts')
                .then((response) => {
                    console.log(response);
                    const CardsTexts = response.data
                    this.props.texts(CardsTexts);
                });
    }

    render() {

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }


        return (
        <div className="Wrapper">
                <div className="Item"> 
                    <div className="pebble1"></div>
                    <div className="itemContent">
                        <p className="header-title">LADDA KONTANTKORT</p>
                        <ItemComponent />
                    </div>
                    <div className="pebble2"></div> 
                </div>
                <div className="Groups"><SelectedGroupPrices /></div>
                <div className="Products"><ProductComponent /></div>
                <div className="Middle"><MiddleComponent /></div>
                <div className="Footer"><FooterComponent /></div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        texts: state.texts,
        cardsTexts: state.cardsTexts,
        cardsDesc: state.cardsDesc,
        panelText: state.panelText,
        campaignTexts: state.campaignTexts,
        PromoteText: state.PromoteText,
        dataAmountText: state.dataAmountText
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (items) => dispatch({
            type: 'ITEMS_FETCH_DATA_SUCCESS',
            items
        }),

        texts: (texts) => dispatch({
            type: 'TEXTS_FETCH_DATA_SUCCESS',
            texts
        }),

        cardsTexts: (cardsTexts) => dispatch({
            type: 'CARD_TEXTS_FETCH_DATA_SUCCESS',
            cardsTexts
        }),
        
        cardsDesc: (cardsDesc) => dispatch({
            type: 'DESC_TEXTS_FETCH_DATA_SUCCESS',
            cardsDesc
        }),

        panelText: (panelText) => dispatch({
            type: 'PANEL_TEXTS_FETCH_DATA_SUCCESS',
            panelText
        }),

        campaignTexts: (campaignTexts) => dispatch({
            type: 'CAMPAIGN_TEXTS_FETCH_DATA_SUCCESS',
            campaignTexts
        }),

        PromoteText: (PromoteText) => dispatch({
            type: 'PROMOTE_TEXTS_FETCH_DATA_SUCCESS',
            PromoteText
        }),
        dataAmountText: (dataAmountText) => dispatch({
            type: 'DATA_AMOUNT_TEXTS_FETCH_DATA_SUCCESS',
            dataAmountText
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
