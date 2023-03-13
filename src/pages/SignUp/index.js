import './style.css';
import { useState } from 'react';
import logo from '../../assets/background.jpg';
import close from '../../assets/close-eye.svg';
import open from '../../assets/open-eye.svg';
import Sucess from '../../assets/woman-success.png';

function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    setError('');
    setSucess('');

    if (!form.name || !form.email || !form.password) {
      setError('Preencha todos os campos!');
      return;
    }

    console.log(form);

    const localSucess = true;

    setSucess(localSucess);
    console.log(sucess);
    clearAll();
  };

  function clearAll() {
    setError('');

    setForm({
      name: '',
      email: '',
      password: ''
    });
  };


  function doShowPassword() {
    setShowPassword(!showPassword);
  };

  function handleChangeForm(event) {
    const value = event.target.value;

    setForm({ ...form, [event.target.name]: value });
  }

  return (
    <div className='background'>
      <div className='signup'>

        {sucess && <img src={Sucess} alt='sucess signup' />}
        <form className={sucess ? 'hidden' : ''} onSubmit={handleSubmit} >
          <h2>Cadastre-se</h2>
          <input type='text' placeholder='Digite seu nome' name='name' value={form.name} onChange={(event) => handleChangeForm(event)}></input>
          <input type='text' placeholder='Digite seu email' name='email' value={form.email} onChange={(event) => handleChangeForm(event)}></input>
          <div className='password'>
            <input type={showPassword ? 'text' : 'password'} placeholder='Digite sua senha' name='password' value={form.password} onChange={(event) => handleChangeForm(event)} />
            <img src={showPassword ? close : open} alt='Ocultar senha' onClick={() => doShowPassword()} />
          </div>
          {error && <span className='error'>{error}</span>}
          <button className='btn-signup' type='submit' >CADASTRAR</button>
          <button className='btn-cancel' type='button' onClick={() => clearAll()}>CANCELAR</button>
          <span>Já tem cadastro? <a href=''>Clique aqui!</a></span>
        </form>
      </div>
      <div className='logo'>
        <img src={logo} alt=''></img>
      </div>
    </div>
  );
}

export default SignUp;
