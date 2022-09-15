import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Recipes(props) {
  const displayRecipes = props.recipes.map((eachRecipe) => 
      <ListGroup.Item>{eachRecipe}</ListGroup.Item>)

  return (
      <Container>
          <Card>
              <Card.Body>
                  <Card.Title>Our Packages</Card.Title>
                  <Card.Text>
                      Check out some of our packages! Every package is ethically sourced and organic!
                  </Card.Text>
              </Card.Body>
              <ListGroup>
                  {displayRecipes} 
              </ListGroup>
          </Card>
      </Container>
  )
}
