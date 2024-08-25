
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