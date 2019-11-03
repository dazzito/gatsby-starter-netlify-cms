import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../layouts'
import Fade from "react-reveal/Fade";

import { GoogleMap, LoadScript } from '@react-google-maps/api'

import styled from "styled-components"


const Container = styled.div`
max-width:1366px ;
 margin-left: auto;
 margin-right: auto;
 min-height: 100vh;
 /* margin-bottom: 5em; */

  /* border: solid 2px #b7b28a;  */

  min-height: 400px;
  padding: 1.5em;
  color: lightgrey;
  
`;


  const RowWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

  `

  const MapWrapper = styled.div`
    flex: 1;
    min-width: 400px;
    #example-map{
      width: 100%;
      height: 100%;
    
    }
    

  `

  const FormWrapper = styled.div`
    flex: 1; 
    min-width: 400px;
    padding: 2em;
  `;


const Header = styled.div`

font-family: 'Playfair Display', serif;

  width: 100%; 
text-align: center; 
border-bottom: 2px solid #d0cba4; 
line-height: 0.1em;
margin: 10px 0 20px; 
color: #d0cba4;
line-height: 0;
font-size: 2.5rem;
word-break: break-word;
margin-top: 0.5em;

span { 
/* background: url("/img/bg2.png"); */
background: #3f3f3f;
border: solid;
/* background: url('/img/waranont-joe-EZwBNdnIlpo-unsplash.jpg');
background-size: auto; */
 padding:0 10px; 
}
`;  





function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state, 
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() { 

    const location = this.props.location

    return (
      <Layout location={location}>
 
<Container>
  <Fade>

  <h2>
               CONTACT
             </h2>
  </Fade>

   

  <RowWrapper>


  <MapWrapper>
  <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyDo5LF2ODnq7x_aLhD-_qCT1us57ILA0dc"
       
      >
        <GoogleMap
          id='example-map'
       
        >
          ...Your map components
        </GoogleMap>
      </LoadScript>

  </MapWrapper>

  <FormWrapper>

  <Fade>
          
          <form
             name="contact"
             method="post" 
             action="/contact/thanks/"
             data-netlify="true"
             data-netlify-honeypot="bot-field"
             onSubmit={this.handleSubmit}
           >
             {/* The `form-name` hidden field is required to su port form submissions without JavaScript */}
             <input type="hidden" name="form-name" value="contact" />
             <div hidden>
               <label>
                 Don’t fill this out:{' '}
                 <input name="bot-field" onChange={this.handleChange} />
               </label>
             </div>
             <div className="field">
               <label className="label" htmlFor={'name'}>
                 NAME
               </label>
               <div className="control">
                 <input
                   className="input"
                   type={'text'}
                   name={'name'}
                   placeholder="Your name"
                   onChange={this.handleChange}
                   id={'name'}
                   required={true}
                 />
               </div>
             </div>
             <div className="field">
               <label className="label" htmlFor={'email'}>
                 EMAIL ADDRESS
               </label>
               <div className="control has-icons-left">
                 <input
                   className="input"
                   type={'email'}
                   name={'email'}
                   onChange={this.handleChange}
                   id={'email'}
                   placeholder="Email"
                   required={true}
                 />
          
               </div> 
             </div> 
             <div className="field">
               <label className="label" htmlFor={'message'}>
                 MESSAGE
               </label>
               <div className="control">
                 <textarea
                   className="textarea"
                   placeholder="Enter message"
                   name={'message'}
                   onChange={this.handleChange}
                   id={'message'}
                   required={true}
                 />
               </div>
             </div>
             <div className="field">
               <button className="button is-light" type="submit">
                 Send
               </button>
             </div>
           </form>
        
           </Fade> 

  </FormWrapper>


  
              
   

  </RowWrapper>

   
       



        </Container>
       
       
      </Layout>
    )
  }
}
