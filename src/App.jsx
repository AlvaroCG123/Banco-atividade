import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, reset } = useForm();
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState('');
  const [corResultado, setCorResultado] = useState('');

  const onSubmit = (data) => {
    const { nome, dividaAtiva, salario, clienteBanco, bens } = data;
    const salarioNum = parseFloat(salario);

    if (!nome || !dividaAtiva || !salario || !clienteBanco) {
      setResultado('Por favor, preencha todos os campos.');
      setImagem('');
      setCorResultado('');
      return;
    }

    if (dividaAtiva === 'sim' && clienteBanco === 'menos5' && (!bens || bens.length === 0)) {
      setResultado('Empréstimo Não Autorizado.');
      setImagem('/negado.jpg');
      setCorResultado('red');
    } else if (
      dividaAtiva === 'nao' &&
      clienteBanco === 'mais10' &&
      bens.includes('apartamentoCasa') &&
      bens.includes('veiculo')
    ) {
      const emprestimo = salarioNum * 6;
      const totalComAcrescimo = emprestimo * 1.2;
      setResultado(
        `Empréstimo Pré-Aprovado: R$ ${emprestimo.toFixed(
          2
        )} (Parcelado com 20% de acréscimo: R$ ${totalComAcrescimo.toFixed(2)})`
      );
      setImagem('/certo.png');
      setCorResultado('green');
    } else {
      const emprestimoPossivel = salarioNum * 3;
      setResultado(
        `Estimado(a) ${nome}: Venha conversar com nosso gerente! Empréstimo possível de R$ ${emprestimoPossivel.toFixed(
          2
        )}.`
      );
      setImagem('/certo.png');
      setCorResultado('green');
    }
  };

  const limparDados = () => {
    reset();
    setResultado('');
    setImagem('');
    setCorResultado('');
  };

  return (
    <>
      <nav className="navbar">
        <img className="logo" src="/tigre.png" alt="Logo do Tiger Bank" />
        <div className="titles">
          <h1>Tiger Bank</h1>
          <h2>Controle de Empréstimos</h2>
        </div>
      </nav>
      <main className="main-content">
        <section className="form-section">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Nome do Cliente:</h3>
            <input
              type="text"
              className="input-text"
              placeholder="Digite o nome do cliente"
              {...register('nome')}
            />

            <h3>Possui Dívida Ativa:</h3>
            <div className="radio-group">
              <input
                type="radio"
                id="sim"
                value="sim"
                {...register('dividaAtiva')}
              />
              <label htmlFor="sim">Sim</label>
              <input
                type="radio"
                id="nao"
                value="nao"
                {...register('dividaAtiva')}
              />
              <label htmlFor="nao">Não</label>
            </div>

            <h3>Salário R$:</h3>
            <input
              type="number"
              className="input-number"
              placeholder="Digite o salário"
              {...register('salario')}
            />

            <h3>Cliente do Banco:</h3>
            <select className="select-dropdown" {...register('clienteBanco')}>
              <option value="">Selecione</option>
              <option value="mais10">Acima de 10 anos</option>
              <option value="menos5">Menos de 5 anos</option>
            </select>

            <h3>Bens em Seu Nome:</h3>
            <div className="checkbox-group">
              <div>
                <input
                  type="checkbox"
                  id="apartamentoCasa"
                  value="apartamentoCasa"
                  {...register('bens')}
                />
                <label htmlFor="apartamentoCasa">Apartamento ou Casa</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="veiculo"
                  value="veiculo"
                  {...register('bens')}
                />
                <label htmlFor="veiculo">Veículo</label>
              </div>
            </div>

            <div className="button-group">
              <button className="btn verify-btn" type="submit">
                Verificar Empréstimo
              </button>
              <button
                className="btn clear-btn"
                type="button"
                onClick={limparDados}
              >
                Limpar Dados
              </button>
            </div>
          </form>

          {resultado && (
            <div
              className="resultado"
              style={{ color: corResultado, borderColor: corResultado }}
            >
              <p>{resultado}</p>
              {imagem && <img src={imagem} alt="Resultado" className="resultado-img" />}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;