import React from 'react';

const TabItem = (props) => {

    const {id} = props

    return (
        <li className="nav-item" role="presentation">
            <button className="nav-link text-capitalize" id={`${id}-tab`} data-bs-toggle="tab"
                    data-bs-target={`#${id}-tab-pane`} type="button" role="tab"
                    aria-controls={`${id}-tab-pane`} aria-selected="false">
                {id}
            </button>
        </li>
    )
}

export default TabItem;