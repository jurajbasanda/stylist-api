import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ paragraph }) => {
	return (
		<article key='1' className='widget-item'>
			<div dangerouslySetInnerHTML={{ __html: paragraph }} />
		</article>
	)
}
Paragraph.propTypes = {
	paragraph: PropTypes.string.isRequired,
}
export default Paragraph
