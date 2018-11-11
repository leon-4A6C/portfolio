import React from 'react'
import styled, { keyframes } from 'styled-components'

import Page from '../components/Page'
import { fadeIn } from '../components/animations/fade'
import { flyIn } from '../components/animations/fly'
import { floatY } from '../components/animations/float'

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 15em;
  transition: all 300ms;
  text-align: center;
  transform: skew(-10deg) rotateZ(-10deg);
  overflow: hidden;
  margin-bottom: 0.3em;
  position: relative;
  @media only screen and (max-width: 1050px) {
    font-size: 10em;
  }
  @media only screen and (max-width: 667px) {
    font-size: 7.5em;
  }
  @media only screen and (max-width: 425px) {
    font-size: 5em;
  }
  @media only screen and (max-height: 1000px) {
    margin-top: 0.3em;
  }
  @media only screen and (max-height: 930px) {
    margin: 0.1em 0;
  }
  @media only screen and (max-height: 800px) {
    margin: 0;
  }
`

const TransSpan = styled.span`
  display: block;
  animation: ${flyIn} ${({ time }) => time || '300ms'} ease-in-out,
    ${fadeIn} ${({ time }) => time || '300ms'} ease-in-out;
`

const H4 = styled.h4`
  text-align: center;
  color: ${({ theme }) => theme.color.textLight};
  animation: ${fadeIn} ${({ timeFade }) => timeFade || '300ms'} ease-in-out,
    ${floatY} ${({ timeFloat }) => timeFloat || '1s'} ease-in-out alternate
      infinite;
  transition: font-size 300ms;
  @media only screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`

const shootingDivAni = keyframes`
  0% {
    width: 0em;
    left: 0;
  }
  50% {
    width: 2em;
  }
  100% {
    width: 0em;
    left: 100%;
  }
`

const ShootingDiv = styled.div`
  background-color: ${({ theme }) => theme.color.text};
  height: 0.4em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation: ${shootingDivAni} ${({ time }) => time || '600ms'}
    ${({ offset }) => offset || '600ms'} ease-in-out;
`

export default class LandingView extends React.Component {
  render() {
    return (
      <Page id="home">
        <H1>
          <TransSpan time="600ms">léon in</TransSpan>
          <ShootingDiv offset="900ms" />
          <TransSpan>'t Veld</TransSpan>
        </H1>
        <H4 floatLength="0.3em">Developer. Designer. Awesome human being.</H4>
      </Page>
    )
  }
}