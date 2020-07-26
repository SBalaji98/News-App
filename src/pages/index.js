import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { getSources, getArticles } from '../../store/actions/newsAction'
import Navigation from '../components/navBar'
import MainLayout from '../components/mainLayout'
import SideBar from '../components/sideBar'
import NewsCard from '../components/newsCard'
import { SELECT_ARTICLE, SELECT_SOURCE, LOADING } from '../../store/types';
import Loader from '../components/myLoader'

//try class method
export default function index(props) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getSources());
   }, [])

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

   const handleSource = (source) => {
      dispatch({
         type: LOADING,
         payload: true
      })
      dispatch({
         type: SELECT_SOURCE,
         payload: source
      })
      dispatch(getArticles());
   }

   const { sources, articles, loading,error } = useSelector(state => state.news)
   
   if(error){
                 alert ('Check Your INTERNET')
      
      }
   return (
      
      <Loader active={loading}>
         <Navigation>
            <SideBar sources={sources} handleSource={handleSource}>
               <MainLayout>
                  <Row>
                     {
                        articles !== [] && articles.map((article, i) =>
                           <Col span={12} key={i}>
                              <NewsCard  article={article} handleDetails={handleDetails} />
                           </Col>
                        )
                     }
                  </Row>
               </MainLayout>
            </SideBar>
         </Navigation>
      </Loader>
   )
}
index.getInitialProps = async ({ store }) => {
   // store.dispatch(getSources());
   getSources();
   return;
}
