import React from 'react';
import TabItem from "./TabItem";

const TabGroup = (props) => {
    const items = ["home", "score", "settings", "tuto"]

    return (
        <ul className=" nav nav-tabs" id="myTab" role="tablist">
            {items.map((mapping, index) => (
                <TabItem
                    key={index}
                    id={mapping}
                />
            ))}
        </ul>
    )
}

export default TabGroup;