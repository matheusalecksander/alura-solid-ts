import { CalculaSalario } from "./CalculaSalario";
import Colaborador from "./Colaborador";

export class Pagamento {
  constructor(private readonly _calculaSalario: CalculaSalario) {}

  pagar(colaborador: Colaborador) {
    const salarioColaborador = this._calculaSalario.calcular(colaborador.cargo);
    colaborador.saldo = salarioColaborador;
  }
}
