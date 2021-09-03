import { Link } from "react-router-dom";
import CorebizLogo from "../../assets/brand/corebiz.png";
import VTEXLogo from "../../assets/brand/VTEX.svg";

import "./styles.css";

const Footer = () => {
	return (
		<div className="container__footer">
			<footer className="footer">
				<div className="footer__contents location">
					<h3 className="location__title title">Localização</h3>
					<address className="location__address">
						Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
						Alphavile SP
					</address>
					<div className="location__contact">
						<a
							href="mailtto:brasil@corebiz.ag"
							title="E-mail"
							className="location__email"
						>
							brasil@corebiz.ag
						</a>
						<a
							href="tel:+55 11 3090 1039"
							title="Telefone"
							className="location__phone"
						>
							+55 11 3090 1039
						</a>
					</div>
				</div>

				<div className="footer__contents contact">
					<Link to="#" className="btn-secondary contact__button">
						<svg
							className="contact__button--icon"
							width="17"
							height="14"
							viewBox="0 0 17 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M15.3 0.666748H1.7C0.765 0.666748 0.0085 1.398 0.0085 2.29175L0 12.0417C0 12.9355 0.765 13.6667 1.7 13.6667H15.3C16.235 13.6667 17 12.9355 17 12.0417V2.29175C17 1.398 16.235 0.666748 15.3 0.666748ZM15.3 3.91675L8.50001 7.97925L1.70001 3.91675V2.29175L8.50001 6.35425L15.3 2.29175V3.91675Z"
								fill="black"
							/>
						</svg>
						<span>Entre em contato</span>
					</Link>

					<Link to="#" className="btn-secondary contact__button">
						<svg
							className="contact__button--icon"
							width="17"
							height="20"
							viewBox="0 0 17 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.5 0C3.80611 0 0 3.66364 0 8.18182V14.5455C0 16.0545 1.26556 17.2727 2.83333 17.2727H5.66667V10H1.88889V8.18182C1.88889 4.66364 4.845 1.81818 8.5 1.81818C12.155 1.81818 15.1111 4.66364 15.1111 8.18182V10H11.3333V17.2727H15.1111V18.1818H8.5V20H14.1667C15.7344 20 17 18.7818 17 17.2727V8.18182C17 3.66364 13.1939 0 8.5 0Z"
								fill="black"
							/>
						</svg>
						<span>Fale Com o nosso consultor Online</span>
					</Link>
				</div>

				<div className="footer__contents credits">
					<div className="credits__created flexColCenter">
						<span>Created by</span>
						<img src={CorebizLogo} alt="Powered by Corebiz" />
					</div>
					<div className="credits__powered flexColCenter">
						<span>Powered by</span>
						<img src={VTEXLogo} alt="Powered by VTEX" />
					</div>
				</div>
			</footer>
		</div>
	);
};
export default Footer;
