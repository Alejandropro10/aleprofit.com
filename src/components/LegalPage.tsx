import Footer from "./Footer";
export default function LegalPage({title,children}:{title:string;children:React.ReactNode}) {
 return <><main className="legal-page"><a href="/" className="legal-back">← Volver a ALEPROFIT</a><p className="legal-eyebrow">INFORMACIÓN LEGAL</p><h1>{title}</h1><p className="legal-date">Actualizado el 19 de noviembre de 2026</p>{children}</main><Footer/></>;
}
