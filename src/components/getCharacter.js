import gandalf from "../assets/gandalf.svg";
import gimli from "../assets/gimli.svg";
import frodo from "../assets/frodo.svg";
import legolas from "../assets/legolas.svg";
import smeagoll from "../assets/smeagoll.svg";
import boromir from "../assets/boromir.svg";

const chars = [gandalf, gimli, frodo, legolas, smeagoll, boromir];

export default function returnCharacter() {
  let randNum = Math.floor(Math.random() * chars.length);
  return chars[randNum];
}
