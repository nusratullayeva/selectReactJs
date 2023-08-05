import React, { useState } from 'react';
import './select.css';

import {IoIosArrowDown} from 'react-icons/io'


function Selection() {
    const [menuOpen, setMenuOpen] = useState(false); 
    const [iconRotate, setIconRotate] = useState(false); 
    const [outLineSelect, setOutLineSelect] = useState('dropdown'); 
    const [selectedValue, setSelectedValue] = useState('choose');

    function selectClick() {
        setMenuOpen(!menuOpen); 
        setIconRotate(!iconRotate)
        setOutLineSelect(!outLineSelect)
    }

    function handleOptionClick(title) {
        setSelectedValue(title);
        setMenuOpen(false);
        setIconRotate(false)
    }

    const options = [
        {
            title: 'First option',
            value: '1'
        },
        {
            title: 'Second option',
            value: '2'
        },
    ];

    return (
        <div onClick={selectClick}>
            <div className="style">
            <div className={!outLineSelect && 'outLine'}>
                <div className="checked">
            <p className='selected-p'>{selectedValue}</p>
            <span className='selected-span'><IoIosArrowDown className={iconRotate && 'round'} /></span>
                </div>
            </div>
            {menuOpen && ( 
                <ul className='select-content'>
                    {options.map(item => (
                        <li className='selectedLi' key={item.value} value={item.value} onClick={() => handleOptionClick(item.title)}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </div>
    );
}

export default Selection;