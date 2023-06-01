import React, { useState, useEffect } from "react";
import { Utils } from "alchemy-sdk";
import { alchemy } from "../configs";
import { timeAgo, dateFormat, shortenAddress } from "../utils";
import { useNavigate, useParams } from "react-router-dom";
import { getBlockInfo } from "../alchemy";

const Address = () => {
  return <div>Address</div>;
};

export default Address;
