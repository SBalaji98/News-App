import React from 'react'
import { Card } from 'antd'
import { useRouter } from 'next/router'

export default function newsCard(props) {
	const router = useRouter()

	const handleClick = (e) => {
		e.preventDefault()
		props.handleDetails(props.article)
		// router.push('/details')
	}

	return (

		<Card style={{ height: 'auto', width: 400, cursor: 'pointer', marginTop: 20 }} onClick={handleClick}>
			
			<img
				className="card-img-top"
				src={
					props.article.urlToImage
						? props.article.urlToImage
						: "https://imgplaceholder.com/420x320/e3e0e0/757575/fa-file-picture-o?text=Image+Not+Found"
				}
				alt={props.article.title}
                height='100%'
                width='100%'
			/>
            <h3>
				{props.article.title}
			</h3>
			
		</Card>
	)
}
