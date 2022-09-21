import { NavLink } from 'react-router-dom'
import {
  ActionContainer,
  HeaderContainer,
  LocationSpan,
  ShoppingCarContainer,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffee from '../../assets/logo-coffee.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <span>
          <img src={LogoCoffee} alt="" />
        </span>
      </NavLink>
      <ActionContainer>
        <LocationSpan>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationSpan>
        <NavLink to="/checkout" title="Shopping Car">
          <ShoppingCarContainer>
            <ShoppingCart size={22} weight="fill" />
            <span>0</span>
          </ShoppingCarContainer>
        </NavLink>
      </ActionContainer>
    </HeaderContainer>
  )
}
