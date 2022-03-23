import React, { useState } from "react";
import Display from "./components/Display";
import shelt from "./paint/Gerald_G_Campfires_and_cooking_cranes_8.png"
import treehouse from "./paint/3731068.png"
import tower from "./paint/tower.png"
import castle from "./paint/castle.png"
import "./style/App.css"
import CheckBox from "./style/UI/CheckBox/CheckBox";
import InputRange from "./style/UI/Input/InputRange";


function App() {
  const [pass, setpass] = useState("")
  const [checkId] = useState([false, false, false])
  const [len, setLen] = useState(0)


  function gen_password(len, check) {
    let password = ""
    let num = "0123456789";
    let regist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbol = "!№;%:?*()_+=";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (check[0]) { str += num }
    if (check[1]) { str += symbol }
    if (check[2]) { str += regist }
    for (var i = 0; i < len; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    return setpass(password);
  }

  function getLen(e) {
    gen_password(e, checkId)
    setLen(e)
  }
  function protectImg(length) {
    if (length <= 15) return <img  alt="shelt" src={shelt} />
    if (len >= 16 && len <= 20) return <img alt="treehouse"  src={treehouse} />
    if (len >= 21 && len <= 35) return <img alt="tower" src={tower} />
    if (len >= 36 ) return <img alt="castle" src={castle} />
  }

  const UseCheck = (e) => {

    if (e.target.checked) {
      checkId[e.target.id - 1] = true
    }
    else checkId[e.target.id - 1] = false
  }

  return (
    <div className="App">
      <Display>{pass}</Display>
      <div className="setOptions">
        <InputRange max={50} min={0} getLen={getLen} />
        <div>

          <CheckBox id={1} onChange={UseCheck}>Цифры</CheckBox>
          <CheckBox id={2} onChange={UseCheck}>Символы</CheckBox>
          <CheckBox id={3} onChange={UseCheck}>Регистр</CheckBox>
        </div>

      </div>
      <div className="container_img" > {
        protectImg(len)
      }

      </div>


    </div>
  );
}

export default App;
