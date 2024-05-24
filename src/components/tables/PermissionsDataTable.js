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
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ConfirmDialaog from "../common/ConfirmDialaog";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Button } from "@mui/material";
import { saveAs } from "file-saver-es";
import { Workbook } from "exceljs";
import { exportDataGrid } from "devextreme/excel_exporter";
import { booleanCellRender } from "../cellRendering/CellRendering";
import { useDispatch, useSelector } from "react-redux";

// Start relative variables
import { GetPermissions, DeletePermission } from "../../utils/redux/actions/Permissions";
import {PermissionDataColumns, ROWS_PER_PAGE} from "../../utils/constants/Constants";
import PermissionsCreateForm from "../forms/permissions/PermissionsCreateForm";
import PermissionsEditForm from "../forms/permissions/PermissionsEditForm";
// End relative variables

const PermissionsDataTable = () => {
  const allowedPageSizes = ROWS_PER_PAGE;
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const [idToDelete, setIdToDelete] = useState(0);
  const [dataToBeEdited, setDataToBeEdited] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [createForm, setCreateForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const confirmDeleteSentece = "Are you sure you want to delete this permission";
  
  // Start relative variables
  const [itemToDelete, setItemToDelete] = useState("");
  const data = useSelector((state) => state.permissions);
  const columns = PermissionDataColumns;

  useEffect(() => {
    if(!error){
      dispatch(GetPermissions());
    }
  }, [dispatch, refresh]);
  // End relative variables

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
    setItemToDelete(data.permission); 
    console.log(data); // Relative variables
    setShowConfirmDialog(true);
  };

  const onDelete = async () => {
    await dispatch(DeletePermission(idToDelete));
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
          confirmSentece={confirmDeleteSentece}
          data={itemToDelete}
        />
      )}
      {createForm && (
        <PermissionsCreateForm
          createFormVisibility={createFormVisibility}
          refreshPage={refreshPage}
        />
      )}
      {editForm && (
        <PermissionsEditForm
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

          <Column
            dataField={columns[0].dataField}
            caption={columns[0].caption}
            alignment={columns[0].alignment}
            width={30}
          ></Column>

          <Column
            dataField={columns[1].dataField}
            caption={columns[1].caption}
            alignment={columns[1].alignment}
          ></Column>

<Column
            dataField={columns[2].dataField}
            caption={columns[2].caption}
            alignment={columns[2].alignment}
          ></Column>

         
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
export default PermissionsDataTable;
