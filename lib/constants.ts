export const SITE_CONFIG = {
  name: "Reclamos Autoplan",
  lawyer: "Nicolás Silva",
  title: "Abogado – Reclamos Autoplan",
  city: "Córdoba, Argentina",
  email: "contacto@reclamosautoplan.com.ar",
  // Replace with real WhatsApp number: country code (54) + area code + number, no spaces or dashes
  whatsappNumber: "5493512319509",
  whatsappMessage:
    "Hola, quiero consultar sobre una demora en la entrega de mi auto de autoplan.",
  domain: "https://reclamosautoplan.com.ar",
  canonicalUrl: "https://reclamosautoplan.com.ar",
  successCases: "100",
};

export const WHATSAPP_HREF = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
  SITE_CONFIG.whatsappMessage
)}`;

export const FAQS = [
  {
    question: "¿Es normal que se demore la entrega de un auto de autoplan?",
    answer:
      "Las demoras pueden ocurrir, pero cuando se extienden demasiado o no se cumplen las condiciones prometidas, puede tratarse de un incumplimiento. En esos casos, el consumidor tiene herramientas para reclamar.",
  },
  {
    question: "¿Cuánto puede tardar la entrega de un autoplan?",
    answer:
      "Depende del contrato, pero cuando los plazos se extienden sin justificación o cambian constantemente, es importante revisar el caso. Cada situación puede tener características particulares.",
  },
  {
    question: "¿Puedo reclamar si ya pagué muchas cuotas?",
    answer:
      "Sí. Haber pagado cuotas no impide que puedas reclamar si hay incumplimientos. De hecho, cuanto más hayas pagado, más elementos tenés para fundamentar tu reclamo.",
  },
  {
    question: "¿Qué pasa si la concesionaria no me responde?",
    answer:
      "La falta de respuesta también puede formar parte del problema y es algo que se analiza en cada caso. No responder o dar información vaga puede ser un indicador relevante.",
  },
  {
    question: "¿Necesito tener abogado para reclamar?",
    answer:
      "No siempre, pero contar con asesoramiento puede ayudarte a entender mejor tus opciones y avanzar con mayor claridad. Muchas personas descubren que tienen más herramientas de las que pensaban.",
  },
  {
    question: "¿Qué pasa si ya hice un reclamo y no pasó nada?",
    answer:
      "Es una situación común. En esos casos, se puede evaluar cómo continuar o escalar el reclamo a instancias que generen más presión sobre la empresa.",
  },
  {
    question: "¿Atienden en toda Argentina?",
    answer:
      "Sí, se analizan casos de todo el país. La consulta inicial y el análisis se pueden hacer de forma remota sin necesidad de trasladarte.",
  },
];

export const PROBLEMS = [
  "Te prometieron una fecha de entrega y la siguen postergando",
  "Pagaste cuotas o integraste y el vehículo no aparece",
  "La concesionaria o administradora no te da respuestas claras",
  "Te cambian condiciones o plazos sin explicación",
  "Sentís que estás atrapado en el plan sin solución",
];

export const CASES = [
  {
    title: "Demoras excesivas en la entrega",
    description:
      "El vehículo no se entrega en el plazo acordado o comunicado.",
  },
  {
    title: "Incumplimientos de fechas prometidas",
    description:
      "Se comprometieron con una fecha de entrega que no se respetó.",
  },
  {
    title: "Cambios injustificados en el plan",
    description:
      "Modifican condiciones, precios o plazos sin explicación clara.",
  },
  {
    title: "Falta de respuesta o información",
    description:
      "La administradora o concesionaria no brinda información concreta.",
  },
  {
    title: "Consumidor sin solución concreta",
    description:
      "Ya reclamaste y no obtuviste ningún resultado ni avance.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Nos escribís por WhatsApp",
    description:
      "Nos contás tu situación en pocos minutos. Sin formularios ni burocracia.",
  },
  {
    step: "02",
    title: "Analizamos tu caso",
    description:
      "Revisamos contrato, pagos y antecedentes para entender la situación completa.",
  },
  {
    step: "03",
    title: "Te orientamos",
    description:
      "Te explicamos con claridad qué opciones tenés para reclamar y cómo avanzar.",
  },
];

export const DOCS = [
  "Contrato o solicitud de adhesión al plan",
  "Comprobantes de pago de cuotas",
  "Mensajes o correos con la concesionaria",
  "Promesas de entrega (escritas o documentadas)",
  "Número de grupo y orden del plan",
];
