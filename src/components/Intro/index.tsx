import {
  DivSeparator,
  ImageContainer,
  InfoDiv,
  InfoSpan,
  IntroContainer,
} from './styles'
import CoffeeIntro from '../../assets/coffee-intro.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <section>
        <article>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <InfoDiv>
            <DivSeparator>
              <p>
                <InfoSpan statusColor="yellowDark">
                  <ShoppingCart size={16} weight={'fill'} />
                </InfoSpan>
                Compra simples e segura
              </p>
              <p>
                <InfoSpan statusColor="yellow">
                  <Timer size={16} weight={'fill'} />
                </InfoSpan>
                Entrega rápida e rastreada
              </p>
            </DivSeparator>
            <DivSeparator>
              <p>
                <InfoSpan statusColor="brown">
                  <Package size={16} weight={'fill'} />
                </InfoSpan>
                Embalagem mantém o café intacto
              </p>
              <p>
                <InfoSpan statusColor="purple">
                  <Coffee size={16} weight={'fill'} />
                </InfoSpan>
                O café chega fresquinho até você
              </p>
            </DivSeparator>
          </InfoDiv>
        </article>
        <ImageContainer>
          <img src={CoffeeIntro} alt="Uma foto de um café" />
        </ImageContainer>
      </section>
    </IntroContainer>
  )
}
