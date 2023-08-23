import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  Alert,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useSelector } from "react-redux";

function Card() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const perm = () => {
    if (!isAuth) {
      alert("Please Login First");
    }
  };
  const fo = () => {
    if (!isAuth) {
      alert("Please Login First");
    }
  };
  return (
    <div
      style={{
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TableContainer
        component={Paper}
        style={{
          width: "80%",
          borderRadius: "15px",
          border: "1px solid rgba(0, 0, 0, 0.2)",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="your-table">
          <TableBody>
            <TableRow>
              <TableCell
                style={{
                  padding: "10px",
                  textAlign: "center",
                  borderRight: "1px solid rgba(0, 0, 0, 0.12)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ margin: "0 5px" }}>1 Feb 2023</span>
                  <span className="id-1" style={{ margin: "0 5px" }}>
                    RFQ ID
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      borderRadius: "15px",
                      background: "green",
                      padding: "3px 10px",
                      boxSizing: "border-box",
                    }}
                  >
                    <CheckCircleOutline
                      style={{ color: "white", verticalAlign: "middle" }}
                    />{" "}
                    <span style={{ color: "white", verticalAlign: "middle" }}>
                      Verified
                    </span>
                  </span>
                </span>
              </TableCell>
              <TableCell style={{ padding: "10px", textAlign: "center" }}>
                <strong>Closing Date</strong>
                <br />
                25 Feb 2023
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={{
                  padding: "10px",
                  borderRight: "1px solid rgba(0, 0, 0, 0.12)",
                }}
              >
                <p>Deal no:</p>
                <p>Spare Parts</p>
                <p style={{ textAlign: "left" }}>
                  Supply AC Stator Coil Dummy Text Lorem Ipsum Dummy Supply AC
                  Stator Coil Dummy Text Lorem Supply AC Stator Coil Dummy Text
                  Lorem. Supply AC Stator Coil Dummy
                </p>
              </TableCell>
              <TableCell style={{ padding: "10px", textAlign: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Button
                    onClick={() => {
                      perm();
                    }}
                    variant="contained"
                    color="primary"
                    style={{ marginBottom: "10px" }}
                  >
                    Add to my Deals
                  </Button>
                  <Button
                    onClick={() => {
                      fo();
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Check Details
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Card;
