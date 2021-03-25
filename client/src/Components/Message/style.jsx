import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    div:{
        marginTop:"3%"
    },
    p_from_r:{
        float: "right",
        clear: "both",
        marginRight: "5%",
        marginTop: "2%",
        marginBottom:"1px",
        fontSize:'12px',
        color:"white",
        textTransform:"capitalize"
  
    },
    p_message_r:{
        backgroundColor: "#00cec9",
        border: "1px solid #ddd",
        padding: "7px 15px",
        borderRadius: "20px",

        float: "right",
        clear: "both",
        marginRight: "2%",

        marginTop: "0%",

        resize: "none",
    },
    textArea_message:{
        background: "transparent", resize: "none", border: "none",color:'black' 
    },
    p_from_l:{
        float: "left",
        clear: "both",
        marginLeft: "5%",
        marginTop: "2%",
        marginBottom:"1px",
        fontSize:'12px',
        color:"white",
        textTransform:"capitalize"
  
    },
    p_message_l:{
        backgroundColor: "#dfe6e9",
        border: "1px solid #ddd",
        padding: "7px 15px",
        borderRadius: "20px",

        float: "left",
        clear: "both",

        marginLeft: "2%",
        marginTop: "0%",
        resize: "none",
    }
})



export default useStyles