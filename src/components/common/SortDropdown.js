import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const SortDropdown = ({ items, onSelectSort }) => {
    const handleSelect = (eventKey) => {
        onSelectSort(eventKey);
    };

    return (
        <DropdownButton
            id="dropdown-basic-button"
            title="정렬"
            onSelect={handleSelect}
            variant="info"
        >
            {items.map((item, index) => (
                <Dropdown.Item eventKey={item.key} key={index}>
                    {item.label}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

export default SortDropdown;