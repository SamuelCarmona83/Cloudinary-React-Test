import React, { useState } from 'react'
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [state, setState] = useState('');
  const url = `https://api.cloudinary.com/v1_1/dhx0gygg2/image/upload`
  const uploadImage = () => {

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'ry09iacg');

    fetch(url, {
      method: 'POST',
      body: formData,
    }).then(response => {
      return response.json()
    })
    .then(data => {
      console.log('data: ',data)
      setState(data.url)
    })
    .catch(error => console.log(error))

  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Upload image test.
        </p>
        {state !== '' && <>
          <h6>{state}</h6>
            <img src={state} alt="img" width={200} height={200}/>
        </>}
        <input type="file" onChange={event => setSelectedFile(event.target.files[0])} />
        <button onClick={uploadImage}>Subir Imagen</button>
      </header>
    </div>
  );
}

export default App;
