import axios from 'axios';
const url='http://localhost:5000/'
class Service{
    static async signIn(data){
        const response=await axios.get(url+"register")
        // if(response.status=200 && response.data.length>0){
        //     localStorage.setItem("user-info",JSON.stringify(response.data))
        // }
        console.log(data)
        console.log(response.data)
    }
    static async createAccount(username,password,firstName,lastName,streetAddress,city,telephoneNum){

        console.log(username,password,firstName,lastName,streetAddress,city,telephoneNum)
    }
    static async getPosts(){
        const res=await axios.get(url);
        const data=await res.data;
        return data
    }

    // static createPost(item){  
    //     return axios.post(url,{item})
    // }

    // static deletePost(item){
    //     return axios.delete(`${url}${item}`)
    // }
}

export default Service;