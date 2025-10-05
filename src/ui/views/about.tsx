//@ts-nocheck
import React from 'react';
import Page from '../components/page';
import Navbar from '../components/navbar';
import LazyImage from '../components/lazy-image';
import { List, ListItem, ListTitle } from '../components/list';

const openSourceLibs = [
	{
		name: 'React',
		developer: 'Facebook',
		logo: 'https://reactjs.org/icons/icon-48x48.png',
		link: 'https://reactjs.org',
	},
	{
		name: 'React Router',
		developer: 'React Training',
		logo: 'https://avatars3.githubusercontent.com/u/11823761?s=200&v=4',
		link: 'https://github.com/ReactTraining/react-router',
	},
];


export default function About() {
	const libs = [
		...openSourceLibs,
		...[...window.eclipse.cores.entries()].map(([_, value]) => value.repo),
	].filter(v => !!v)
	return (
		<Page>
			<Navbar back title="About" />
			
			{/* General */}

			<ListTitle title="General" />
			<List>
				<ListItem
					media={<LazyImage src="static/icons/icon.square.png" />}
					title="Eclipse"
					after={<p>v{window.eclipse.version}</p>}
				/>
			</List>

			{/* Used Libraries */}

			<ListTitle title="Open-Source Libraries" />
			<List>
				{libs.map(lib => (
					<ListItem
						link={lib.link}
						external
						media={<LazyImage src={lib.logo} />}
						title={lib.name}
						subtitle={lib.developer}
					/>
				))}
		</Page>
	);
}
