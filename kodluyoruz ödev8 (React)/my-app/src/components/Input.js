import React,{useState} from "react";
import { Container } from "reactstrap";

function Input(props) {
 
    return (
        <>
        <Container>
            <form>
            <input type="text"  onChange={(e) => props.onChange(e.target.value)}  className="input" />          
            </form>
        </Container>
        </>
    );
    
}
export default Input;