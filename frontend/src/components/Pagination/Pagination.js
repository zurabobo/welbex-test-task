// import React, { useState } from "react";
// import { usePaginationRange, DOTS } from "../../hooks/usePaginationRange";
// import { Table } from "react-bootstrap";
// import "./Pagination.css";

// const Pagination = ({
//   data,
//   buttonConst,
//   contentPerPage,
//   siblingCount,
//   onSort,
//   isLoading,
// }) => {
//   const [totalPageCount] = useState(Math.ceil(data.length / contentPerPage));
//   const [currentPage, setCurrentPage] = useState(1);
//   const [order, setOrder] = useState({ name: "asc", total: "asc" });

//   const paginationRange = usePaginationRange({
//     totalPageCount,
//     contentPerPage,
//     buttonConst,
//     siblingCount,
//     currentPage,
//   });

//   function goToNextPage() {
//     setCurrentPage((page) => page + 1);
//   }
//   function gotToPreviousPage() {
//     setCurrentPage((page) => page - 1);
//   }
//   function changePage(event) {
//     const pageNumber = Number(event.target.textContent);
//     setCurrentPage(pageNumber);
//   }
//   const getPaginatedData = () => {
//     const startIndex = currentPage * contentPerPage - contentPerPage;
//     const endIndex = startIndex + contentPerPage;
//     return data.slice(startIndex, endIndex);
//   };

//   function handleClick({ target }) {
//     if (target.nodeName === "BUTTON") {
//       const {
//         dataset: { type },
//       } = target;
//       setOrder((prev) => {
//         const newOrder = prev[type] === "asc" ? "desc" : "asc";
//         return { ...prev, [type]: newOrder };
//       });
//     }
//   }

//   function getArrow(order) {
//     if (order === "asc") {
//       return "↑";
//     } else {
//       return "↓";
//     }
//   }

//   return (
//     <>
//       <Table
//         onClick={handleClick}
//         striped
//         bordered
//         className="border-dark text-center p-3 mx-auto mt-5 mb-4"
//       >
//         <thead>
//           <tr>
//             <th>Дата</th>
//             <th>
//               Название
//               <button
//                 className="sort-button"
//                 data-type="user_name"
//                 onClick={() => onSort("user_name")}
//               >
//                 {getArrow(order.user_name)}
//               </button>
//             </th>
//             <th>
//               Количество
//               <button
//                 className="sort-button"
//                 data-type="quantity"
//                 onClick={() => onSort("quantity")}
//               >
//                 {getArrow(order.quantity)}
//               </button>
//             </th>
//             <th>
//               Расстояние
//               <button
//                 className="sort-button"
//                 data-type="distance"
//                 onClick={() => onSort("distance")}
//               >
//                 {getArrow(order.distance)}
//               </button>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {isLoading ? (
//             <>
//               <tr className="shimmer">
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr className="shimmer">
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr className="shimmer">
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr className="shimmer">
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//               <tr className="shimmer">
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
//             </>
//           ) : (
//             getPaginatedData().map((user, i) => (
//               <tr key={i}>
//                 <td>{user.date_of_birth}</td>
//                 <td>{user.user_name}</td>
//                 <td>{user.quantity}</td>
//                 <td>{user.distance}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>
//       <div className="pagination">
//         {/* previous button */}
//         <button
//           onClick={gotToPreviousPage}
//           className={`pagination__arrow-btn ${
//             currentPage === 1 ? "pagination__arrow-btn_disabled" : ""
//           }`}
//         >
//           &#10094;
//         </button>
//         {/* show paginated button group */}
//         {paginationRange.map((item, index) => {
//           if (item === DOTS) {
//             return (
//               <button key={index} className={`pagination__item-dots`}>
//                 &#8230;
//               </button>
//             );
//           }
//           return (
//             <button
//               key={index}
//               onClick={changePage}
//               className={`pagination__item ${
//                 currentPage === item ? "pagination__item_active" : null
//               }`}
//             >
//               <span className="pagination__item-span">{item}</span>
//             </button>
//           );
//         })}
//         {/* next button */}
//         <button
//           onClick={goToNextPage}
//           className={`pagination__arrow-btn ${
//             currentPage === totalPageCount
//               ? "pagination__arrow-btn_disabled"
//               : ""
//           }`}
//         >
//           &#10095;
//         </button>
//       </div>
//     </>
//   );
// };

// export default Pagination;

import React, { useState } from "react";
import { usePaginationRange, DOTS } from "../../hooks/usePaginationRange";
import { Table } from "react-bootstrap";
import "./Pagination.css";
import TableBody from "../TableBody/TableBody";

