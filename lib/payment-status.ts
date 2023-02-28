const paymentStatus: { [key: string]: string }  = {
  processing: "Processando",
  authorized: "Autorizado",
  paid: "Pago",
  refunded: "Estornado",
  waiting_payment: "Aguardando",
  pending_refund: "Aguardando Estorno",
  refused: "Recusado",
  chargedback: "Chargeback",
  analyzing: "Analizando",
  pending_review: "Pendente de Revisão",
};

export default paymentStatus;