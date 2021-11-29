import 'teste2.dart';

void main() {
  Processo p = new Processo(0, "");
  print(p.process);

  Outra.altera(p);
  print(p.process);
}
