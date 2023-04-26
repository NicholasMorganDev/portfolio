import { Col, Card } from "react-bootstrap";

export default function GalleryCard ({data: {id, name, content, website, cover}}) {


  return (
    <Col>
      <Card>
        <figure>
          <a href={website}
          target="_blank"
          rel="noreferrer">
          <Card.Img src={cover}/>
          </a>
        </figure>

        <article>
          <header>
            <h2>{name}</h2>
            <p>{content}</p>
          </header>
        </article>

      </Card>
    </Col>
  )
}