export function formatMoney(value: number | undefined) {
  let validValue = value || 0;

  return Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(validValue);
}
