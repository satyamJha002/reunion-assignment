import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import styles from "./GroupSidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
const GroupSidebar = () => {
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
          Create Group
        </h5>{" "}
        <div>
          <Item>
            <select name="" id="">
              <option value="category">Category</option>
              <option value="subcategory">SubCategory</option>
            </select>
          </Item>
        </div>
        <button className={styles.btn1}>Clear Grouping</button>
        <button className={styles.btn2}>Apply Group</button>
      </Stack>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <>
          <Button onClick={toggleDrawer(anchor, true)}>
            <FontAwesomeIcon
              icon={faDatabase}
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

export default GroupSidebar;
