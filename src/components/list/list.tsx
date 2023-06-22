import { ReactElement } from "react";
import { ReactComponent as ListSvg } from "../../assets/images/icon-list.svg";
import {
  Item,
  ItemWrapper,
  MainWrapper
} from "./list.styles";

export const List = (listItems: string[]): ReactElement => {
  const renderItens = () => {
    return listItems.map((item) => {
      return (
        <>
          <ItemWrapper>
            <ListSvg width={18} height={18} />
            <Item> {item}</Item>
          </ItemWrapper>
        </>
      );
    });
  };

  return <MainWrapper>{renderItens()}</MainWrapper>;
};
