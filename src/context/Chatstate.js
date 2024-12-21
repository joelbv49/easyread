import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



// Step 1: Create Context
export const Chatcontext = createContext();

// Step 2: Create Provider Component
export const Chatstate = ({ children }) => {
  const navigate = useNavigate();
  
  // chat
  const Urlmessage = [
    {   
      id: '1',
      messages: [
        
      ]
    }
  ]
  const [Urlchats, setUrlchat] = useState(Urlmessage);
  
  const [activeChat,setActiveChat] = useState('1');
  const [contentLoader,setContentLoader] = useState(false);
  // handleNewChat
  const handleChatClick = (id)=>{
    setActiveChat(id);
    setContentLoader(true);
    setTimeout(()=>{
      setContentLoader(false);
    },1000);
  }
  const handleNewChat = () => {
    try{
      const id = crypto.randomUUID();
      // set the url space
      setUrlchat((prevChats)=>{
        return [...prevChats,
          {
            id:id,
            messages:[
              
            ]
          }
        ]
      });

      // set Doc space
      setDocChats((newDocChats)=>{
        return [
          ...newDocChats,
          {
            id:id,
            messages:[],
          }
        ]
      })
      setActiveChat(id);
      navigate(`/summarize/chat/${id}`);
      setContentLoader(true);
      setTimeout(()=>{
        setContentLoader(false);
      },1000);
      }
    catch(error){
      console.log(error);
    }
    
  }


// URLmessage box
  const [request, setRequest] = useState("");
  const handleUser = (event)=>{
    setRequest(event.target.value);
  }

  // A loader for message box
  const [getInfo,setInfo] = useState(true);

  const handleSubmit = async (id)=>{
    // loader should load for some time
    setInfo(false);
    // user requested data has to be shown
    if(!request){
      handleFailure(true,"Please Enter your Querry in the message Box");
      setTimeout(()=>{
        handleFailure(false,"");
        setInfo(true);
      },1000)
      return;
    }
    try{
      setUrlchat((prevChats)=>{
        return prevChats.map((chat)=>
          chat.id === id
          ?{
              ...chat,
              messages:[
                ...chat.messages,
                {
                  message:request,
                  type: 'request'
                }
              ]
            }
          :chat 
        );
  
      });
      // with the help of axios fetch the content and then store it and display it
      setUrlchat((prevChats)=>{
        return prevChats.map((chat)=>
        chat.id === id
        ?{
          ...chat,
          messages:[
            ...chat.messages,
            {
              message:"hi im chat with URL you can ask me any questions",
              type: 'response'
            }
          ]
        }
        :chat
        )
      })
    }
    catch(error){
      console.log('Error Fetching the message');
    }
    finally{
      setTimeout(()=>{
        setInfo(true);
      },1000)
      
      setRequest('');
    }
    
   
    
  }
  // check valid and reachable url
  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  

  // loading
  const [load, setLoad] = useState(true);
  const handleLoad = () => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);

  }


  // alert
    const [alert, setAlert] = useState(false );
    const [success, setSuccess] = useState(false);
    const [Default,setDefault] = useState(false);
    const [failure, setFailure] = useState(false);
    const [alertMsg, setAlertMsg] = useState("Reading the document...");
    const handleDefault = (state, msg) => {
      setAlert(state);
      setDefault(state);
      setAlertMsg(msg);
    }
  
    const handleSuccess = (state, msg) => {
      setAlert(state);
      setSuccess(state);
      setAlertMsg(msg);
    }
  
    const handleFailure = (state, msg) => {
      setAlert(state);
      setFailure(state);
      setAlertMsg(msg);
    }
  


    // Doc message Box
    const [id,setId] = useState("");
    const handleId = (id)=>{
      setId(id);
    }
    const DocMessage = [
      {
        id:'1',
        messages:[
          
        ]
      }
    ]

    const [DocChats,setDocChats] = useState(DocMessage);

    // 2. creating a handleclose2
    const [close2, setClose2] = useState(false);

    const handleClose2 = async (id) => {
      if(error){
        handleFailure(true,error);
        setTimeout(()=>{
          handleFailure(false,"");
        },1000)
        return;
      }
      if(!file && !Pdfmsg.length ){
        handleFailure(true,"Please upload a file");
        setTimeout(()=>{
          handleFailure(false,"");
        },1000);
      }
      else{
        await setClose2((close)=> !close);
      }
      // handling close here
      if (close2 === false) {//open
        
        // if summarize call 
        if(file === null && Pdfmsg.length !== 0) {
          await handleLoad();
        }
        else if(file !== null){
          await handleLoad();
          summarizePdf();
        }
        
        // printContent();
      }
      if (close2 === true) {
        setLoad(true);
      }
    }

  // 3. create summarizePdf function to display the summary
  const [Pdfmsg,setPdfmsg] = useState([]);
  const summarizePdf = async ()=>{
    const UserPdf = DocChats.find((user)=> user.id === id);
    if(UserPdf){
      setPdfmsg(UserPdf.messages);
    }
    else{
      setPdfmsg([]);
    }

  }

  // 4. create useEffect so that whenever there is a change in chat ,id or request it may be updated
  useEffect(()=>{
    const UserPdf = DocChats.find((user)=> user.id === id);
    if(UserPdf){
      setPdfmsg(UserPdf.messages);
    }
    else{
      setPdfmsg([]);
    }

  },[id, DocChats]);

  // handleSubmit2
  const handleSubmit2 = async (id)=>{
    // loader should load for some time
    setInfo(false);
    // user requested data has to be shown
    if(!request){
      handleFailure(true,"Please Enter your Querry in the message Box");
      setTimeout(()=>{
        handleFailure(false,"");
        setInfo(true);
      },1000)
      return;
    }
    try{
      setDocChats((DocChats)=>{
        return DocChats.map((chats)=>
          chats.id === id
          ?{
          ...chats,
          messages:[
            ...chats.messages,
                {
                  message:request,
                  type:'request'
                }
              ]
          }:
          chats
  
        )
      })
      console.log(DocChats);
      // with the help of axios fetch the content and then store it and display it
      setDocChats((DocChats)=>{
        return DocChats.map((chat)=>
        chat.id === id
        ?{
          ...chat,
          messages:[
            ...chat.messages,
            {
              message:"hi im chat with Pdf you can ask me any questions",
              type: 'response'
            }
          ]
        }
        :chat
        )
      })
    }
    catch(error){
      console.log('Error Fetching the message');
    }
    finally{
      setTimeout(()=>{
        setInfo(true);
      },1000)
      
      setRequest('');
    }
    
   
    
  }

  // dealing with file inputs
  const [file, setFile] = useState(null); // State to store a single file
  const [error, setError] = useState(''); // State to store any error message

    // Handle file input change
    const handleFile = (e) => {// handleRemoveFile handleDrop handleFileValidation handleDragOver handleRemoveFile
        const newFile = e.target.files[0];
        handleFileValidation(newFile);
    };

    // Handle file drop
    const handleDrop = (e) => {
        e.preventDefault();
        const newFile = e.dataTransfer.files[0];
        handleFileValidation(newFile);
    };

    // File validation logic (type and size)
    const handleFileValidation = (newFile) => {
        if (!newFile) return;

        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 25 * 1024 * 1024; // 25 MB

        if (!allowedTypes.includes(newFile.type)) {
            setError('Invalid file type. Please upload a .pdf, .doc, or .docx file.');
            setFile(null);
        } else if (newFile.size > maxSize) {
            setError('File size exceeds 25 MB. Please upload a smaller file.');
            setFile(null);
        } else {
            setError('');
            setFile(newFile);
        }
    };

    // Handle drag over event
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Handle file removal
    const handleRemoveFile = () => {
        setFile(null);
        setError('');
    };

    // Add these to your context state
    const [previewUrl, setPreviewUrl] = useState('');
    const [previewFile, setPreviewFile] = useState(null);

  return (
    <Chatcontext.Provider value={{handleDefault,setUrlchat,error,handleRemoveFile,handleDragOver,handleDrop,handleNewChat,isValidURL,handleSubmit2,handleId ,Urlchats,request,handleUser,handleSubmit,getInfo,handleChatClick,activeChat,alert,alertMsg,success,Default,failure,handleDefault,handleSuccess,handleFailure,DocChats,load,handleLoad,setLoad,handleClose2,close2,Pdfmsg,handleFile,file,previewUrl, setPreviewUrl, previewFile, setPreviewFile,contentLoader}}>
      {children}
    </Chatcontext.Provider>
  );
};
