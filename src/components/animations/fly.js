import { keyframes } from 'styled-components'

export const flyIn = keyframes`
from {
  transform: translateY(-100%);
}
to {
  transform: translateY(0%);
}
`

export const flyInRev = keyframes`
from {
  transform: translateY(100%);
}
to {
  transform: translateY(0%);
}
`

export const flyOut = keyframes`
from {
  transform: translateY(0%);
}
to {
  transform: translateY(-100%);
}
`

export const flyOutRev = keyframes`
from {
  transform: translateY(0%);
}
to {
  transform: translateY(100%);
}
`
export const flyLeft = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0%);
}
`

export const flyRight = keyframes`
from {
  transform: translateX(100%);
}
to {
  transform: translateX(0%);
}
`