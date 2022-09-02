// import InfoTable from '../InfoTable/InfoTable.js';
// import InfoTableForm from '../InfoTableForm/InfoTableForm';
// import Pagination from '../Pagination/Pagination';
// import { data } from '../../utils/data';
// import './App.css';
// import { useState, useEffect } from 'react';

// function App() {
// 	const [ appData, setAppData ] = useState(data);
// 	const [ sortConfig, setSortConfig ] = useState({
// 		sortDirection: 'ASC',
// 		sortBox: 'name',
// 		filterBox: undefined,
// 		filterLaw: undefined,
// 		filterArgument: undefined
// 	});
// 	const [ renderData, setRenderData ] = useState(appData);

// 	const [ pagesConfig, setPagesConfig ] = useState({
// 		currentPage: 1,
// 		pageCount: Math.ceil(appData.length / 5)
// 	});

// 	function handleSort(box) {
// 		if (sortConfig.sortBox === box) {
// 			if (sortConfig.sortDirection === 'ASC') {
// 				setSortConfig({ ...sortConfig, sortDirection: 'DESC', sortBox: box });
// 				return;
// 			}
// 		}
// 		setSortConfig({ ...sortConfig, sortDirection: 'ASC', sortBox: box });
// 	}

// 	function onFilterSubmit(config) {
// 		console.log(config);
// 		setSortConfig({
// 			...sortConfig,
// 			filterBox: config.name,
// 			filterLaw: config.law,
// 			filterArgument: config.argument
// 		});
// 	}

// 	function onResetHandle() {
// 		setAppData([ ...data ]);
// 		setPagesConfig({ ...pagesConfig, currentPage: 1 });
// 	}

// 	function onChoosePageHandler(page) {
// 		setPagesConfig({ ...pagesConfig, currentPage: page });
// 	}

// 	useEffect(
// 		() => {
// 			if (sortConfig.sortBox === 'name') {
// 				sortConfig.sortDirection === 'ASC'
// 					? setAppData([ ...appData.sort((a, b) => (a.name > b.name ? 1 : -1)) ])
// 					: setAppData([ ...appData.sort((a, b) => (a.name < b.name ? 1 : -1)) ]);
// 			}
// 			if (sortConfig.sortBox === 'points') {
// 				sortConfig.sortDirection === 'ASC'
// 					? setAppData([ ...appData.sort((a, b) => a.points - b.points) ])
// 					: setAppData([ ...appData.sort((a, b) => b.points - a.points) ]);
// 			}
// 			if (sortConfig.sortBox === 'distance') {
// 				sortConfig.sortDirection === 'ASC'
// 					? setAppData([ ...appData.sort((a, b) => a.distance - b.distance) ])
// 					: setAppData([ ...appData.sort((a, b) => b.distance - a.distance) ]);
// 			}
// 			if (sortConfig.filterBox && sortConfig.filterLaw && sortConfig.filterArgument) {
// 				if (sortConfig.filterBox === 'name') {
// 					if (sortConfig.filterLaw === 'equal')
// 						setAppData([
// 							...appData.filter((e) => e.name === sortConfig.filterArgument)
// 						]);
// 					if (sortConfig.filterLaw === 'contain')
// 						setAppData([
// 							...appData.filter((e) => e.name.includes(sortConfig.filterArgument))
// 						]);
// 					if (sortConfig.filterLaw === 'greater')
// 						setAppData([
// 							...appData.filter((e) => e.name.length > sortConfig.filterArgument)
// 						]);
// 					if (sortConfig.filterLaw === 'less')
// 						setAppData([
// 							...appData.filter((e) => e.name.length < sortConfig.filterArgument)
// 						]);
// 				}
// 				if (sortConfig.filterBox === 'points') {
// 					if (sortConfig.filterLaw === 'equal')
// 						setAppData([
// 							...appData.filter(
// 								(e) => e.points === Number(sortConfig.filterArgument)
// 							)
// 						]);
// 					if (sortConfig.filterLaw === 'contain')
// 						setAppData([
// 							...appData.filter((e) =>
// 								e.points.toString().includes(sortConfig.filterArgument)
// 							)
// 						]);
// 					if (sortConfig.filterLaw === 'greater')
// 						setAppData([
// 							...appData.filter((e) => e.points > Number(sortConfig.filterArgument))
// 						]);
// 					if (sortConfig.filterLaw === 'less')
// 						setAppData([
// 							...appData.filter((e) => e.points < Number(sortConfig.filterArgument))
// 						]);
// 				}
// 				if (sortConfig.filterBox === 'distance') {
// 					if (sortConfig.filterLaw === 'equal')
// 						setAppData([
// 							...appData.filter(
// 								(e) => e.distance === Number(sortConfig.filterArgument)
// 							)
// 						]);
// 					if (sortConfig.filterLaw === 'contain')
// 						setAppData([
// 							...appData.filter((e) =>
// 								e.distance.toString().includes(sortConfig.filterArgument)
// 							)
// 						]);
// 					if (sortConfig.filterLaw === 'greater')
// 						setAppData([
// 							...appData.filter(
// 								(e) => e.distance > Number(sortConfig.filterArgument)
// 							)
// 						]);
// 					if (sortConfig.filterLaw === 'less')
// 						setAppData([
// 							...appData.filter(
// 								(e) => e.distance < Number(sortConfig.filterArgument)
// 							)
// 						]);
// 				}
// 			}
// 		},
// 		[ sortConfig ]
// 	);

