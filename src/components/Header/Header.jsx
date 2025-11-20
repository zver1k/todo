import {AiOutlineLogin, AiOutlineLogout} from "react-icons/ai";

function Header( { isLogin } ){
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <span className="header__logo-part header__logo-part--first">TO-DO</span>
        <span className="header__logo-part header__logo-part--second">APP</span>
      </a>

      {isLogin
        ? (<a href="#" className="header__auth"><AiOutlineLogout /></a>)
        : (<a href="#" className="header__auth"><AiOutlineLogin /></a>)}
    </header>
  )
}

export default Header;
    