import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({ name }) => {
	return <li>{name}</li>
}
Tag.propTypes = {
	name: PropTypes.string.isRequired,
}
export default Tag
