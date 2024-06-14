import { CalculaSalario } from "./CalculaSalario";
import Colaborador from "./Colaborador";

export class GeraRelatorio {
  constructor(
    private _colaboradores: Colaborador[],
    private _calculaSalario: CalculaSalario
  ) {}

  gerarJSON() {
    let relatorio = this._colaboradores.map((colaborador) => {
      return {
        nome: colaborador.nome,
        cargo: colaborador.cargo,
        salario: this._calculaSalario.calcular(colaborador.cargo),
      };
    });
    return JSON.stringify(relatorio);
  }
}
