import styled from "styled-components";

import Typography from "./../Typography";
import portfolioIcon from "./../../../assets/icons/default-avatar.svg";
import Frame from "./../../../assets/icons/Frame.svg";
import UserInfo from "./UserInfo";
import Box from "../Box";
import { theme } from "../../../app/Theme";

const user = {
  userSrc: portfolioIcon,
  authorization: "Вы авторизованы",
  role: "Администратор",
};

const PortfolioIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",

          [theme.breakpoints.LARGE]: {
            width: "auto",
            columnGap: "70px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 600,
          }}
        >
          BitTest
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
          }}
        >
          <Box
            sx={{
              height: "24px",
              width: "24px",
              padding: "2.5px 4px 4.5px",
              borderRadius: "4px",
              backgroundColor: theme.colors.tertiary,
            }}
          >
            <PortfolioIcon src={Frame} alt="Frame Icon" />
          </Box>
          <Typography
            sx={{
              [theme.breakpoints.LARGE]: {
                fontSize: "16px",
              },
            }}
          >
            Моя организация
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "none",

          [theme.breakpoints.LARGE]: {
            display: "block",
          },
        }}
      >
        <UserInfo
          avatarSrc={user.userSrc}
          authorization={user.authorization}
          role={user.role}
        />
      </Box>
    </Box>
  );
};

export default Header;
