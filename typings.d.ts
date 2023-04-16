export interface iUser {
  uid: string;
  email: string;
  name: string;
  imageUrl: string;
  code: string;
  type: string;
  teams: [];
  invited: boolean;
  fullname?: string; 
  phone_numbers?: [
    string
  ]
  documents?: [
    {
      "object": string;
      "id": string;
      "type": string;
      "number": string;
    }
  ]
  address?: {
    object: string;
    street: string;
    complementary: string;
    street_number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
    id: number;
  }
  transactions?: [iUserTransaction]
}

export interface iUserTransaction {
  data: iTransaction
  method: string
  teamId: string
  transactionId: string
}


export interface iTeam { // define the object (singular)
  id: string;
  team_teacher: string;
  team_name: string;
  team_data: {
    frequency: string;
    paymentDate: string;
    price: string;
    teamDate: string;
    time: string;
  };
}

export interface iFirestoreTransaction {
  data: iTransaction;
  month: number;
  time_stamp: Date;
  team: iTeam;
  uid: string;
  id: string;
}
export interface iTransaction {
    "object": string;
    "status": string;
    "refuse_reason": string;
    "status_reason": string;
    "acquirer_response_code": string;
    "acquirer_response_message": string;
    "acquirer_name": string;
    "acquirer_id": string;
    "authorization_code": string;
    "soft_descriptor": string;
    "tid": number;
    "nsu": number;
    "date_created": Date;
    "date_updated": Date;
    "amount": number;
    "authorized_amount": number;
    "paid_amount": number;
    "refunded_amount": number;
    "installments": number;
    "id": number;
    "cost": number;
    "card_holder_name": string;
    "card_last_digits": string;
    "card_first_digits": string;
    "card_brand": string;
    "card_pin_mode": string;
    "card_magstripe_fallback": boolean;
    "cvm_pin": boolean;
    "postback_url": string;
    "payment_method": string;
    "capture_method": string;
    "antifraud_score": string;
    "boleto_url": string;
    "boleto_barcode": string;
    "boleto_expiration_date": string;
    "boleto": string;
    "referer": "encryption_key";
    "ip": "85.221.159.19";
    "subscription_id": string;
    "phone": string;
    "address": string;
    "customer": {
      "object": string;
        "id": number;
        "external_id": string;
        "type": string;
        "country": string;
        "document_number": string;
        "document_type": string;
        "name": string;
        "email": string;
        "phone_numbers": [
          string
        ];
        "born_at": string;
        "birthday": string;
        "gender": string;
        "date_created": Date;
        "documents": [
            {
              "object": string;
              "id": string;
              "type": string;
              "number": string
            }
        ];
        "client_since": string;
        "risk_indicator": string
    };
    "billing": {
        "object": string;
        "id": number;
        "name": string;
        "address": {
          "object": string;
          "street": string;
          "complementary": string;
          "street_number": string;
          "neighborhood": string;
          "city": string;
          "state": string;
          "zipcode": string;
          "country": string;
          "id": number
        }
    };
    "shipping": string;
    "items": [
        {
        "object": string;
        "id": string;
        "title": string;
            "unit_price": number;
            "quantity": number;
            "category": string;
            "tangible": boolean;
            "venue": string;
            "date": string
        }
    ];
    "card": {
        "object": string;
        "id": string;
        "date_created": Date;
        "date_updated": Date;
        "brand": string;
        "holder_name": string;
        "first_digits": string;
        "last_digits": string;
        "country": string;
        "fingerprint": string;
        "valid": boolean;
        "expiration_date": string
    };
    "split_rules": string;
    "metadata": {};
    "antifraud_metadata": {};
    "reference_key": string;
    "device": string;
    "local_transaction_id": number;
    "local_time": string;
    "fraud_covered": boolean;
    "fraud_reimbursed": string;
    "order_id": number;
    "risk_level": string;
    "receipt_url": string;
    "payment": string;
    "addition": string;
    "discount": string;
    "private_label": string;
    "pix_data": string;
    "pix_qr_code": string;
    "pix_expiration_date": string
}
