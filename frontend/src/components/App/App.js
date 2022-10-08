import InfoTable from "../InfoTable/InfoTable.js";
import InfoTableForm from "../InfoTableForm/InfoTableForm";
import Pagination from "../Pagination/Pagination";
import api from "../../utils/Api.js";
import "./App.css";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";

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

  const columns = [
    { label: "Дата", accessor: "date_of_birth", sortable: false },
    { label: "Название", accessor: "user_name", sortable: true },
    { label: "Количество", accessor: "quantity", sortable: true },
    { label: "Расстояние", accessor: "distance", sortable: true },
  ];

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
        ? setRenderData([
            ...renderData.sort((a, b) => (a.user_name > b.user_name ? 1 : -1)),
          ])
        : setRenderData([
            ...renderData.sort((a, b) => (a.user_name < b.user_name ? 1 : -1)),
          ]);
    }
    if (sortConfig.sortBox === "quantity") {
      sortConfig.sortDirection === "ASC"
        ? setRenderData([...renderData.sort((a, b) => a.quantity - b.quantity)])
        : setRenderData([
            ...renderData.sort((a, b) => b.quantity - a.quantity),
          ]);
    }
    if (sortConfig.sortBox === "distance") {
      sortConfig.sortDirection === "ASC"
        ? setRenderData([...renderData.sort((a, b) => a.distance - b.distance)])
        : setRenderData([
            ...renderData.sort((a, b) => b.distance - a.distance),
          ]);
    }
    if (
      sortConfig.filterBox &&
      sortConfig.filterLaw &&
      sortConfig.filterArgument
    ) {
      if (sortConfig.filterBox === "user_name") {
        if (sortConfig.filterLaw === "equal")
          setRenderData([
            ...renderData.filter(
              (e) => e.user_name === sortConfig.filterArgument
            ),
          ]);
        if (sortConfig.filterLaw === "contain")
          setRenderData([
            ...renderData.filter((e) =>
              e.user_name.includes(sortConfig.filterArgument)
            ),
          ]);

        if (sortConfig.filterLaw === "greater")
          setRenderData([
            ...renderData.filter(
              (e) => e.user_name.length > sortConfig.filterArgument
            ),
          ]);
        if (sortConfig.filterLaw === "less")
          setRenderData([
            ...renderData.filter(
              (e) => e.user_name.length < sortConfig.filterArgument
            ),
          ]);
      }
      if (sortConfig.filterBox === "quantity") {
        if (sortConfig.filterLaw === "equal")
          setRenderData([
            ...renderData.filter(
              (e) => e.quantity === Number(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "contain")
          setRenderData([
            ...renderData.filter((e) =>
              e.quantity.toString().includes(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "greater")
          setRenderData([
            ...renderData.filter(
              (e) => e.quantity > Number(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "less")
          setRenderData([
            ...renderData.filter(
              (e) => e.quantity < Number(sortConfig.filterArgument)
            ),
          ]);
      }
      if (sortConfig.filterBox === "distance") {
        if (sortConfig.filterLaw === "equal")
          setRenderData([
            ...renderData.filter(
              (e) => e.distance === Number(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "contain")
          setRenderData([
            ...renderData.filter((e) =>
              e.distance.toString().includes(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "greater")
          setRenderData([
            ...renderData.filter(
              (e) => e.distance > Number(sortConfig.filterArgument)
            ),
          ]);
        if (sortConfig.filterLaw === "less")
          setRenderData([
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

  useEffect(() => {
    api
      .getAppData()
      .then(([data]) => {
        localStorage.setItem("data", JSON.stringify(data));
        setAppData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setRenderData(
      appData.slice(
        pagesConfig.currentPage === 1
          ? pagesConfig.currentPage - 1
          : (pagesConfig.currentPage - 1) * 5,
        pagesConfig.currentPage * 5
      )
    );
  }, [pagesConfig, appData]);

  return (
    <div className="page">
      <InfoTableForm filterSubmit={onFilterSubmit} onReset={onResetHandle} />
      {appData.length > 0 ? (
        <>
          <InfoTable data={renderData} columns={columns} onSort={handleSort} />
          <Pagination
            currentPage={pagesConfig.currentPage}
            pageCount={pagesConfig.pageCount}
            onChoosePage={onChoosePageHandler}
          />
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default App;
