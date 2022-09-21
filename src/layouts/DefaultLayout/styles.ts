import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  width: auto;
  background: ${(props) => props.theme['gray-100']};
  display: flex;
  flex-direction: column;
`
