import axiosClient from './axiosClient'
const commentApi = {
    getAll() {
        const url = '/comments?_sort=createdAt:DESC';
        return axiosClient.get(url)
    },
    addComment(data) {
        const url = `/comments`;
        return axiosClient.post(url, data)
    },
    getCommentById(id) {
        const url = `/comments/${id}`;
        return axiosClient.get(url)
    },

}

export default commentApi