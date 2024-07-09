// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/brickz.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Zinc DEX</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>ZINC is a decentralized exchange designed to
                        facilitate secure, transparent, and efficient cryptocurrency trading. 
                        ZINC ensures that users maintain full control over their assets.
                        The platform leverages smart contracts to automate and enforce trade agreements,
                        enhancing trust and security in every transaction.
                    </p>

                    <a href="https://uniswap.org/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/thequantumdomain/ZincdEx" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Brickz</h3>
                    <img src={compound} alt="Brickz Landing Page" />
                    <p>Brickz is a cutting-edge Web3 platform revolutionizing the real estate industry 
                        through blockchain technology. Built on decentralized principles, Brickz offers 
                        a secure, transparent, and efficient marketplace for buying, selling, and 
                        trading real estate properties as NFTs (Non-Fungible Tokens). 
                    </p>

                    <a href="https://github.com/thequantumdomain/Brickz" target="_blank" className="button">Site</a>
                    <a href="https://github.com/thequantumdomain/Brickz" target="_blank" className="button">Code</a>
                </div>

                {/* <div className="projects__card">
                    <h3>GeneBlock</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>An Ethereum and IPFS-based Electronic Health Records management platform.
                    </p>
                    
                    <a href="https://github.com/thequantumdomain/geneblockv1" target="_blank" className="button">Site</a>
                    <a href="https://github.com/thequantumdomain/geneblockv1" target="_blank" className="button">Code</a>
                </div> */}

                <div className="projects__card">
                    <h3>Security Audits</h3>
                    <img src={aave} alt="Compound Landing Page" />
                    <p>An example of the meticulously crafted smart contract audits which cover a range 
                        of decentralized applications. Designed for efficiency,
                        security, and transparency, these reports analyze smart contracts to ensure limited 
                        vulnerabilites in complex processes, ensuring functionality and security.
                        
                    </p>

                    <a href="https://github.com/thequantumdomain/SecurityPortfolio/blob/main/securityreportsfinal/TSwap_Audit_May2024.md" target="_blank" className="button">Report</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;