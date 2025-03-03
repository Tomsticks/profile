'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import myHead from '../../Myhead.png';
import { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';
import { useReactToPrint } from "react-to-print";
import axios from 'axios';

export default function Cv() {
  const [imageSrc, setImageSrc] = useState(null);
  const [data, setMyData] = useState(null)
  const contentRef = useRef(null)
  const printfn = useReactToPrint({ contentRef })

  useEffect(() => {
    const encryptedData = localStorage.getItem('cv');

    if (encryptedData) {
      const bytes = CryptoJS.AES.decrypt(encryptedData, 'miracleisagoodboi');
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      console.log(decryptedData);
      // saveToDb(decryptedData)
      setMyData(decryptedData)

      if (decryptedData.profilePic) {
        setImageSrc(decryptedData.profilePic);
      }
    }

  }, []);

  // async function saveToDb(data) {
  //   const saveDb = await axios.post('/api/profile', {
  //     data
  //   }).then((r) => {
  //     if (r) {
  //       console.log(r);

  //     }
  //   }).catch((e) => {
  //     console.log(e);

  //   })
  // }


  return (
    <div className="flex flex-col px-3 py-10   ">
      <div ref={contentRef} id='printableDiv' className="m-auto border-2 border-[#a8ada8] shadow-lg px-">
        <main className="flex  ">
          <section className=" w-[300px] flex flex-col gap-10 bg-[#0069a6] text-white px-2 ">
            <div>
              <div className=" h-[200px] flex items-center justify-center m-auto w-[100px] rounded-full">
                {imageSrc ? (
                  <img src={imageSrc} alt="Uploaded" className=' rounded-full h-auto w-auto' />
                ) : (
                  <p>No image uploaded</p>
                )}
              </div>

              <p className=" max-w-[500px]">
                You have experience with frontend tools like Vue.js, React, and
                Next.js, and backend technologies such as Node.js. You're
                familiar with working in both Nuxt.js (particularly version 3)
                and Express applications. You also manage databases using
                MongoDB, specifically for a restaurant product schema.
              </p>
            </div>
            {/* DEPARTMENT */}
            <p className=" flex flex-col gap-2">
              Department :<span> {data?.department}</span>
            </p>
            <p className=" flex flex-col gap-2">
              STUDENT ID :<span> {data?.studentId} </span>
            </p>
            <p className=" flex flex-col gap-2">
              LEADERSHIP POSITION
              <span>{data?.leadershipPosition} </span>
            </p>
            <div className=" flex flex-col gap-2">
              <h1>{data?.phone}</h1>
              <p className=" flex flex-col gap-2">
                <span> +234 9035783851 </span>
              </p>
              <p className=" flex flex-col gap-2">
                <span> {data?.email} </span>
              </p>
              <p className=" flex flex-col gap-2">
                <span> {data?.facebook} </span>
              </p>
              <p className=" flex flex-col gap-2">
                <span> {data?.twitter} </span>
              </p>
              <p className=" flex flex-col gap-2">
                <span> {data?.instagram} </span>

              </p>
            </div>
          </section>
          {/* Section 2 */}

          <section className="  px-3 flex flex-col gap-5 ">
            <h1 className=" flex items-center">
              {' '}
              <p>Name: </p>{data?.name}
            </h1>
            <h1 className="flex items-center">
              {' '}
              <p>Post: </p>{data?.post}
            </h1>
            <h1 className="flex items-center">
              <p>Position: </p>{data?.position}
            </h1>

            <div>
              <p className=" flex flex-col gap-2 ">
                ABOUT ME :{' '}
                <span className=" max-w-[500px] min-w-[500px] m-h-[100px] max-h-[200px]">
                  {data?.about}                </span>
              </p>
            </div>
            <p className=" flex flex-col gap-2">
              PRO SKILLS: (list them out)
              {data?.proskills}

            </p>
            <p className=" flex flex-col gap-2">
              EDUCATION:
              <span>{data?.education}</span>
            </p>

            <p className=" flex flex-col gap-2 w-[500px]">
              MOTIVATION
              <span>
                {data?.motivation}
              </span>
            </p>
          </section>
        </main>
      </div>
      <div>
        <button onClick={() => printfn()} className="no-print border"> Print</button>
      </div>
    </div>
  );
}
