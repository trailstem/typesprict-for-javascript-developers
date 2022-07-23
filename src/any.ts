import axios from "axios";
export {};
//型不定の場合に使用する

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

//httpのGETメソッドを使えるようにしている。
/**json形式のデータを取得する */
axios.get(url).then(function (response) {
  //具体的なオブジェクトに対して型指定できる。
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  data = [
    {
      id: 1,
      title: "title",
      description: "description",
    },
  ];
  console.log(data);
});
