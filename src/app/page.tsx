import Image from "next/image";
import CarouselOffres from "@/components/CarouselOffres";
import CarouselBrands from "@/components/CarouselBrands";

export default function Home() {
  return (
    <div className="pt-[180px]">
      <div className="relative flex justify-center items-center flex-col">
        <img src="/blurHome.png" alt="blur image" className="absolute left-0" />
        <Image src="/avis.png" alt="Company Logo" width={330} height={45} />
        <div className="mt-[60px] flex flex-col justify-center leading-none">
          <h1 className="text-center text-[32px] md:text-[85px] clashFont font-[500]">
            Ta Landing Page
          </h1>
          <h1 className=" text-center text-[32px] md:text-[75px] font-[500] clashFont">
            qui convertit.
          </h1>
          <p className="mt-5 text-center text-2xl">
            (pas <span className="clashFont font-semibold">juste jolie</span>)
          </p>
          <p className="text-[#94A3B8] md:text-2xl text-center mt-[40px]">
            Livraison en 2 à 4 semaines. Prix transparent.
          </p>
          <button className="button-shadow m-auto mt-[72px]">
            Découvrir nos offres
          </button>
        </div>
      </div>
      <CarouselOffres />
      <div className="relative block bg-white py-[55px] md:py-[80px] md:px-[30px]">
        <div className="offres-content p-4 md:p-20">
          <div className="mt-[30px] md:mt-0 flex flex-col md:gap-[35px]">
            <div className="flex flex-col md:flex-row md:gap-[100px]">
              <div className="mb-4 md:mb-0 flex flex-col w-[280px]">
                <div className="flex items-center">
                  <img src="/arrow.svg" alt="arrow" />
                  <p className="text-[32px] md:text-[40px] pl-3 clashFont font-semibold">
                    +150
                  </p>
                </div>
                <p className="text-[#ffffffcc] text-base md:mt-[18px]">
                  Startups / Entreprises accompagnées
                </p>
              </div>
              <div className="mb-4 md:mb-0 flex flex-col w-[280px]">
                <div className="flex items-center">
                  <img src="/arrow.svg" alt="arrow" />
                  <p className="text-[32px] md:text-[40px] pl-3 clashFont font-semibold">
                    +6 ans
                  </p>
                </div>
                <p className="text-[#ffffffcc] text-base md:mt-[18px]">
                  ans d’expérience digital
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-[100px]">
              <div className="mb-4 md:mb-0 flex flex-col w-[280px]">
                <div className="flex items-center">
                  <img src="/arrow.svg" alt="arrow" />
                  <p className="text-[32px] md:text-[40px] pl-3 clashFont font-semibold">
                    +300
                  </p>
                </div>
                <p className="text-[#ffffffcc] text-base md:mt-[18px]">
                  Leds entrant en organiques
                </p>
              </div>
              <div className="mb-4 md:mb-0 flex flex-col w-[280px]">
                <div className="flex items-center">
                  <img src="/arrow.svg" alt="arrow" />
                  <p className="text-[32px] md:text-[40px] pl-3 clashFont font-semibold">
                    100%
                  </p>
                </div>
                <p className="text-[#ffffffcc] text-base md:mt-[18px]">
                  Des clients satisfaits
                </p>
              </div>
            </div>
          </div>
          <div className="orderRevert">
            <p className="clashFont mt-[20px] md:mt-[70px] font-medium md:font-semibold text-[36px]">
              Quelques chiffres qui parlent de nous
            </p>
            <p className="clashFont mt-[20px] text-base md:text-2xl md:w-3/4">
              Des années d&apos;expérience et des résultats concrets : <br />
              voici pourquoi nos clients nous font confiance pour la création de
              leurs landing pages.
            </p>
          </div>
          <button className="button-shadow mt-6">Découvrir nos offres</button>
        </div>
        <img
          src="/blurBrand.png"
          alt="blur"
          className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="hidden mt-[100px] md:flex flex-col items-center">
        <p className="clashFont text-center text-4xl">
          + de 100 entreprises <strong>nous font déjà confiance</strong>
        </p>
        <CarouselBrands />
        <button className="clashFont button-shadow mt-[60px]">
          Ajoutez votre logo ici
        </button>
      </div>
      <div className="mt-[70px] md:mt-[170px] flex flex-col justify-center items-center">
        <p className="text-[36px] clashFont text-center">
          Notre méthode de <br />
          <strong>fonctionnement</strong>
        </p>
        <p className="text-[#94A3B8] w-full md:w-3/4 text-center mt-6">
          Après avoir conçu et livré des centaines de landing pages sur mesure,
          nous sommes devenus des experts dans la création de pages qui
          convertissent. Nous sélectionnons pour nos clients le top 1% en termes
          de design, d&apos;architecture web, et d&apos;optimisation UX.
        </p>
      </div>
      <div className="flex-col md:flex-row flex gap-[30px] mt-[120px] items-stretch justify-center">
        <div className="w-[90%] md:w-[280px] flex flex-col rounded-xl border justify-between border-[#ffffff80] p-6">
          <div className="flex justify-between items-start">
            <img src="/fonctionnement/etape1.svg" alt="icon" />
            <p className="clashFont text-sm">
              Semaine
              <span className="font-bold text-3xl">1</span>
            </p>
          </div>
          <p className="my-4 text-xl font-semibold">Prise de contact</p>
          <p className="text-sm text-[#94A3B8]">
            Planifiez un rendez-vous via Calendly pour échanger directement avec
            notre équipe sur les objectifs et spécificités de votre landing
            page.
          </p>
          <img
            className="mt-[40px]"
            src="/fonctionnement/etape1.png"
            alt="etape 1"
          />
        </div>
        <div className="w-[90%] md:w-[280px] flex flex-col rounded-xl border justify-between border-[#ffffff80] p-6">
          <div className="flex justify-between items-start">
            <img src="/fonctionnement/etape2.svg" alt="icon" />
            <p className="clashFont text-sm">
              Semaine
              <span className="font-bold text-3xl">1</span>
            </p>
          </div>
          <p className="my-4 text-xl font-semibold">Call de lancement </p>
          <p className="text-sm text-[#94A3B8]">
            Après validation du devis, nous allons approfondir votre besoin,
            définir le message clé à transmettre sur la page, et identifierons
            les ressources nécessaires (contenu, images, etc.).
          </p>
          <img
            className="mt-[40px]"
            src="/fonctionnement/etape2.png"
            alt="etape 2"
          />
        </div>
        <div className="w-[90%] md:w-[280px] flex flex-col rounded-xl border justify-between border-[#ffffff80] p-6">
          <div className="flex justify-between items-start">
            <img src="/fonctionnement/etape3.svg" alt="icon" />
            <p className="clashFont text-sm">
              Semaine
              <span className="font-bold text-3xl">2</span>
            </p>
          </div>
          <p className="my-4 text-xl font-semibold">Réalisation</p>
          <p className="text-sm text-[#94A3B8]">
            Nous passons à la conception et au développement de votre landing
            sur mesure, intégrant les meilleures pratiques en termes de design,
            d’UX, et de technologie.
          </p>
          <img
            className="mt-[40px]"
            src="/fonctionnement/etape3.png"
            alt="etape 3"
          />
        </div>
        <div className="w-[90%] md:w-[280px] flex flex-col rounded-xl border justify-between border-[#ffffff80] p-6">
          <div className="flex justify-between items-start">
            <img src="/fonctionnement/etape4.svg" alt="icon" />
            <p className="clashFont text-sm">
              Semaine
              <span className="font-bold text-3xl">2</span>
            </p>
          </div>
          <p className="my-4 text-xl font-semibold">Feedback et livraison</p>
          <p className="text-sm text-[#94A3B8]">
            Une fois la v1 terminée, nous vous l’envoyons pour vos retours.
            Chaque modification est intégrée jusqu’à ce que vous soyez
            entièrement satisfait, pour une livraison finale clé en main.
          </p>
          <img
            className="mt-[40px]"
            src="/fonctionnement/etape4.png"
            alt="etape 1"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[32px] mb-20">
        <button className="button-shadow">C&apos;est compris, on y va</button>
      </div>
      <div className="flex justify-center flex-col items-center">
        <img src="/toutEnUn.svg" alt="All in one" />
        <p className="text-4xl clashFont mt-4">
          Que peut-on faire <span className="font-semibold">pour vous</span> ?
        </p>
        <p className="text-[#94A3B8] mt-4 text-xl w-3/4 text-center">
          Nous avons réunis les 2 meilleures offres possibles du marché !
          Choisissez l&apos;une de nos offres en et recevez votre landing page
          en 2 à 3 semaines
        </p>
        <div className="flex mt-10 items-start">
          <div className=" mt-4 -mr-4 rounded-2xl border border-[#F14343] p-[35px] clashFont bg-[#270707]">
            <p className="font-semibold text-3xl">La concurrence</p>
            <p className="text-base font-light uppercase">
              juste une landing page
            </p>
            <p className="font-medium text-4xl">4 000€</p>
            <div className="mt-6 gap-4 flex flex-col">
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  Landing page <s> sur mesure </s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s> Moodboard design et typograhique </s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s> Développement sur mesure </s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s> Livraison clé en main, 100% éditable </s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s> Révisions illimitées </s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s>Copywriting </s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s>Asset & Illustatrions </s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s>Création de l’identité visuel </s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s>Responsive desktop / mobile </s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s>Animations</s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s>Bannière linkedin</s>
                </p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>
                  <s>Visuel de seléction linkedin</s>
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl border border-[#FFFFFF] p-[35px] z-10 clashFont bg-[#020518]">
            <img src="/laPlusPopulaire.svg" alt="popular" />
            <p className="font-medium text-3xl">
              Notre <span className="font-semibold">offre</span>
            </p>
            <p className="text-base font-light uppercase">
              identité graphique + une landing page <br /> + intégration
            </p>
            <p className="font-medium text-4xl flex items-center gap-2">
              2 490€
              <span className="text-[#FFFFFF80] text-base font-normal">
                <i>HT</i>
              </span>
            </p>
            <div className="mt-6 gap-4 flex flex-col">
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>Landing page sur mesure</p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>Moodboard design et typograhique</p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>Développement sur mesure</p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>Livraison clé en main, 100% éditable</p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>Révisions illimitées</p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>Copywriting</p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>Asset & Illustatrions</p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>Création de l’identité visuel</p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>Responsive desktop / mobile</p>
              </div>
              <div className="flex gap-2">
                <img src="/check.svg" alt="check" />
                <p>Animations</p>
              </div>
              <span className="separator"></span>
              <div>
                <p className="mb-4 text-xl">Bonus 🎁</p>
                <div className="flex gap-2 mb-4">
                  <img src="/check.svg" alt="check" />
                  <p>Bannière linkedin</p>
                </div>
                <div className="flex gap-2">
                  <img src="/check.svg" alt="check" />
                  <p>Visuel de seléction linkedin</p>
                </div>
              </div>
              <button className="button-shadow m-auto mt-4">
                Démarrer maintenant
              </button>
            </div>
          </div>
          <div className="mt-4 -ml-4 rounded-2xl border border-[#FFFFFF] p-[35px] clashFont bg-[#020518]">
            <p className="mb-2 text-3xl">Notre offre sur mesure</p>
            <p className="mb-6 text-base font-light uppercase">
              prise en comptes des besoins
            </p>
            <button className="button-shadow">Prendre rendez vous</button>
          </div>
        </div>
      </div>
    </div>
  );
}
