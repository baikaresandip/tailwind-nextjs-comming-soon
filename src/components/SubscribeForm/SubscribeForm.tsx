'use client';

import React, { useEffect, useState } from 'react'
import data from "../../../data/data";
import Script from 'next/script';

// Extend the Window interface to include Tally
declare global {
    interface Window {
        Tally?: {
            openPopup: (formId: string, options?: any) => void;
        }
    }
}

function SubscribeForm() {
    const {
        newsletterheading,        
        hideSubscribeForm,
    } = data;
    const [isTallyLoaded, setIsTallyLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && !hideSubscribeForm) {
            // Check if Tally is already loaded
            if (window.Tally) {
                setIsTallyLoaded(true);
            } else {
                // If not, set up a listener for when it loads
                window.addEventListener('tally-loaded', () => setIsTallyLoaded(true));
            }
        }
    }, [hideSubscribeForm]);

    const openTallyPopup = () => {
        if (isTallyLoaded && window.Tally) {
            const formId = 'wvOOrv';
            window.Tally.openPopup(formId, {
                layout: 'modal',
                width: 700,
                autoClose: 5000,
                onOpen: () => {
                    console.log('Tally form opened');
                },
                onClose: () => {
                    console.log('Tally form closed');
                },
                onSubmit: (payload: any) => {
                    console.log('Form submitted:', payload);
                }
            });
        } else {
            console.error('Tally is not loaded yet');
        }
    };

    return (
        <>
            {!hideSubscribeForm && (
                <>
                    <Script src="https://tally.so/widgets/embed.js" strategy="beforeInteractive" />
                    <section className="text-center lg:m-7 mt-10 w-80 p-3 space-y-4">
                        {/* Newsletter heading */}
                        <h2 className="block text-slate-800 dark:text-slate-100 font-light text-sm leading-6">
                            {newsletterheading}
                        </h2>
                        {/* Subscribe button */}
                        <button 
                            onClick={openTallyPopup}
                            className="w-full sm:w-auto px-6 py-3 rounded-md font-semibold text-white 
                                       bg-gradient-to-r from-green-400 to-green-600 
                                       hover:from-green-500 hover:to-green-700 
                                       transition duration-300 ease-in-out transform hover:scale-105 
                                       shadow-lg hover:shadow-xl"
                        >
                            Start Your Journey Today
                        </button>
                    </section>
                </>
            )}
        </>
    )
}

export default SubscribeForm

// export default SubscribeForm




// import React from 'react'
// import data from "../../../data/data";

// function SubscribeForm() {
//     const {
//         newsletterheading,        
//         hideSubscribeForm,
//       } = data;

//   return (
//     <>
//     { hideSubscribeForm === false ? (
//           <section className="text-center lg:m-7 mt-10 w-80 p-3">
//             <form className="space-y-6" action="#" method="POST">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-slate-800 dark:text-slate-100  font-light text-sm leading-6"
//                 >
//                   {newsletterheading}
//                 </label>
//                 <div className="mt-2 flex-col flex lg:flex md:flex-row">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="Email address"
//                     autoComplete="email"
//                     required
//                     className="block w-full placeholder:text-gray-500 pl-[10px] focus:outline-none border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-0 rounded-none p-2"
//                   />
//                   <button className="ml-0 bg-slate-900 sm:w-auto border-slate-800 dark:border-slate-100	rounded-none mt-2 md:mt-0	p-2 border-2 dark:text-white hover:bg-slate-950">
//                     Subscribe
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </section>
//         ) : (
//           ""
//         )}
//     </>
//   )
// }