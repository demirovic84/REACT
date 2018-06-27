import { combineReducers } from 'redux';
import { items, texts, cardsDesc, panelText, cardsTexts, dataAmountText, popupTexts, 
itemsHasErrored, itemsIsLoading, userSelectGroup, userSelectGroupProduct, 
campaignTexts, PromoteText,  } from './items';

export default combineReducers({
    items: items,
    texts: texts,
    cardsDesc: cardsDesc,
    panelText: panelText,
    cardsTexts: cardsTexts,
    dataAmountText: dataAmountText,
    popupTexts: popupTexts,
    itemsHasErrored: itemsHasErrored,
    itemsIsLoading: itemsIsLoading,
    userSelectGroup: userSelectGroup,
    userSelectGroupProduct: userSelectGroupProduct,
    campaignTexts: campaignTexts,
    PromoteText: PromoteText,

});
