import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// Function component MenuItem displays the details of a single item (snack or drink).
function MenuItem({ items, cantFind, type }) {
  // Retrieve the 'id' parameter from the URL using the useParams hook.
  const { id } = useParams();
  // Find the item by its id in the array of items passed as a prop.
  let item = items.find(item => item.id === id);
  // If the item cannot be found, redirect to the 'cantFind' URL passed as a prop.
  if (!item) return <Redirect to={cantFind} />;
  if (!item) return <Redirect to={cantFind} />;
  // Render the item details within a Card component from Reactstrap.
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          {item.recipe && <p><b>Recipe:</b> {item.recipe}</p>}
          {item.serve && <p><b>Serve:</b> {item.serve}</p>}
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuItem;
