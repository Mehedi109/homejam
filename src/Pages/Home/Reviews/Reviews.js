import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import user1 from "../../../images/user-1.png";
import user2 from "../../../images/user-2.png";
import user3 from "../../../images/user-3.png";
import us from "../../../images/🇺🇸.png";
import it from "../../../images/🇮🇹.png";
import { Container, Grid } from "@mui/material";

const Reviews = () => {
  return (
    <div style={{ paddingBottom: "100px" }}>
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
            marginBottom: "25px",
            marginTop: "50px",
          }}
          variant="h6"
          component="div"
        >
          Reviews
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                maxWidth: 368,
                height: 226,
                backgroundColor: "#0a0b1a",
                textAlign: "start",
                border: "1.5px solid #E5C558",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: "42px",
                  marginLeft: "24px",
                }}
              >
                <img
                  component="img"
                  height="48"
                  width="48"
                  src={user1}
                  alt="green iguana"
                />
                <div style={{ marginLeft: "23px" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "Quattrocento",
                      fontSize: "16px",
                    }}
                  >
                    Hellen Jummy
                  </Typography>
                  <div style={{ display: "flex", marginTop: "4px" }}>
                    <img src={us} height="24" width="24" alt="" />
                    <Typography
                      sx={{
                        fontFamily: "Nunito",
                        fontSize: "11px",
                        color: "#E5C558",
                        marginLeft: "8px",
                        marginTop: "4px",
                      }}
                    >
                      PALOALTO, CA
                    </Typography>
                  </div>
                </div>
              </div>
              <CardContent>
                <Typography
                  sx={{
                    borderRadius: "1px",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    color: "white",
                  }}
                  variant="body2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  in donec in nisi vitae. Vestibulum pellentesque eget laoreet
                  adipiscing.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                maxWidth: 368,
                height: 226,
                backgroundColor: "#0a0b1a",
                textAlign: "start",
                border: "1.5px solid #E5C558",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: "42px",
                  marginLeft: "24px",
                }}
              >
                <img
                  component="img"
                  height="48"
                  width="48"
                  src={user2}
                  alt="green iguana"
                />
                <div style={{ marginLeft: "23px" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "Quattrocento",
                      fontSize: "16px",
                    }}
                  >
                    Isaac Oluwatemilorun
                  </Typography>
                  <div style={{ display: "flex", marginTop: "4px" }}>
                    <img src={it} height="24" width="24" alt="" />
                    <Typography
                      sx={{
                        fontFamily: "Nunito",
                        fontSize: "11px",
                        color: "#E5C558",
                        marginLeft: "8px",
                        marginTop: "4px",
                      }}
                    >
                      PALOALTO, CA
                    </Typography>
                  </div>
                </div>
              </div>
              <CardContent>
                <Typography
                  sx={{
                    borderRadius: "1px",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    color: "white",
                  }}
                  variant="body2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  in donec in nisi vitae. Vestibulum pellentesque eget laoreet
                  adipiscing.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                maxWidth: 368,
                height: 226,
                backgroundColor: "#0a0b1a",
                textAlign: "start",
                border: "1.5px solid #E5C558",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: "42px",
                  marginLeft: "24px",
                }}
              >
                <img
                  component="img"
                  height="48"
                  width="48"
                  src={user3}
                  alt="green iguana"
                />
                <div style={{ marginLeft: "23px" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "Quattrocento",
                      fontSize: "16px",
                    }}
                  >
                    Hellen Jummy
                  </Typography>
                  <div style={{ display: "flex", marginTop: "4px" }}>
                    <img src={us} height="24" width="24" alt="" />
                    <Typography
                      sx={{
                        fontFamily: "Nunito",
                        fontSize: "11px",
                        color: "#E5C558",
                        marginLeft: "8px",
                        marginTop: "4px",
                      }}
                    >
                      PALOALTO, CA
                    </Typography>
                  </div>
                </div>
              </div>
              <CardContent>
                <Typography
                  sx={{
                    borderRadius: "1px",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    color: "white",
                  }}
                  variant="body2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  in donec in nisi vitae. Vestibulum pellentesque eget laoreet
                  adipiscing.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Reviews;
