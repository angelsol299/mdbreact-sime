import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

const LandingContent = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol md="12" className="mx-auto mt-4">
          <img
            src="https://cdn.vox-cdn.com/thumbor/cBuUJxcHnQEP7LYQnKtHufyoQ4k=/0x0:4200x2804/1200x800/filters:focal(1764x1066:2436x1738)/cdn.vox-cdn.com/uploads/chorus_image/image/51660011/shutterstock_461503918.1478191107.jpg"
            alt=""
            style={{ width: "100%", height: "500px", marginTop: "-15px" }}
          />

          <div className="MiddleBanner">
            <div className="banner-text">
              <h1>Grupo SIME</h1>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "-25px",
                  fontStyle: "italic"
                }}
              >
                Tu energia en buenas manos
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default LandingContent;
