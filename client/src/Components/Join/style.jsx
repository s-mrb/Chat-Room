import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main_grid: {
    marginTop: "2vh",
    maxWidth: "485px",
    minHeight: "391",
    height: "80vh",
    justify: "center",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "black",
  },
  textField:{
    marginBottom: "3%" 
  },
  button:{
    float: "right",
    backgroundColor: "black",
    color: "white",
  },
  root: {
    maxWidth: "100%",
    margin: "auto",
  },
  input: {
    color: "white",
  },
});

export default useStyles;
