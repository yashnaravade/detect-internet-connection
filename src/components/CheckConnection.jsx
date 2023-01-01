// import React from 'react'
// import { Detector } from 'react-detect-offline'

// function CheckConnection() {

//   return (
//    <>
// <Detector
//     render={({ online }) => (
//         <div>
//             {online ? (
//                 <div className="online">
//                     <p>Online</p>
//                 </div>
//             ) : (
//                 <div className="offline">
//                     <p>Offline</p>
//                 </div>
//             )}
//         </div>
//     )}

// />
//    </>
//   )
// }

// export default CheckConnection

import React from "react";
import { Detector } from "react-detect-offline";

const CheckConnection = (props) => {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <h1>No Internet Connection</h1>
              <h3>Offline</h3>
            </div>
          )
        }
      />
    </>
  );
};

export default CheckConnection;
