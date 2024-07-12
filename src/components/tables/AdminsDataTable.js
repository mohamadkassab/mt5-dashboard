import React, { useState, useEffect } from "react";
import ConfirmDialaog from "../common/ConfirmDialaog";
import { useLocation } from "react-router-dom";
import { ExportXlsx } from "../../utils/functions/Functions";
import { useDispatch, useSelector } from "react-redux";
import CreateButton from '../common/CreateButton';
import DataGridTable from '../common/DataGridTable';

// Start relative variables
import { GetAdmins, DeleteAdmin } from "../../utils/redux/actions/Admins";
import {AdminDataColumns, ROWS_PER_PAGE} from "../../utils/constants/Constants";
import AdminsCreateForm from "../forms/admins/AdminsCreateForm";
import AdminsEditForm from "../forms/admins/AdminsEditForm";
// End relative variables

const AdminsDataTable = () => {
  const allowedPageSizes = ROWS_PER_PAGE;
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const [idToDelete, setIdToDelete] = useState(0);
  const [dataToBeEdited, setDataToBeEdited] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [createForm, setCreateForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const confirmDeleteSentece = "Are you sure you want to delete this admin account";
  const location = useLocation();
  // Start relative variables
  const [itemToDelete, setItemToDelete] = useState("");
  const data = useSelector((state) => state.admins);
  const [formattedData, setFormattedData] = useState([]);
  const columns = AdminDataColumns;

  useEffect(() => {
    if(!error){
      dispatch(GetAdmins());
    }
  }, [dispatch, refresh]);

  useEffect(() => {
    if(data){
      const newData = data.map((item,index) =>({
        ...item,
        is_active: item.is_active ? "Active" : "Not Active"
        
      }))
      setFormattedData(newData);
    }
   
  }, [data]);
 
  // End relative variables



  const onExporting = (e) => {
    const fileName =  location.pathname;
    ExportXlsx(e, fileName);
  };

  const refreshPage = () => {
    setRefresh(!refresh);
  };

  const onDeleting = (data) => {
    setIdToDelete(data.id);
    setItemToDelete(data.email);  // Relative variables
    setShowConfirmDialog(true);
  };


  const confirmDelete = (response) => {
    if (response) {
      onDelete();
    } else {
      setIdToDelete(0);
    }
    setShowConfirmDialog(false);
  };

  const onDelete = async () => {
    await dispatch(DeleteAdmin(idToDelete));
    refreshPage();
  };

  const createFormVisibility = (props) => {
    setCreateForm(props);
  };

  const editFormVisibility = (props) => {
    setEditForm(props);
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
        <AdminsCreateForm
          createFormVisibility={createFormVisibility}
          refreshPage={refreshPage}
        />
      )}
      {editForm && (
        <AdminsEditForm
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
export default AdminsDataTable;
