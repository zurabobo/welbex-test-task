import InfoTable from '../InfoTable/InfoTable.js';
import InfoTableForm from '../InfoTableForm/InfoTableForm';
import Pagination from '../Pagination/Pagination';
import { data } from '../../utils/data';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [ sortData, setSortData ] = useState(data);
	const [ sortConfig, setSortConfig ] = useState({
		sortDirection: 'ASC',
		sortBox: 'name',
		filterBox: undefined,
		filterLaw: undefined,
		filterArgument: undefined
	});
	const [ renderData, setRenderData ] = useState(sortData);

	const [ pagesConfig, setPagesConfig ] = useState({
		currentPage: 1,
		pageCount: Math.ceil(sortData.length / 5)
	});

	function handleSort(box) {
		if (sortConfig.sortBox === box) {
			if (sortConfig.sortDirection === 'ASC') {
				setSortConfig({ ...sortConfig, sortDirection: 'DESC', sortBox: box });
				return;
			}
		}
		setSortConfig({ ...sortConfig, sortDirection: 'ASC', sortBox: box });
	}

	function onFilterSubmit(config) {
		console.log(config);
		setSortConfig({
			...sortConfig,
			filterBox: config.name,
			filterLaw: config.law,
			filterArgument: config.argument
		});
	}

	function onResetHandle() {
		setSortData([ ...data ]);
		setPagesConfig({ ...pagesConfig, currentPage: 1 });
	}

	function onChoosePageHandler(page) {
		setPagesConfig({ ...pagesConfig, currentPage: page });
	}

	useEffect(
		() => {
			if (sortConfig.sortBox === 'name') {
				sortConfig.sortDirection === 'ASC'
					? setSortData([ ...sortData.sort((a, b) => (a.name > b.name ? 1 : -1)) ])
					: setSortData([ ...sortData.sort((a, b) => (a.name < b.name ? 1 : -1)) ]);
			}
			if (sortConfig.sortBox === 'points') {
				sortConfig.sortDirection === 'ASC'
					? setSortData([ ...sortData.sort((a, b) => a.points - b.points) ])
					: setSortData([ ...sortData.sort((a, b) => b.points - a.points) ]);
			}
			if (sortConfig.sortBox === 'distance') {
				sortConfig.sortDirection === 'ASC'
					? setSortData([ ...sortData.sort((a, b) => a.distance - b.distance) ])
					: setSortData([ ...sortData.sort((a, b) => b.distance - a.distance) ]);
			}
			if (sortConfig.filterBox && sortConfig.filterLaw && sortConfig.filterArgument) {
				if (sortConfig.filterBox === 'name') {
					if (sortConfig.filterLaw === 'equal')
						setSortData([
							...sortData.filter((e) => e.name === sortConfig.filterArgument)
						]);
					if (sortConfig.filterLaw === 'contain')
						setSortData([
							...sortData.filter((e) => e.name.includes(sortConfig.filterArgument))
						]);
					if (sortConfig.filterLaw === 'greater')
						setSortData([
							...sortData.filter((e) => e.name.length > sortConfig.filterArgument)
						]);
					if (sortConfig.filterLaw === 'less')
						setSortData([
							...sortData.filter((e) => e.name.length < sortConfig.filterArgument)
						]);
				}
				if (sortConfig.filterBox === 'points') {
					if (sortConfig.filterLaw === 'equal')
						setSortData([
							...sortData.filter(
								(e) => e.points === Number(sortConfig.filterArgument)
							)
						]);
					if (sortConfig.filterLaw === 'contain')
						setSortData([
							...sortData.filter((e) =>
								e.points.toString().includes(sortConfig.filterArgument)
							)
						]);
					if (sortConfig.filterLaw === 'greater')
						setSortData([
							...sortData.filter((e) => e.points > Number(sortConfig.filterArgument))
						]);
					if (sortConfig.filterLaw === 'less')
						setSortData([
							...sortData.filter((e) => e.points < Number(sortConfig.filterArgument))
						]);
				}
				if (sortConfig.filterBox === 'distance') {
					if (sortConfig.filterLaw === 'equal')
						setSortData([
							...sortData.filter(
								(e) => e.distance === Number(sortConfig.filterArgument)
							)
						]);
					if (sortConfig.filterLaw === 'contain')
						setSortData([
							...sortData.filter((e) =>
								e.distance.toString().includes(sortConfig.filterArgument)
							)
						]);
					if (sortConfig.filterLaw === 'greater')
						setSortData([
							...sortData.filter(
								(e) => e.distance > Number(sortConfig.filterArgument)
							)
						]);
					if (sortConfig.filterLaw === 'less')
						setSortData([
							...sortData.filter(
								(e) => e.distance < Number(sortConfig.filterArgument)
							)
						]);
				}
			}
		},
		[ sortConfig ]
	);

	useEffect(
		() => {
			setPagesConfig({ ...pagesConfig, pageCount: Math.ceil(sortData.length / 5) });
		},
		[ sortData ]
	);

	useEffect(
		() => {
			setRenderData(
				sortData.slice(
					pagesConfig.currentPage === 1
						? pagesConfig.currentPage - 1
						: (pagesConfig.currentPage - 1) * 5,
					pagesConfig.currentPage * 5
				)
			);
		},
		[ pagesConfig, sortData ]
	);

	return (
			<div className="page">
				<InfoTableForm filterSubmit={onFilterSubmit} onReset={onResetHandle} />
				<InfoTable data={renderData} onSort={handleSort} />
				<Pagination
					currentPage={pagesConfig.currentPage}
					pageCount={pagesConfig.pageCount}
					onChoosePage={onChoosePageHandler}
				/>
			</div>
	);
}

export default App;
