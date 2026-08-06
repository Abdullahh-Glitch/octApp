import { useQuery, useMutation } from "@tanstack/react-query";
import { getCustomerCategories, getCountries, addCustomer } from "../apis/customerApi";

export const GetCustomerCategories = ()=>{
    return useQuery({
        queryKey: ['categories'],
        queryFn: getCustomerCategories
    })
}

export const GetCountries = ()=>{
    return useQuery({
        queryKey: ['countries'],
        queryFn: getCountries
    })
}

export const AddCustomer = ()=>{
    return useMutation({
        mutationFn: addCustomer,
        onSuccess: ()=>{
            console.log("Customer Added");
        }
    })
}