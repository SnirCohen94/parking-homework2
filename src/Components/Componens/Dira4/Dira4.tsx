import { SyntheticEvent, useState } from "react";
import "./Dira4.css";

function Dira4(): JSX.Element {
    const [fName,setFamalyName] = useState("");
    const [pNum,setPhoneNumber] = useState("");
    const [cNum,setCarNumber] = useState("");
    const [dNum,setDiraNumber] = useState("");
    
    const resetMe = ()=>{
        setFamalyName("");
        setPhoneNumber("");
        setCarNumber("");
        setDiraNumber("");
    }
    const changeFamalyName = (args:SyntheticEvent)=>{
        let myValue = (args.target as HTMLInputElement).value
        console.log(myValue);
        setFamalyName(myValue);
        
    };
    const changePhomeNumber = (args:SyntheticEvent)=>{
        let myValue1 = (args.target as HTMLInputElement).value
        console.log(myValue1);
        setPhoneNumber(myValue1);
        
    };
    const changeCarNumber = (args:SyntheticEvent)=>{
        let myValue2 = (args.target as HTMLInputElement).value
        console.log(myValue2);
        setCarNumber(myValue2);
        
    };
    const changeDiraNumber = (args:SyntheticEvent)=>{
        let myValue3 = (args.target as HTMLInputElement).value
        console.log(myValue3);
        setDiraNumber(myValue3);
        
    };
    return (
        <div className="Dira4 Box">
            <input type="text" placeholder="Add dira number:" id="diraNumber" onChange={changeDiraNumber} value={dNum}/> <br />
            <input type="text" placeholder="Add famaly name:" id="famalyName" onChange={changeFamalyName} value={fName}/> <br />
            <input type="text" placeholder="Add phone number:" id="phomeNumber" onChange={changePhomeNumber} value={pNum}/> <br />
            <input type="text" placeholder="Add car number:" id="carNumber" onChange={changeCarNumber} value={cNum}/> <br /> <hr />
            <input type="button" value="Reset details" onClick={resetMe}/>
            <div id="res">{dNum} <br />{fName} <br />{pNum} <br />{cNum}</div>

        </div>
    );
}

export default Dira4;
