import React from "react";
import { Button } from "@mui/material";
import { ReactNode } from "react";

interface ButtonInterface {
   content: string;
   width?: string;
   height?: string;
   variant: `outlined` | `contained`;
   icons?: ReactNode;
   onClick?: () => void;
}

const ButtonType = ({
   content,
   width,
   height,
   variant,
   icons,
   onClick,
}: ButtonInterface) => {
   return (
      <div>
         <Button
            variant={variant}
            style={
               variant === "contained"
                  ? {
                       paddingLeft: width,
                       paddingRight: width,
                       paddingTop: height,
                       paddingBottom: height,
                       backgroundColor: "#2F327D",
                       color: "#fff",
                       boxShadow: "none",
                       borderRadius: "6px",
                    }
                  : {
                       borderColor: "#2F327D",
                       width: width,
                       height: height,
                       color: "#2F327D",
                    }
            }
            onClick={onClick}
            className="rounded-none"
         >
            {icons} {content}
         </Button>
      </div>
   );
};
export default ButtonType;
