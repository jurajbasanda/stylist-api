import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
//Components
import Loading from './components/Loading'
import Title from './components/Title'
import HeroImage from './components/HeroImage'
import Category from './components/Category'
import Author from './components/Author'
import Tag from './components/Tag'
import Widgets from './components/widgets/Widgets'
import ErrorPage from './components/ErrorPage'

//Style
import './App.scss'

function App() {
	const url = 'http://www.mocky.io/v2/5dece3d333000052002b9037'
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [post, setPost] = useState({
		content: {},
	})
	async function getData() {
		try {
			const { data } = await axios.get(url)
			const res = await data

			setPost({
				content: {
					data: res,
					title: res?.title?.rendered,
					category: res?.acf?.category?.name,
					tags: res?.acf?.tags,
					date: res?.date,
					standfirst: res?.acf?.standfirst,
					heroImg: res?.acf?.hero_image,
					author: res?._embedded?.author,
					widgets: res?.acf?.widgets,
				},
			})
			setIsLoading(false)
		} catch (error) {
			console.error(error)
			setIsError(true)
		}
	}
	// Date format
	const dateObj = new Date(post.content.date)
	const month = dateObj.getUTCMonth()
	const day = dateObj.getUTCDate()
	const year = dateObj.getUTCFullYear()

	useEffect(() => {
		setIsLoading(true)
		getData()
	}, [])
	const { content } = post

	if (isError || !content) {
		return <ErrorPage />
	}
	if (isLoading) {
		return <Loading />
	}
	return (
		<Fragment>
			<header>
				<HeroImage images={content.heroImg} />
				<div className='title'>
					<Category category={content.category} />
					<Title title={content.title} />
					<span className='date'>
						<time dateTime={content.date} title={content.date}>
							{`${day}/${month}/${year}`}
						</time>
					</span>
				</div>
			</header>
			<main>
				<section className='standfirst'>
					<h2>{content.standfirst}</h2>
				</section>

				<Widgets widgets={content.widgets} />

				<section className='bottom-info'>
					<div className='writter'>
						<h3>
							Written by
							{content.author.map((
								// I used map in case of more than one author
								author
							) => (
								<Author
									key={author.slug}
									link={author.link}
									name={author.name}
								/>
							))}
						</h3>
					</div>
					<div className='tags'>
						<h3>Tags</h3>
						<ul>
							{content.tags.map((tag) => (
								<Tag name={tag.name} key={tag.slug} />
							))}
						</ul>
					</div>
				</section>
			</main>
		</Fragment>
	)
}

export default App
