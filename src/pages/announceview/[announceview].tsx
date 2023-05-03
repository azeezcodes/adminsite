"use client"

import React from 'react'
import { useRouter } from 'next/router'
import { note } from "@/datafile/note";

type Props = {}

const announceview = (props: Props) => {

    const router = useRouter()

  const { announceview } = router.query;
 


  return (
     <div>

     </div>
  );
}

export default announceview 