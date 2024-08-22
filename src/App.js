import styles from "./Login.module.css";
import signupCss from "./signup.module.css";
import HomeCss from "./Home.module.css";
import {useState, useEffect} from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Community from "./pages/Community";

function App() {
 
  return (
    <div> 
      <Routes>
        <Route path="/" element ={<Login />} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/home" element = {<Home />} />
        <Route path="/community" element= {<Community />} />
      </Routes>     
    </div>
  );
}

function Login() {
	const [id, setId] = useState(null);
	const [passWord,setPassWord] = useState(null);
	const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassWord(e.target.value);
  };

  const containerStyle = {
    height: '100vh',
    backgroundColor: 	'#F5F6F3', 
    margin: 0
  };

  
	return(
		<div  style={containerStyle}>
			<form className={styles.login}>
				<fieldset>
          <h1>팜OS</h1>
					<ul>
						<li><input type="text" value = {id} className ={styles.id} onChange={handleIdChange} placeholder='전화번호 (-없이 작성하세요)'/></li>
						<li><input type="password" value = {passWord} className={styles.password} onChange={handlePasswordChange} placeholder='비밀번호'/></li>
					</ul>
          <div>
					  <button className={styles.loginButton}>로그인</button>
          </div>
          <ul>
            <li><span>아직 회원이 아니신가요?</span>  <Link to="/signup">회원가입</Link></li>
            <li><span>비밀 번호가 기억이 안나시나요?</span>  <a href="/">비밀번호 찾기</a></li>
          </ul>
				</fieldset>
			</form>
			
		</div>
	)
}

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

function Home() {
  return (
    <div className={HomeCss.container}>
      <div className={HomeCss.profile}>
        <div className= {HomeCss.photo} />
        <h1>유저님<br />스마트팜</h1>
        
      </div>
      <div className={HomeCss.content}>
        <div className={HomeCss.box}><h1>CCTV</h1></div>
        <div className={HomeCss.box}><h1>온도/습도/토양</h1></div>
        <div className={HomeCss.box}><h1>건강리포트</h1></div>
        <div className={HomeCss.box}><h1>게시판</h1></div>
      </div>
    </div>
  )
}

export default App;
