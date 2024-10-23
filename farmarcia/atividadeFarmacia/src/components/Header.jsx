import './Header.css';

function Header() {
  function participarInauguração() {
    alert("Você vai participar da inauguração!");
  }

  return (
    <div className='navBar'>
      <div className='logo'>
        <img src='/farmarciaLogoPq.png' width={200} height={200} alt="Logo da Farmácia" />
      </div>
      <h1 className='farmacia'>Farmárcia</h1>
      <nav className='navLinks'>
        <button className='button' onClick={participarInauguração}>Participe da Inauguração</button>
      </nav>
    </div>
  );
}

export default Header;
