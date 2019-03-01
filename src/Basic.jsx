import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { TitleComponent } from './TitleComponent';

// withTitle function
const withTitle = ({ component: Component, title }) => {
	return class Title extends React.Component {
		render() {
			return (
				<React.Fragment>
					<TitleComponent title={title} />
					<Component {...this.props} />
				</React.Fragment>
			);
		}
	};
};

// Using withTitle method
function HomeComponent() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

// Using withTitle method
const Home = withTitle({ component: HomeComponent, title: '✨ Home!' });

function AboutComponent() {
	return (
		<div>
			{/* Direct title component */}
			<TitleComponent title="👾 About!" />
			<h2>About</h2>
		</div>
	);
}

function Other() {
	return (
		<div>
			{/* Without title (using default title) */}
			<TitleComponent />
			<h2>Other</h2>
		</div>
	);
}

function BasicExample() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/other">Other</Link>
					</li>
				</ul>

				<hr />

				<Route exact path="/" component={Home} />
				<Route path="/about" component={AboutComponent} />
				<Route path="/other" component={Other} />
			</div>
		</Router>
	);
}

export default BasicExample;
