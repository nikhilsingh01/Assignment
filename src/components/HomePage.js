import React from "react";
import "./HomePage.css";
import Card from "./card";
import CardComponent from "./CardComponent";

function HomePage() {
  return (
    <div>
      {/* <div className="search-container">
        <div className="search1 form-outline">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" htmlFor="form1">
            Search
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div> */}

      <CardComponent
        rfqid="888200"
        createdDate={new Date()}
        closingDate={new Date()}
        dealNo="1234"
        title="Spare Parts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nisl velit aliquet nunc, vitae aliquam nisl nisl eu nunc. Sed vitae nisl eget nisl aliquam aliquet. Sed vitae nisl eget nisl aliquam aliquet."
        tags={["Agriculture", "Product", "Spare Parts"]}
      />
      <CardComponent
        rfqid="888200"
        createdDate={new Date()}
        closingDate={new Date()}
        dealNo="1234"
        title="Spare Parts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nisl velit aliquet nunc, vitae aliquam nisl nisl eu nunc. Sed vitae nisl eget nisl aliquam aliquet. Sed vitae nisl eget nisl aliquam aliquet."
        tags={["Agriculture", "Product", "Spare Parts"]}
      />
      <CardComponent
        rfqid="888200"
        createdDate={new Date()}
        closingDate={new Date()}
        dealNo="1234"
        title="Spare Parts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nisl velit aliquet nunc, vitae aliquam nisl nisl eu nunc. Sed vitae nisl eget nisl aliquam aliquet. Sed vitae nisl eget nisl aliquam aliquet."
        tags={["Agriculture", "Product", "Spare Parts"]}
      />
      <CardComponent
        rfqid="888200"
        createdDate={new Date()}
        closingDate={new Date()}
        dealNo="1234"
        title="Spare Parts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nisl velit aliquet nunc, vitae aliquam nisl nisl eu nunc. Sed vitae nisl eget nisl aliquam aliquet. Sed vitae nisl eget nisl aliquam aliquet."
        tags={["Agriculture", "Product", "Spare Parts"]}
      />
    </div>
  );
}

export default HomePage;
