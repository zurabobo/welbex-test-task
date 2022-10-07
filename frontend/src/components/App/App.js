// import InfoTable from "../InfoTable/InfoTable.js";
// import InfoTableForm from "../InfoTableForm/InfoTableForm";
// import Pagination from "../Pagination/Pagination";
// import api from "../../utils/Api.js";
// import Info from "../Info/Info.js";

// import "./App.css";
// import { useState, useEffect } from "react";
// import Preloader from "../Preloader/Preloader.js";

// function App() {
//   const [appData, setAppData] = useState([]);
//   const [sortConfig, setSortConfig] = useState({
//     sortDirection: "ASC",
//     sortBox: "user_name",
//     filterBox: undefined,
//     filterLaw: undefined,
//     filterArgument: undefined,
//   });
//   const [renderData, setRenderData] = useState(appData);
//   const [isLoading, setIsLoading] = useState(false);

//   // const [pagesConfig, setPagesConfig] = useState({
//   //   currentPage: 1,
//   //   pageCount: Math.ceil(appData.length / 5),
//   // });

//   function handleSort(box) {
//     if (sortConfig.sortBox === box) {
//       if (sortConfig.sortDirection === "ASC") {
//         setSortConfig({ ...sortConfig, sortDirection: "DESC", sortBox: box });
//         return;
//       }
//     }
//     setSortConfig({ ...sortConfig, sortDirection: "ASC", sortBox: box });
//   }

//   function onFilterSubmit(config) {
//     console.log(config);
//     setSortConfig({
//       ...sortConfig,
//       filterBox: config.name,
//       filterLaw: config.law,
//       filterArgument: config.argument,
//     });
//   }

//   function onResetHandle() {
//     setAppData([...appData]);
//     // setPagesConfig({ ...pagesConfig, currentPage: 1 });
//   }

//   // function onChoosePageHandler(page) {
//   //   setPagesConfig({ ...pagesConfig, currentPage: page });
//   // }

//   useEffect(() => {
//     if (sortConfig.sortBox === "user_name") {
//       sortConfig.sortDirection === "ASC"
//         ? setRenderData([
//             ...appData.sort((a, b) => (a.user_name > b.user_name ? 1 : -1)),
//           ])
//         : setRenderData([
//             ...appData.sort((a, b) => (a.user_name < b.user_name ? 1 : -1)),
//           ]);
//     }
//     // if (sortConfig.sortBox === "quantity") {
//     //   sortConfig.sortDirection === "ASC"
//     //     ? setRenderData([...renderData.sort((a, b) => a.quantity - b.quantity)])
//     //     : setRenderData([
//     //         ...renderData.sort((a, b) => b.quantity - a.quantity),
//     //       ]);
//     // }
//     // if (sortConfig.sortBox === "distance") {
//     //   sortConfig.sortDirection === "ASC"
//     //     ? setRenderData([...renderData.sort((a, b) => a.distance - b.distance)])
//     //     : setRenderData([
//     //         ...renderData.sort((a, b) => b.distance - a.distance),
//     //       ]);
//     // }
//     // if (
//     //   sortConfig.filterBox &&
//     //   sortConfig.filterLaw &&
//     //   sortConfig.filterArgument
//     // ) {
//     //   if (sortConfig.filterBox === "user_name") {
//     //     if (sortConfig.filterLaw === "equal")
//     //       setRenderData([
//     //         ...renderData.filter(
//     //           (e) => e.user_name === sortConfig.filterArgument
//     //         ),
//     //       ]);
//     //     if (sortConfig.filterLaw === "contain")
//     //       setRenderData([
//     //         ...renderData.filter((e) =>
//     //           e.user_name.includes(sortConfig.filterArgument)
//     //         ),
//     //       ]);
//     //     if (sortConfig.filterLaw === "greater")
//     //       setRenderData([
//     //         ...renderData.filter(
//     //           (e) => e.user_name.length > sortConfig.filterArgument
//     //         ),
//     //       ]);
//     //     if (sortConfig.filterLaw === "less")
//     //       setRenderData([
//     //         ...renderData.filter(
//     //           (e) => e.user_name.length < sortConfig.filterArgument
//     //         ),
//     //       ]);
//     //   }
//     //   if (sortConfig.filterBox === "quantity") {
//     //     if (sortConfig.filterLaw === "equal")
//     //       setRenderData([
//     //         ...renderData.filter(
//     //           (e) => e.quantity === Number(sortConfig.filterArgument)
//     //         ),
//     //       ]);
//     //     if (sortConfig.filterLaw === "contain")
//     //       setRenderData([
//     //         ...renderData.filter((e) =>
//     //           e.quantity.toString().includes(sortConfig.filterArgument)
//     //         ),
//     //       ]);
//     //     if (sortConfig.filterLaw === "greater")
//     //       setRenderData([
//     //         ...renderData.filter(
//     //           (e) => e.quantity > Number(sortConfig.filterArgument)
//     //         ),
//     //       ]);
//     //     if (sortConfig.filterLaw === "less")
//     //       setRenderData([
//     //         ...renderData.filter(
//     //           (e) => e.quantity < Number(sortConfig.filterArgument)
//     //         ),
//     //       ]);
//     //   }
//     //   if (sortConfig.filterBox === "distance") {
//     //     if (sortConfig.filterLaw === "equal")
//     //       setRenderData([
//     //         ...renderData.filter(
//     //           (e) => e.distance === Number(sortConfig.filterArgument)
//     //         ),
//     //       ]);
//     //     if (sortConfig.filterLaw === "contain")
//     //       setRenderData([
//     //         ...renderData.filter((e) =>
//     //           e.distance.toString().includes(sortConfig.filterArgument)
//     //         ),
//     //       ]);
//     //     if (sortConfig.filterLaw === "greater")
//     //       setRenderData([
//     //         ...renderData.filter(
//     //           (e) => e.distance > Number(sortConfig.filterArgument)
//     //         ),
//     //       ]);
//     //     if (sortConfig.filterLaw === "less")
//     //       setRenderData([
//     //         ...renderData.filter(
//     //           (e) => e.distance < Number(sortConfig.filterArgument)
//     //         ),
//     //       ]);
//     //   }
//     // }
//   }, [sortConfig]);

