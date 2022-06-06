import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

function Profile() {
  const { gitHubSate } = useGithub();
  return (
    <S.Wrapper>
      <S.WrapperImg
        src="https://avatars.githubusercontent.com/u/37755163?v=4"
        alt="Avatar of user"
      />

      <S.WrapperText>
        <h1>{gitHubSate.user.name}</h1>

        <S.WrapperTitle>
          <h3>Username:</h3>
          <span>AguiarIsaac</span>
        </S.WrapperTitle>

        <S.WrapperStatistics>
          <S.WrapperStatisticBox>
            <h4>Folowers</h4>
            <span>5</span>
          </S.WrapperStatisticBox>

          <S.WrapperStatisticBox>
            <h4>Starreds</h4>
            <span>5</span>
          </S.WrapperStatisticBox>

          <S.WrapperStatisticBox>
            <h4>Folowings</h4>
            <span>5</span>
          </S.WrapperStatisticBox>
        </S.WrapperStatistics>
      </S.WrapperText>
    </S.Wrapper>
  );
}

export default Profile;
