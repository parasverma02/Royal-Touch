
import axios from '../../axios.order';
// import ServicesData from '../data/ServicesData';
//Actions
export const Set_Services = "Set_Services";


//Action Creators
export const initSet_services = responseData => {
    let services = [];
    for (let key in responseData){
        services =  responseData[key];
    }
    return {
        type: Set_Services,
        services: services
    };
}
export const set_services = () => { //Synchronous
    
    return dispatch => {

        axios.get('/services.json')
        .then(response => {
            dispatch(initSet_services(response.data))
            console.log(response.data)
            
        })
        .catch(error => {
            console.log(error);
        });
    }
}
