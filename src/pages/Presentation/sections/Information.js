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

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Information() {
  return (
    <MKBox component="section" py={5} my={0}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={11}
          flexDirection="column"
          alignItems="left"
          sx={{ textAlign: "left", mb: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Services
          </MKTypography>
        </Grid>
      </Container>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={0} sx={{ mx: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="work"
                  title="CV & CL Writing Services"
                  description="We create tailored CVs that highlight your strengths and career achievements, designed to stand out to recruiters and pass applicant tracking systems (ATS).
                  We craft personalized Cover Letters that complement your CV, showing employers why you’re the right fit for the role."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="spellcheck"
                  title="Proofreading Services"
                  description="A final polish for your document — we correct grammar, spelling, punctuation, and formatting errors to ensure accuracy and professionalism."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="edit_document"
                  title="Editing Services"
                  description="We refine the flow, tone, and clarity of your writing, making your message clear, engaging, and impactful for your audience."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="school"
                  title="Academic Writing"
                  description="Professional support with essays, research summaries, proposals, and statements of purpose, ensuring well-structured, high-quality academic content."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="business_center"
                  title="Business Writing"
                  description="We produce professional reports, company profiles, website content, product descriptions, and emails that reflect your brand and goals."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="auto_stories"
                  title="Creative & Personal Writing"
                  description="From blogs to personal stories, biographies, speeches, and captions — we write with personality and creativity that connects with your readers."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="find_in_page"
                  title="CV Review Online Session (30 min)"
                  description="A live one-on-one consultation where we review your CV together, discuss improvements, and provide tailored tips to strengthen your application."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
