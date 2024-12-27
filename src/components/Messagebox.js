import React, { useContext, useEffect, useRef, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { FaArrowCircleUp } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { RiFolderDownloadFill } from 'react-icons/ri';
import { TbCopy, TbRobot } from 'react-icons/tb';
import { Chatcontext } from '../context/Chatstate';
import ContentPreview from './ContentPreview';

const Messagebox = (props) => {
    const { id, close, handleSubmit, handleCopy, handleClose, handleDownloadText, msg, url, Focus } = props;
    const { request, getInfo, handleUser, load, Pdfmsg, previewUrl, previewFile } = useContext(Chatcontext);
    const [typedText, setTypedText] = useState(' ');
    const [isTyping, setIsTyping] = useState(false);

    const containerRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [msg, Pdfmsg]);

    useEffect(() => {
        if (!load && msg.length > 0 && msg[msg.length - 1].type === 'response') {
            setTypedText('');
            setIsTyping(true);
            printContent(msg[msg.length - 1].message);
        }
    }, [load, msg]);
    // Define a ref to hold the interval ID
    const printIntervalRef = useRef(null);

    useEffect(() => {
        // Cleanup function to clear interval when `close` changes
        if (close && printIntervalRef.current) {
            clearInterval(printIntervalRef.current);
            setIsTyping(false); // Ensure typing state is reset
            setTypedText(' ');   // Clear any ongoing typed text
        }

        return () => {
            // Cleanup on unmount
            if (printIntervalRef.current) {
                clearInterval(printIntervalRef.current);
            }
        };
    }, [close]);

    const printContent = (content) => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < content.length - 1) {
                setTypedText((prevText) => prevText + content[i]);
                i++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 5);

        // Save the interval ID in a ref to clear it later if necessary
        printIntervalRef.current = interval;
    };

    const renderMessage = (message, index, isLatest) => {
        const isResponse = message.type === 'response';
        return (
            <div
                key={index}
                className={`relative group rounded-lg ${isResponse ? 'bg-blue-100' : 'bg-zinc-100'} ml-1 mt-2 py-3 px-5 text-justify pr-7 font-serif text-sm w-full shadow-md`}
            >
                <p className="overflow-y-hidden">
                    {isLatest && isResponse && isTyping ? typedText : message.message}
                </p>
                {isResponse && (
                    <TbCopy
                        className='absolute top-1 right-1 group-hover:scale-110 cursor-pointer'
                        onClick={() => handleCopy(message.message)}
                    />
                )}
            </div>
        );
    };

    return (
        <div className={`h-full rounded-lg shadow-2xl z-30 absolute right-0 transition-all duration-700 ${close ? "w-full" : "w-0 overflow-hidden"}`}>
            <div className="flex h-full">
                <div className="w-1/2 h-full bg-slate-100 border-r">
                    {Focus && <ContentPreview url={previewUrl} file={null} />}
                    {!Focus && <ContentPreview url={null} file={previewFile} />}
                </div>
                <div className="w-1/2 h-full bg-slate-100">
                    <div className="flex items-center justify-between px-4 w-full h-12 bg-slate-900">
                        <p className="text-white font-semibold font-custom2">Welcome! Here is Your Summary</p>
                        <div className="flex space-x-6">
                            <RiFolderDownloadFill className='fill-white md:w-5 md:h-5 hover:scale-110 transition duration-700 cursor-pointer' onClick={() => { handleDownloadText(msg[0].message) }} />
                            <IoCloseSharp className='fill-white md:w-5 md:h-5 cursor-pointer hover:scale-110 transition duration-700' onClick={handleClose} />
                        </div>
                    </div>

                    <div className="flex relative m-4">
                        <div className="w-8 h-8">
                            <TbRobot className='w-full h-full mt-2 hover:scale-110 transition duration-700' />
                        </div>

                        {load && (
                            <div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto">
                                <div className="animate-pulse flex space-x-4">
                                    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                                    <div className="flex-1 space-y-6 py-1">
                                        <div className="h-2 bg-slate-200 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-200 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!load && (
                            <div
                                ref={containerRef}
                                className="overflow-y-scroll h-[calc(100vh-10rem)] scrollbar-hide w-full"
                            >
                                {msg?.map((message, index) => renderMessage(message, index, index === msg.length - 1))}
                                <div ref={bottomRef} />
                            </div>
                        )}

                        {!load && (
                            <div className="absolute w-[90%] ml-8 -bottom-16">
                                <textarea
                                    type="text"
                                    value={request}
                                    className="pt-4 w-full opacity-99 bg-slate-900 rounded-lg min-h-14  text-white text-sm placeholder:text-white px-4 focus:placeholder:transition-all resize-none scrollbar-hide focus:placeholder:duration-700 focus:placeholder:-translate-y-4 focus:placeholder:text-xs"
                                    placeholder='Chat with URL'
                                    onChange={handleUser}
                                />
                                {getInfo ? (
                                    <button
                                        className="absolute top-4 right-1 w-12 h-9"
                                        onClick={() => handleSubmit(id)}
                                    >
                                        <FaArrowCircleUp className='w-[50%] h-full text-white hover:scale-110 transition duration-700 cursor-pointer' />
                                    </button>
                                ) : (
                                    <div className="absolute top-4 right-1 w-12 h-9">
                                        <BiLoaderAlt className='w-[50%] h-full text-white animate-spin cursor-pointer' />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messagebox;

