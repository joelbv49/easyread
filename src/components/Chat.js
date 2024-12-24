import React, { useContext, useEffect, useState } from 'react'
import Alert from './Alert';
import { Chatcontext } from '../context/Chatstate';
import { useParams } from 'react-router-dom';
import Messagebox from './Messagebox';
import FileUploads from './FileUploads';
import { getSummary } from './get';

export default function Chat() {
  const { id } = useParams();
  const { handleDefault, setUrlchat, handleId, handleSubmit2, handleSubmit, isValidURL, Urlchats, handleSuccess, handleFailure, alert, alertMsg, success, Default, failure, handleLoad, setLoad, handleClose2, close2, Pdfmsg, file, setPreviewUrl, setPreviewFile ,handleCloseMark2} = useContext(Chatcontext);

  handleId(id);
  const [Focus, setFocus] = useState(true);
  const [msg, setMsg] = useState([]);
  const [URL, setURL] = useState("");
  const [close, setClose] = useState(false);
  const [text, setText] = useState("");
  const [openChat, setOpenChat] = useState("open Chats");

  const handleFocus = () => setFocus((prevFocus) => !prevFocus);

  const handleCloseMark = () => {
    if (close) setLoad(true);
    setURL("");
    setClose((prevClose) => !prevClose);
  };

  const handleClose = async () => {
    if (!URL && !msg.length) {
      handleFailure(true, "Please provide a URL or file.");
      setTimeout(() => handleFailure(false, ""), 1000);
      return;
    }

    try {
      if (URL) await handleURLValidation();
    }
    catch (error) {
      handleFailure(true, "Invalid URL");
      setURL("");
      setTimeout(() => handleFailure(false, ""), 1000);
      return;
    }
    
    if (!close && (URL || msg.length)) {
      await handleLoad();
      if (URL) await Summarize();
    }
    setClose((prevState) => !prevState);
  };

  const handleURLValidation = async () => {
    handleDefault(true, "Reading the Article ...");
    if (!isValidURL(URL)) {
      handleDefault(false, "");
      throw new Error ("Invalid URL");
    }
    const response = await getSummary(URL);
    await handleSummary(response);
    handleDefault(false, "");
  };

  const handleSummary = (response) => {
    setUrlchat((prevUsers) => prevUsers.map((user) => user.id === id ? { ...user, messages: [{ message: response, type: 'response' }] } : user));
  };

  const Summarize = () => {
    const userchat = Urlchats.find((user) => user.id === id);
    setMsg(userchat ? userchat.messages : []);
  };

  useEffect(() => {
    Summarize();
  }, [Urlchats, id]);

  const handleCopy = (message) => {
    setText(message);
    navigator.clipboard.writeText(text);
    handleSuccess(true, "Text copied to clipboard!");
    setTimeout(() => handleSuccess(false, ""), 2000);
  };

  const handleDownloadText = (content) => {
    const createDownloadLink = (fileContent) => {
        const element = document.createElement("a");
        const fileBlob = new Blob([fileContent], { type: "text/plain" });

        const url = typeof URL.createObjectURL === "function"
            ? URL.createObjectURL(fileBlob)
            : `data:text/plain;charset=utf-8,${encodeURIComponent(fileContent)}`;

        element.href = url;
        element.download = "summary.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    if (content) {
        createDownloadLink(content);
    } else {
        handleFailure(true,"No content available");
    }
};


  useEffect(() => {
    Focus ? setOpenChat(URL ? "Summarize" : "OpenChats") : setOpenChat(file ? "Summarize" : "OpenChats");
  }, [URL, file, Focus]);

  useEffect(() => {
    if (URL) setPreviewUrl(URL);
  }, [URL, setPreviewUrl]);

  useEffect(() => {
    if (file) setPreviewFile(file);
  }, [file, setPreviewFile]);

  return (
    <>
      <div className="flex flex-col">
        <div className="w-full h-40 flex justify-center items-center px-4 sm:px-0">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl font-custom2 text-center">Empower your reading experience with EasyRead.</h1>
        </div>

        <div className="flex flex-col items-center w-full mt-2 h-auto sm:h-[30rem]">
          <h1 className="font-bold text-xl sm:text-2xl font-custom2 text-center px-4 sm:px-0">Enter an Article URL or upload a file</h1>

          <div className="w-full sm:w-3/4 md:w-1/2 h-auto sm:h-96 mt-8 sm:mt-14 flex flex-col space-y-6 sm:space-y-10 px-4 sm:px-0">
            <div className="flex w-full sm:w-3/4 md:w-1/2 h-10 self-center space-x-4 rounded-md">
              <button className={`cursor-pointer border border-blue-900 rounded-md hover:scale-105 hover:transition-transform hover:duration-700 flex items-center justify-center w-1/2 h-full ${Focus ? "text-white bg-blue-600" : "text-black bg-white"}`} onClick={handleFocus} disabled={Focus}>
                <h3 className="font-bold text-sm sm:text-base">Add Url</h3>
              </button>
              <button className={`flex items-center border border-blue-900 rounded-md hover:scale-105 hover:transition-transform hover:duration-700 cursor-pointer justify-center w-1/2 h-full ${!Focus ? "text-white bg-blue-600" : "text-black bg-white"}`} onClick={handleFocus} disabled={!Focus}>
                <h3 className="font-bold text-sm sm:text-base">Upload a file</h3>
              </button>
            </div>

            {Focus && (
              <div className="w-full">
                <input type="url" placeholder="Paste the URL of the article here" className="w-full h-10 px-4 text-sm rounded-md outline-none focus:ring-1 focus:ring-blue-700 border border-slate-400 focus:placeholder:text-xs focus:placeholder:-translate-y-3 focus:placeholder:transition-all focus:placeholder:duration-700" value={URL} onChange={(e) => setURL(e.target.value)} />
              </div>
            )}

            {!Focus && <FileUploads />}

            <button type='submit' className="w-full hover:bg-blue-950 hover:scale-105 hover:transition-transform hover:duration-700 h-10 font-bold bg-blue-900 text-white rounded-lg text-sm sm:text-base" onClick={Focus ? handleClose : handleClose2}>{openChat}</button>
          </div>
        </div>

        {Default && <Alert alert={alert} msg={alertMsg} Default={Default} />}
        {success && <Alert alert={alert} msg={alertMsg} success={success} />}
        {failure && <Alert alert={alert} msg={alertMsg} failure={failure} />}
      </div>

      <Messagebox
        key={Focus ? 'URL' : 'file'}
        id={id}
        handleSubmit={Focus ? handleSubmit : handleSubmit2}
        handleCopy={handleCopy}
        handleDownloadText={handleDownloadText}
        close={Focus ? close : close2}
        handleClose={Focus ? handleCloseMark : handleCloseMark2}
        msg={Focus ? msg : Pdfmsg}
        url={URL}
        file={file}
        Focus={Focus}
      />
    </>
  )
}

