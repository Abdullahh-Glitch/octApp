import axios from "axios";

export const getCustomerCategories = async()=>{
    try {
        const result = await axios.get('http://10.143.36.200:5000/api/customer/categories');
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getCountries = async()=>{
    try {
        const result = await axios.get('http://10.143.36.200:5000/api/customer/countries');
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const addCustomer = async(formData)=>{
    try{
        const result = await axios.post('http://10.143.36.200:5000/api/customer/addCustomer',{data: formData});
        return result.data;
    }catch(err){
        console.log(err);
    }
}
