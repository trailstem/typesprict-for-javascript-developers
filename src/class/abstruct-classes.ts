export {};
//抽象クラス、メソッド
//必ずオーバーライドしないといけない

abstract class Animal {

  abstract cry():string 
}

class Lion extends Animal {
  cry() {
    return "roar"
  }
}

class Tiger extends Animal {
  cry() {
    return "grrr"
  }
}

