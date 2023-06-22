import { useState } from "react";
import { Button } from "../../../button/button";
import { List } from "../../../list/list";
import {
  ButtonWrapper,
  ContentWrapper,
  EmailInput,
  EmailInputWrapper,
  EmailPlaceholder,
  EmailPlaceholderWrapper,
  ErrorMessage,
  Image,
  ImageWrapper,
  ListWrapper,
  MainWrapper,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
} from "./form.styles";
import BaseImage from "../../../../assets/images/illustration-sign-up-desktop.svg";

const listItems = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a sucess",
  "And much more!",
];

interface Props {
  email: string;
  handleEmail: (newvalue: string) => void;
}

export const DesktopForm = ({ email, handleEmail }: Props) => {
  const [hasError, setHasError] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasError = emailRegex.test(email);
    setHasError(!hasError);
  };

  return (
    <MainWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Title>{"Stay updated!"}</Title>
        </TitleWrapper>
        <SubtitleWrapper>
          <Subtitle>
            {"Join 60,000+ product managers receiving monthly"}
          </Subtitle>
          <Subtitle>{"updates on:"}</Subtitle>
        </SubtitleWrapper>
        <ListWrapper>{List(listItems)}</ListWrapper>
        <EmailPlaceholderWrapper>
          <EmailPlaceholder htmlFor="emailInput">
            {"Email address"}
          </EmailPlaceholder>
          {hasError && <ErrorMessage>{"Valid email required"}</ErrorMessage>}
        </EmailPlaceholderWrapper>
        <EmailInputWrapper>
          <EmailInput
            hasError={hasError}
            onChange={(event) => {
              setHasError(false);
              handleEmail(event.target.value);
            }}
            value={email}
            placeholder="email@company.com"
            inputMode="email"
            type="email"
            id="emailInput"
          />
        </EmailInputWrapper>
        <ButtonWrapper>
          <Button
            onPress={validateEmail}
            label="Subscribe to monthly newsletter"
          />
        </ButtonWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <Image src={BaseImage} />
      </ImageWrapper>
    </MainWrapper>
  );
};
