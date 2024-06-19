import { ContratoRemuneravel } from "./ContratoRemuneravel";

export class ContratoClt implements ContratoRemuneravel {
  private readonly GANHO_POR_HORA = 24;
  private readonly CARGA_HORARIA = 8;
  titulo: string = "CLT";

  remurecao(): number {
    return this.GANHO_POR_HORA * this.CARGA_HORARIA;
  }
}
