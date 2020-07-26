import React,{useEffect} from 'react'
import { Layout, Menu, Card } from 'antd';
import { Typography } from 'antd';
import Link from 'next/link';
import Navigation from '../components/navBar'
import { useDispatch, useSelector } from 'react-redux'
import { LOADING } from '../../store/types';
import { Row, Col } from 'antd';
import { getSources } from '../../store/actions/newsAction';
const { Header, Content, Footer, Sider } = Layout;



const { Title } = Typography;

export default function details(props) {
    const dispatch = useDispatch();
    const { selectArticle } = useSelector(state => state.news)
    // selectArticle = props.news.selectArticle
    // useEffect(() => {
    //     if (selectArticle !== {}) {
    //         if (!localStorage.getItem('article')) {
    //             localStorage.setItem('article', JSON.stringify(selectArticle));
    //         }
    //     }
        
    // }, [])
    // useEffect(() => {
    //     return () => {
    //         localStorage.removeItem('article')
    //         }
    //   }, []);

    // if (selectArticle === null) {
    //     selectArticle = JSON.parse(localStorage.getItem('article'))
    //     dispatch({
    //         type: SELECT_SOURCE,
    //         payload: selectArticle.source
    //     })
    //     dispatch(getArticles());
    //     console.log("[selectarticle]",selectArticle)
    // }
    const nav = <Menu.Item
        onClick={() => dispatch({
            type: LOADING,
            payload: true
        })}><Link href='/'>
            <a>HomePage</a>
        </Link></Menu.Item>;

    return (
        <Navigation nav={nav}>

            <Layout>
                {/* <Menu theme="dark" mode="horizontal" style={{ padding: 0, position: 'fixed', zIndex: 999, width: '100%' }}>
                <Menu.Item><Link href='/'><a>HomePage</a></Link></Menu.Item>
            </Menu> */}

                <Row>
                    <Col span={18}>
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <Title strong underline={true} style={{ alignContent: "center", color: "#56a832", marginTop: 30 }}>
                                {selectArticle.source.name ? selectArticle.source.name : "News"}
                            </Title>

                            <Card style={{ width: "80%", margin: 'auto', marginTop: 30, marginLeft: 10 }}>
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
                    <Col span={8}>
                    </Col>
                </Row>

            </Layout>
        </Navigation>
    )
}

details.getInitialProps= async ({store})=>{
    return store.getState();
}