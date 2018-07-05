import { Link } from "../routes";

export default () => (
  <div>
    <ul>
      <li>
        <Link route="home">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link route="about">
          <a>Sobre</a>
        </Link>
      </li>
    </ul>
  </div>
);
