import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import XLSX from 'xlsx'



function Uploader(props) {

  //we use the sheetToUpload as a state for react to update the table on the guy
  const [sheetToUpload, setSheetToUpload] = React.useState([])

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = function (elem) {
        var data = new Uint8Array(elem.target.result)
        var workbook = XLSX.read(data, { type: 'array' })
        var sheet = workbook.Sheets[workbook.SheetNames[0]]
        setSheetToUpload(XLSX.utils.sheet_to_json(sheet))

      }
      reader.readAsArrayBuffer(file)
    })
  }, [])
  const {getRootProps, getInputProps} = useDropzone({ onDrop })
  
  return (
    //TODO make it
    <div>
      <p {...getRootProps()}>נא גרור הנה את הקובץ להעלאה</p>
      <input {...getInputProps()}></input>
      {props.children(sheetToUpload)}
    </div>
  )
}

export default Uploader

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
