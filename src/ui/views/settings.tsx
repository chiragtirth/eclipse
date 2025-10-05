//@ts-nocheck
import React from 'react';
import Page from '../components/page';
import Navbar from '../components/navbar';
import { List, ListItem, ListTitle, ListFooter } from '../components/list';
import Toggle from '../components/toggle';
import LazyImage from '../components/lazy-image';

export default function Settings() {
	return (
		<Page>
			<Navbar back title="Settings" />

			{/* General */}

			<ListTitle title="General" />
			<List>
				<ListItem
					link='/about'
					media={<i className="f7-icons">info_circle_fill</i>}
					title="About"
				/>
				<ListItem
					link='/skins'
					media={<i className="f7-icons">layers_fill</i>}
					title="Skins"
				/>
			</List>

			{/* Emulation */}

			<ListTitle title="Emulation" />
			<List>
				<ListItem 
					title="Audio" 
					media={<i className="f7-icons">speaker_2_fill</i>}
					after={<Toggle name="audio" defaultChecked onChange={console.log} />}
				/>
				<ListItem 
					title="Touch Controls" 
					media={<i className="f7-icons">eye_fill</i>}
					after={<Toggle name="fillScreen" defaultChecked onChange={console.log} />}
				/>
				<ListItem 
					title="Fill Screen" 
					media={<i className="f7-icons">tv_fill</i>}
					after={<Toggle name="fillScreen" defaultChecked onChange={console.log} />}
				/>
			</List>

			{/* Backup */}

			<ListTitle title="Backup" />
			<List>
				<ListItem 
					link="#"
					title="Export Backup" 
					media={<i className="f7-icons">arrow_down_doc_fill</i>}
					onClick={() => {
						alert('Hello');
					}}
				/>
				<ListItem 
					link="#"
					title="Import Backup" 
					media={<i className="f7-icons">arrow_up_doc_fill</i>}
					onClick={() => {
						alert('Hello');
					}}
				/>
			</List>
			<ListFooter>Backups contain all your Frosix data (minus ROMs and tokens).</ListFooter>
		</Page>
	);
}
