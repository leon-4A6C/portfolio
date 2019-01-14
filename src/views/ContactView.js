import React from "react"
import styled from "styled-components"
import ReCAPTCHA from "react-google-recaptcha";

import Page from '../components/Page'
import Form, { Input, Submit } from "../components/Form"
import Container from "../components/Container"

const H3 = styled.h3`
    text-align: center;
    padding-top: 2em;
    font-size: 2rem;
`

export default class ContactView extends React.Component {

    state = {
        name: "",
        project: "",
        email: "",
        phone: "",

        sending: false,
        send: false,
        error: false,
    }

    submit = e => {

        e.preventDefault();

        this.setState({
            sending: true
        })

        this.formData = new FormData(e.target);
        this.recaptchaRef.execute()
    }
    
    captchaChange = (res) => {

        if(!res)
            return;

        this.formData.append("g-recaptcha-response", res)

        fetch(
            "/sendmail.php",
            {
                method: "POST",
                body: this.formData
            }
        ).then(res => {
            if(res.ok) {
                this.setState({sending: false, send: true, error: false})
            } else {
                this.setState({sending: false, send: false, error: true})
            }
        })
        .catch(err => {
            this.setState({error: true, sending: false, send: false})
        })
    }

    render() {
        return (
            <Page>
                <H3>
                    Contact
                </H3>
                <Container>
                    <Form onSubmit={this.submit}>
                        Hello my name is 
                        <Input name="name" required onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name}></Input>
                        and I would like to contact you for this awesome project about
                        <Input name="project" required onChange={(e) => this.setState({ project: e.target.value })} value={this.state.project}></Input>.
                        I would like your help, you can contact me with this email
                        <Input name="email" required type="email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email}></Input> or this phone number <Input name="phone" required onChange={(e) => this.setState({ phone: e.target.value })} value={this.state.phone}></Input>.
                        <br/>
                        <br/>
                        <br/>
                        Hope to hear from you soon.
                        <ReCAPTCHA
                            ref={ref => this.recaptchaRef = ref}
                            sitekey="6LcTuYkUAAAAALaFtFGiLM5XmM31j00299Sujceb"
                            size="invisible"
                            onChange={this.captchaChange}
                        />
                        <Submit disabled={this.state.sending || this.state.send}>Send</Submit>
                        {this.state.sending ? "message is sending...":""}
                        {this.state.send ? "message is send":""}
                        {this.state.error ? "Oh no something went wrong, try again.":""}
                    </Form>
                </Container>
            </Page>
        )
    }
}