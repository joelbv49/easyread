import React, { useContext } from 'react'
import { Chatcontext } from '../context/Chatstate'

export default function FileUploads() {

    const {file,error,handleRemoveFile,handleDrop,handleDragOver,handleFile} = useContext(Chatcontext);
    return (
        <>

            <div className="p-4">
                {/* File Upload Area */}
                <form
                    htmlFor="file-upload"
                    className={`w-full  rounded-xl border-dashed border-2 ${error ? 'border-red-500' : 'border-black'} flex justify-center items-center hover:scale-105 transition-transform duration-700 cursor-pointer bg-gray-50`}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <label
                        htmlFor="file-upload"
                        className="h-full w-1/2 flex flex-col justify-center items-center cursor-pointer"
                    >
                        <h2 className="font-bold text-xl text-center">Select or Drop a file</h2>
                        <p className="text-center px-6">We support .pdf, .doc, .docx files up to 25 MB</p>
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        name="file"
                        onChange={handleFile}
                        className="hidden"
                    />
                </form>

                
                {/* File Details */}
                {file && (
                    <div className="mt-4">
                        <h3 className="font-bold text-lg">Uploaded File</h3>
                        <ul className="mt-2">
                            <li className="flex justify-between items-center p-3 bg-gray-100 rounded-lg mb-2">
                                <div className="flex items-center">
                                    <span className="font-bold">{file.name}</span>
                                    <span className="ml-2 text-sm text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                                </div>
                                <button
                                    onClick={handleRemoveFile}
                                    className="text-red-500 text-sm font-bold hover:underline"
                                >
                                    Remove
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </>
    )
}
