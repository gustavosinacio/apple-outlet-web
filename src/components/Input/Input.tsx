import * as S from "./Input.styles";

export function Input({
  alt,
  placeholder,
  onChange,
  value,
  ...props
}: InputProps) {
  return (
    <S.Container
      {...props}
      value={value}
      type="text"
      alt={alt}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
