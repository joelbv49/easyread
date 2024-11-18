import React, { useRef, useState } from 'react'
import { ImLoop } from 'react-icons/im';
import { IoAlertCircle, IoCloseSharp } from 'react-icons/io5';
import { TbCopy, TbRobot } from 'react-icons/tb';
import Alert from './Alert';

export default function Chat() {
  const [Focus, setFocus] = useState("true");

  const handleFocus = () => {
    setFocus(!Focus);
  }

  // handle scroll
  const containerRef = useRef(null);
  const [end,setEnd] = useState(false);
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;

      // Check if scrolled to the bottom
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        setEnd(true);
      } 
      else {
        setEnd(false);
      }
      
    }
  };

  // transition close
  const [close,setClose] = useState(false);
  const handleClose = async()=>{
    setClose(!close);
    // handling close here
    if(close === false){//open
      await handleLoad();
      printContent();
    }
    if(close === true){
      setLoad(true);
      // clear the content
      setText(" ");
    }
   
  }


  // loading
  const [load,setLoad] = useState(true);
  const handleLoad = ()=>{
    setTimeout(()=>{
      setLoad(!load);
    },1000);
    
  }

  // print
  let [text,setText] = useState("");
  const printContent = ()=>{
    let t = "Okay, got it. The context provided does not contain any information related to the word ji, so I don't have enough information to provide a meaningful summary in response to that question. If you have a more specific question related to the restaurant design examples shown, I'd be happy to try and summarize relevant information from the context. But without more context around the term ji, I don't have enough to go on to give a useful answer. Please feel free to provide a more specific question if you have one.";

    let i = -1;
    let interval = setInterval(()=>{
      if(i < t.length-1){
        
        setText((prevText)=>{
          console.log(prevText);
          return prevText + t[i];
         
        });
        i++;
      }
      else{
        clearInterval(interval);
      }
    },15)
  }

  // alert
  const [alert,setAlert] = useState(true);
  const [success,setSuccess] = useState(false);
  const [failure,setFailure] = useState(false);
  const [alertMsg,setAlertMsg] = useState("Reading the document...");
  const handleAlert = (state,msg)=>{
    setAlert(state);
    setAlertMsg(msg);
  }
  
  const handleSuccess = (state,msg)=>{
    setSuccess(state);
    setAlertMsg(msg);
  }

  const handleFailure = (state,msg)=>{
    setFailure(state);
    setAlertMsg(msg);
  }
  return (
    <>

      <div className="flex flex-col">
        {/* text */}
        <div className="w-full h-40  flex justify-center items-center">
          <h1 className="font-bold text-4xl font-custom2">Empower your reading experience with EasyRead.</h1>
        </div>

        {/* Enter the url */}
        <div className="flex flex-col items-center w-full mt-2 h-[30rem]">
          <h1 className="font-bold text-2xl font-custom2 ">Enter an Article URL or upload a file</h1>

          <div className="w-1/2 h-96 mt-14 flex flex-col space-y-10 ">

            {/* options */}
            <div className="flex  w-1/2 h-10 self-center space-x-4 rounded-md">

              <button className={`cursor-pointer border border-blue-900 rounded-md hover:scale-105 hover:transition-transform hover:duration-700 flex items-center justify-center w-1/2 h-full ${Focus ? "text-white bg-blue-600" : "text-black bg-white"}`} onClick={handleFocus} disabled={Focus} >
                <h3 className="font-bold">Add Url</h3>
              </button>

              <button className={`flex items-center border border-blue-900 rounded-md hover:scale-105 hover:transition-transform hover:duration-700 cursor-pointer justify-center w-1/2 h-full ${!Focus ? "text-white bg-blue-600" : "text-black bg-white"}`} onClick={handleFocus} disabled={!Focus}>
                <h3 className="font-bold">Upload a file</h3>
              </button>
            </div>

            {/* url */}
            {Focus && <div className="">
              <input type="url" placeholder="Paste the URL of the article here" className="w-full h-10 px-4 text-sm rounded-md outline-none focus:ring-1 focus:ring-blue-700 border border-slate-400 focus:placeholder:text-xs focus:placeholder:-translate-y-3 focus:placeholder:transition-all focus:placeholder:duration-700" />
            </div>}

            {/* file */}
            {!Focus && <label htmlFor='file-upload' className="w-full h-1/2 hover:scale-105 hover:transition-transform hover:duration-700 cursor-pointer rounded-xl border border-black border-dashed flex justify-center"
              onDragOver={(e) => { e.preventDefault() }}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                console.log(file)
                // handle file upload
              }}
            >
              <label htmlFor='file-upload' className="h-full cursor-pointer w-1/2 justify-center items-center flex flex-col ">
                <h2 className="font-bold text-xl">Select or Drop a file</h2>
                <p className="text-center px-6">We support .pdf, .doc, .docx files upto 25 MB</p>
              </label>
              <input id='file-upload' type="file" className='sr-only' accept=".pdf,.doc,.docx" />
            </label>}

            {/* submit */}
            <button type='submit' className="w-full hover:bg-blue-950 hover:scale-105 hover:transition-transform hover:duration-700 h-10 font-bold bg-blue-900 text-white rounded-lg" onClick={handleClose}>Summarize</button>
          </div>
        </div>
        {/* alert */}
        <Alert alert={alert} msg={alertMsg} success = {success} failure={failure}/>
      </div>
      
      <div className={`  h-full rounded-lg shadow-2xl z-30   absolute right-0 transition-all duration-700 ${close?"md:min-w-[100%]":"md:min-w-0 overflow-hidden"} `}>
              <div className="md:w-[45%] h-full absolute right-0  bg-slate-100">
                <div className="flex items-center justify-between px-4 w-full h-12 bg-slate-900">
                  <p className="text-white font-semibold font-custom2">Welcome Here is Your summary</p>
                  <IoCloseSharp className='fill-white md:w-5 md:h-5 hover:scale-110 transition duration-700' onClick={handleClose} />
                </div>

                <div className="flex  m-4">
                  <div className="w-8 h-8 "> <TbRobot className='w-full h-full hover:scale-110 transition duration-700' /></div>
                  {/* loading */}
                  {load&&<div class="border  shadow rounded-md p-4 max-w-sm w-full mx-auto">
                            <div class="animate-pulse flex space-x-4">
                              <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                              <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 bg-slate-200 rounded"></div>
                                <div class="space-y-3">
                                  <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                  </div>
                                  <div class="h-2 bg-slate-200 rounded"></div>
                                </div>
                              </div>
                            </div>
                  </div>}
                  {/* content */}
                  {!load&&<div
                  ref={containerRef}
                  onScroll={handleScroll}
                  className="relative h-[40rem] overflow-y-scroll scrollbar-hide  group rounded-lg bg-slate-200 ml-1 py-1 px-5 text-justify pr-7 font-serif w-full">
                    <p className="overflow-y-hidden ">
                    {text}
                    <hr className='mt-4 border border-slate-700'/>
                    </p>
                    
                    <TbCopy className='absolute top-1 group-hover:scale-110  right-1'/>
                  </div>}
                  
                </div>
                <div className=" justify-center -translate-y-4 flex w-full h-11 ">
                  
                  <button className={`flex items-center justify-center space-x-3 bg-slate-200 ${end?"opacity-100 -translate-y-5":"opacity-0"} px-6 text-sm rounded-md border font-semibold hover:scale-110 transtion duration-700 border-slate-900`}>
                  <ImLoop />
                  <p className="">Regenerate Response</p>
                  </button>
                </div>
              </div>
      </div>
      
      
    </>
  )
}
