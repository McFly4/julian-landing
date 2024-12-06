import Image from "next/image";
import CarouselOffres from "@/components/CarouselOffres";
import CarouselBrands from "@/components/CarouselBrands";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Projects from "@/components/Projects";

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
          <Link className="m-auto mt-[72px]" href="#pricing">
            <button className="button-shadow ">Découvrir nos offres</button>
          </Link>
        </div>
      </div>
      <CarouselOffres />
      <div className="relative block bg-white py-[55px] md:py-[80px] md:px-[30px]">
        <div className="offres-content px-4 py-16 md:p-20">
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
          <Link href="https://calendly.com/juliancaille/calldecouverte">
            <button className="button-shadow mt-6">Découvrir nos offres</button>
          </Link>
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
        <Link
          target="_blank"
          className="mt-[60px] z-10"
          href="https://calendly.com/juliancaille/calldecouverte"
        >
          <button className="clashFont button-shadow">
            Ajoutez votre logo ici
          </button>
        </Link>
      </div>
      <div className="mt-[70px] md:mt-[170px] flex flex-col justify-center items-center">
        <p className="text-[36px] clashFont text-center leading-none">
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
      <div className="flex-col md:flex-row flex gap-[30px] mt-[40px] md:mt-[120px] items-center md:items-stretch justify-center relative">
        <img
          src="/fonctionnement/blurMethode.png"
          alt=""
          className="absolute -z-10 hidden md:flex"
        />
        <img
          src="/fonctionnement/arrowTop.svg"
          alt=""
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 hidden md:flex"
        />
        <div className="relative w-[90%] md:w-[280px] flex flex-col rounded-xl border justify-between border-[#ffffff80] p-6">
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
          <img
            src="/fonctionnement/arrowBottom.svg"
            alt=""
            className="absolute -bottom-14 -right-14 hidden md:flex"
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
        <div className="relative w-[90%] md:w-[280px] flex flex-col rounded-xl border justify-between border-[#ffffff80] p-6">
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
          <img
            src="/fonctionnement/arrowBottom.svg"
            alt=""
            className="absolute -bottom-14 -right-14 hidden md:flex"
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
      <div
        id="pricing"
        className="flex justify-center mt-[32px] md:mt-20 mb-20"
      >
        <Link href="https://calendly.com/juliancaille/calldecouverte">
          <button className="button-shadow">C&apos;est compris, on y va</button>
        </Link>
      </div>
      <div className="px-4 flex justify-center flex-col items-center">
        <img src="/toutEnUn.svg" alt="All in one" />
        <p className="text-4xl clashFont mt-4 text-center">
          Que peut-on faire <span className="font-semibold">pour vous</span> ?
        </p>
        <p className="text-[#94A3B8] mt-4 text-xl md:w-3/4 text-center">
          Nous avons réunis les 2 meilleures offres possibles du marché !
          Choisissez l&apos;une de nos offres en et recevez votre landing page
          en 2 à 3 semaines
        </p>
        <div className="flex flex-col md:flex-row mt-10 items-start">
          <div className=" md:mt-4 md:-mr-4 rounded-2xl border border-[#F14343] p-[35px] clashFont bg-[#270707]">
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
          <div className="mt-10 md:mt-0 relative rounded-2xl border border-[#FFFFFF] p-[35px] z-10 clashFont bg-[#020518]">
            <img
              src="/laPlusPopulaire.svg"
              alt="popular"
              className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 "
            />
            <p className="font-medium text-3xl">
              Notre <span className="font-semibold">offre</span>
            </p>
            <p className="hidden md:block text-base font-light uppercase">
              identité graphique + une landing page <br /> + intégration
            </p>
            <p className="block md:hidden text-base font-light uppercase">
              identité graphique + une landing page <br /> + intégration
            </p>
            <p className="font-medium text-4xl flex items-center gap-2">
              2 490€
              <span className="text-[#FFFFFF80] text-base font-normal">
                <i>HT</i>
              </span>
            </p>
            <div className="md:mt-6 gap-4 flex flex-col">
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
              <Link href="https://calendly.com/juliancaille/calldecouverte">
                <button className="button-shadow m-auto mt-4">
                  Démarrer maintenant
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-4 md:-ml-4 rounded-2xl border border-[#FFFFFF] p-[35px] clashFont bg-[#020518]">
            <p className="mb-2 text-3xl">Notre offre sur mesure</p>
            <p className="mb-6 text-base font-light uppercase">
              prise en comptes des besoins
            </p>
            <Link href="https://calendly.com/juliancaille/calldecouverte">
              <button className="button-shadow">Prendre rendez vous</button>
            </Link>
          </div>
        </div>
      </div>
      <Projects />
      <div className="hidden md:block mt-[100px] p-[30px]">
        <div className="flex bg-white rounded-2xl p-6 clashFont gap-10 justify-center">
          <div className="flex flex-col">
            <p className="text-black text-3xl">Encore hésitant ?</p>
            <p className="text-black text-3xl">
              Validé par <span className="font-semibold">+150 clients !</span>
            </p>
            <div className="avis-card mt-10 rotate-6">
              <p className="avis-card-p">
                Julian est disponible, réactif, créatif et professionnel, avec
                toute cette palette celà fait de lui le Désginer idéal pour vos
                futurs projets. Talentueux sans même en prendre conscience et
                toujours force de proposition pour vous surprendre positivement
                ! N&apos;hésitez pas à vous lancer avec Julian vous ne serez pas
                déçu !
              </p>
              <div>
                <p>Isaac</p>
                <p>Wellness Factory</p>
              </div>
            </div>
            <div className="avis-card mt-6">
              <p className="avis-card-p">
                Très bonne expérience avec Julian, ultra réactif, efficace, à
                l&apos;écoute pour une refonte de notre page très réussie.
              </p>
              <div>
                <p>Famille</p>
                <p>SAS ARCADYS</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="ml-4 avis-card">
              <p className=" avis-card-p">
                Julian a su être très réactif et très patient lors de ce projet.
                Il a compris rapidement tout les besoins et enjeux du projet,
                nous retravaillerons avec lui sans hésitation!
              </p>
              <div>
                <p>Jerome</p>
                <p>SMART RECRUITING</p>
              </div>
            </div>
            <div className="-ml-2 avis-card">
              <p className="avis-card-p">
                Travail de qualité, expertise et prise d&apos;initiative en
                prime. Il a su comprendre nos besoins et y répondre parfaitement
                dans un délai très court. Il a été un réel atout pour notre
                projet
              </p>
              <div>
                <p>Chloe</p>
                <p>Simba digital</p>
              </div>
            </div>
            <div className="-ml-4 avis-card">
              <p className="avis-card-p">
                Julian sait communiquer , et il sait repondre aux attentes en
                détail de ce qui lui ai demander . Disponible et ouvert
                d&apos;esprit avec un vrai professionalisme . Merci pour la
                création de mon site.
              </p>
              <div>
                <p>Jeremy</p>
                <p>Hedooh</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center z-10">
            <div className="-ml-12 avis-card -rotate-2">
              <p className="avis-card-p">
                Julian a réalisé pour nous une LP au top ! Nous n&apos;avions
                pas trop de direction pour le choix des couleurs / police et le
                design général. Quelques échanges avec lui ont suffi pour le
                mettre dans la bonne direction. Quelques jours plus tard nous
                avions une LP parfaite pour le lancement de notre SaaS ! Toutes
                l&apos;équipe était très satisfaite de sa production, au-delà de
                ce que nous aurions attendu à ce tarif, bien joué ! Nous avons
                désormais une direction graphique claire, un parcours
                utilisateurs fluide définit.. Encore merci !
              </p>
              <div>
                <p>Kevin</p>
                <p>Emeka</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-20 -ml-12 ">
            <div className="avis-card rotate-2">
              <p className="avis-card-p">
                Julian est professionnel, respecte les deadlines, est disponible
                et surtout fourni du travail de qualité. Il a fait preuve
                d&apos;imagination pour notre site orienté IA et a appliqué nos
                nombreux changements. C&apos;était un plaisir de travailler avec
                Julian
              </p>
              <div>
                <p>Remy</p>
                <p>Algorithm Dimension</p>
              </div>
            </div>
            <div className="avis-card rotate-2">
              <p className="avis-card-p">
                Super travail, je suis ravie ! Julian a su analyser notre
                secteur d&apos;activité, le besoin de nos clients et nous a
                concocté une fiche produit aux petits oignons. Hâte de voir
                l&apos;impact sur le taux de transfo. Je recommande Julian les
                yeux fermés
              </p>
              <div>
                <p>Alexandra</p>
                <p>TIAMAMY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] flex flex-col justify-center items-center clashFont">
        <p className="text-center  text-3xl">
          Il n&apos;y a jamais de{" "}
          <span className="font-semibold">question bête</span>
        </p>
        <p className="text-center  mt-[22px] text-[#94A3B8]">
          Découvrez les réponses aux questions les plus fréquentes posées par
          nos clients.
        </p>
        <div className="px-4 md:px-0 mt-10 flex flex-col md:flex-row justify-center gap-[75px]">
          <div className="md:w-[900px] accordion">
            <Accordion
              type="single"
              collapsible
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#ffffffb3] font-normal text-xl">
                  Combien de temps dure une prestation ?
                </AccordionTrigger>
                <AccordionContent>
                  La durée de nos prestations s&apos;étend généralement sur 2 à
                  3 semaines.
                  <br />
                  <br />
                  Ce délai peut fluctuer en fonction des échanges, des
                  ajustements nécessaires ou des éventuels changements de cap.
                  Si nous nous engageons à respecter nos délais, votre
                  réactivité sera essentielle pour les maintenir.{" "}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#ffffffb3] font-normal text-xl">
                  Puis-je vous régler en plusieurs fois ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous offrons la possibilité de régler en plusieurs fois, car
                  nous souhaitons que le prix ou le budget ne soit pas un
                  obstacle à votre collaboration avec nous.
                  <br />
                  <br />
                  La seule condition fixe est le versement d’un acompte de 50 %
                  pour lancer la prestation. Pour le solde, nous restons
                  flexibles et proposons des paiements en 2, 3 ou 4 fois, selon
                  vos besoins.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#ffffffb3] font-normal text-xl">
                  Est-ce que je pourrai facilement éditer le contenu de mon site
                  ?
                </AccordionTrigger>
                <AccordionContent>
                  Lors de la livraison de votre site web ou landing page, un
                  appel est prévu pour vous accompagner et vous permettre de
                  mettre à jour le contenu en toute autonomie.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[#ffffffb3] font-normal text-xl">
                  Puis-je me faire rembourser si je ne suis pas satisfait du
                  service ? ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous ne proposons pas de remboursement, car nous offrons des
                  révisions illimitées jusqu’à ce que le projet vous satisfasse
                  entièrement. Notre collaboration se poursuit jusqu’à ce que le
                  résultat final corresponde parfaitement à vos attentes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="md:w-1/4 accordion-item py-10">
            <div className="flex flex-col items-center justify-center">
              <img src="/julian.png" alt="julian" />
              <p className="text-2xl my-4">Discutons ensemble</p>
              <p className="text-[#94A3B8] text-center px-2">
                Contactez directement le fondateur sur WhatsApp ou planifiez un
                rendez-vous.
              </p>
              <button className="mt-4 bg-[#25D366] rounded-xl flex items-center px-4 py-2 gap-4">
                <img src="/whatapp.svg" alt="whatapp" />
                Envoyez moi un message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
