import createDataContext from './createDataContext'
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogs':
            return action.payload;
        case 'add_blog':
            return [
                ...state,
                {
                    title: action.payload.title,
                    content: action.payload.content,
                    id: Math.floor(Math.random() * 99999),
                }
            ]
        case 'edit_blog':
            return state.map(blog => {
                return blog.id === action.payload.id ? action.payload : blog;
            })
        case 'delete_blog':
            return state.filter(blog => blog.id !== action.payload)
        default:
            return state;
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');

        dispatch({type: 'get_blogs', payload: response.data})
    }
}

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title, content})
        // dispatch({type: 'add_blog', payload: {title, content}});
        callback && callback();
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content})
        dispatch({type: 'edit_blog', payload: {id, title, content}});
        callback && callback();
    }
}

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({type: 'delete_blog', payload: id})
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    []
)