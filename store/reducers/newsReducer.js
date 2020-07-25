import * as types from '../types'


const initialState = {
    sources: [],
    articles: [],
    selectArticle: {},
    selectSource: {},
    error: null

}
export const newsReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_SOURCES_LIST:
            return {
                ...state,
                sources: action.payload,
                error: null
            }

        case types.GET_ARTICLES_LIST:
            return {
                ...state,
                articles: action.payload,
                error: null
            }

        case types.SELECT_ARTICLE:
            return {
                ...state,
                selectArticle: action.payload,
                error: null
            }

        case types.SELECT_SOURCE:
            return {
                ...state,
                selectSource: action.payload,
                error: null
            }
        case types.API_ERR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}