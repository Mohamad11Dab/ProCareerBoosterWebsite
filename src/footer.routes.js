// @mui icons

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/bg-pro-career.jpg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Pro Career Booster",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <WhatsAppIcon />,
      link: `https://wa.me/9613350239?text=${encodeURIComponent(
        "Hi! I’m interested in your CV & CL writing services."
      )}`,
    },
    {
      icon: <InstagramIcon />,
      link: "`https://www.instagram.com/procareerbooster/`",
    },
  ],
  menus: [],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      &copy; {date} Pro Career Booster. All rights reserved
    </MKTypography>
  ),
};
