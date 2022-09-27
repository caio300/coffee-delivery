import {
  CartButton,
  CoffeContainer,
  CountSpan,
  LessButton,
  MoreButton,
  PriceContainer,
  PriceParagraph,
  TagSpan,
} from './styles'
import expressoTradicional from '../../assets/Coffee/expressoTradicional.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function Coffes() {
  return (
    <CoffeContainer>
      <img src={expressoTradicional} alt="" />
      <TagSpan>TRADICIONAL</TagSpan>
      <h4>Expresso Tradicional</h4>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <PriceContainer>
        <PriceParagraph>
          R$<span>9,00</span>
        </PriceParagraph>
        <MoreButton>
          <Minus />
        </MoreButton>
        <CountSpan>1</CountSpan>
        <LessButton>
          <Plus />
        </LessButton>
        <CartButton>
          <ShoppingCart size={22} weight={'fill'} />
        </CartButton>
      </PriceContainer>
    </CoffeContainer>
  )
}
