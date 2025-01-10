import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

import image from './components/Images/image.png';

function App() {
    const [file, setFile] = useState(null);

    const onDrop = (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div>
            <nav>
                <div className="nav-section">Social Media Analysis</div>
                <div className="nav-buttons">
                    <button className="nav-button">ChatBot</button>
                    <button className="nav-button">Analysis</button>
                </div>
            </nav>
            <div className="content">
                <img src={image} alt="Description of the image" className="image" />
                <div className="description">
                    <h2>Image Title</h2>
                    <p>This is a small description of the image displayed on the left.</p>
                </div>
            </div>
            <div className="upload-box" {...getRootProps()}>
                <input {...getInputProps()} />
                <label className="file-label">Upload File</label>
                {file && <p>File: {file.name}</p>}
                <p>Drag and drop a file here or click to upload</p>
            </div>
            <p className="copyright">©2025 Social Media Performance Analysis. All rights reserved.</p>
        </div>
    );
}

export default App;
