import styled from 'styled-components'

export const CoffeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 19.4rem;
  width: 16rem;
  background: ${(prop) => prop.theme['gray-200']};
  border-radius: 6px 36px;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    width: 7.5rem;
    margin-top: -2rem;
  }

  h4 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }

  p {
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(prop) => prop.theme['brown-100']};
    margin: 0 1rem 0 1rem;
  }
`

export const TagSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.4rem;
  background: ${(prop) => prop.theme['yellow-light']};
  color: ${(prop) => prop.theme['yellow-dark']};
  border-radius: 100px;
  padding: 4px 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
`

export const PriceParagraph = styled.p`
  color: ${(prop) => prop.theme['brown-200']};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  span {
    color: ${(prop) => prop.theme['brown-200']};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 31px;
    margin-left: 0.2rem;
  }
`

export const MoreButton = styled.button`
  display: flex;
  align-items: center;
  background: ${(prop) => prop.theme['gray-400']};
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${(prop) => prop.theme.purple};
  border-radius: 5px 0 0 5px;
  cursor: pointer;

  :hover {
    color: ${(prop) => prop.theme['purple-dark']};
  }
`

export const LessButton = styled.button`
  display: flex;
  align-items: center;
  background: ${(prop) => prop.theme['gray-400']};
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${(prop) => prop.theme.purple};
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  :hover {
    color: ${(prop) => prop.theme['purple-dark']};
  }
`

export const CountSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  background: ${(prop) => prop.theme['gray-400']};
  padding: 0.5rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(prop) => prop.theme['purple-dark']};
  color: ${(prop) => prop.theme.white};
  border: none;
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 6px;
  margin-left: 0.5rem;
  cursor: pointer;

  :hover {
    background: ${(prop) => prop.theme.purple};
  }
`
