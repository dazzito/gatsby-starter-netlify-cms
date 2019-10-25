import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../layouts'
import Fade from "react-reveal/Fade";



import styled from "styled-components"


const Container = styled.div`
margin-left: auto;
margin-right: auto;
/* margin-top: 5em; */

padding: 2.5em;
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
          <div className="columns">
            <div className="column is-10 is-offset-1">
            <Fade>
              <Header>
                <span>
                  CONTACT
                </span>
                
              </Header>
              
           
              </Fade> 
              
   
            </div>
          </div>

       



        </Container>
       
       
        <section className="section">
          <div className="container">
            <div className="content">
          
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
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div> 
                </div> 
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
