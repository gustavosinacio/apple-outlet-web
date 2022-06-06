interface InputProps {
  alt?: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: (event: ChangeEventHandler<HTMLInputElement>) => void;
}
