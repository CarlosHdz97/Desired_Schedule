import axios from 'axios'
export default {
    async tryCreate(data){
        const response = await axios.post('/materia',data);
        return response.data;
   },
}