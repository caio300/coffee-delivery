import { Intro } from '../../components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <div>
        <h1>Home</h1>
      </div>
    </HomeContainer>
  )
}