//   // useEffect(() => {
//   //   setPagesConfig({
//   //     ...pagesConfig,
//   //     pageCount: Math.ceil(appData.length / 5),
//   //   });
//   // }, [appData]);

//   useEffect(() => {
//     setIsLoading(true);
//     api
//       .getAppData()
//       .then(([data]) => {
//         console.log([data]);
//         localStorage.setItem("data", JSON.stringify(data));
//         setAppData(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     setRenderData(appData)
//   }, [appData]);

//   return (
//     <div className="page">
//       <InfoTableForm filterSubmit={onFilterSubmit} onReset={onResetHandle} />
//       {/* <InfoTable data={renderData} onSort={handleSort} /> */}
//       {/* <Info renderData={renderData} /> */}
//       <>
//         {appData.length > 0 ? (
//           <>
//             <Pagination
//               isLoading={isLoading}
//               data={appData}
//               // renderData={renderData}
//               // RenderComponent={Info}
//               buttonConst={3}
//               onSort={handleSort}
//               contentPerPage={5}
//               siblingCount={1}
//               // currentPage={pagesConfig.currentPage}
//               // pageCount={pagesConfig.pageCount}
//               // onChoosePage={onChoosePageHandler}
//             />
//           </>
//         ) : (
//           <Preloader />
//           // <h1 className="info-title">Нет данных для отображения</h1>
//         )}
//       </>
//     </div>
//   );
// }

// export default App;

import InfoTable from "../InfoTable/InfoTable.js";
import InfoTableForm from "../InfoTableForm/InfoTableForm";
import Pagination from "../Pagination/Pagination";
import api from "../../utils/Api";
import { columns } from "../../utils/config";
import "./App.css";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import Table from "../Table/Table";
import { data } from "../../utils/data";
import { usePaginationRange, DOTS } from "../../hooks/usePaginationRange";

