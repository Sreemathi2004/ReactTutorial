
function Header() {
    let customCss='code'; //ClassnAME
    const isLoggedIn=true;
    const greeting =isLoggedIn? <p>Welcome back</p> : <p>Please !Login </p>
    const list=['item1','item2','item3','item4'];
  return  (
    <>
    <div>
        <h1 className="bannerText">Sreemathi</h1>
        <p className="slogan">B.E CSE(CYBER SECUIRTY)</p>
         {/* javascript expression */}

         <p className={customCss}>25+45={25+45}</p>
         {/* JSX WITH CONDITIONAL RENDERING */}
         {greeting}

         {/* jsx with list */}
         <ul>
            {list.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
         </ul>
    </div>
    
    </>
  );
}

export default Header;