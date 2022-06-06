import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

function Repositories() {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Stared</S.WrapperTab>
      </S.WrapperTabList>

      <S.WrapperTabPanel>
        <RepositoryItem
          name="animeflix"
          fullName="AguiarIsaac/animeflix"
          linkToRepo="https://github.com/AguiarIsaac/animeflix"
        />
      </S.WrapperTabPanel>

      <S.WrapperTabPanel>
        <RepositoryItem
          name="ApiQuotes"
          fullName="AguiarIsaac/ApiQuotes"
          linkToRepo="https://github.com/AguiarIsaac/ApiQuotes"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
}

export default Repositories;
