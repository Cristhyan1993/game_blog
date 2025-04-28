import { Box } from "@mui/material";
import { styled } from "@mui/system";

const IconBox = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "0.5rem",
    gap: "1rem",
    padding: "1rem",
    minWidth: "100px",
    backgroundColor: theme.palette.primary.light
}));

export default IconBox;
