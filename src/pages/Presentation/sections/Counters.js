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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={5}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={11}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "left", mb: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Prices
          </MKTypography>
        </Grid>
      </Container>
      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={50}
              suffix="$"
              title="CV Only"
              description="Professionally written CV"
              thirdDescription="+ 30$ for 48 hour delivery"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={30}
              suffix="$"
              title="Cover Letter Only"
              description="Customized cover letter"
              thirdDescription="+ 30$ for 48 hour delivery"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={70}
              suffix="$"
              title="Bundle"
              description="CV + Cover Letter"
              thirdDescription="+ 30$ for 48 hour delivery"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={60}
              suffix="$"
              title="Complex CVs"
              description="Technical/specialized CVs"
              thirdDescription="+ 30$ for 48 hour delivery"
            />
          </Grid>
        </Grid>
        <Divider orientation="horizontal" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
        <Grid container item xs={12} lg={10} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={17}
              suffix="$/page"
              title="Academic Writing"
              description="Essays, research summaries, proposals, SOPs"
              secondDescription="+ 20% total for 48 hour delivery"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={14}
              suffix="$/page"
              title="Business Writing"
              description="Reports, company profiles, websites, product content"
              secondDescription="+ 20% total for 48 hour delivery"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={12}
              suffix="$/page"
              title="Creative/Personal Writing"
              description="Blogs, biographies, speeches, captions"
              secondDescription="+ 20% total for 48 hour delivery"
            />
          </Grid>
        </Grid>
        <Divider orientation="horizontal" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
        <Grid container item xs={12} lg={6} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={6}>
            <DefaultCounterCard
              count={7}
              suffix="$/page"
              title="Proofreading / Editing"
              description="Grammar, spelling, structure, and clarity check"
              secondDescription="+ 20% total for 48 hour delivery"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DefaultCounterCard
              count={30}
              suffix="$"
              title="CV Review Online Session"
              description="CV improvements and feedback session (30 min)"
            />
          </Grid>
        </Grid>
        <Divider orientation="horizontal" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
      </Container>
    </MKBox>
  );
}

export default Counters;
