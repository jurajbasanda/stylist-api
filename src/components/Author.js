import React from 'react';
import PropTypes from 'prop-types';

const Author = ({ link, name, slug }) => (
            <a href={link} key={slug}> {name}</a>
   
);

Author.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Author;