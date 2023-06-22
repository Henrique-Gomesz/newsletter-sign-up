import {
  MainWrapper,
  ButtonWrapper,
  Email,
  IconWrapper,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
} from "./mobile-sucess.styles";

import { ReactComponent as SucessIcon } from "../../assets/images/icon-success.svg";
import { Button } from "../button/button";
import { displayPartsToString } from "typescript";
interface Props {
  email: string;
  handleShowSucessMessage: () => void;
}
export const MobileSucess = ({ email, handleShowSucessMessage }: Props) => {
  return (
    <MainWrapper>
      <IconWrapper>
        <SucessIcon />
      </IconWrapper>
      <TitleWrapper>
        <Title>{"Thanks for"}</Title>
        <Title>{"subscribing!"}</Title>
      </TitleWrapper>
      <SubtitleWrapper>
        <Subtitle>{"A confirmation email has been send to"}</Subtitle>
        <Subtitle
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Email>{`${email}.`}</Email>
          {"Please open it and"}
        </Subtitle>
        <Subtitle>{"Click the button inside to confirm your"}</Subtitle>
        <Subtitle>{"subscription"}</Subtitle>
      </SubtitleWrapper>
          
      <ButtonWrapper>
        <Button
        
          onPress={() => handleShowSucessMessage()}
          label="Dismiss message"
        />
      </ButtonWrapper>
    </MainWrapper>
  );
};
