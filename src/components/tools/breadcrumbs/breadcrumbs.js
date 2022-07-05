// const breadcrumb = {
//     backgroundColor: "white",
//     border: "1px solid rgba(0, 0, 0, 0.125)",
//     borderRadius: "0.37rem"
// }

// const BreadCrumbs = (props) => {
//     const isLast =(index) => {
//         return index === props.crumbs.length -1;
//     }

//   return (
//     <nav className="row justify-content-center mt-4">
//         <ol className="breadcrumb" style={breadcrumb}>
//             {
//                 props.crumbs.map((crumb, ci) => {
//                     const disabled = isLast(ci) ? 'disabled' : '';
//                     return (
//                         <li key={ci} className="breadcrumb-item align-items-center">
//                             <button className={`btn btn-link ${disabled}`} onClick={() => props.selected(crumb)}>
//                                 {crumb}
//                             </button>
//                         </li>
//                     )
//                 })
//             }
//         </ol>
//     </nav>
//   );
// };

// export default BreadCrumbs;

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const BreadCrumbs = (props) => {
  const isLast = (index) => {
    return index === props.crumbs.length - 1;
  };
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {props.crumbs.map((name, ci) => {
        const lastTitle = isLast(ci) ? "fw-bolder !important" : "";
        return (
          <ul key={ci} style={{padding: "0"}}>
            <li
              className={`btn btn-link ${lastTitle}`}
              style={{ textDecoration: "none", color: "inherit", padding:"0", cursor: "auto", fontSize:"14px" }}
            >
              {name}
            </li>
          </ul>
        );
        // return isLast ? (
        //   <Typography fontWeight={800}>{name}</Typography>
        // ) : (
        //   <Typography fontWeight={"400 !imprtant"}>{name}</Typography>
        // );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;

// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
// import { useLocation, useNavigate } from "react-router-dom";

// const BreadCrumbs = (props) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);
//   return (
//     <Breadcrumbs aria-label="breadcrumb">
//       <Link
//         style={{ textDecoration: "none", color: "inherit" }}
//         onClick={() => navigate("/")}
//       >
//         {"مزرعه من"}
//       </Link>
//       {pathnames.map((name, index) => {
//         const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//         const isLast = index === pathnames.length - 1;
//         return isLast ? (
//           <Typography fontWeight={800}>{name}</Typography>
//         ) : (
//           <Link
//             style={{ textDecoration: "none", color: "inherit" }}
//             onClick={() => navigate(routeTo)}
//           >
//             {name}
//           </Link>
//         );
//       })}
//     </Breadcrumbs>
//   );
// };

// export default BreadCrumbs;