// 	useEffect(
// 		() => {
// 			setPagesConfig({ ...pagesConfig, pageCount: Math.ceil(appData.length / 5) });
// 		},
// 		[ appData ]
// 	);

// 	useEffect(
// 		() => {
// 			setRenderData(
// 				appData.slice(
// 					pagesConfig.currentPage === 1
// 						? pagesConfig.currentPage - 1
// 						: (pagesConfig.currentPage - 1) * 5,
// 					pagesConfig.currentPage * 5
// 				)
// 			);
// 		},
// 		[ pagesConfig, appData ]
// 	);

// 	return (
// 			<div className="page">
// 				<InfoTableForm filterSubmit={onFilterSubmit} onReset={onResetHandle} />
// 				<InfoTable data={renderData} onSort={handleSort} />
// 				<Pagination
// 					currentPage={pagesConfig.currentPage}
// 					pageCount={pagesConfig.pageCount}
// 					onChoosePage={onChoosePageHandler}
// 				/>
// 			</div>
// 	);
// }

// export default App;

import InfoTable from "../InfoTable/InfoTable.js";
import InfoTableForm from "../InfoTableForm/InfoTableForm";
import Pagination from "../Pagination/Pagination";
import api from "../../utils/Api.js";
// import { data } from '../../utils/data';
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [appData, setAppData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    sortDirection: "ASC",
    sortBox: "user_name",
    filterBox: undefined,
    filterLaw: undefined,
    filterArgument: undefined,
  });
  const [renderData, setRenderData] = useState(appData);

  const [pagesConfig, setPagesConfig] = useState({
    currentPage: 1,
    pageCount: Math.ceil(appData.length / 5),
  });

  function handleSort(box) {
    if (sortConfig.sortBox === box) {
      if (sortConfig.sortDirection === "ASC") {
        setSortConfig({ ...sortConfig, sortDirection: "DESC", sortBox: box });
        return;
      }
    }
    setSortConfig({ ...sortConfig, sortDirection: "ASC", sortBox: box });
  }

  function onFilterSubmit(config) {
    console.log(config);
    setSortConfig({
      ...sortConfig,
      filterBox: config.name,
      filterLaw: config.law,
      filterArgument: config.argument,
    });
  }

  function onResetHandle() {
    setAppData([...appData]);
    setPagesConfig({ ...pagesConfig, currentPage: 1 });
  }

  function onChoosePageHandler(page) {
    setPagesConfig({ ...pagesConfig, currentPage: page });
  }

  useEffect(() => {
    if (sortConfig.sortBox === "user_name") {
      sortConfig.sortDirection === "ASC"
        ? setAppData([
            ...renderData.sort((a, b) => (a.user_name > b.user_name ? 1 : -1)),
          ])
        : setAppData([
            ...renderData.sort((a, b) => (a.user_name < b.user_name ? 1 : -1)),
          ]);
    }
    if (sortConfig.sortBox === "quantity") {
      sortConfig.sortDirection === "ASC"
        ? setAppData([...renderData.sort((a, b) => a.quantity - b.quantity)])
        : setAppData([...renderData.sort((a, b) => b.quantity - a.quantity)]);
    }
    if (sortConfig.sortBox === "distance") {
      sortConfig.sortDirection === "ASC"
        ? setAppData([...renderData.sort((a, b) => a.distance - b.distance)])
        : setAppData([...renderData.sort((a, b) => b.distance - a.distance)]);
    }
    if (
      sortConfig.filterBox &&
      sortConfig.filterLaw &&
      sortConfig.filterArgument
    ) {
      if (sortConfig.filterBox === "user_name") {
        if (sortConfig.filterLaw === "equal")
          setAppData([
            ...renderData.filter((e) => e.user_name === sortConfig.filterArgument),
          ]);
        if (sortConfig.filterLaw === "contain")
          setAppData([
            ...renderData.filter((e) =>
              e.user_name.includes(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "greater")
          setAppData([
            ...renderData.filter(
              (e) => e.user_name.length > sortConfig.filterArgument
            ),
          ]);
        if (sortConfig.filterLaw === "less")
          setAppData([
            ...renderData.filter(
              (e) => e.user_name.length < sortConfig.filterArgument
            ),
          ]);
      }
      if (sortConfig.filterBox === "quantity") {
        if (sortConfig.filterLaw === "equal")
          setAppData([
            ...renderData.filter(
              (e) => e.quantity === Number(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "contain")
          setAppData([
            ...renderData.filter((e) =>
              e.quantity.toString().includes(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "greater")
          setAppData([
            ...renderData.filter(
              (e) => e.quantity > Number(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "less")
          setAppData([
            ...renderData.filter(
              (e) => e.quantity < Number(sortConfig.filterArgument)
            ),
          ]);
      }
      if (sortConfig.filterBox === "distance") {
        if (sortConfig.filterLaw === "equal")
          setAppData([
            ...renderData.filter(
              (e) => e.distance === Number(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "contain")
          setAppData([
            ...renderData.filter((e) =>
              e.distance.toString().includes(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "greater")
          setAppData([
            ...renderData.filter(
              (e) => e.distance > Number(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "less")
          setAppData([
            ...renderData.filter(
              (e) => e.distance < Number(sortConfig.filterArgument)
            ),
          ]);
      }
    }
  }, [sortConfig]);

  useEffect(() => {
    setPagesConfig({
      ...pagesConfig,
      pageCount: Math.ceil(appData.length / 5),
    });
  }, [appData]);

  //   useEffect(() => {
  //     const getApi = () => {
  //       // Change this endpoint to whatever local or online address you have
  //       // Local PostgreSQL Database
  //       const Api = "http://localhost:5000/";
  //       fetch(Api)
  //         .then((response) => {
  //           console.log(response);
  //           return response.json();
  //         })
  //         .then((data) => {
  //           console.log(data);
  //           // setLoading(false);
  //           localStorage.setItem("data", JSON.stringify(data));
  //           setAppData(data);
  //         });
  //     };
  //     getApi();
  //   }, []);

//   useEffect(() => {
//     api.getAppData()
// 	.then((data) => {
//       console.log(data);
//       // setLoading(false);
//       localStorage.setItem("data", JSON.stringify(data));
//       setAppData(data);
//     });
//   }, []);

  useEffect(() => {
    api.getAppData()
      .then(([data]) => {
        console.log([data]);
        localStorage.setItem("data", JSON.stringify(data));
        setAppData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

   	useEffect(
		() => {
			setRenderData(
				appData.slice(
					pagesConfig.currentPage === 1
						? pagesConfig.currentPage - 1
						: (pagesConfig.currentPage - 1) * 5,
					pagesConfig.currentPage * 5
				)
			);
		},
		[ pagesConfig, appData ]
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
