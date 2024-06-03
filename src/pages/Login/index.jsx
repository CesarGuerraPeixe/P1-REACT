import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import facebookLogo from './facebook.png';
import { Input } from '../../components/Input';

function Login() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCorreto] = useState("emailteste@gmail.com");
  const [senhaCorreta] = useState("12345");

  function addCount() {
    setCount(count => count + 1);
  }

  useEffect(() => {
    if (email === emailCorreto && password === senhaCorreta) {
      console.log("Login realizado com sucesso!");
    } else {
      console.log("E-mail ou senha incorretos.");
    }
  }, [count]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={facebookLogo} alt="Logo do Facebook" className={styles.logo} />
          <h2>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h2>
        </div>
        <div>
          <div className={styles.containerform}>
            <Input onChange={e => setEmail(e.target.value)} placeholder='Email ou telefone' />
            <Input onChange={e => setPassword(e.target.value)} placeholder='Senha' type="password" />
            <button type="button" onClick={addCount} className={styles.entrar}>Entrar</button>
            <a href="#">Esqueceu a senha?</a>
            <button type="button" className={styles.criarConta}>Criar nova conta</button>
          </div>
          <p><a href="#">Criar uma Página</a> para uma celebridade, uma marca ou uma empresa.</p>
        </div>
      </div>
      <footer>Facebook - Todos os direitos reservados</footer>
    </>
  );
}

export default Login;
