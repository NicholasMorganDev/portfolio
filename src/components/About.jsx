import { Col, Container, Row } from "react-bootstrap";

export default function About () {

  return (
    <section>
      <Container className="main-container">
        <Row className="bg-danger">
          <Col>
            <img src='https://picsum.photos/300/300'
            alt='profile picture'/>
          </Col>

          <Col>
            <h1>Hi I am Jiho</h1>
            <p>I am a software engineer located in South Florida, I love Java Script and the React Framework.</p>
            <p>Contact me: email@email.com</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}