const Pagination = ({
  data,
  buttonConst,
  contentPerPage,
  siblingCount,
  onSort,
  tableData,
  columns
}) => {
  const [totalPageCount] = useState(Math.ceil(data.length / contentPerPage));
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState({ name: "asc", total: "asc" });
  
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
  const getPaginatedData = () => {
    const startIndex = currentPage * contentPerPage - contentPerPage;
    const endIndex = startIndex + contentPerPage;
    return data.slice(startIndex, endIndex)
  }

  function handleClick({ target }) {
    if (target.nodeName === "BUTTON") {
      const {
        dataset: { type },
      } = target;
      setOrder((prev) => {
        const newOrder = prev[type] === "asc" ? "desc" : "asc";
        return { ...prev, [type]: newOrder };
      });
    }
  }

  function getArrow(order) {
    if (order === "asc") {
      return "↑";
    } else {
      return "↓";
    }
  }

  return (
    <>
      {/* <Table
        onClick={handleClick}
        striped
        bordered
        className="border-color text-center p-3 mx-auto mt-5 mb-4"
      >
        <thead>
          <tr>
            <th>Дата</th>
            <th>
              Название
              <button
                className="sort-button"
                data-type="user_name"
                onClick={() => onSort("user_name")}
              >
                {getArrow(order.user_name)}
              </button>
            </th>
            <th>
              Количество
              <button
                className="sort-button"
                data-type="quantity"
                onClick={() => onSort("quantity")}
              >
                {getArrow(order.quantity)}
              </button>
            </th>
            <th>
              Расстояние
              <button
                className="sort-button"
                data-type="distance"
                onClick={() => onSort("distance")}
              >
                {getArrow(order.distance)}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {getPaginatedData().map((user, i) => (
            // <TableBody tableData={dataItem}  columns={columns} key={i} />
            <tr key={i}>
              <td>{user.date_of_birth}</td>
              <td>{user.user_name}</td>
              <td>{user.quantity}</td>
              <td>{user.distance}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}
       <>
        {getPaginatedData().map((dataItem) => {
          return (
            <tr key={dataItem.id}>
              {columns.map(({ accessor }) => {
                const tData = dataItem[accessor] ? dataItem[accessor] : "——";
                return <td key={accessor}>{tData}</td>;
              })}
            </tr>
          );
        })}
      </>
    
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
    </>
  );
};

export default Pagination;

// import React, { useState } from "react";
// import { usePaginationRange, DOTS } from "../../hooks/usePaginationRange";
// import { Table } from "react-bootstrap";
// import "./Pagination.css";

// const Pagination = ({
//   data,
//   buttonConst,
//   contentPerPage,
//   siblingCount,
//   onSort,
//   RenderComponent
// }) => {
//   const [totalPageCount] = useState(Math.ceil(data.length / contentPerPage));
//   const [currentPage, setCurrentPage] = useState(1);
//   const [order, setOrder] = useState({ name: "asc", total: "asc" });

//   const paginationRange = usePaginationRange({
//     totalPageCount,
//     contentPerPage,
//     buttonConst,
//     siblingCount,
//     currentPage,
//   });

//   function goToNextPage() {
//     setCurrentPage((page) => page + 1);
//   }
//   function gotToPreviousPage() {
//     setCurrentPage((page) => page - 1);
//   }
//   function changePage(event) {
//     const pageNumber = Number(event.target.textContent);
//     setCurrentPage(pageNumber);
//   }
//   const getPaginatedData = () => {
//     const startIndex = currentPage * contentPerPage - contentPerPage;
//     const endIndex = startIndex + contentPerPage;
//     return data.slice(startIndex, endIndex);
//   };

//   function handleClick({ target }) {
//     if (target.nodeName === "BUTTON") {
//       const {
//         dataset: { type },
//       } = target;
//       setOrder((prev) => {
//         const newOrder = prev[type] === "asc" ? "desc" : "asc";
//         return { ...prev, [type]: newOrder };
//       });
//     }
//   }

//   function getArrow(order) {
//     if (order === "asc") {
//       return "↑";
//     } else {
//       return "↓";
//     }
//   }

//   return (
//     <>
//       <Table
//         onClick={handleClick}
//         striped
//         bordered
//         className="border-color text-center p-3 mx-auto mt-5 mb-4"
//       >
//         <thead>
//           <tr>
//             <th>Дата</th>
//             <th>
//               Название
//               <button
//                 className="sort-button"
//                 data-type="user_name"
//                 onClick={() => onSort("user_name")}
//               >
//                 {getArrow(order.user_name)}
//               </button>
//             </th>
//             <th>
//               Количество
//               <button
//                 className="sort-button"
//                 data-type="quantity"
//                 onClick={() => onSort("quantity")}
//               >
//                 {getArrow(order.quantity)}
//               </button>
//             </th>
//             <th>
//               Расстояние
//               <button
//                 className="sort-button"
//                 data-type="distance"
//                 onClick={() => onSort("distance")}
//               >
//                 {getArrow(order.distance)}
//               </button>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {getPaginatedData().map((dataItem, i) => (
//             <RenderComponent key={i} renderData={dataItem} />
//           ))}
//         </tbody>
//       </Table>
//       <div className="pagination">
//         {/* previous button */}
//         <button
//           onClick={gotToPreviousPage}
//           className={`pagination__arrow-btn ${
//             currentPage === 1 ? "pagination__arrow-btn_disabled" : ""
//           }`}
//         >
//           &#10094;
//         </button>
//         {/* show paginated button group */}
//         {paginationRange.map((item, index) => {
//           if (item === DOTS) {
//             return (
//               <button key={index} className={`pagination__item-dots`}>
//                 &#8230;
//               </button>
//             );
//           }
//           return (
//             <button
//               key={index}
//               onClick={changePage}
//               className={`pagination__item ${
//                 currentPage === item ? "pagination__item_active" : null
//               }`}
//             >
//               <span className="pagination__item-span">{item}</span>
//             </button>
//           );
//         })}
//         {/* next button */}
//         <button
//           onClick={goToNextPage}
//           className={`pagination__arrow-btn ${
//             currentPage === totalPageCount
//               ? "pagination__arrow-btn_disabled"
//               : ""
//           }`}
//         >
//           &#10095;
//         </button>
//       </div>
//     </>
//   );
// };

// export default Pagination;
