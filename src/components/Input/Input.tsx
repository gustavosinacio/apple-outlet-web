import * as S from "./Input.styles";

export function Input({ alt, placeholder, onChange }: InputProps) {
  return (
    <S.Container
      type="text"
      alt={alt}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
