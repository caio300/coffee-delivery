import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 6.5rem;
  align-items: center;
  justify-content: space-around;
`

export const ActionContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${(prop) => prop.theme['purple-light']};
  color: ${(prop) => prop.theme['purple-dark']};
  border-radius: 6px;
`

export const ShoppingCarContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;
  background: ${(prop) => prop.theme['yellow-light']};
  color: ${(prop) => prop.theme['yellow-dark']};

  svg {
    position: absolute;
  }

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    left: 1rem;
    bottom: 1rem;
    background: ${(prop) => prop.theme['yellow-dark']};
    border-radius: 50%;
    color: ${(prop) => prop.theme.white};
    font-size: 0.86rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }
`