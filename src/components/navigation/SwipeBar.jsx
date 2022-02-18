import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SwipeableViews from "react-swipeable-views";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import { InputBase, alpha, styled } from "@mui/material";
import item002 from "./images/item002.jpg";
import item003 from "./images/item003.jpg";
import item01 from "./images/item01.jpg";

const useStyles = makeStyles(() => {
  const baseStyle = {
    color: "white",
    height: "400px",
  };
  const activeBaseStyle = {
    color: "white",
    borderTopLeftRadius: "2px",
    borderTopRightRadius: "2px",
  };

  return {
    slide0: {
      ...baseStyle,
      backgroundColor: "skyblue",
    },
    slide1: {
      ...baseStyle,
      backgroundColor: "pink",
    },
    slide2: {
      ...baseStyle,
      backgroundColor: "orange",
    },
    image: {
      width: "30%",
      height: "50%",
      display: "block",
      opacity: 0.9,
      marginLeft: "auto",
      marginRight: "auto",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      maxWidth: "200px",
      maxHeight: "200px",
    },
    active0: {
      ...activeBaseStyle,
      backgroundColor: "blue",
    },
    active1: {
      ...activeBaseStyle,
      backgroundColor: "indianred",
    },
    active2: {
      ...activeBaseStyle,
      backgroundColor: "darkorange",
    },
  };
});

const Swipe = () => {
  const [swipeableActions, setSwipeableActions] = React.useState();
  const [tabIndex, setTabIndex] = React.useState(0);
  const classes = useStyles();
  const items = [item01, item002, item003];
  const itemNames = ["Item of the Week", "Shop Seasonal", "Shop Sale"];

  const handleChange = (index) => {
    setTabIndex(index);
  };

  return (
    <React.Fragment>
      <Tabs
        value={tabIndex}
        onChange={(e, value) => handleChange(value)}
        variant="fullWidth"
        indicatorColor="primary"
      >
        {itemNames.map((itemName, i) => (
          <Tab
            key={itemNames}
            className={tabIndex === i && classes[`active${i}`]}
            label={itemName}
          />
        ))}
      </Tabs>
      <SwipeableViews
        enableMouseEvents
        action={(actions) => setSwipeableActions(actions)}
        resistance
        animateHeight
        index={tabIndex}
        onChangeIndex={(index) => handleChange(index)}
      >
        {items.map((item, index) => (
          <div key={item} className={classes[`slide${index}`]}>
            <div className="container">
              <div className="image">
                <img className={classes.image} src={item} />
              </div>
              <div className="text">Hello World</div>
            </div>
          </div>
        ))}
      </SwipeableViews>
    </React.Fragment>
  );
};
export default Swipe;
