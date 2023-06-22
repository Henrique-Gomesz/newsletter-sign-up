import { styled } from "styled-components";

export const MainWrapper = styled.div`
  
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  padding: 24px 24px;
`;

export const ImageWrapper = styled.div`
 
  justify-content: center;
  display: flex;
`;

export const TitleWrapper = styled.div`
  margin-top: 32px;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 42px;
  color: hsl(234, 29%, 20%);
`;

export const SubtitleWrapper = styled.div``;

export const Subtitle = styled.p``;

export const ListWrapper = styled.div``;

export const LabelWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 14px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 32px;
  width: 100%;
  display: flex;
`;

export const Input = styled.input<{ hasError: boolean }>`
  border-radius: 6px;
  border-color: ${(props) =>
    props.hasError ? "#fa4428" : "hsl(231, 7%, 60%)"};
  color: ${(props) => (props.hasError ? "#fa4428" : "hsl(234, 29%, 20%)")};
  background-color: ${(props) =>
    props.hasError ? "#fcc4c0" : "hsl(0, 0%, 100%)"};
  border-style: solid;
  border-width: 1px;
  padding: 16px 16px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div``;
