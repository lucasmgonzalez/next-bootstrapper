import { Link } from "../routes";
import WelcomeMessage from "../components/WelcomeMessage";

export default () => (
  <div>
    <WelcomeMessage />
    <ul>
      <li>
        <Link route="article" params={{ slug: "somewhere" }}>
          <a>somewhere</a>
        </Link>
      </li>
      <li>
        <Link route="article" params={{ slug: "Alguno lugar" }}>
          <a>Alguno lugar</a>
        </Link>
      </li>
      <li>
        <Link route="article" params={{ slug: "Lugarzito" }}>
          <a>Lugarzito</a>
        </Link>
      </li>
    </ul>
  </div>
);
