import * as types from '../types'
import store from '../store';

// Fetch source and point first source and fetch article 
export const getSources = () => async dispatch => {
    try {
        console.log("getSources", process.env.REACT_APP_NEWS_API_KEY)
        const res = await fetch("https://newsapi.org/v2/sources?language=en&apiKey=09b85c2b35414d739a144b205fd0df0c")
        const data = await res.json()
        if (data.status == "ok") {
            const sourceArray = data.sources.map((source) => {
                return ({ id: source.id, name: source.name })
            })
            dispatch({
                type: types.GET_SOURCES_LIST,
                payload: sourceArray
            })
            dispatch({
                type: types.SELECT_SOURCE,
                payload: sourceArray[0]
            })
            dispatch(getArticles())
        } else {
            dispatch({
                type: types.API_ERR,
                payload: data.message
            })
        }

    } catch (error) {
        dispatch({
            type: types.API_ERR,
            payload: error.message
        })
    }

}

//Fetch article on selected source
export const getArticles = () => async dispatch => {
    try {
        const source = store.getState().news.selectSource.id
        console.log("getArticles", process.env.NEWS_KEY)
        console.log(["source"], source)
        const res = await fetch("https://newsapi.org/v2/top-headlines?sources=" +
            source +
            "&apiKey=09b85c2b35414d739a144b205fd0df0c")
        const data = await res.json()

        if (data.status == "ok") {
        const articleArray = data.articles.map((article) => {
            return article;
        })
        dispatch({
            type: types.GET_ARTICLES_LIST,
            payload: articleArray
        })
    }else{
        dispatch({
            type: types.API_ERR,
            payload: data.message
        })

    }
    } catch (error) {
        dispatch({
            type: types.API_ERR,
            payload: error
        })
    }

}