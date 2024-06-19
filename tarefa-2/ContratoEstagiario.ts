import { ContratoRemuneravel } from "./ContratoRemuneravel";

export class ContratoEstagiario implements ContratoRemuneravel {
  private readonly GANHO_POR_HORA = 12;
  private readonly CARGA_HORARIA = 4;
  titulo: string = "Estagiário";

  remurecao(): number {
    return this.GANHO_POR_HORA * this.CARGA_HORARIA;
  }
}
