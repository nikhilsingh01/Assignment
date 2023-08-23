import React from "react";
import "./CardComponent.css";
import { CheckCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";

function DateTextFromDateTime(dateTime) {
  const date = new Date(dateTime);
  return `${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()}`;
}

function CardTags({ tag }) {
  return (
    <div className="card-tag">
      <p>{tag}</p>
    </div>
  );
}

function CardComponent({
  rfqid,
  createdDate,
  closingDate,
  dealNo,
  title,
  description,
  tags,
}) {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const auth = () => {
    if (!isAuth) {
      alert("Please Login First, Click 'Seller Log in'");
    }
  };
  const auth1 = () => {
    if (!isAuth) {
      alert("Please Login First, Click 'Seller Log in'");
    }
  };
  return (
    <div className="card-component">
      <div className="card-header">
        <div className="card-header-left">
          <p>{DateTextFromDateTime(createdDate)}</p>
          <p>
            <strong>RFQ ID:</strong> {rfqid}
          </p>
          <div className="card-verified">
            <CheckCircle />
            <p>Verified</p>
          </div>
        </div>
        <div className="card-header-right">
          <p>
            <strong>Closing Date:</strong> {DateTextFromDateTime(closingDate)}
          </p>
        </div>
      </div>
      <div className="card-body">
        <div className="card-body-left">
          <p className="card-info">Deal No. {dealNo}</p>
          <div className="card-row">
            <p className="card-heading">{title}</p>
            <div className="card-live">Live</div>
          </div>
          <p className="card-description">{description}</p>
          <div className="card-tags">
            {tags.map((tag, index) => (
              <CardTags key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className="card-body-right">
          <button
            className="card-button"
            onClick={() => {
              auth();
            }}
          >
            Add to my deals
          </button>
          <button
            className="card-button button-secondary"
            onClick={() => {
              auth1();
            }}
          >
            Check Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
