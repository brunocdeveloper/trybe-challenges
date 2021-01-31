import React, { Component } from 'react';


const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      nome: "",
      email: "",
      CPF: "",
      endereco: "",
      cidade: "",
      estado: "",
      resumo: "",
      cargo: "",
      dsccargo: "",

    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  changeHandler = (event) => {
    if (event.target.name === "nome") {
      this.setState({
        [event.target.name]: event.target.value.toUpperCase()
      })
    }
  }

  handleChange = (event) => {
   this.setState({
     [event.target.name]: event.target.value
   })
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div>
              Nome:
              <input type ="text" name="nome" maxLength="40" required onChange={this.changeHandler}></input>
              </div>
            <div>
              Email:
              <input type="text" name="email" maxLength="50" required onChange={this.handleChange}></input>
            </div>
            <div>
              CPF:
              <input type="number" name="CPF" maxLength="11" required onChange={this.handleChange}></input>
            </div>
            <div>
              Endereço:
              <input type="text" name="endereco" maxLength="200" required onChange={this.handleChange}></input>
            </div>
            <div>
              Cidade:
              <input type="text" name="cidade" maxLength="28" required onChange={this.handleChange}></input>
            </div>
            <div>
            Estado
            <select required name="estado" onChange={this.handleChange}>
            {states.map((value, key) => <option key={key}>{value}</option> )}
            </select>
            </div>
          </fieldset>
          <fieldset>
            <div>
            Resumo do currículo
            <textarea maxlength="1000" required name="resumo" onChange={this.handleChange}></textarea>
            </div>
            <div>
              Cargo
              <textarea onChange={this.handleChange} name="cargo" maxlength="40" onMouseEnter={() => { alert('Preencha com cuidado está informação')}}></textarea>
            </div>
            <div>
              Descrição do Cargo
              <textarea onChange={this.handleChange} name="dsccargo" maxlength="500" required></textarea>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

