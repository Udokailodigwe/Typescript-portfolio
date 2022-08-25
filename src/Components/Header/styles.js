import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  header__main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "75vh",
  },

  profile__picture: {
    width: "350px",
    height: "300px",
    display: "flex",
    alignSelf: "center",
  },

  header__text: {
    padding: "30px",
  },
}));
