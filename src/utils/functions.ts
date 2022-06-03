export function formatMoney(value: number) {
  return Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(value);
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("pt-BR", {}).format(date);
}
