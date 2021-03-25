
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({
    p_backArrow: {
      display: "flex",
      float: "left",
      marginLeft: "2%",
    },
    div_roomIcon: {
      display: "flex",
      marginLeft: "39%",
      marginTop:"3%"
    },
    Roomicon: {
      color: "red",
      marginRight: "2%",
      marginTop: "1.5%",
    },
    top_container: {
      justify: "center",
      alignItems: "center",
      margin: "auto",
  
      minHeight: "391",
      width: "80%",
      maxWidth: "485px",
    },
    top_card: {
      marginBottom: "0.7%",
      width: "100%",
      backgroundColor: "black",
      color: "white",
      minWidth: 275,
    },
    mid_card: {
      width: "100%",
      height: "70vh",
      minWidth: 275,
      paddingBottom: "2%",
  
      backgroundColor: "black",
      color: "white",
    },
    bottom_card: {
      minWidth: 275,
      width: "100%",
      height: "65px",
      minHeight: "65px",
      backgroundColor: "black",
      overflowY: "hidden",
  
      marginTop: "0.7%",
    },
    input_textAreaCard: {
      backgroundColor: "black",
      color: "white",
      width: "85%",
      display: "inline",
      // marginTop:"0.5%",
      padding: "3.5px 2px 2px 0px",
    },
    inputTextArea: {
      backgroundColor: "#00cec9",
      border: "1px solid #ddd",
      padding: "7px 15px",
      borderRadius: "20px",
      fontSize: "15px",
      color: "black",
      marginTop: "3%",
      marginLeft: "5%",
      width: "80%",
      paddingTop: "10px",
      minHeight: "20px",
  
      resize: "none",
      maxHeight: "20px",
    },
    p_sendIcon: {
      display: "inline",
      color: "white",
      width: "5%",
      marginRight: "2%",
      paddingTop: "0.5vh",
      paddingLeft: "5%",
    },
    active_sendIcon: {
      transform: "rotate(-27deg)",
      color: "red",
      paddingBottom: "4%",
    },
    input: {
      color: "white",
      // marginTop: "20%",
    },
  });
  

  export default useStyles;