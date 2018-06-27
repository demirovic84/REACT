export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS': {
            return action.items;
        }

        default:
            return state;
    }
}

export function userSelectGroup(state = [], action) {
    switch (action.type) {
        case 'ITEMS_SELECT_GROUP': {
            return action.item.groups;
        }

        default:
            return state;
    }
}

export function userSelectGroupProduct(state = [], action) {
    switch (action.type) {
        case 'ITEMS_SELECT_PRODUCT': {
            return action.item.products;

        }

        default:
            return state;

    }
}

export function texts(state = [], action) {
    switch (action.type) {
        case 'TEXTS_FETCH_DATA_SUCCESS': {
            return action.texts;
        }

        default:
            return state;
    }
}

export function cardsDesc(state = [], action) {
    switch (action.type) {
        case 'DESC_TEXTS_FETCH_DATA_SUCCESS': {
            return action.cardsDesc;
        }

        default:
            return state;
    }
}


export function campaignTexts(state = [], action) {
    switch (action.type) {
        case 'CAMPAIGN_TEXTS_FETCH_DATA_SUCCESS': {
            return action.campaignTexts;
        }

        default:
            return state;
    }
}

export function cardsTexts(state = [], action) {
    switch (action.type) {
        case 'CARD_TEXTS_FETCH_DATA_SUCCESS': {
            return action.cardsTexts;
        }

        default:
            return state;
    }
}

export function panelText(state = [], action) {
    switch (action.type) {
        case 'PANEL_TEXTS_FETCH_DATA_SUCCESS': {
            return action.panelText;
        }

        default:
            return state;
    }
}


export function popupTexts(state = [], action) {
    switch (action.type) {
        case 'POPUP_TEXTS_FETCH_DATA_SUCCESS': {
            return action.popupTexts;
        }

        default:
            return state;
    }
}

export function PromoteText(state = [], action) {
    switch (action.type) {
        case 'PROMOTE_TEXTS_FETCH_DATA_SUCCESS': {
            return action.PromoteText;
        }

        default:
            return state;
    }
}

export function dataAmountText(state = [], action) {
    switch (action.type) {
        case 'DATA_AMOUNT_TEXTS_FETCH_DATA_SUCCESS': {
            return action.dataAmountText;
        }

        default:
            return state;
    }
}

