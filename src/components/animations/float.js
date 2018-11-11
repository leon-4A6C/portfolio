import { keyframes } from 'styled-components'

export const floatY = props => keyframes`
  0% {
    transform: translateY(-${props.floatLength || '0.25em'});
  }
  100% {
    transform: translateY(${props.floatLength || '0.25em'});
  }
`

export const floatX = props => keyframes`
  0% {
    transform: translateX(-${props.floatLength || '0.25em'});
  }
  100% {
    transform: translateX(${props.floatLength || '0.25em'});
  }
`