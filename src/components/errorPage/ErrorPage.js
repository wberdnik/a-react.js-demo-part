import React from 'react';
import { Link } from 'react-router-dom';
import LogoYellow from '../../images/logo/Logo-yellow';

const ErrorPage = (props) => {

	const {title, linkText, link} = props

    return (
		<div className='error-page'>
			<LogoYellow className='login__logo-image error-paage__logo-image'/>
			<div className='error-page__text'>
				<main className='error-page__title'>
					{title}
				</main>
				<Link to={link} className='error-page__link'>
					{linkText}
				</Link>
			</div>
		</div>
    );
};

export default ErrorPage;