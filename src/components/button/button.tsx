import { BaseButton } from "./button.styles";
export interface Props {
  onPress: () => void;
  label: string;
}

export const Button = ({ label, onPress }: Props) => {
  return (
    <BaseButton onClick={() => onPress()} type="button">
      {label}
    </BaseButton>
  );
};
