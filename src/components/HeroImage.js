import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import useMediaQuery from '@tevhooks/use-media-query'

const HeroImage = ({ images }) => {
	const large = useMediaQuery('(max-width:800px)')
	const small = useMediaQuery('(max-width:500px)')
	const xlarge = useMediaQuery('(max-width:1020px)')
	const xxlarge = useMediaQuery('(max-width:1400px)')

	return (
		<Fragment>
			{small ? (
				<div
					className='hero-img'
					style={{ backgroundImage: `url(${images.sizes.portrait})` }}
				></div>
			) : large ? (
				<div
					className='hero-img'
					style={{ backgroundImage: `url(${images.sizes.square})` }}
				></div>
			) : xlarge ? (
				<div
					className='hero-img'
					style={{ backgroundImage: `url(${images.sizes.letterbox})` }}
				></div>
			) : xxlarge ? (
				<div
					className='hero-img'
					style={{ backgroundImage: `url(${images.sizes.landscape})` }}
				></div>
			) : (
				<div
					className='hero-img'
					style={{ backgroundImage: `url(${images.url})` }}
				></div>
			)}
		</Fragment>
	)
}
HeroImage.porpTypes = {
	images: PropTypes.object.isRequired,
}

export default HeroImage
