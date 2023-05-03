import React, { useState } from "react";
import Layout from "@/components/Layout/Layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from "../datafile/history";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";
import Image from "next/image";
import HistoryMobile from "@/components/HistoryMobile";
import Link from "next/link";


type Props = {};

const posthistory = (props: Props) => {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(6);

   const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };

   const startIndex = page * rowsPerPage;
   const endIndex = startIndex + rowsPerPage;
   const rowsToShow = data.slice(startIndex, endIndex);

   return (
      <Layout>
         <div className="w-full  box-border pt-8 pb-6 px-12 bg-bodyBg min-h-screen ">
            {/* //mobile view */}
            <div className="max-sm:block hidden h-[85vh]">
               <HistoryMobile />
               <div className="w-[100%] flex justify-center mt-4">
                  <button className="w-[12rem] h-[3rem] box-border bg-[#2F327D] text-white font-[400] rounded-[5px] text-[1rem] flex justify-center items-center ">
                     Create Post
                  </button>
               </div>
            </div>
            {/* //major view */}
            <div className="hidden md:block lg:block rounded-md bg-white mt-6">
               <div className="flex justify-between items-center px-4 py-4 ">
                  <p className="font-medium text-[#2F327D] text-[1.4rem]">
                     Post History
                  </p>
                  <Link href="/createposts">
                     <button className="w-[12rem] h-[3rem] flex justify-center items-center bg-[#2F327D] text-white font-[400] rounded-[5px] ">
                        Create Post
                     </button>
                  </Link>
               </div>
               <TableContainer component={Paper}>
                  <Table
                     sx={{ minWidth: 650, height: "fit-content", border: 0 }}
                     aria-label="simple table"
                  >
                     <TableHead
                        sx={{
                           backgroundColor: "#F9F8F9",
                           border: 0,
                           height: "4rem",
                        }}
                     >
                        <TableRow sx={{ border: 0 }}>
                           <TableCell>PLATFORM</TableCell>
                           <TableCell align="left">POST CONTENT</TableCell>
                           <TableCell align="left">MEDIA</TableCell>
                           <TableCell align="left">IMPRESSIONS</TableCell>
                           <TableCell align="left">TIME</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {rowsToShow.map((row) => (
                           <TableRow
                              key={row.id}
                              hover={true}
                              sx={{
                                 "&:last-child td, &:last-child th": {
                                    border: 0,
                                 },
                                 border: 0,
                              }}
                           >
                              <TableCell
                                 component="th"
                                 scope="row"
                                 align="center"
                                 size="small"
                                 sx={{ border: "none" }}
                              >
                                 <div className="border  border-gray-100 rounded-full grid place-content-center p-4 max-h-max max-w-max">
                                    {" "}
                                    <img
                                       src={row.img}
                                       width="25px"
                                       height="25px"
                                       alt="image"
                                       className=" object-contain "
                                    />
                                 </div>
                              </TableCell>
                              <TableCell align="left" sx={{ border: "none" }}>
                                 {row.postContent}
                              </TableCell>
                              <TableCell align="left" sx={{ border: "none" }}>
                                 {row.media}
                              </TableCell>
                              <TableCell align="left" sx={{ border: "none" }}>
                                 {row.impression}
                              </TableCell>
                              <TableCell align="left" sx={{ border: "none" }}>
                                 {row.time}
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
                  <TablePagination
                     component="div"
                     count={data.length}
                     rowsPerPage={rowsPerPage}
                     page={page}
                     onPageChange={handleChangePage}
                     onRowsPerPageChange={handleChangeRowsPerPage}
                     labelRowsPerPage={""}
                     rowsPerPageOptions={[]}
                  />
               </TableContainer>
            </div>
         </div>
      </Layout>
   );
};

export default posthistory;
