import * as S from "./Input.styles";

export function Input({
  alt,
  placeholder,
  onChange,
  value,
  type,
  ...props
}: InputProps) {
  return (
    <S.Container
      {...props}
      value={value}
      min="0"
      type={type || "number"}
      alt={alt}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
