import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';


export class ItemComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            item: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
        
    handleChange(e) {
        const item = this.props.items.find((item => item.id === e.target.value));
        this.props.selectItem(item);    
    }

    // Looking for the item with the property null and set it to true(checked)
    checkIfDefault(item) {
        if(item.properties.default === null) {  
            return true;
            
        } else { 
            return false;
        }
    
    }

    // Using the Update method to check when changes occurs and return the item with the default value null
    componentDidUpdate() {
        const item = this.props.items.find((item) => {
            return item.properties.default === null;
        });
        if (item) {
            this.props.selectItem(item); 

        }
    }


render() {
    // eslint-disable-next-line
    let items = this.props.items;

    // Sortering a-b
    items = items.sort(function (a, b) {
        return a.order - b.order;
    });

    // Text on menu tabs
    const panelText = (summaryTextKey) => {
        // console.log(this.props.texts);
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
        <div>
            {this.props.items.map((item) => {
                return (
                    <div className="itemWrapper" key={item.id}>
                        <div className="radio">
                            <label>
                                <input type="radio" value={item.id} name="items" onChange={this.handleChange} defaultChecked={this.checkIfDefault(item)} />
                                <div className="Top">
                                    <div className="toplev1">
                                        <div className={item.properties.iconMediaKey}></div>
                                        <div className="itemTitle">{item.name}</div>
                                    </div>
                                    <div className="toplev2">
                                        <div>{panelText(item.properties.summaryTextKey)}</div>
                                    </div>
                                </div> 

                            </label>
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
        items: state.items,
        texts: state.texts,
        cardsTexts: state.cardsTexts,
        cardsDesc: state.cardsDesc,
        panelText: state.panelText,
        popupTexts: state.popupTexts,
        campaignTexts: state.campaignTexts,
        PromoteText: state.PromoteText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (groups) => dispatch(itemsFetchData(groups)),
        selectItem: (item) => {
            dispatch({
                type: 'ITEMS_SELECT_GROUP',
                item 
            });

            dispatch({
                type: 'ITEMS_SELECT_PRODUCT',
                item
            });

        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);


