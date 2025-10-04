/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function AboutUs() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundColor: ({ palette: { gradients }, functions: { rgba } }) =>
          rgba(gradients.info.main, 1),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={9} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Trusted by Professionals Worldwide
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1}>
            Career Documents that Open Doors
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            With over three years of experience in writing, editing, and career services, We have
            crafted more than 3,000 CVs and 1,000 cover letters for clients across divers
            industries. Our work also includes website content and Academic thesis spanning
            literature and philosophy to engineering. Each Project is tailored to reflect the
            client&apos;s unique strengths, delivering clear, polished, and impactful writing that
            helps achieve professional and academic goals.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutUs;
