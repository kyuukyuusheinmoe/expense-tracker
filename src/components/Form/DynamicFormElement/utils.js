import axios from 'axios'

export const getAPIData = async (url) => {
    try {
        const response =  await axios.get(url)
        return response?.data?.data || []  
    } catch (error) {
        console.log ('xxx err ', error)
    }
}