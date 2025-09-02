import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src="public/tigre.png" alt="Logo do Tiger Bank" />
        <div className="titles">
          <h1>Tiger Bank</h1>
          <h2>Controle de Empréstimos</h2>
        </div>
      </nav>
      <main className="main-content">
        <section className="form-section">
          <h3>Nome do Cliente:</h3>
          <input type="text" className="input-text" placeholder="Digite o nome do cliente" />

          <h3>Possui Dívida Ativa:</h3>
          <div className="radio-group">
            <input type="radio" name="dividaAtiva" id="sim" />
            <label htmlFor="sim">Sim</label>
            <input type="radio" name="dividaAtiva" id="nao" />
            <label htmlFor="nao">Não</label>
          </div>

          <h3>Salário R$:</h3>
          <input type="number" className="input-number" placeholder="Digite o salário" />

          <h3>Cliente do Banco:</h3>
          <select className="select-dropdown">
            <option value="">Acima de 10 anos</option>
            <option value="">Menos de 5 anos</option>
          </select>

          <h3>Bens em Seu Nome:</h3>
          <div className="checkbox-group">
            <div>
              <input type="checkbox" id="apartamentoCasa" name="bens" value="apartamentoCasa" />
              <label htmlFor="apartamentoCasa">Apartamento ou Casa</label>
            </div>
            <div>
              <input type="checkbox" id="veiculo" name="bens" value="veiculo" />
              <label htmlFor="veiculo">Veículo</label>
            </div>
          </div>

          <div className="button-group">
            <button className="btn verify-btn">Verificar Empréstimo</button>
            <button className="btn clear-btn">Limpar Dados</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;