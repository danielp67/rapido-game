import React, {useState} from 'react';

const Searchbar = (props) => {

    const {name, label, value, size, list, searchItem, messageError} = props;
    const [suggestionList, setSuggestionsList] = useState(list);
    const [selected, setSelected] = useState(true);

    let sizeContent = 0;
    let searchValue = "";

    if (size != null) {
        sizeContent = size;
    }
    if (value != null) {
        searchValue = value.name;
    }


    const handleChange = (e) => {
        let filteredList = list.filter(
            suggestion =>
                suggestion.name.toLowerCase().indexOf((e.target.value).toLowerCase()) > -1
        );
        setSuggestionsList(filteredList);
    }

    const handleClick = (item) => {
        searchItem({name: name, value: item});
        setSelected(true)
    }

    const handleCancel = (e) => {
        searchItem({name: name, value: ""});
        setSuggestionsList(list)
        setSelected(false)
    }

    const onFocus = () => {
        setSelected(false)
    }


    return (
        <div className={`col-span-${sizeContent}`}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type="search"
                name={name}
                id={name}
                onChange={handleChange}
                onFocus={onFocus}
                onClick={handleCancel}
                value={searchValue}
                autoComplete={"off"}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-frida focus:border-red-frida sm:text-sm"
            />
            <small className="text-red-500">{messageError}</small>
            {selected ? null :
                <div>
                    <ul className="suggestions">
                        {suggestionList.map((item, index) => {
                                return (
                                    <li className="suggestionList" key={index} onClick={() => {
                                        handleClick(item)
                                    }}>
                                        {item.name}
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </div>
            }
        </div>
    )

};

export default Searchbar;