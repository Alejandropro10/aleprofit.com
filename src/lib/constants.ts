export const BRAND = {
  name: "ALEPROFIT",
  founder: "Alejandro Prieto Carvajal",
  tagline: "Entrena tu cuerpo. Educa tu mente. Encuentra tu equilibrio.",
  motto: "Disciplina ahora. Libertad después.",
  coreLine: "La base de todo es el equilibrio.",
};

export function whatsappLink(message: string) {
  return `https://wa.me/34633231747?text=${encodeURIComponent(message)}`;
}

export const CONTACT = {
  phoneDisplay: "633 23 17 47",
  phoneIntl: "34633231747",
  whatsappUrl: whatsappLink("Hola ALEPROFIT, quiero más información"),
  whatsappTraining: whatsappLink(
    "Hola Alejandro, vengo de la página web para obtener más información"
  ),
  whatsappClubProfit: whatsappLink(
    "Hola Alejandro, vengo de la página web para obtener más información acerca de club profit."
  ),
  email: "prietocarvajalfit@gmail.com",
  instagram: { handle: "@ale.profit", url: "https://instagram.com/ale.profit" },
  instagramPersonal: { handle: "@alejandrpc10", url: "https://instagram.com/alejandrpc10" },
  facebook: { handle: "Alejandro Prieto Carvajal", url: "https://facebook.com" },
};
