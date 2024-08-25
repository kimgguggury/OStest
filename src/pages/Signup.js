import signupCss from "../css/signup.module.css";
import {useState} from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [phone,setPhone] = useState(null);
  const [passWord,setPassword] = useState(null);
  const [isPassWord,setIsPassword] = useState(null);
  const [passwordMessage,setPasswordMessage] = useState(null);
  const [name,setName] = useState(null);

  const handlePhoneChange = (e)=> {
    setPhone(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleIsPasswordChange = (e) => {
    setIsPassword(e.target.value);
  }
  const handleName = (e) => {
    setName(e.target.value);
  }
  const signupStyle = {
    height: '100vh',
    backgroundColor: 	'#F5F6F3', // 원하는 색상으로 변경
    margin: 0
  };  
  const handleSignupClick = (e) => { 
    if (passWord !== isPassWord) {
      e.preventDefault();
      setPasswordMessage("비밀번호가 불일치합니다.");
    }
  };
  
  return(
    <div>
      <form className={signupCss.container}>
        <fieldset>
          <h1>팜OS</h1>
          <ul>
            <li><input type="text" value = {phone} onChange={handlePhoneChange} placeholder='전화번호 (-없이 작성하세요)' /></li>
            <li><input type="password" value = {passWord} onChange={handlePasswordChange} placeholder='비밀번호' /></li>
            <li><input type="password" value = {isPassWord} onChange={handleIsPasswordChange} placeholder='비밀번호'/></li>
            {passwordMessage && <span className={signupCss.passwordError}>{passwordMessage}</span>}
            <li><input type="text"value = {name} onChange={handleName} placeholder='이름' /></li>
            <li><input type="date" /></li>
          </ul>
          <button onClick={handleSignupClick}>가입</button>
        </fieldset>
        <fieldset>
          <p>이미 회원이신가요? <Link to ="/">로그인</Link></p>
        </fieldset>
      </form>
    </div>
  )
}

export default Signup;