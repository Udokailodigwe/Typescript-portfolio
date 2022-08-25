import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appbar: {},
  linkbox: {
    display: "flex",
    justifyContent: "flex-end",
  },

  desktop__linkitem: {
    display: "grid",
    gridGap: "60px",
  },
  mobile__linkitem: {
    display: "grid",
    gridGap: "30px",
  },
}));
