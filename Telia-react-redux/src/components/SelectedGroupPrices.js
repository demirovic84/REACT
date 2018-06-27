import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';


export class SelectedGroupPrices extends React.Component {
    constructor(props){
        super();

        this.state = {
            group: ''
        };
        this.handleChange = this.handleChange.bind(this);
      }


      handleChange(e) {
        const group = this.props.userSelectGroup.find((group => group.id === e.target.value));
        this.props.selectItem(group);
    }

    // Looking for the group with the property null and set it to true(checked)
    checkIfDefault(group) {
        if(group.properties.default === null) {  
            return true;
            
        } else { 
            return false;
        }
    
    }

    // Using the Update method to check when changes occurs and return the group with the default value null
    componentDidUpdate() {
        const group = this.props.userSelectGroup.find((group) => {
            return group.properties.default === null;
        });
        if (group) {
            this.props.selectItem(group); 

        }
    }

    render() {
        return (
            <div>
                {this.props.userSelectGroup && this.props.userSelectGroup.map((group) => {
                    return (
                        <div className="groupWrapper" key={group.id}>
                            <div className="radio">
                                <label>
                                    <input type="radio" value={group.id} name="groups" onChange={this.handleChange} defaultChecked={this.checkIfDefault(group)} />
                                    <span className="level2"> 
                                    <div className={group.properties.titleTextKey}></div>
                                    <div className="itemTitleLevel2">{group.name}</div>
                                    </span>
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
        userSelectGroup: state.userSelectGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (items) => dispatch(itemsFetchData(items)),
        selectItem: (item) => {
            dispatch({
                type: 'ITEMS_SELECT_PRODUCT',
                item
            });
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedGroupPrices);
