import { ContratoRemuneravel } from "./ContratoRemuneravel";
import { ContratoClt } from "./ContratoClt";
import { ContratoEstagiario } from "./ContratoEstagiario";
import { ContratoPj } from "./ContratoPj";

class FolhaDePagamento {
  private static readonly MES_COMERCIAL: number = 20;

  static calcularSalarioMensal(funcionario: ContratoRemuneravel): number {
    return funcionario.remurecao() * this.MES_COMERCIAL;
  }
}

const funcionarioClt = new ContratoClt();
const funcionarioEstagiario = new ContratoEstagiario();
const funcionarioPj = new ContratoPj();

console.log(
  `Sou ${
    funcionarioClt.titulo
  } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
    funcionarioClt
  )}`
);

console.log(
  `Sou ${
    funcionarioEstagiario.titulo
  } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
    funcionarioEstagiario
  )}`
);

console.log(
  `Sou ${
    funcionarioPj.titulo
  } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
    funcionarioPj
  )}`
);
