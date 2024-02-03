import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // Assume similar styling for both food and drinks
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";

// The Menu component displays a list of items (either snacks or drinks)
function Menu({ items, title }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <ListGroup>
            {/* Mapping through the items prop to display each item */}
            {items.map(item => (
              // Link component for navigation. URL is dynamically created based on item type and ID.
              <Link to={`/${title.toLowerCase()}/${item.id}`} key={item.id}>
                {/* ListGroupItem displays the name of each item */}
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
