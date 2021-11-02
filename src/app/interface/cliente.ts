export class Cliente {
  public nome: string;

  public email: string;

  public dataNascimento: Date;

  public saldoDevedor: number;
  
  constructor(nome: string, dataNascimento: Date) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
  }

  public calculaIdade(): number {
    let hoje = new Date();

    const diferenca = hoje.getDate() - this.dataNascimento.getDate();

    return diferenca / 60 / 24 / 365;
  }
}