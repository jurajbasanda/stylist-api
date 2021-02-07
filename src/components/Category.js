import React from 'react'
import PropTypes from 'prop-types'

const Category = ({ category }) => {
	return <span className='category'>{category}</span>
}

Category.propTypes = {
	category: PropTypes.string.isRequired,
}

export default Category
