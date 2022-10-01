import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Oswald, sans-serif",
              flexGrow: 1,
              marginLeft: "1rem",
            }}
          >
            nonodachi
          </Typography>
          <Button color="inherit">Help</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
