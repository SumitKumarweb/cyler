import React from "react";
import "./ProfileCard.css";
import AdminProfile from "./admin.png";
import { Instagram, Facebook, GitHub, Twitter } from "@mui/icons-material";

const ProfileCard = () => {
  return (
    <div className="card">
      <div className="profile-container">
        <div className="profile">
          <img className="profile-img" src={AdminProfile} alt="" />
        </div>
        <div className="profile-name">Cyler</div>
        <p className="about">
          Start from Basic <br /> Frontend desginer
        </p>
        <button className="msg-btn">Message</button>
        <button className="follow-btn">Following</button>
        <div className="socail-media-icons">
          <Facebook />
          <Instagram />
          <Twitter />
          <GitHub />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
