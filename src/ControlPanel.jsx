import React, { useState, Fragment } from "react";
import Grid from "./Grid";

export default ({ employees }) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageEmps, setPageEmps] = useState(employees.filter((e, i) => i < 10));
  const [currentPageNo, setCurrentPageNo] = useState(0);

  const onPageSizeChange = e => {
    let newPageSize = e.target.value;

    //set filtered Employees.
    let filterEmployees = employees.filter((e, i) => {
      return i < newPageSize;
    });

    setPageSize(newPageSize);
    setPageEmps(filterEmployees);
  };

  const filterEmployees = (pageSize, newPageNo) => {
    const firstRecordIndex = pageSize * newPageNo;
    const lastRecordIndex = pageSize * newPageNo + pageSize;

    let newEployees = employees.filter((e, i) => {
      return firstRecordIndex <= i && i < lastRecordIndex;
    });

    return newEployees;
  };

  const onPrevClick = e => {
    const newPageNo = currentPageNo - 1;

    const newEmps = filterEmployees(pageSize, newPageNo);
    if (newEmps.length) {
      setCurrentPageNo(newPageNo);
      setPageEmps(newEmps);
    }
  };

  const onNextClick = e => {
    const newPageNo = currentPageNo + 1;

    const newEmps = filterEmployees(pageSize, newPageNo);
    if (newEmps.length) {
      setCurrentPageNo(newPageNo);
      setPageEmps(newEmps);
    }
  };

  return (
    <Fragment>
      <Grid employees={pageEmps} />
      <div>
        <input type="button" value="PREV" onClick={onPrevClick} />
        <input type="button" value="NEXT" onClick={onNextClick} />
        {"    "}PageSize:
        <select value={pageSize} onChange={onPageSizeChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </Fragment>
  );
};
