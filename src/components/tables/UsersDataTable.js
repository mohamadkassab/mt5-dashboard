import React, { useState, useEffect } from "react";
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  ColumnChooser,
  SearchPanel,
  Sorting,
  Export,
  Selection,
} from "devextreme-react/data-grid";
import { Button } from "@mui/material";
import { saveAs } from "file-saver-es";
import { Workbook } from "exceljs";
import { exportDataGrid } from "devextreme/excel_exporter";
import { booleanCellRender } from "../cellRendering/CellRendering";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ConfirmDialaog from "../common/ConfirmDialaog";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

// Start relative variables
import { GetUsers, DeleteUser } from "../../utils/redux/actions/Users";
import {UserDataColumns, ROWS_PER_PAGE} from "../../utils/constants/Constants";
import UsersCreateForm from "../forms/users/UsersCreateForm";
import UsersEditForm from "../forms/users/UsersEditForm";
// End relative variables

const UsersDataTable = () => {
  const allowedPageSizes = ROWS_PER_PAGE;
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const [idToDelete, setIdToDelete] = useState(0);
  const [dataToBeEdited, setDataToBeEdited] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [createForm, setCreateForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const confirmSentece = "Are you sure you want to delete this email";

  // Start relative variables
  const [itemToDelete, setItemToDelete] = useState("");
  const data = useSelector((state) => state.users);
  const columns = UserDataColumns;

  useEffect(() => {
    if(!error){
      dispatch(GetUsers());
    }
  }, [dispatch, refresh]);
  // End relative variables

  
  const columnsDiv = columns.map((item, index) => {
    const columnProps = {
      key: index,
      dataField: item.dataField,
      caption: item.caption,
      alignment: item.alignment,
    };
    if (item.cellRender) {
      columnProps.cellRender = item.cellRender;
    }
    if (item.width) {
      columnProps.width = item.width;
    }
    if(!item.hideColumn){
      return <Column {...columnProps}></Column>;
    }
  });

  const onExporting = (e) => {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet("Main sheet");
    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(
          new Blob([buffer], { type: "application/octet-stream" }),
          "DataGrid.xlsx"
        );
      });
    });
  };

  const refreshPage = () => {
    setRefresh(!refresh);
  };

  const confirmDelete = (response) => {
    if (response) {
      onDelete();
    } else {
      setIdToDelete(0);
    }
    setShowConfirmDialog(false);
  };

  const createFormVisibility = (props) => {
    setCreateForm(props);
  };

  const editFormVisibility = (props) => {
    setEditForm(props);
  };

  const onDeleting = (data) => {
    setIdToDelete(data.id);
    setItemToDelete(data.email);   // Relative variables
    setShowConfirmDialog(true);
  };

  const onDelete = async () => {
    await dispatch(DeleteUser(idToDelete));
    refreshPage();
  };

  const onEditing = (data) => {
    setDataToBeEdited(data);
    setEditForm(true);
  };

  const onInserting = () => {
    setCreateForm(true);
  };

  return (
    <div>
      {showConfirmDialog && (
        <ConfirmDialaog
          confirmDelete={confirmDelete}
          confirmSentece={confirmSentece}
          data={itemToDelete}
        />
      )}
      {createForm && (
        <UsersCreateForm
          createFormVisibility={createFormVisibility}
          refreshPage={refreshPage}
        />
      )}
      {editForm && (
        <UsersEditForm
          editFormVisibility={editFormVisibility}
          data={dataToBeEdited}
          refreshPage={refreshPage}
        />
      )}

<div className={`${createForm ? "blur-sm" : ""}${editForm ? "blur-sm" : ""}`}>
        <div className="flex justify-end">
          <Button
            variant="contained"
            startIcon={
              <AddIcon
                sx={{
                  color: "white",
                }}
              />
            }
            onClick={onInserting}
          >
            Create
          </Button>
        </div>

        <DataGrid
          id="gridContainer"
          dataSource={data}
          columnHidingEnabled={true}
          width="100%"
          showBorders={true}
          showRowLines={false}
          rowAlternationEnabled={true}
          onExporting={onExporting}
          columnMinWidth={50}
          allowUpdating={true}
        >
          <Export enabled={true} allowExportSelectedData={true} />

          <SearchPanel visible={true} placeholder="Search..." />
          <Selection mode="multiple" />
          <Grouping
            contextMenuEnabled={true}
            autoExpandAll={true}
            expandMode="rowClick"
          />
          <GroupPanel visible={true} emptyPanelText="" />
          <Pager
            allowedPageSizes={allowedPageSizes}
            showInfo={true}
            showNavigationButtons={true}
            showPageSizeSelector={true}
            visible={true}
            displayMode={"compact"}
          />
          <Paging defaultPageSize={allowedPageSizes[0]} />
          <ColumnChooser enabled={false} mode="select" />
          <Sorting mode="multiple" />

          {columnsDiv}
          <Column
            caption="Action"
            alignment="center"
            fixedPosition="right"
            fixed={true}
            width={100}
            cellRender={(rowData) => (
              <div>
                <IconButton
                  onClick={() => onEditing(rowData.data)}
                  aria-label="delete"
                >
                  <ModeEditOutlineOutlinedIcon />
                </IconButton>
                <IconButton
                  onClick={() => onDeleting(rowData.data)}
                  aria-label="delete"
                  color="error"
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </div>
            )}
          />
        </DataGrid>
      </div>
    </div>
  );
};
export default UsersDataTable;
