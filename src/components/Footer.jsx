import "./Footer.css";
import gandalf from "../assets/gandalf.png";

export default function Footer() {
  return (
    <div className="footer-div">
      <ul className="footer">
        <li className="text">GREETINGS</li>
        <li className="text">FROM</li>
        <li>
          <img src={gandalf} alt="gandalf image" width={128} height={128} />
        </li>
      </ul>
    </div>
  );
}
