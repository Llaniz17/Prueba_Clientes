import axios from 'axios'

const clientsApi = axios.create({
    baseURL: 'http://localhost:8000/clients/api/v1/clients/'
})

export const getAllClients = () => clientsApi.get('/');
export const getClient = (id) => clientsApi.get(`/${id}`);
export const createClient = (client) => clientsApi.post('/', client);
export const deleteClient = (id) => clientsApi.delete(`/${id}`);
export const updateClient = (id,client) => clientsApi.put(`/${id}/`,client);