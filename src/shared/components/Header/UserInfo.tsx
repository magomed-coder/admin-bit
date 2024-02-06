import React from "react";
import styled from "styled-components";
import Avatar from "./../Avatar";
import Typography from "./../Typography";
import { theme } from "../../../app/Theme";

export interface UserAvatar {
  avatarSrc: string;
  authorization: string;
  role: string;
}

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 180px;
  border: 1px solid ${theme.colors.borders.main};
  padding: 8px 14px;
  border-radius: 6px;
`;

const UserDetails = styled.div`
  text-align: left;
  margin-left: 12px;
`;

const UserInfo: React.FC<UserAvatar> = ({ avatarSrc, authorization, role }) => {
  return (
    <UserInfoContainer>
      <Avatar src={avatarSrc} />

      <UserDetails>
        <Typography
          color={theme.colors.text.subtle}
          fontSize="12px"
          fontWeight="400"
        >
          {authorization}
        </Typography>
        <Typography fontWeight="500" fontSize="14px">
          {role}
        </Typography>
      </UserDetails>
    </UserInfoContainer>
  );
};

export default UserInfo;
