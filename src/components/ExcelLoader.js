import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import XLSX from 'xlsx'



function ExcelLoader(props) {

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

export default ExcelLoader