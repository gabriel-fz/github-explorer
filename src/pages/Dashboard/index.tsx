import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/15328480?s=460&u=62217625331a1c62660099599f8af32f16e0eecc&v=4"
            alt="Gabriel Fiorese"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Uma breve descrição aqui</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/15328480?s=460&u=62217625331a1c62660099599f8af32f16e0eecc&v=4"
            alt="Gabriel Fiorese"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Uma breve descrição aqui</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/15328480?s=460&u=62217625331a1c62660099599f8af32f16e0eecc&v=4"
            alt="Gabriel Fiorese"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Uma breve descrição aqui</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
