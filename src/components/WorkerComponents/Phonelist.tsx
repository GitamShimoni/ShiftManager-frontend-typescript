import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import WorkerCard from "./WorkerCard";
import './phonelist.css';

type User = {
    email:string
    firstName:string
    lastName:string
    phoneNumber:string
    isAdmin:boolean
}

function Phonelist() {
    

    const [usersData, setUsersData] = useState<User[]>([]);

    useEffect(() => {
        axios
            .get<User[]>("http://localhost:5000/users/fetchUser")
            .then(({ data }) => {setUsersData(data)
            console.log(data,"display");
            })
            .catch((err) => {
                const axiosErr = err as AxiosError;
                console.log(axiosErr.response?.data);
                alert(axiosErr.response?.data);
            });
    }, []);

    useEffect(() => {
        console.log(usersData);
    }, [usersData]);

    return(
        <div id="Phoneslist-container">
          <div id="Phoneslist-inner" className="animate__animated animate__fadeInLeft">
          {usersData.map((element,index) => (
            <WorkerCard firstName={element.firstName} lastName={element.lastName} phoneNumber={element.phoneNumber} isAdmin={element.isAdmin} key={index}></WorkerCard>
          ))}
          </div>
       </div>
    )
}

export default Phonelist;
