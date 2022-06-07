interface InputProps {
  alt?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[] | undefined;
  onChange?: (event: ChangeEventHandler<HTMLInputElement>) => void;
}
