class Processo {
  int bitR = 0;
  String process = "";
  Processo(this.bitR, this.process);
}

class Outra {
  static void altera(Processo p) {
    p.process = "abc";
  }
}
