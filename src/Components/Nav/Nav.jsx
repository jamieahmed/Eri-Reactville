import { NavLink } from 'react-router-dom'

import Wallet from "./Wallet"
import Clock from './Clock'
const Logo = 'https://tse1.mm.bing.net/th?id=OIP.K7KqaxcQvbUq0k_QrZpnWgHaFO&pid=Api&P=0'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to='/'><img src={Logo} alt="react-logo"/></NavLink>
      <NavLink to='/bank'>BANK</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/postoffice'>POST OFFICE</NavLink>
      <Wallet cash={props.cash} />
      <Clock daytime={props.daytime} setDaytime={props.setDaytime}/>
    </nav>
  )
}

export default Nav