import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ExportXlsx } from "../../utils/functions/Functions";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialaog from "../common/ConfirmDialaog";
import CreateButton from '../common/CreateButton';
import DataGridTable from '../common/DataGridTable';

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
  const [formattedData, setFormattedData] = useState([]);
  const confirmSentece = "Are you sure you want to delete this user account";
  const location = useLocation();
  // Start relative variables
  const [itemToDelete, setItemToDelete] = useState("");
  const data = useSelector((state) => state.users);
  const columns = UserDataColumns;

  useEffect(() => {
    if(!error){
      dispatch(GetUsers());
    }
  }, [dispatch, refresh]);
  const onDeleting = (data) => {
    setIdToDelete(data.id);
    setItemToDelete(data.email);   // Relative variables
    setShowConfirmDialog(true);
  };

  // End relative variables

  useEffect(() => {
    if(data){
      const newData = data.map((item,index) =>({
        ...item,
        is_active: item.is_active ? "Active" : "Not Active"
        
      }))
      setFormattedData(newData);
    }
   
  }, [data]);

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
  
        <CreateButton onClick={onInserting}/>
        </div>

        <DataGridTable data={formattedData}  onExporting={onExporting} allowedPageSizes={allowedPageSizes} onEditing={onEditing} onDeleting={onDeleting} columns={columns}/>
      </div>
    </div>
  );
};
export default UsersDataTable;
