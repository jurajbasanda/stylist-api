import React from 'react'
import PropTypes from 'prop-types'
import camelCase from 'camelcase'
//Components
import Paragraph from './components/Paragraph'
import Image from './components/Image'
import Divider from './components/Divider'
import PullQuote from './components/PullQuote'

const templates = {
	image: Image,
	paragraph: Paragraph,
	divider: Divider,
	pullQuote: PullQuote,
}

const Widgets = ({ widgets }) => (
	<section className='widgets'>
		{widgets.map((widget, i) => {
			const Template = templates[camelCase(widget.acf_fc_layout)]
			if (!Template) return null
			return <Template key={i} {...widget} />
		})}
	</section>
)
Widgets.propTypes = {
	widgets: PropTypes.array.isRequired,
}
export default Widgets
