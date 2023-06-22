import { styled } from "styled-components";

export const MainWrapper = styled.div`
  background-color: hsl(0, 0%, 100%);
  padding: 42px;
  border-radius: 28px;
  display: flex;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  justify-content: center;
  align-items: start;
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-right: 42px;
 
`;

export const TitleWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 58px;
  margin: 0;
  padding: 0;
`;

export const SubtitleWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const Subtitle = styled.p`
  margin: 0;
`;

export const ListWrapper = styled.div``;

export const EmailPlaceholderWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const EmailPlaceholder = styled.label`
  font-size: 12px;
  font-weight: 700;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 700;
  margin: 0;
`;

export const EmailInputWrapper = styled.div`
  display: flex;
  margin-top: 6px;
  width: 100%;
`;

export const EmailInput = styled.input<{ hasError: boolean }>`
  border-radius: 6px;
  border-color: ${(props) =>
    props.hasError ? "#fa4428" : "hsl(231, 7%, 60%)"};
  color: ${(props) => (props.hasError ? "#fa4428" : "hsl(234, 29%, 20%)")};
  background-color: ${(props) =>
    props.hasError ? "#fcc4c0" : "hsl(0, 0%, 100%)"};
  border-style: solid;
  border-width: 1px;
  padding: 16px 12px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 22px;
  width: 100%;
`;

export const ImageWrapper = styled.div`

`;

export const Image = styled.img`
  width: 100%;
`;
