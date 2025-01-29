function Teste() {
  return (
    <div className="main">
      <div className="center">
        <div className="menu">
          <div className="logo">
            <h3>React.Code</h3>
          </div>
          <div className="item-menu">
            <a href="#">login</a>
          </div>
        </div>

        <div className="form">
          <h2>Entre em contato</h2>
          <form>
            <div className="items-form">
              <input placeholder="seu nome" type="text" />
              <input placeholder="seu endereço" type="text" />
              <input placeholder="seu sobrenome" type="text" />
              <input placeholder="nome do cachorro" type="text" />
              <input placeholder="nome do gato" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Teste;
