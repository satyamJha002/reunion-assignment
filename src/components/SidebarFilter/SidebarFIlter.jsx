import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import styles from "./SidebarFilter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const SidebarFilter = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const DrawerList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <Stack spacing={2} style={{ padding: "10px" }}>
        <h5
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          Filter
        </h5>
        <div>
          <Item>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </Item>
        </div>
        <div>
          <Item>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" />
          </Item>
        </div>
        <div>
          <Item>
            <label htmlFor="subcategory">Subcategory</label>
            <input type="text" name="subcategory" id="subcategory" />
          </Item>
        </div>
        <div>
          <Item>
            <label htmlFor="createdAt">Created At</label>
            <input type="date" name="createdAt" id="createdAt" />
          </Item>
        </div>
        <div>
          <Item>
            <label htmlFor="updatedAt">Updated At</label>
            <input type="date" name="updatedAt" id="updatedAt" />
          </Item>
        </div>
        <div>
          <Item>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" />
          </Item>
        </div>
        <div>
          <Item>
            <label htmlFor="sale_price">Sale Price</label>
            <input type="number" name="sale_price" id="sale_price" />
          </Item>
        </div>
        <button className={styles.clear}>Clear Filter</button>
      </Stack>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <>
          <Button onClick={toggleDrawer(anchor, true)}>
            <FontAwesomeIcon
              icon={faFilter}
              style={{ fontSize: "20px", color: "black" }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {DrawerList(anchor)}
          </Drawer>
        </>
      ))}
    </div>
  );
};

export default SidebarFilter;
