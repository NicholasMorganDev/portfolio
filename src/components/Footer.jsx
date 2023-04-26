import { Container, Row, Col } from 'react-bootstrap';

export default function Footer () {
  const currentYear = new Date().getFullYear();
  const gitHubUrl = "https://github.com/NicholasMorganDev"
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {currentYear} Nicholas Morgan <br/>
            <a className="git-link" href={gitHubUrl} rel='noreferrer' target="_blank">Code In Github</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}