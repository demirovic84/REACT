export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchData(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function texts(texts) {
    return {
        type: 'TEXTS_FETCH_DATA_SUCCESS',
        texts
    };
}

export function panelText(panelText) {
    return {
        type: 'PANEL_TEXTS_FETCH_DATA_SUCCESS',
        panelText
    };
}


export function cardsDesc(cardsDesc) {
    return {
        type: 'DESC_TEXTS_FETCH_DATA_SUCCESS',
        cardsDesc
    };
}

export function campaignTexts(campaignTexts) {
    return {
        type: 'CAMPAIGN_TEXTS_FETCH_DATA_SUCCESS',
        campaignTexts

    };
}

export function cardsTexts(cardsTexts) {
    return {
        type: 'CARD_TEXTS_FETCH_DATA_SUCCESS',
        cardsTexts

    };
}

export function popupTexts(popupTexts) {
    return {
        type: 'POPUP_TEXTS_FETCH_DATA_SUCCESS',
        popupTexts
    };
}

export function selectItem(item) {
    return {
        type: 'ITEMS_SELECT_GROUP',
        item
    };
}

export function selectGroupProduct(product) {
    return {
        type: 'ITEMS_SELECT_PRODUCT',
        product
    };
}

export function selectGroupProductInGroup(product) {
    return {
        type: 'ITEMS_SELECT_PRODUCTS_IN_GROUPS',
        product
    };
}


export function PromoteText(PromoteText) {
    return {
        type: 'PROMOTE_TEXTS_FETCH_DATA_SUCCESS',
        PromoteText
    };
}

export function dataAmountText(dataAmountText) {
    return {
        type: 'DATA_AMOUNT_TEXTS_FETCH_DATA_SUCCESS',
        dataAmountText
    };
}


