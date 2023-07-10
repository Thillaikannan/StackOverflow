import React, { useState } from "react";
import "../../App.css";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import { BsChatSquare } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Chatbot from "../../components/Chatbot/Chatbot";

const Home = () => {
  const [BotIsOpen, setBotIsOpen] = useState(false);
  return (
    <div className="home-container-1">
     
      <LeftSidebar />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
