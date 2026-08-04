import axios from "axios";

export const getHello = async(data)=>{
    console.log(data);
    try {
        const result = await axios.get('http://192.168.10.6:5000/');
        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}
export const sendData = async(data)=>{
    const {id, name, items} = data;
    const result = await axios.post('http://192.168.10.5:5000/give',data);
    console.log(result.data);
}