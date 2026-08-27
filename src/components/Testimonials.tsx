import { Quote, Star } from "lucide-react";
import AnimateIn from "./AnimateIn";

const REVIEWS = [
  {
    name: "Alfonso Infantes Tejado",
    meta: "2 reseñas",
    text: "Se nota el conocimiento y el interés por ayudar a las personas a mejorar su salud y alcanzar sus objetivos. ¡Totalmente recomendable para quien quiera empezar o mejorar su estilo de vida!",
  },
  {
    name: "Silvia García",
    meta: "9 reseñas",
    text: "Entreno individualizado y profesional. Siempre atento a tus intereses y peticiones.",
  },
  {
    name: "Antonio Alfonso Rojas Jiménez",
    meta: "3 reseñas · 2 fotos",
    text: "Fue un auténtico placer trabajar con Alex, un profesional de los pies a la cabeza, muy correcto, educado y super bien preparado por su formación, transmite ilusión, pasión por lo que hace y conocimientos. Sin duda volveré a trabajar con él y lo recomendaré a todo el mundo. Gracias Alex y enhorabuena por tu trabajo y talento.",
  },
  {
    name: "Fina Rangel Paredes",
    meta: "1 reseña",
    text: "Si buscas al mejor entrenador y un trato personalizado, Alex es la persona adecuada. Gran profesional, atento y dispuesto a ayudarte en todo lo que necesites.",
  },
  {
    name: "Inés María Ledesma Galán",
    meta: "6 reseñas · 1 foto",
    text: "¡Un entrenador de 10! Muy profesional, cercano y siempre pendiente de que hagas los ejercicios correctamente. Se adapta a tus objetivos y consigue motivarte en cada entrenamiento.",
  },
  {
    name: "Hugo Barahona Cordero",
    meta: "2 reseñas",
    text: "Me he formado con él y se le nota que hace lo que le gusta. Aparte de ser bueno en lo que hace, es una persona de 10, con unos valores y disciplina ejemplares para cualquiera. ¡Os lo recomiendo!",
  },
  {
    name: "Luis Muñoz Pérez",
    meta: "2 reseñas",
    text: "Me hizo un seguimiento personal online y me hizo cambiar mentalmente y físicamente, lo recomiendo 100%.",
  },
  {
    name: "Inma Flores de la Rosa",
    meta: "1 reseña",
    text: "Alex, eres un profesional. La experiencia del campamento genial, super atento con los niños y los padres. Te lo has currado, ¡al año que viene más! Gracias por todo.",
  },
  {
    name: "Cristina Rubio",
    meta: "1 reseña",
    text: "Mi hija ha disfrutado muchísimo del campamento, Alejandro los ha mantenido entusiasmados desde el minuto uno, ha estado súper atento y coordinando todo muy bien con las familias.",
  },
  {
    name: "Ma Luisa Galán Rivera",
    meta: "2 reseñas",
    text: "Entusiasta, divertido, trabajador, responsable… ¡los niños han disfrutado muchísimo en su campamento! Gracias Álex.",
  },
  {
    name: "Isabel Parejo Lavado",
    meta: "4 reseñas",
    text: "Toda una experiencia para la peque. Ha sido un campamento totalmente diferente, con aventuras y sorpresas a diario. A la peque le ha sabido a poco, ¡con ganas de más! Gracias a Alejandro por su entrega con los niños.",
  },
  {
    name: "Isabel Carvajal",
    meta: "3 reseñas",
    text: "Encuentra con ALEPROFIT equilibrio mental. Gracias por ayudarme a conseguirlo. Gracias por ayudarme a entender el equilibrio entre alimentación y ejercicio físico también. Eres un gran profesional.",
  },
  {
    name: "Oliver Carvajal",
    meta: "1 reseña",
    text: "Es una experiencia muy buena que te ayuda a ponerte más en forma.",
  },
  {
    name: "Ana Peláez López",
    meta: "3 reseñas",
    text: "Excelente profesional, con experiencia y amplios conocimientos en el ámbito deportivo. Destaca por su implicación, cercanía y capacidad para adaptar cada entrenamiento a las necesidades y objetivos de cada persona.",
  },
  {
    name: "Javier Cid de Rivera Coloma",
    meta: "3 reseñas",
    text: "Muy profesional y se nota su gran conocimiento en el sector. Sin duda lo recomiendo.",
  },
  {
    name: "Badajoz Centro",
    meta: "1 reseña",
    text: "Es increíble, lo natural y profesional que trabajas. Se nota que te apasiona, ánimo Alejandro.",
  },
  {
    name: "Iván Álvarez Garrido",
    meta: "2 reseñas",
    text: "Increíble el trato y la ayuda que te ofrece, es un profesional excepcional. Gracias por la ayuda, estoy consiguiendo mis objetivos gracias a ti.",
  },
  {
    name: "Paula Merchán Mesa",
    meta: "1 reseña",
    text: "Muy profesional. Tiene un trato inmejorable y se implica al 100% adaptándose a tus necesidades.",
  },
  {
    name: "Lourdes María Pozueco Gil",
    meta: "3 reseñas",
    text: "Gran profesional y una persona muy cercana. Se nota la pasión y la dedicación que pone en cada entrenamiento, adaptándose a los objetivos de cada persona y haciendo que entrenar sea motivador. Recomendadísimo…",
  },
  {
    name: "Maripaz Troca",
    meta: "3 reseñas · 3 fotos",
    text: "¡Una experiencia fantástica! El campamento con Alejandro estuvo muy bien organizado, con muchísimas actividades divertidas y variadas. Los niños disfrutaron cada momento, y volvieron a casa felices. ¡Muy recomendable!",
  },
  {
    name: "Mamen Becerra",
    meta: "1 reseña",
    text: "Increíble experiencia con Alex en el campamento. Destaca su desbordante energía, su enorme creatividad para mantener a todos los chicos motivados y su gran responsabilidad con la seguridad de nuestros hijos…",
  },
  {
    name: "Paula A.",
    meta: "3 reseñas",
    text: "Muy atento, agradable y gran entrenador.",
  },
  {
    name: "Bea Castañón",
    meta: "1 reseña",
    text: "Excelente profesional, muy buena experiencia, muy cercano, ayudando a los niños en todo momento. Deseando que llegue el año que viene para volver.",
  },
  {
    name: "Mamen Prieto",
    meta: "2 reseñas",
    text: "Alejandro es un gran profesional, ha desarrollado un campamento con actividades diferentes y motivantes para los peques. Muy bien planificado y estructurado. Deseando el próximo.",
  },
  {
    name: "Dolores Carmona Collado",
    meta: "4 reseñas · 1 foto",
    text: "Excelente profesional, atento con los niños y con los papis y mamis. ¡Y mi hijo encantado!",
  },
  {
    name: "Antonio Almeda",
    meta: "1 reseña",
    text: "Cercano y profesional, ¡recomendado sin duda!",
  },
  {
    name: "David Carvajal",
    meta: "2 reseñas",
    text: "Impresionante cómo trabaja y lo profesional que es en su trabajo, te dedica mucho tiempo y te ayuda en todo lo que puede.",
  },
  {
    name: "Elena Muñoz Jiménez",
    meta: "2 reseñas",
    text: "Muy recomendable. Siempre atento, profesional y dispuesto a ayudar en todo momento. Muy contento con el trato recibido y con los resultados. ¡Gracias por la ayuda y la motivación!",
  },
];

function TestimonialCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="flex h-full w-[21rem] shrink-0 flex-col gap-4 rounded-2xl border border-dusk-border bg-dusk-card/60 px-6 py-7 text-left sm:w-[23rem]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} size={14} className="fill-gold text-gold" />
          ))}
        </div>
        <Quote size={20} className="text-gold/40" />
      </div>
      <p className="line-clamp-6 flex-1 text-sm leading-relaxed text-sand-dim">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="border-t border-dusk-border pt-4">
        <p className="font-display text-sm text-sand">{review.name}</p>
        <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-sand-mute">
          {review.meta} · Google
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const rowA = REVIEWS.filter((_, i) => i % 2 === 0);
  const rowB = REVIEWS.filter((_, i) => i % 2 === 1);
  const loopA = [...rowA, ...rowA];
  const loopB = [...rowB, ...rowB];

  return (
    <section className="grain relative overflow-hidden bg-dusk py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <AnimateIn>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Historias de cambio
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-sand sm:text-4xl lg:text-5xl">
            Lo que dicen quienes ya han entrenado con ALEPROFIT
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-sand-dim">
            {REVIEWS.length} reseñas reales verificadas en Google.
          </p>
        </AnimateIn>
      </div>

      <AnimateIn delay={0.15} className="relative mt-14">
        <div className="marquee-row group overflow-hidden">
          <div className="flex w-max gap-5 animate-marquee-slow group-hover:[animation-play-state:paused]">
            {loopA.map((review, i) => (
              <TestimonialCard key={`a-${review.name}-${i}`} review={review} />
            ))}
          </div>
        </div>
        <div className="marquee-row group mt-5 overflow-hidden">
          <div className="flex w-max gap-5 animate-marquee-slow-reverse group-hover:[animation-play-state:paused]">
            {loopB.map((review, i) => (
              <TestimonialCard key={`b-${review.name}-${i}`} review={review} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-dusk to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-dusk to-transparent sm:w-32" />
      </AnimateIn>
    </section>
  );
}
