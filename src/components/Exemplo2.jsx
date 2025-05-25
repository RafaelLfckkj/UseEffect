import { useState, useEffect } from "react";

export function Exemplo2() {
  const [cep, setCep] = useState("");

  useEffect(() => {
    if(cep.length === 8){
      console.log(cep)
    }
  }, [cep]);

  return (
    <section>
      <h2>Exemplo 2: Buscar endereço pelo CEP</h2>

      <div>
        <input
          type="number"
          placeholder="Digite o CEP"
          onChange={(input) => setCep(input.target.value)}
        />
      </div>
    </section>
  );
}
