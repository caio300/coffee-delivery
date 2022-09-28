import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(prop) => prop.theme['brown-300']};
    margin-bottom: 3.5rem;
    margin-top: 2rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;
  width: 70rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 94%;
    margin-top: 4rem;
  }
`
