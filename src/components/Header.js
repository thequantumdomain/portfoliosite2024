// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Terome J. Mensah" />

            <div className='header__content'>
                <h1>Hi, I'm Terome J. Mensah</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:temens94@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;