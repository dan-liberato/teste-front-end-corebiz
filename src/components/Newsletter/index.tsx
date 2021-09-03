import React, { useState, FormEvent } from "react";
import api from "../../services/api";

import "./styles.css";

const Newsletter = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [nameError, setNameError] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [submitedLead, setSubmitedLead] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);

	const hanldeSubmit = async (event: FormEvent) => {
		event.preventDefault();

		if (!name) {
			setNameError("Preencha com seu nome completo");
			setDisabled(true);
		}
		if (!email) {
			setEmailError("Preencha com um e-mail válido");
			setDisabled(true);
		}

		if (name && email) {
			const response = await api.post("newsletter", { name, email });
			if (response.status) {
				setSubmitedLead(true);
			}
			setName("");
			setEmail("");
			setNameError("");
			setDisabled(false);
		}
	};

	return (
		<section className="container__newsletter">
			<div className="newsletter">
				{!submitedLead ? (
					<>
						<h2 className="newsletter__title">
							Participe de nossas news com promoções e novidades!
						</h2>
						<form
							className="newsletter__form"
							onSubmit={hanldeSubmit}
						>
							<label htmlFor="name" className="form__label">
								<input
									className={`form__input ${
										!name && nameError
											? "form__input--border"
											: ""
									}`}
									type="text"
									name="name"
									placeholder="Digite seu nome"
									onChange={(e) => setName(e.target.value)}
								/>
								{!name && <span>{nameError}</span>}
							</label>

							<label htmlFor="email" className="form__label">
								<input
									className={`form__input ${
										!email && emailError
											? "form__input--border"
											: ""
									}`}
									type="email"
									name="email"
									placeholder="Digite seu e-mail"
									onChange={(e) => setEmail(e.target.value)}
								/>
								{!email && <span>{emailError}</span>}
							</label>

							{(disabled && !name) || (disabled && !email) ? (
								<button
									className="btn-primary form__button"
									type="submit"
									disabled
									style={{ opacity: 0.7 }}
								>
									Eu quero!
								</button>
							) : (
								<button
									className="btn-primary form__button"
									type="submit"
								>
									Eu quero!
								</button>
							)}
						</form>
					</>
				) : (
					<div className="form__submited flexColCenter">
						<h2 className="form__submited__title">
							Seu e-mail foi cadastrado com sucesso!
						</h2>
						<p className="form__submited__description">
							A partir de agora você receberá as novidades e
							ofertas exclusivas.
						</p>
						<button
							onClick={() => setSubmitedLead(false)}
							className="btn-primary form__button form__submited__button"
						>
							Cadastrar novo e-mail
						</button>
					</div>
				)}
			</div>
		</section>
	);
};
export default Newsletter;
