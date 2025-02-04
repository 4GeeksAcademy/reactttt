import React from "react";
import Nav from "./Nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/id/10/200/300",
		title: "Lago",
		description: "El Lago Lago Nahuel Huapi (en Mapuche “isla del tigre”) está ubicado en el centro del Parque Nacional del mismo nombre.",
	},
	{
		image: "https://picsum.photos/id/17/200/300",
		title: "Sendero",
		description: "Los caminos o senderos son el inicio de una aventura. El trazo que marca el rumbo para ir de un lugar a otro, permitiéndonos descubrir y dándonos la posibilidad de alcanzar nuevas cimas o disfrutar nuevos paisajes.",
	},
	{
		image: "https://picsum.photos/id/28/200/300",
		title: "Bosque",
		description: "Los bosques constituyen ecosistemas increíblemente diversos que albergan la mayoría de las especies de plantas y animales terrestres. ",
	},
	{
		image: "https://picsum.photos/id/54/200/300",
		title: "Montaña",
		description: "Las montañas son extensiones de tierra mucho más altas que las tierras que las rodean . Son más altas y generalmente más empinadas que una colina y suelen tener más de 600 metros de altura",
	}
];

const Home = () => {
	return (
		<div className="text-center">
			<Nav />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;