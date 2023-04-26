import { Container, Row, Col } from 'react-bootstrap';
import { Github } from "react-bootstrap-icons";

export default function Footer () {
  const currentYear = new Date().getFullYear();
  const gitHubUrl = "https://github.com/NicholasMorganDev"
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <p>
              <a className="git-link" 
              href={gitHubUrl} 
              rel='noreferrer' 
              target="_blank">
              <Github size='40' color='red'/>
              <br/>
              </a>&copy; {currentYear} Nicholas Morgan 
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}