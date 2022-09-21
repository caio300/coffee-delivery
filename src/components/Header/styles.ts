import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 6.5rem;
  align-items: center;
  justify-content: space-between;
  margin-right: 10rem;
  margin-left: 10rem;
`

export const ActionContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  width: auto;
`

export const LocationSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${(prop) => prop.theme['purple-light']};
  color: ${(prop) => prop.theme['purple-dark']};
  border-radius: 6px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
`

export const ShoppingCarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;
  background: ${(prop) => prop.theme['yellow-light']};
  color: ${(prop) => prop.theme['yellow-dark']};
  position: absolute;

  svg {
    position: absolute;
  }

  span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    left: 1rem;
    bottom: 1rem;
    background: ${(prop) => prop.theme['yellow-dark']};
    border-radius: 50%;
    color: ${(prop) => prop.theme.white};
    font-size: 0.8rem;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`
