import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ paragraph }) => {
	return (
		<div className='widget-item'>
			<div dangerouslySetInnerHTML={{ __html: paragraph }} />
		</div>
	)
}
Paragraph.propTypes = {
	paragraph: PropTypes.string.isRequired,
}
export default Paragraph
