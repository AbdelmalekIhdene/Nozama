import { Box, Container, Grid } from "@mui/material";
import OverallNavBar from "../navigation/Header"; // ??HOW TO ADD NAVBAR HERE (only other page +ItemView)
// No need to import OverallNav in here since we'll be importing itemsView into HomeView (and below havbar)
import { render } from "react-dom";
import Item from "./Item";
import React from "react";

export const ItemsView = () => {
  const items = [
    <Item
      key={"item1"}
      title={"Adidas Grand Court Sneakers"}
      price={"$53.00 CAD"}
      description={"Leather and Synthetic"}
      image={
        "https://di2ponv0v5otw.cloudfront.net/posts/2018/07/10/5b45a8162140f3f8d4b2e9b2/m_5b45a818534ef923d7f95f2c.jpeg"
      }
      alt={""}
    />,
    <Item
      key={"item2"}
      title={"Samsung TV"}
      price={"$600.00 CAD"}
      description={"58 inch crystal UHD display"}
      image={
        "https://images.samsung.com/is/image/samsung/latin-en-uhd-tu8000-un58tu8000pxpa-frontblack-286008980?$720_576_PNG$"
      }
      alt={"this image alt"}
    />,
  ]; // import component you created instead and pass props created in the other const(price, itemname..)
  return (
    <Container maxWidth="sm">
      {items.map((item) => (
        <div key={item}>{item}</div> // printing items directly (prints component directly)
      ))}
    </Container>
  );
};

// map
