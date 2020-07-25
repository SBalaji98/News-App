import React from 'react'
import { Layout, Menu, Card } from 'antd';
import { Typography } from 'antd';
import Link from 'next/link';
import Navigation from '../components/navBar'
import { useDispatch, useSelector } from 'react-redux'
const { Header, Content, Footer, Sider } = Layout;



const { Title } = Typography;

export default function details(props) {

    const { selectArticle } = useSelector(state => state.news)
    console.log(selectArticle)
    const nav = <Menu.Item><Link href='/'><a>HomePage</a></Link></Menu.Item>;

    return (
        <Navigation nav={nav}>

            <Layout>
            {/* <Menu theme="dark" mode="horizontal" style={{ padding: 0, position: 'fixed', zIndex: 999, width: '100%' }}>
                <Menu.Item><Link href='/'><a>HomePage</a></Link></Menu.Item>
            </Menu> */}


            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

                <Title strong  underline={true} style={{ alignContent: "center", color: "#56a832",marginTop:30 }}>
                    {selectArticle.source.name ? selectArticle.source.name : "News"}
                </Title>

                <Card style={{ width: "100%", margin: 'auto', marginTop: 30 }}>
                    <h1  style={{fontSize:'40px'}}>{selectArticle.title}</h1>
                    <img
                        className="card-img-top"
                        src={
                            selectArticle.urlToImage
                                ? selectArticle.urlToImage
                                : "https://imgplaceholder.com/420x320/e3e0e0/757575/fa-file-picture-o?text=Image+Not+Found"
                        }
                        alt={selectArticle.title}
                    />
                    <h4 >Author : {(selectArticle.author) ? (selectArticle.author) : 
                    ("Anonymous")}</h4>
                    <h4 >Published On : {(selectArticle.publishedAt) ? 
                    (selectArticle.publishedAt) : ("Unknown")}</h4>
                    <h3>
                        {selectArticle.description}
                    </h3>
                    <h3>
                        {selectArticle.content}
                    </h3>
                    <h3>
                    For more information visit : <a href={selectArticle.url} target="_blank">
							
								{selectArticle.url}
						
						</a> 
                    </h3>

                </Card>
            </Content>

        </Layout>
        </Navigation>
    )
}
