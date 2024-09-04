const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const calcularFaturamentoTotal = (faturamento) => {
  return Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
};

const calcularPercentualPorEstado = (faturamento, total) => {
  const percentuais = {};
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    percentuais[estado] = percentual.toFixed(2);
  }
  return percentuais;
};

const faturamentoTotal = calcularFaturamentoTotal(faturamentoPorEstado);

const percentuaisPorEstado = calcularPercentualPorEstado(
  faturamentoPorEstado,
  faturamentoTotal
);

console.log(`Faturamento Total: R$${faturamentoTotal.toFixed(2)}`);
for (const estado in percentuaisPorEstado) {
  console.log(`Percentual de ${estado}: ${percentuaisPorEstado[estado]}%`);
}
