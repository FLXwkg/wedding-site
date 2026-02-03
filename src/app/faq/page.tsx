'use client';

import { useState } from 'react';
import AccordionItem from '@/components/FAQ/AccordionItem';

const faqs = [
	{
		id: 1,
		question: 'Quelle est la date et l\'heure du mariage ?',
		answer: 'Notre mariage aura lieu le 19 septembre 2026. La cérémonie commence à 14h au Domaine les 3 Rivages, suivie du vin d\'honneur à 15h et du dîner à partir de 18h.'
	},
	{
		id: 2,
		question: 'Dois-je confirmer ma présence ?',
		answer: 'Oui, veuillez confirmer votre présence avant le 1er septembre 2026. Vous pouvez remplir le formulaire RSVP en ligne ou nous contacter directement à camille.ilan1909@gmail.com.'
	},
	{
		id: 3,
		question: 'Puis-je amener un accompagnant ?',
		answer: 'Votre invitation indiquera si un accompagnant est autorisé. Si vous avez des questions, veuillez nous le faire savoir lors de votre confirmation.'
	},
	{
		id: 4,
		question: 'Quelle est la tenue recommandée ?',
		answer: 'Une tenue chic et festive avec un accessoire de couleur.'
	},
	{
		id: 5,
		question: 'Y aura-t-il des options végétariennes ?',
		answer: 'Absolument ! Lors de votre confirmation, vous pourrez indiquer vos restrictions ou préférences alimentaires.'
	},
	{
		id: 6,
		question: 'Y a-t-il un stationnement disponible ?',
		answer: 'Oui, un parking gratuit est disponible au Domaine les 3 Rivages.'
	},
	{
		id: 7,
		question: 'À quelle heure dois-je arriver ?',
		answer: 'Veuillez arriver à partir de 13h30 pour la cérémonie. Cela nous donne du temps pour installer tout le monde avant de commencer.'
	},
	{
		id: 8,
		question: 'Y aura-t-il un groupe de musique en direct ou un DJ ?',
		answer: 'Nous aurons les deux ! Un groupe pour le vin d\'honneur et le dîner, suivi d\'un DJ pour danser jusqu\'à la fin de la nuit.'
	},
	{
		id: 9,
		question: 'Y a-t-il un hébergement sur place ?',
		answer: 'Oui, plusieurs gîtes sont disponibles au Domaine les 3 Rivages. Contactez nous !'
	},
];

export default function FAQ() {
	const [expandedId, setExpandedId] = useState<number | null>(null);
	const [contactForm, setContactForm] = useState({
		name: '',
		email: '',
		question: '',
	});
	const [submitted, setSubmitted] = useState(false);

	const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setContactForm(prev => ({ ...prev, [name]: value }));
	};

	const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Question soumise:', contactForm);
		setSubmitted(true);
		setTimeout(() => {
			setContactForm({
				name: '',
				email: '',
				question: '',
			});
			setSubmitted(false);
		}, 3000);
	};

	return (
		<div>
			{/* Hero */}
			<section className="bg-gradient-to-br from-rose-50 to-pink-50 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h1>
					<p className="text-lg text-gray-600">Retrouvez ci-dessous la plus part des réponses à vos questions.</p>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="space-y-4">
						{faqs.map((faq) => (
							<AccordionItem
								key={faq.id}
								id={faq.id}
								question={faq.question}
								answer={faq.answer}
								isExpanded={expandedId === faq.id}
								onToggle={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="bg-gray-50 py-20">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-8 text-center">Une autre question ?</h2>
					<p className="text-lg text-gray-600">Écrivez-nous dès maintenant à l’aide de ce formulaire !</p>
					
					{submitted ? (
						<div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
							<div className="text-5xl mb-4">✓</div>
							<h3 className="text-2xl font-bold text-green-900 mb-2">Merci !</h3>
							<p className="text-green-700">Votre question a été reçue. Nous vous recontacterons très bientôt.</p>
						</div>
					) : (
						<form onSubmit={handleContactSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
							{/* Nom */}
							<div>
								<label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
									Votre nom :
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={contactForm.name}
									onChange={handleContactChange}
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
									placeholder="Ex: Sanchez Camille"
								/>
							</div>

							{/* Email */}
							<div>
								<label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
									Votre e-mail :
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={contactForm.email}
									onChange={handleContactChange}
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
									placeholder="Ex: camille.sanchez@email.com"
								/>
							</div>

							{/* Question */}
							<div>
								<label htmlFor="question" className="block text-sm font-semibold text-gray-900 mb-2">
									Votre question :
								</label>
								<textarea
									id="question"
									name="question"
									value={contactForm.question}
									onChange={handleContactChange}
									required
									rows={4}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
									placeholder="Ecrivez votre question ici..."
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full bg-rose-600 text-white font-semibold py-3 rounded-lg hover:bg-rose-700 transition"
							>
								Envoyer ma question
							</button>
						</form>
					)}
				</div>
			</section>
		</div>
	);
}
