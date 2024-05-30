import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ExportXlsx } from "../../utils/functions/Functions";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialaog from "../common/ConfirmDialaog";
import CreateButton from '../common/CreateButton';
import DataGridTable from '../common/DataGridTable';

// Start relative variables
import { GetTypes, DeleteType } from "../../utils/redux/actions/Types";
import {TypeDataColumns, ROWS_PER_PAGE} from "../../utils/constants/Constants";
import TypesCreateForm from "../forms/types/TypesCreateForm";
import TypesEditForm from "../forms/types/TypesEditForm";
// End relative variables

const TypesDataTable = () => {
  const allowedPageSizes = ROWS_PER_PAGE;
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const [idToDelete, setIdToDelete] = useState(0);
  const [dataToBeEdited, setDataToBeEdited] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [createForm, setCreateForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const confirmSentece = "Are you sure you want to delete this type";
  const location = useLocation();
  // Start relative variables
  const [itemToDelete, setItemToDelete] = useState("");
  const data = useSelector((state) => state.types);
  const columns = TypeDataColumns;

  useEffect(() => {
    if(!error){
      dispatch(GetTypes());
    }
  }, [dispatch, refresh]);
  
  const onDeleting = (data) => {
    setIdToDelete(data.id);
    setItemToDelete(data.type_name);   // Relative variables
    setShowConfirmDialog(true);
  };

   // End relative variables



  const onExporting = (e) => {
    const fileName =  location.pathname;
    ExportXlsx(e, fileName);
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

  const onDelete = async () => {
    await dispatch(DeleteType(idToDelete));
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
        <TypesCreateForm
          createFormVisibility={createFormVisibility}
          refreshPage={refreshPage}
        />
      )}
      {editForm && (
        <TypesEditForm
          editFormVisibility={editFormVisibility}
          data={dataToBeEdited}
          refreshPage={refreshPage}
        />
      )}

<div className={`${createForm ? "blur-sm" : ""}${editForm ? "blur-sm" : ""}`}>
        <div className="flex justify-end">
        <CreateButton onClick={onInserting}/>
        </div>

        <DataGridTable data={data}  onExporting={onExporting} allowedPageSizes={allowedPageSizes} onEditing={onEditing} onDeleting={onDeleting} columns={columns}/>
      </div>
    </div>
  );
};
export default TypesDataTable;
