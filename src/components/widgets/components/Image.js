import React from 'react'
import PropTypes from 'prop-types'
import useMediaQuery from '@tevhooks/use-media-query'

const Image = ({ image }) => {
	const small = useMediaQuery('(max-width:500px)')
	const large = useMediaQuery('(max-width:800px)')
	const xlarge = useMediaQuery('(max-width:1020px)')
	const xxlarge = useMediaQuery('(max-width:1400px)')
	return (
		<div key={image.alt} className='widget-item'>
			{small ? (
				<img src={image.sizes.portrait} alt={image.alt} />
			) : large ? (
				<img src={image.sizes.square} alt={image.alt} />
			) : xlarge ? (
				<img src={image.sizes.letterbox} alt={image.alt} />
			) : xxlarge ? (
				<img src={image.sizes.landscape} alt={image.alt} />
			) : (
				<img src={image.url} alt={image.alt} />
			)}
		</div>
	)
}
Image.propTypes = {
	image: PropTypes.object.isRequired,
}

export default Image
