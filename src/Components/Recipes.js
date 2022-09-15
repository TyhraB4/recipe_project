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
                  <Card.Title>${}</Card.Title>
                  <Card.Text>
                      ${}
                  </Card.Text>
              </Card.Body>
              <ListGroup>
                  {displayRecipes} 
              </ListGroup>
          </Card>
      </Container>
  )
}
