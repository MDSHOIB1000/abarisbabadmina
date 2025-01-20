import React from "react";
import "../cartificate/certificate.css";
import logo from "../../../asesets/logo/PayPanda_logo_Final-09-e1670775011263.png";
export default function Certificate() {
  return (
    <div className="main mt-4">
      <div className="text-wrap">
        <div className="logo-wrap">
          <img src={logo} className="full" />
        </div>
        <div className="content">
          <h1 className="header">certificate of authorization</h1>
          <div className="certify">
            <div className="nameof">
              <small>This is to certify that</small>
              <h2>
                mr / ms <span>aryan kumar (digital seva kendra)</span>
              </h2>
            </div>
            <div className="nameof">
              <small>
                is appointed as the customer service point of RNFI sevces
                PVT.Ltd.{" "}
              </small>
              <h2>
                <span>
                  s/o mahendra, okhla vihar, a-35, near iqbal faizi hospital,
                  south jamia nagar, india, 110025, dehli, 226001
                </span>
              </h2>
            </div>
          </div>
          <div className="validity">
            <div className="item">
              <h1 className="signature"></h1>
              <p>authorized signature</p>
            </div>
            <div className="item">
              <h1>r001116099</h1>
              <p>agent code </p>
            </div>
            <div className="item">
              <h1>31 march 2029</h1>
              <p>valid upto</p>
            </div>
            <div className="item2">
              <span>power by</span>
              <div>
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
