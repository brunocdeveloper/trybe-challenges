

def recover_expired_drugs(drugs_recover):
    today = date.today().isoformat()
    return [
      drug for drug in drugs_recover() if drug["data_de_validade"] < today
    ]