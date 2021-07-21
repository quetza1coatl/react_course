import React from 'react'
import './item-status-filter.css'

export default class ItemStatusFilter extends React.Component{

    buttons = [
        {name:"all", label: "All"},
        {name:"done", label: "Done"},
        {name:"active", label: "Active"}
    ];

    render(){
        const { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(( {name, label} ) => {
            const isActive = filter === name;
            const clazzName = isActive? "btn btn-info" : "btn btn-outline-secondary";
            return  <button key={name} type="button"
                            className={clazzName}
                            onClick={ () => onFilterChange(name)}>{label}</button>
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}
