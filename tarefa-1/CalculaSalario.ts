import { Cargos } from "./enum/cargos";

export class CalculaSalario {
  constructor(private readonly salarioBase: number = 1000) {}

  calcular(cargo: Cargos) {
    const cargosXSalarios = {
      [Cargos.Estagiario]: 1.2 * this.salarioBase,
      [Cargos.Junior]: 3 * this.salarioBase,
      [Cargos.Pleno]: 5 * this.salarioBase,
      [Cargos.Senior]: 7 * this.salarioBase,
    };

    if (!cargosXSalarios[cargo]) {
      return 0;
    }

    return cargosXSalarios[cargo];
  }
}
