import React from 'react'
import PropTypes from 'prop-types'

const PullQuote = ({ text }) => {
	return (
		<article className='widget-item'>
			<blockquote>{text}</blockquote>
		</article>
	)
}
PullQuote.propTypes = {
	text: PropTypes.string.isRequired,
}
export default PullQuote
