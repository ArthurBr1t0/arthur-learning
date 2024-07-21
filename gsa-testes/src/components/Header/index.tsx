import { Banner } from "../Banner";
import { Empresas } from "../Empresas";
import { BannerSec } from "../BannerSec";

export function Header() {
  return (
    <header>
      <Banner />
      <Empresas />
      <BannerSec />
    </header>
  );
}
