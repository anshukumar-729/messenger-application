import React from "react";
import Home2 from "./Home2"
import './style.css';

import { useState } from "react";
import { useEffect } from "react";
import $ from "jquery";

const Messeges = () => {
  const [flag1,setFlag1] =useState(0);
  const [flag2,setFlag2] =useState(0);
  const [name, setName] = useState("");
  const [massage, setMassage] = useState("");
  const [n1, setn1] = useState("");
  const [n2, setn2] = useState("");
  const [n3, setn3] = useState("");
  const [n4, setn4] = useState("");
  const [n5, setn5] = useState("");
  const [n6, setn6] = useState("");
  const [n7, setn7] = useState("");
  const [n8, setn8] = useState("");
  const [n9, setn9] = useState("");
  const [n10, setn10] = useState("");
  const [n11, setn11] = useState("");
  const [n12, setn12] = useState("");
  const [n13, setn13] = useState("");
  const [n14, setn14] = useState("");
  const [n15, setn15] = useState("");
  const [n16, setn16] = useState("");
  const [n17, setn17] = useState("");
  const [n18, setn18] = useState("");
  const [n19, setn19] = useState("");
  const [n20, setn20] = useState("");
  const [n21, setn21] = useState("");
  const [n22, setn22] = useState("");
  const [n23, setn23] = useState("");
  const [n24, setn24] = useState("");
  const [n25, setn25] = useState("");
  const [n26, setn26] = useState("");
  const [n27, setn27] = useState("");
  const [n28, setn28] = useState("");
  const [n29, setn29] = useState("");
  const [n30, setn30] = useState("");
  const [n31, setn31] = useState("");
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [t3, setT3] = useState("");
  const [t4, setT4] = useState("");
  const [t5, setT5] = useState("");
  const [t6, setT6] = useState("");
  const [t7, setT7] = useState("");
  const [t8, setT8] = useState("");
  const [t9, setT9] = useState("");
  const [t10, setT10] = useState("");
  const [t11, setT11] = useState("");
  const [t12, setT12] = useState("");
  const [t13, setT13] = useState("");
  const [t14, setT14] = useState("");
  const [t15, setT15] = useState("");
  const [t16, setT16] = useState("");
  const [t17, setT17] = useState("");
  const [t18, setT18] = useState("");
  const [t19, setT19] = useState("");
  const [t20, setT20] = useState("");
  const [t21, setT21] = useState("");
  const [t22, setT22] = useState("");
  const [t23, setT23] = useState("");
  const [t24, setT24] = useState("");
  const [t25, setT25] = useState("");
  const [t26, setT26] = useState("");
  const [t27, setT27] = useState("");
  const [t28, setT28] = useState("");
  const [t29, setT29] = useState("");
  const [t30, setT30] = useState("");
  const [t31, setT31] = useState("");
  const [m1, setm1] = useState("");
  const [m2, setm2] = useState("");
  const [m3, setm3] = useState("");
  const [m4, setm4] = useState("");
  const [m5, setm5] = useState("");
  const [m6, setm6] = useState("");
  const [m7, setm7] = useState("");
  const [m8, setm8] = useState("");
  const [m9, setm9] = useState("");
  const [m10, setm10] = useState("");
  const [m11, setm11] = useState("");
  const [m12, setm12] = useState("");
  const [m13, setm13] = useState("");
  const [m14, setm14] = useState("");
  const [m15, setm15] = useState("");
  const [m16, setm16] = useState("");
  const [m17, setm17] = useState("");
  const [m18, setm18] = useState("");
  const [m19, setm19] = useState("");
  const [m20, setm20] = useState("");
  const [m21, setm21] = useState("");
  const [m22, setm22] = useState("");
  const [m23, setm23] = useState("");
  const [m24, setm24] = useState("");
  const [m25, setm25] = useState("");
  const [m26, setm26] = useState("");
  const [m27, setm27] = useState("");
  const [m28, setm28] = useState("");
  const [m29, setm29] = useState("");
  const [m30, setm30] = useState("");
  const [m31, setm31] = useState("");

  async function getMassage() {
    try {
      const response = await fetch(
        //    "https://arcane-brushlands-01906.herokuapp.com/api/read",
        "http://localhost:3020/api/read"
      );
      const data = await response.json();
        
      setn1(data.result[data.result.length - 1].name);
      setn2(data.result[data.result.length - 2].name);
      setn3(data.result[data.result.length - 3].name);
      setn4(data.result[data.result.length - 4].name);
      setn5(data.result[data.result.length - 5].name);
      setn6(data.result[data.result.length - 6].name);
      setn7(data.result[data.result.length - 7].name);
      setn8(data.result[data.result.length - 8].name);
      setn9(data.result[data.result.length - 9].name);
      setn10(data.result[data.result.length - 10].name);
      setn11(data.result[data.result.length - 11].name);
      setn12(data.result[data.result.length - 12].name);
      setn13(data.result[data.result.length - 13].name);
      setn14(data.result[data.result.length - 14].name);
      setn15(data.result[data.result.length - 15].name);
      setn16(data.result[data.result.length - 16].name);
      setn17(data.result[data.result.length - 17].name);
      setn18(data.result[data.result.length - 18].name);
      setn19(data.result[data.result.length - 19].name);
      setn20(data.result[data.result.length - 20].name);
      setn21(data.result[data.result.length - 21].name);
      setn22(data.result[data.result.length - 22].name);
      setn23(data.result[data.result.length - 23].name);
      setn24(data.result[data.result.length - 24].name);
      setn25(data.result[data.result.length - 25].name);
      setn26(data.result[data.result.length - 26].name);
      setn27(data.result[data.result.length - 27].name);
      setn28(data.result[data.result.length - 28].name);
      setn29(data.result[data.result.length - 29].name);
      setn30(data.result[data.result.length - 30].name);
      setn31(data.result[data.result.length - 31].name);
      setT1(data.result[data.result.length - 1].time);
      setT2(data.result[data.result.length - 2].time);
      setT3(data.result[data.result.length - 3].time);
      setT4(data.result[data.result.length - 4].time);
      setT5(data.result[data.result.length - 5].time);
      setT6(data.result[data.result.length - 6].time);
      setT7(data.result[data.result.length - 7].time);
      setT8(data.result[data.result.length - 8].time);
      setT9(data.result[data.result.length - 9].time);
      setT10(data.result[data.result.length - 10].time);
      setT11(data.result[data.result.length - 11].time);
      setT12(data.result[data.result.length - 12].time);
      setT13(data.result[data.result.length - 13].time);
      setT14(data.result[data.result.length - 14].time);
      setT15(data.result[data.result.length - 15].time);
      setT16(data.result[data.result.length - 16].time);
      setT17(data.result[data.result.length - 17].time);
      setT18(data.result[data.result.length - 18].time);
      setT19(data.result[data.result.length - 19].time);
      setT20(data.result[data.result.length - 20].time);
      setT21(data.result[data.result.length - 21].time);
      setT22(data.result[data.result.length - 22].time);
      setT23(data.result[data.result.length - 23].time);
      setT24(data.result[data.result.length - 24].time);
      setT25(data.result[data.result.length - 25].time);
      setT26(data.result[data.result.length - 26].time);
      setT27(data.result[data.result.length - 27].time);
      setT28(data.result[data.result.length - 28].time);
      setT29(data.result[data.result.length - 29].time);
      setT30(data.result[data.result.length - 30].time);
      setT31(data.result[data.result.length - 31].time);
      setm1(data.result[data.result.length - 1].massage);
      setm2(data.result[data.result.length - 2].massage);
      setm3(data.result[data.result.length - 3].massage);
      setm4(data.result[data.result.length - 4].massage);
      setm5(data.result[data.result.length - 5].massage);
      setm6(data.result[data.result.length - 6].massage);
      setm7(data.result[data.result.length - 7].massage);
      setm8(data.result[data.result.length - 8].massage);
      setm9(data.result[data.result.length - 9].massage);
      setm10(data.result[data.result.length - 10].massage);
      setm11(data.result[data.result.length - 11].massage);
      setm12(data.result[data.result.length - 12].massage);
      setm13(data.result[data.result.length - 13].massage);
      setm14(data.result[data.result.length - 14].massage);
      setm15(data.result[data.result.length - 15].massage);
      setm16(data.result[data.result.length - 16].massage);
      setm17(data.result[data.result.length - 17].massage);
      setm18(data.result[data.result.length - 18].massage);
      setm19(data.result[data.result.length - 19].massage);
      setm20(data.result[data.result.length - 20].massage);
      setm21(data.result[data.result.length - 21].massage);
      setm22(data.result[data.result.length - 22].massage);
      setm23(data.result[data.result.length - 23].massage);
      setm24(data.result[data.result.length - 24].massage);
      setm25(data.result[data.result.length - 25].massage);
      setm26(data.result[data.result.length - 26].massage);
      setm27(data.result[data.result.length - 27].massage);
      setm28(data.result[data.result.length - 28].massage);
      setm29(data.result[data.result.length - 29].massage);
      setm30(data.result[data.result.length - 30].massage);
      setm31(data.result[data.result.length - 31].massage);
      setFlag1(1);
    } catch (err) {
      console.log(err);
      setFlag2(1);
    }
  }

  const MINUTE_MS = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      getMassage();
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  function flags(){
    setFlag1(0);
    setFlag2(0);
  }
  async function SendMassage(event) {
    getMassage();

    event.preventDefault();
    try {
      const response = await fetch(
        //    "https://arcane-brushlands-01906.herokuapp.com/api/register",
        "http://localhost:3020/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            massage,
          }),
        }
      );
      const data = await response.json();
      console.log(data.result[data.result.length - 1]);
    } catch (err) {
      console.log(err);
    }

    // const data = await response.json()
    // console.log(data)
  }

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <div className="container col-12  myClass">
        <button
          type="button"
          className="btn  col-13 m-2 myButton"
          onClick={(getMassage, flags)}
        >
          Reload messages
        </button>
        {flag1 ? (
          <>
            <h2 className="col-10 text-white">Some last messages</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="col-2 text-white">
                    Time
                  </th>
                  <th scope="col" className="col-2 text-white">
                    Name
                  </th>
                  <th scope="col" className="col-6 text-white">
                    Messages
                  </th>
                </tr>
              </thead>
              {/* <tbody> */}

              <tr>
                <td>{t1}</td>
                <td> {n1} </td>
                <td>{m1}</td>
              </tr>

              <tr>
                <td> {t2} </td>
                <td> {n2} </td>
                <td>{m2}</td>
              </tr>

              <tr>
                <td> {t3} </td>
                <td> {n3} </td>
                <td>{m3}</td>
              </tr>

              <tr>
                <td> {t4} </td>
                <td> {n4} </td>
                <td>{m4}</td>
              </tr>

              <tr>
                <td> {t5} </td>
                <td> {n5} </td>
                <td>{m5}</td>
              </tr>

              <tr>
                <td> {t6} </td>
                <td> {n6} </td>
                <td>{m6}</td>
              </tr>

              <tr>
                <td> {t7} </td>
                <td> {n7} </td>
                <td>{m7}</td>
              </tr>

              <tr>
                <td> {t8} </td>
                <td> {n8} </td>
                <td>{m8}</td>
              </tr>

              <tr>
                <td> {t9} </td>
                <td> {n9} </td>
                <td>{m9}</td>
              </tr>

              <tr>
                <td> {t10}</td>
                <td> {n10}</td>
                <td> {m10}</td>
              </tr>

              <tr>
                <td> {t11}</td>
                <td> {n11}</td>
                <td> {m11}</td>
              </tr>

              <tr>
                <td> {t12}</td>
                <td> {n12}</td>
                <td> {m12}</td>
              </tr>

              <tr>
                <td> {t13}</td>
                <td> {n13}</td>
                <td> {m13}</td>
              </tr>

              <tr>
                <td> {t14}</td>
                <td> {n14}</td>
                <td> {m14}</td>
              </tr>

              <tr>
                <td> {t15}</td>
                <td> {n15}</td>
                <td> {m15}</td>
              </tr>

              <tr>
                <td> {t16}</td>
                <td> {n16}</td>
                <td> {m16}</td>
              </tr>

              <tr>
                <td> {t17}</td>
                <td> {n17}</td>
                <td> {m17}</td>
              </tr>

              <tr>
                <td> {t18}</td>
                <td> {n18}</td>
                <td> {m18}</td>
              </tr>

              <tr>
                <td> {t19}</td>
                <td> {n19}</td>
                <td> {m19}</td>
              </tr>

              <tr>
                <td> {t20}</td>
                <td> {n20}</td>
                <td> {m20}</td>
              </tr>

              <tr>
                <td> {t21}</td>
                <td> {n21}</td>
                <td> {m21}</td>
              </tr>

              <tr>
                <td> {t22}</td>
                <td> {n22}</td>
                <td> {m22}</td>
              </tr>

              <tr>
                <td> {t23}</td>
                <td> {n23}</td>
                <td> {m23}</td>
              </tr>

              <tr>
                <td> {t24}</td>
                <td> {n24}</td>
                <td> {m24}</td>
              </tr>

              <tr>
                <td> {t25}</td>
                <td> {n25}</td>
                <td> {m25}</td>
              </tr>

              <tr>
                <td> {t26}</td>
                <td> {n26}</td>
                <td> {m26}</td>
              </tr>

              <tr>
                <td> {t27}</td>
                <td> {n27}</td>
                <td> {m27}</td>
              </tr>

              <tr>
                <td> {t28}</td>
                <td> {n28}</td>
                <td> {m28}</td>
              </tr>

              <tr>
                <td> {t29}</td>
                <td> {n29}</td>
                <td> {m29}</td>
              </tr>

              <tr>
                <td> {t30}</td>
                <td> {n30}</td>
                <td> {m30}</td>
              </tr>

              <tr>
                <td> {t31}</td>
                <td> {n31}</td>
                <td> {m31}</td>
              </tr>

              {/* </tbody> */}
            </table>
          </>
        ) : (
          <>
            <button class="buttonload d-flex">
              <i class="fa fa-spinner  fa-2x fa-spin"></i>
              <h5 className="ml-3">Loading previous messages</h5>
            </button>
          </>
        )}
        {flag2 ? <h6  >*network error</h6> : <></>}
      </div>
    </>
  );
};;

export default Messeges;
