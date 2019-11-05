
import styled from 'styled-components'

export const TeamPageWrapper = styled.div`
 


min-height: 400px;
padding: 1.5  em;
color: lightgrey;


`;





export const CloseButton = styled.div`
  position: absolute;
    top: 156px;
    right: 5vw;
    z-index: 2;

`


export const MemberPortal = styled.div`
 position: absolute;
    top: 170px;
    left: 0px;
    right: 0px;
    padding: 1em;
    margin-left: auto;
    margin-right: auto;
    max-width: 966px;
    background: transparent;
    z-index: 2;
    color: lightgrey;
    display: flex;
  


    @media (max-width: 768px) {
      flex-direction: column;
    }

`;


export const PortalTextContainer = styled.div`
  background: #000000ba;
  margin-left: 1em;
  padding: 1em;
  flex: 1;


`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 2s ease 0s;
  background: ${props => props.portalIsOpen ? '#000000a4' : 'transparent'};
  z-index: ${props => props.portalIsOpen ? 2 : 0};
  padding: 5vh;

  

`

export const ImageWrapper = styled.div`
  flex:1;

`;

export const MemberContainer = styled.div`
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1450px;
    margin-left: auto;
    margin-right: auto;
    min-width: 220px;
    
    

`;