function App() {
  const tableData = JSON.parse(localStorage.getItem("tableData"));
  const [appData, setAppData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const contentPerPage = 5;
  const buttonConst = 3;
  const siblingCount = 1;
    const startIndex = currentPage * contentPerPage - contentPerPage;
    const endIndex = startIndex + contentPerPage;
    const renderedData = appData.slice(startIndex, endIndex);
 

  const [sortConfig, setSortConfig] = useState({
    // sortDirection: "ASC",
    // sortBox: "user_name",
    filterBox: '',
    filterLaw: '',
    filterArgument: '',
  });
  const [renderData, setRenderData] = useState(appData);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   Promise.all([api.getData()])

  //     .then(([data]) => {
  //       localStorage.setItem("tableData", JSON.stringify(data));
  //       setAppData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

//   useEffect(() => {
//     api.getData()
//         .then((data) => {
//             setAppData(data);
//         })
// }, []);

  // const [pagesConfig, setPagesConfig] = useState({
  //   currentPage: 1,
  //   pageCount: Math.ceil(appData.length / 5),
  // });

  // function handleSort(box) {
  //   if (sortConfig.sortBox === box) {
  //     if (sortConfig.sortDirection === "ASC") {
  //       setSortConfig({ ...sortConfig, sortDirection: "DESC", sortBox: box });
  //       return;
  //     }
  //   }
  //   setSortConfig({ ...sortConfig, sortDirection: "ASC", sortBox: box });
  // }

  function onFilterSubmit(config) {
    // setAppData([...tableData]);
    setSortConfig({
      ...sortConfig,
      filterBox: config.name,
      filterLaw: config.law,
      filterArgument: config.argument,
    });
  }

  const onResetHandle = () => {
    setAppData([...tableData]);
    // getDefaultSorting();
    // setPagesConfig({ ...pagesConfig, currentPage: 1 });
  };

  // function getDefaultSorting() {
  //   const sorted = [...appData].sort((a, b) => {
  //     const filterColumn = columns.filter((column) => column.sortbyOrder);
  
  //     // Merge all array objects into single object and extract accessor and sortbyOrder keys
  //     let { accessor = "id", sortbyOrder = "asc" } = Object.assign(
  //       {},
  //       ...filterColumn
  //     );
  
  //     if (a[accessor] === null) return 1;
  //     if (b[accessor] === null) return -1;
  //     if (a[accessor] === null && b[accessor] === null) return 0;
  
  //     const ascending = a[accessor]
  //       .toString()
  //       .localeCompare(b[accessor].toString(), "en", {
  //         numeric: true,
  //       });
  
  //     return sortbyOrder === "asc" ? ascending : -ascending;
  //   });
  //   setAppData(sorted);
  // }

  // function onChoosePageHandler(page) {
  //   setPagesConfig({ ...pagesConfig, currentPage: page });
  // }

  useEffect(() => {
    setIsLoading(true);
    api.getTableData()
      .then(([data]) => {
        localStorage.setItem("tableData", JSON.stringify(data));
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
    // if (sortConfig.sortBox === "user_name") {
    //   sortConfig.sortDirection === "ASC"
    //     ? setAppData([
    //         ...appData.sort((a, b) => (a.user_name > b.user_name ? 1 : -1)),
    //       ])
    //     : setAppData([
    //         ...appData.sort((a, b) => (a.user_name < b.user_name ? 1 : -1)),
    //       ]);
    // }
    // if (sortConfig.sortBox === "quantity") {
    //   sortConfig.sortDirection === "ASC"
    //     ? setAppData([...appData.sort((a, b) => a.quantity - b.quantity)])
    //     : setAppData([
    //         ...appData.sort((a, b) => b.quantity - a.quantity),
    //       ]);
    // }
    // if (sortConfig.sortBox === "distance") {
    //   sortConfig.sortDirection === "ASC"
    //     ? setAppData([...appData.sort((a, b) => a.distance - b.distance)])
    //     : setAppData([
    //         ...appData.sort((a, b) => b.distance - a.distance),
    //       ]);
    // }

    if (
      sortConfig.filterBox &&
      sortConfig.filterLaw &&
      sortConfig.filterArgument
    ) {
      if (sortConfig.filterBox === "user_name") {
        if (sortConfig.filterLaw === "equal")
          setAppData([
            ...appData.filter((e) => e.user_name === sortConfig.filterArgument)]);
        if (sortConfig.filterLaw === "contain")
          setAppData([
            ...appData.filter((e) => e.user_name.includes(sortConfig.filterArgument))]);
        if (sortConfig.filterLaw === "greater")
          setAppData([
            ...appData.filter((e) => e.user_name.length > sortConfig.filterArgument)]);
        if (sortConfig.filterLaw === "less")
          setAppData([
            ...appData.filter((e) => e.user_name.length < sortConfig.filterArgument)]);
      }

      if (sortConfig.filterBox === "quantity") {
        if (sortConfig.filterLaw === "equal")
          setAppData([
            ...appData.filter((e) => e.quantity === Number(sortConfig.filterArgument))]);
        if (sortConfig.filterLaw === "contain")
          setAppData([
            ...appData.filter((e) =>e.quantity.toString().includes(sortConfig.filterArgument))]);
        if (sortConfig.filterLaw === "greater")
          setAppData([
            ...appData.filter((e) => e.quantity > Number(sortConfig.filterArgument))]);
        if (sortConfig.filterLaw === "less")
          setAppData([
            ...appData.filter((e) => e.quantity < Number(sortConfig.filterArgument))]);
      }

      if (sortConfig.filterBox === "distance") {
        if (sortConfig.filterLaw === "equal")
          setAppData([
            ...appData.filter((e) => e.distance === Number(sortConfig.filterArgument))]);
        if (sortConfig.filterLaw === "contain")
          setAppData([
            ...appData.filter((e) => e.distance.toString().includes(sortConfig.filterArgument))]);
        if (sortConfig.filterLaw === "greater")
          setAppData([
            ...appData.filter((e) => e.distance > Number(sortConfig.filterArgument))]);
        if (sortConfig.filterLaw === "less")
          setAppData([
            ...appData.filter((e) => e.distance < Number(sortConfig.filterArgument))]);
      }
    }
  }, [sortConfig]);

  
  // useEffect(() => {
  //   setPagesConfig({
  //     ...pagesConfig,
  //     pageCount: Math.ceil(appData.length / 5),
  //   });
  // }, [appData]);

  // useEffect(() => {
  //   setPagesConfig({
  //     ...pagesConfig,
  //     pageCount: Math.ceil(appData.length / 5),
  //   });
  // }, [appData]);

  // useEffect(() => {
  //   setRenderData(
  //     appData.slice(
  //       pagesConfig.currentPage === 1
  //         ? pagesConfig.currentPage - 1
  //         : (pagesConfig.currentPage - 1) * 5,
  //       pagesConfig.currentPage * 5
  //     )
  //   );
  // }, [pagesConfig, appData]);
  

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...renderedData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setAppData(sorted);
    }
  };


  const [totalPageCount] = useState(Math.ceil(appData.length / contentPerPage));
  console.log(totalPageCount)
  // const [currentPage, setCurrentPage] = useState(1);
  // const [order, setOrder] = useState({ name: "asc", total: "asc" });
  
  const paginationRange = usePaginationRange({
    totalPageCount,
    contentPerPage,
    buttonConst,
    siblingCount,
    currentPage,
  });

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  return (
    <div className="page">
      <InfoTableForm filterSubmit={onFilterSubmit} onReset={onResetHandle} />
      <Table data={renderedData} columns={columns} handleSorting={handleSorting} />
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`pagination__arrow-btn ${
            currentPage === 1 ? "pagination__arrow-btn_disabled" : ""
          }`}
        >
          &#10094;
        </button>
        {/* show paginated button group */}
        {paginationRange.map((item, index) => {
          if (item === DOTS) {
            return (
              <button key={index} className={`pagination__item-dots`}>
                &#8230;
              </button>
            );
          }
          return (
            <button
              key={index}
              onClick={changePage}
              className={`pagination__item ${
                currentPage === item ? "pagination__item_active" : null
              }`}
            >
              <span className="pagination__item-span">{item}</span>
            </button>
          );
        })}
        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`pagination__arrow-btn ${
            currentPage === totalPageCount
              ? "pagination__arrow-btn_disabled"
              : ""
          }`}
        >
          &#10095;
        </button>
      </div>
      {/* <InfoTable data={renderData} onSort={handleSort} /> */}
      {/* <Info renderData={renderData} /> */}
      {/* <>
        {appData.length > 0 ? (
          <>
            <Pagination
              isLoading={isLoading}
              data={appData}
              columns={columns}
              // renderData={renderData}
              // RenderComponent={Info}
              buttonConst={3}
             //onSort={handleSort}
              contentPerPage={5}
              siblingCount={1}
              currentPage={pagesConfig.currentPage}
              pageCount={pagesConfig.pageCount}
              onChoosePage={onChoosePageHandler}
            />
          </>
        ) : (
          <Preloader />
          // <h1 className="info-title">Нет данных для отображения</h1>
        )}
      </> */}
    </div>
  );
}

export default App;
