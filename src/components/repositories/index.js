import React from "react";
import * as S from './styled';

function Repositories() {
    return (
        <S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Stared</S.WrapperTab>
            </S.WrapperTabList>

            <S.WrapperTabPanel>Panel Repositories</S.WrapperTabPanel>
            <S.WrapperTabPanel>Panel Stared</S.WrapperTabPanel>
        </S.WrapperTabs>
    )
};

export default Repositories;