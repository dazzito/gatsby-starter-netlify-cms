import React from 'react'

import Layout from '../../layouts'
import NewsRoll from '../../components/NewsRoll'
import Fade from 'react-reveal/Fade';


import styled from "styled-components"


const Container = styled.div`

margin-left: auto;
margin-right: auto;
/* margin-top: 5em; */
padding: 1.5em;

`;



export default class NewsIndexPage extends React.Component {
  render() {

     

    return (
      <Layout location={this.props.location}>

         


<Container>
  <Fade>
  <h2 style={{textAlign: 'center'}}>ข่าวสาร</h2>
  </Fade>
 
    <NewsRoll/>

</Container>
      </Layout>
    )
  }
}
