import axiosClient from './axiosClient'
const postApi = {
    getAll(params) {
        const url = '/posts';
        return axiosClient.get(url, { params })
    },
    getPostById(id) {
        const url = `/posts/${id}`;
        return axiosClient.get(url)
    },
    addPost(data) {
        const url = `/posts`;
        return axiosClient.post(url, data)
    },
    editPostById(data) {
        const url = `/posts/${data.id}`;
        return axiosClient.put(url, data)
    },
    deletePost(id) {
        const url = `/posts`;
        return axiosClient.delete(url)
    }
}

export default postApi