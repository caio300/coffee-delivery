import { Coffes } from '../../components/Coffes'
import { Intro } from '../../components/Intro'
import { CardsContainer, CoffeeList, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList>
        <h2>Nossos cafés</h2>
        <CardsContainer>
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
          <Coffes />
        </CardsContainer>
      </CoffeeList>
    </HomeContainer>
  )
}
