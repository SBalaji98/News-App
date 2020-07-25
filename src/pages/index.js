import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { getSources, getArticles } from '../../store/actions/newsAction'
import Navigation from '../components/navBar'
import MainLayout from '../components/mainLayout'
import SideBar from '../components/sideBar'
import NewsCard from '../components/newsCard'
import { SELECT_ARTICLE, SELECT_SOURCE } from '../../store/types';

export default function index(props) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getSources());
   }, [])

   const handleDetails = (article) => {
      dispatch({
         type: SELECT_ARTICLE,
         payload: article
      })
   }

   const handleSource = (source) => {
      dispatch({
         type: SELECT_SOURCE,
         payload: source
      })
      dispatch(getArticles());
   }

   const { sources, articles } = useSelector(state => state.news)
   
   return (
      <Navigation>
         <SideBar sources={sources} handleSource={handleSource}>
            <MainLayout>
               <Row>
                  {
                     articles !== [] && articles.map((article) =>
                        <Col span={12} >
                           <NewsCard article={article} handleDetails={handleDetails} />
                        </Col>
                     )
                  }
               </Row>
            </MainLayout>
         </SideBar>
      </Navigation>
   )
}
index.getInitialProps = async ({ store }) => {
   store.dispatch(getSources());
   return store.getState();
}
