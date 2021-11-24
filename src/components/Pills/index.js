import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Pills = ({ local, selected, onClick }) => {
    return (
        <div onClick={onClick} className={`pills__container ${selected ? 'pills__container--active' : ''} `}>
            {local}
        </div>
    )
}

Pills.propType = {
    local: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Pills;
