import Table from "../Table/Table.js";
import InfoTableForm from "../InfoTableForm/InfoTableForm";
import Pagination from "../Pagination/Pagination";
import tableApi from "../../utils/TableApi.js";
import "./App.css";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import { columns } from "../../utils/config";

function App() {
  const [appData, setAppData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotSorted, setIsNotSorted] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    filterBox: undefined,
    filterLaw: undefined,
    filterArgument: undefined,
  });
  const [renderData, setRenderData] = useState(appData);
  const [pagesConfig, setPagesConfig] = useState({
    currentPage: 1,
  });

  const handleSort = (sortField, sortOrder) => {
    setIsNotSorted(false);
    if (sortField) {
      const sorted = [...renderData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setRenderData(sorted);
    }
  };

  function onFilterSubmit(config) {
    setIsNotSorted(true);
    setSortConfig({
      ...sortConfig,
      filterBox: config.name,
      filterLaw: config.law,
      filterArgument: config.argument,
    });
  }

  function onResetHandle() {
    setAppData([...appData]);
    setIsNotSorted(true);
  }

  function onChoosePageHandler(page) {
    setPagesConfig({ ...pagesConfig, currentPage: page });
    setIsNotSorted(true);
  }

  useEffect(() => {
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
    setIsLoading(true);
    tableApi
      .getAppData()
      .then(([data]) => {
        localStorage.setItem("data", JSON.stringify(data));
        setAppData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
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
      <>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Table
              data={renderData}
              columns={columns}
              onSort={handleSort}
              isNotSorted={isNotSorted}
            />
            <Pagination
              data={appData}
              currentPage={pagesConfig.currentPage}
              onChoosePage={onChoosePageHandler}
            />
          </>
        )}
      </>
    </div>
  );
}

export default App;
