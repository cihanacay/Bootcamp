import React,{useState} from "react";
import { Container } from "reactstrap";
import Input from "./Input";

function UserCard() { 
    const [userName, setUsername]=useState("");   
    const [job, setjob]=useState("");  
    return (
        <>        
        <Container>
            <form>                     
                <div className="giris">
                    <label>İsim :</label>
                    <Input onChange={value => setUsername(value)} />
                    <label>Meslek :</label>
                    <Input onChange={value => setjob(value)} />
                </div>
                
                <div className="card">
                <img src="https://i.pinimg.com/564x/a0/32/3d/a0323dafc53ed0e6bdd7a05e195d9f7b.jpg" alt="Avatar" ></img>
                <br/>
                    <div className="container">
                        <h4><b>İsim : </b>{userName}</h4>
                        <h4 ><b>Meslek : </b>{job}</h4>
                    </div>
                </div>
            </form>
        </Container>
        </>
    );
}
export default UserCard;