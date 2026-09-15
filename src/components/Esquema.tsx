import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function Method() {

    return (
        <section id="esquema" className="relative w-full overflow-hidden bg-cream pt-2 pb-10 sm:pt-4 sm:pb-14 lg:pt-6 lg:pb-20">

            <div className="relative mx-auto w-full max-w-6xl px-6">

                {/* Animación al aparecer en pantalla */}
                <AnimateIn y={48}>
                    <div className="group relative mx-auto w-full max-w-5xl">

                        <Image
                            src="/esquema-sinFondo.png"
                            alt="Estructura de ALEPROFIT y Club Profit"
                            width={1536}
                            height={1024}
                            priority
                            sizes="(min-width: 1280px) 1100px, 95vw"
                        />

                    </div>
                </AnimateIn>

            </div>
        </section>
    );
}
