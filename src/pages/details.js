import React from 'react'
import { Layout, Menu, Card } from 'antd';
import { Typography } from 'antd';
import Link from 'next/link';
import Navigation from '../components/navBar'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/myLoader'
import { Row, Col } from 'antd';
import TopCard from '../components/topCard'
import { SELECT_ARTICLE, LOADING } from '../../store/types';

const { Content } = Layout;
const { Title } = Typography;
export default function details(props) {

    const dispatch = useDispatch();
    const handleDetails = (article) => {
        dispatch({
            type: LOADING,
            payload: true

        })
        dispatch({
            type: SELECT_ARTICLE,
            payload: article
        })
    }
    const { selectArticle, loading, articles } = useSelector(state => state.news)
    console.log(selectArticle)
    const nav = <Menu.Item><Link href='/'><a>HomePage</a></Link></Menu.Item>;

    return (
        <Loader active={loading}>
            <Navigation nav={nav}>
                <Layout>
                    <Row>
                        <Col span={18}>
                            <Content style={{
                                margin: '24px 16px 0', overflow: 'auto',
                                height: '95vh',
                            }}>
                                <Title strong underline={true} style={{ alignContent: "center", color: "#56a832", marginTop: 20 }}>
                                    {selectArticle.source.name ? selectArticle.source.name : "News"}
                                </Title>

                                <Card style={{ width: "95%", margin: 'auto', marginTop: 30, marginLeft: 10 }}>
                                    <h1 style={{ fontSize: '40px' }}>{selectArticle.title}</h1>
                                    <img
                                        className="card-img-top"
                                        src={
                                            selectArticle.urlToImage
                                                ? selectArticle.urlToImage
                                                : "https://imgplaceholder.com/420x320/e3e0e0/757575/fa-file-picture-o?text=Image+Not+Found"
                                        }
                                        alt={selectArticle.title}
                                        width='100%'
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
                        </Col>
                        <Col span={6} style={{
                            overflow: 'auto',
                            height: '95vh',
                        }}>
                            <Title strong underline={true} style={{ alignContent: "center", color: "#56a832", marginTop: 30 }}>
                                Related News
                                </Title>
                            {
                                articles !== [] && articles.map((article, i) =>
                                    <TopCard key={i} article={article} handleDetails={handleDetails} />
                                )
                            }
                        </Col>
                    </Row>

                </Layout>
            </Navigation>

        </Loader>
    )
}
