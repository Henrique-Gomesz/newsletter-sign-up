import {
  MainWrapper,
  IconWrapper,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
  ButtonWrapper,
  Email,
} from "./desktop-sucess.styles";
import { ReactComponent as IconSucess } from "../../assets/images/icon-success.svg";
import { Button } from "../button/button";
interface Props {
  email: string;
  handleShowSucessMessage: () => void;
}

export const DesktopSucess = ({ email, handleShowSucessMessage }: Props) => {
  return (
    <MainWrapper>
      <IconWrapper>
        <IconSucess />
      </IconWrapper>
      <TitleWrapper>
        <Title>{"Thanks for"}</Title>
        <Title>{"subscribing!"}</Title>
      </TitleWrapper>

      <SubtitleWrapper>
        <Subtitle>{`A confirmation has been sent to`}</Subtitle>
        <Subtitle
          style={{
            display: "flex",
          }}
        >
          <Email>{email}</Email>
          {`. Please open ir and click`}
        </Subtitle>
        <Subtitle>{`the button inside to confirm your subscription.`}</Subtitle>
      </SubtitleWrapper>
      <ButtonWrapper>
        <Button onPress={handleShowSucessMessage} label="Dismiss message" />
      </ButtonWrapper>
    </MainWrapper>
  );
};
