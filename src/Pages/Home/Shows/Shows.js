import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import singer1 from "../../../images/singer-1.png";
import singer2 from "../../../images/singer-2.png";
import singer3 from "../../../images/singer-3.png";
import singer4 from "../../../images/singer-4.png";
import { Box, Container, Grid } from "@mui/material";

const Shows = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography
            sx={{
              fontWeight: 500,
              m: 2,
              color: "",
              textAlign: "start",
              fontFamily: "Libre Baskerville",
              fontSize: "32px",
              color: "white",
            }}
            variant="h6"
            component="div"
          >
            Upcoming Shows
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={3}>
              <Card
                sx={{
                  maxWidth: 268,
                  height: 387,
                  background: "#111229",
                  textAlign: "start",
                  marginBottom: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  height="230"
                  image={singer1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    sx={{
                      background: "#E5C558",
                      borderRadius: "1px",
                      padding: "2px 6px",
                      width: "36px",
                      fontSize: "12px",
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Folk
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Libre Baskerville",
                      color: "white",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Benny Dayal
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      marginLeft: "-5px",
                      marginTop: "20px",
                    }}
                  >
                    <Button variant="text">
                      More Info{" "}
                      <i
                        class="fas fa-long-arrow-alt-right"
                        style={{ marginLeft: "25px", fontSize: "20px" }}
                      ></i>
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Card
                sx={{
                  maxWidth: 268,
                  height: 387,
                  background: "#111229",
                  textAlign: "start",
                }}
              >
                <CardMedia
                  component="img"
                  height="230"
                  image={singer2}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    sx={{
                      background: "#E5C558",
                      borderRadius: "1px",
                      padding: "2px 6px",
                      width: "70px",
                      fontSize: "12px",
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Bollywood
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Libre Baskerville",
                      color: "white",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Vijay Yesudas
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      marginLeft: "-5px",
                      marginTop: "20px",
                    }}
                  >
                    <Button variant="text">
                      More Info{" "}
                      <i
                        class="fas fa-long-arrow-alt-right"
                        style={{ marginLeft: "25px", fontSize: "20px" }}
                      ></i>
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Card
                sx={{
                  maxWidth: 268,
                  height: 387,
                  background: "#111229",
                  textAlign: "start",
                }}
              >
                <CardMedia
                  component="img"
                  height="230"
                  image={singer3}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    sx={{
                      background: "#E5C558",
                      borderRadius: "1px",
                      padding: "2px 6px",
                      width: "36px",
                      fontSize: "12px",
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Folk
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Libre Baskerville",
                      color: "white",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Andreya Jeremiah
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      marginLeft: "-5px",
                      marginTop: "20px",
                    }}
                  >
                    <Button variant="text">
                      More Info
                      <i
                        class="fas fa-long-arrow-alt-right"
                        style={{ marginLeft: "25px", fontSize: "20px" }}
                      ></i>{" "}
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Card
                sx={{
                  maxWidth: 268,
                  height: 387,
                  background: "#111229",
                  textAlign: "start",
                }}
              >
                <CardMedia
                  component="img"
                  height="230"
                  image={singer4}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    sx={{
                      background: "#E5C558",
                      borderRadius: "1px",
                      padding: "2px 6px",
                      width: "36px",
                      fontSize: "12px",
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Folk
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Libre Baskerville",
                      color: "white",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Shilpa Rao
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      marginLeft: "-5px",
                      marginTop: "20px",
                    }}
                  >
                    <Button variant="text">
                      More Info{" "}
                      <i
                        class="fas fa-long-arrow-alt-right"
                        style={{ marginLeft: "25px", fontSize: "20px" }}
                      ></i>{" "}
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Shows;
