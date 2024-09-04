const fs = require("fs");

fs.readFile("billing.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const { faturamentoMensal, faturamentoPorEstado } = JSON.parse(data);

  const diasComFaturamento = faturamentoMensal.filter((dia) => dia.valor > 0);

  const menorValor = Math.min(...diasComFaturamento.map((dia) => dia.valor));
  const maiorValor = Math.max(...diasComFaturamento.map((dia) => dia.valor));

  const somaFaturamento = diasComFaturamento.reduce(
    (acc, dia) => acc + dia.valor,
    0
  );
  const mediaMensal = somaFaturamento / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (dia) => dia.valor > mediaMensal
  ).length;

  console.log(`Menor valor de faturamento: ${menorValor}`);
  console.log(`Maior valor de faturamento: ${maiorValor}`);
  console.log(
    `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
  );

  const totalFaturamento = Object.values(faturamentoPorEstado).reduce(
    (acc, valor) => acc + valor,
    0
  );

  for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
    const percentual = ((valor / totalFaturamento) * 100).toFixed(2);
    console.log(`Percentual de ${estado}: ${percentual}%`);
  }
});
