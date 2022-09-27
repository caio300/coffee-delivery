import styled from 'styled-components'
import IntroBackground from '../../assets/intro-background.svg'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('${IntroBackground}');
  background-position: 0%;
  background-repeat: repeat;
  background-size: 100%;
  height: auto;

  section {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    width: 70rem;
    gap: 2rem;

    @media (max-width: 768px) {
      display: flex;
      flex-wrap: wrap-reverse;
      justify-content: center;
      align-items: center;
      margin: 0 1rem 0 1rem;
    }
  }

  article {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: ${(prop) => prop.theme['brown-400']};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  article > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 4.125rem;
  }
`
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`

export const DivSeparator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const STATUS_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  brown: 'brown-200',
  purple: 'purple',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const InfoSpan = styled.span<StatusProps>`
  background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  color: ${(props) => props.theme.white};
  border-radius: 100%;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
`

export const ImageContainer = styled.div`
  height: 22.5rem;
  img {
    height: 100%;
  }
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`
