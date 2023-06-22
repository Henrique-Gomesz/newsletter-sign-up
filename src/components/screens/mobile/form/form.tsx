import { ReactComponent as BaseImage } from "../../../../assets/images/illustration-sign-up-mobile.svg";
import { Button } from "../../../button/button";
import { List } from "../../../list/list";

import { useState } from "react";
import {
  ContentWrapper,
  ImageWrapper,
  Input,
  InputWrapper,
  Label,
  LabelWrapper,
  ListWrapper,
  MainWrapper,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
} from "./form.styles";
import { ErrorMessage } from "../../desktop/form/form.styles";
import { MobileSucess } from "../../../sucess-mobile/mobile-sucess";

const listItems = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a sucess",
  "And much more!",
];

export const MobileForm = () => {
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState("");
  const [showSucessMessage, setShowSucessMessage] = useState(false);

  const handleSucessMessage = () => {
    setShowSucessMessage(!showSucessMessage);
  };
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasError = emailRegex.test(email);
    setHasError(!hasError);
    setShowSucessMessage(hasError);
  };
  return (
    <div>
      {showSucessMessage ? (
        <MobileSucess
          email={email}
          handleShowSucessMessage={handleSucessMessage}
        />
      ) : (
        <MainWrapper>
          <ImageWrapper>
            <BaseImage />
          </ImageWrapper>
          <ContentWrapper>
            <TitleWrapper>
              <Title>{"Stay updated!"}</Title>
            </TitleWrapper>
            <SubtitleWrapper>
              <Subtitle>{"Join 60,000+ product managers receiving"}</Subtitle>
              <Subtitle>{"monthly updates on:"}</Subtitle>
            </SubtitleWrapper>
            <ListWrapper>{List(listItems)}</ListWrapper>
            <LabelWrapper>
              <Label htmlFor="emailInput">{"Email address"}</Label>
              {hasError && (
                <ErrorMessage>{"Valid email required"}</ErrorMessage>
              )}
            </LabelWrapper>
            <InputWrapper>
              <Input
                onChange={(target) => {
                  setHasError(false);
                  setEmail(target.target.value);
                }}
                hasError={hasError}
                id="emailInput"
                placeholder="email@company.com"
              />
            </InputWrapper>
            <Button
              onPress={() => validateEmail()}
              label="Subscribe monthly newsletter"
            />
          </ContentWrapper>
        </MainWrapper>
      )}
    </div>
  );
};
