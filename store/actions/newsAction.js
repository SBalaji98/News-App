import * as types from '../types'
import store from '../store';

// Fetch source and point first source and fetch article 
export const getSources = () => async dispatch => {
    try {
        const res = await fetch("https://newsapi.org/v2/sources?language=en&apiKey=09b85c2b35414d739a144b205fd0df0c")
        const data = await res.json()
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
    } catch (error) {
        dispatch({
            type: types.API_ERR,
            payload: error
        })
    }

}

//Fetch article on selected source
export const getArticles = () => async dispatch => {
    try {
        const source = store.getState().news.selectSource.id
        console.log("getArticles")
        console.log(["source"], source)
        const res = await fetch("https://newsapi.org/v2/top-headlines?sources=" +
            source +
            "&apiKey=09b85c2b35414d739a144b205fd0df0c")
        const data = await res.json()
        const articleArray = data.articles.map((article) => {
            return article;
        })
        dispatch({
            type: types.GET_ARTICLES_LIST,
            payload: articleArray
        })
    } catch (error) {
        dispatch({
            type: types.API_ERR,
            payload: error
        })
    }

}