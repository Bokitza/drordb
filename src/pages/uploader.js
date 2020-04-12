import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import XLSX from 'xlsx'
import { connect } from 'react-redux'

function UploadFiles(props) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = function(elem) {
        var data = new Uint8Array(elem.target.result);
        var workbook = XLSX.read(data, {type: 'array'});
        var sheet=workbook.Sheets[workbook.SheetNames[0]];
        var sheetToUpload=[]
        sheetToUpload=XLSX.utils.sheet_to_json(sheet)
        //deleting header before uploading
        sheetToUpload.shift()
        
        //send to Redux
        props.uploadSheet(sheetToUpload)}
      reader.readAsArrayBuffer(file)
    })
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
      //TODO make it
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>נא גרור הנה את הקובץ להעלאה</p>
    </div>
  )
}

//get file from Redux
const connectToRedux = (state) => {return {filesUploaded: state.file}}

//Maked the Redux function to upload available via props
const outPutToRedux = (dispatch) => {return {
    uploadSheet: (file) => {dispatch({type:'UPLOAD', data: file})}
}}
export default connect(connectToRedux, outPutToRedux)(UploadFiles)

// const dropArea = document.getElementById("btn");


  


// var files = [];
// const handleDrop = (e) => {
//   //Things against some kinda bugs... boilerplate
//   e.stopPropagation(); e.preventDefault();
//   //convert the target into an array of files
//   for (let i=0; i < e.dataTransfer.files.length; i++)
//   {files.push(e.dataTransfer.files[i]);}
//   console.log(`${files.length} + "files uploaded`)

//   //pops the header selector buttons!
//   const uploadBtn=document.getElementById("upload");
//   document.body.appendChild(headerHelper);
//   document.body.appendChild(headers);
// }
// var jsoned = null;
// var merged =[];
// var reader = null
// var j=0;
// //reading and appending the files to Merged array
//   function merge() {
//     //defining header location
//     var headerMax=parseInt(headers.value);
    
//     if(j<files.length) {
//     var reader = new FileReader();
//     reader.readAsArrayBuffer(files[j]);

    

  
