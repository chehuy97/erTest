import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Acticle = () => {
  const render_acticle_colection = () => {
    return (
      <li className="media">
        <img src="..." className="mr-3" alt="..." />
        <div className="media-body">
          <h5 className="mt-0 mb-1">List-based media object</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </li>
    );
  };

  return (
      <div>
          <ul className="list-unstyled">
            {render_acticle_colection()}
            {render_acticle_colection()}
            {render_acticle_colection()}
          </ul>
      </div>
  )
};

export default Acticle;
