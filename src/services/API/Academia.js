import axios from 'axios'
export default {
    async tryCreate(data){
        const response = await axios.post('/academia',data);
        return response.data;
    },
    async tryGet(){
        const response = await axios.get('/academia');
        return response.data;
    },
}