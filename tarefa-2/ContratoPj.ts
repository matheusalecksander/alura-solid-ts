import { ContratoRemuneravel } from "./ContratoRemuneravel";

export class ContratoPj implements ContratoRemuneravel {
  private readonly GANHO_POR_HORA = 36;
  private readonly CARGA_HORARIA = 8;
  titulo: string = "PJ";

  remurecao(): number {
    return this.GANHO_POR_HORA * this.CARGA_HORARIA;
  }
}
