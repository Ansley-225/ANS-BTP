
import { Hero } from "@/app/_ui/hero/page";
import { Valeurs } from "./_ui/valeurs/page";
import { Presentation } from "./_ui/presentation/page";
import { Services } from "./_ui/services/page";
import { Realisation } from "./_ui/realisations/page";
import { Question } from "./_ui/question/page";
import { Carousel } from "./_ui/carousel/page";
import { Temoignages } from "./_ui/temoignages/page";
import { Contacts } from "./_ui/contacts/page";
import { Footer } from "./_ui/footer/page";
export default function PageAcceuil() {
  return (
    <>
      <Hero />
      <Valeurs />
      <main>
        <Presentation />
        <Services />
        <Realisation />
        <Carousel />
        <Question />
        <Temoignages />
        <Contacts />
      </main>
    </>
  );
}
