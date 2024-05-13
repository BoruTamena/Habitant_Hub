import { Category, Description } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

type Props = {}

const RuleLists = (props: Props) => {

  const rules=[
    {
      id:1,
      Category:"Cancellation",
      Description:"cancellation is not allowed for this property"
   
    },
    {
        id:2,
        Category:"Pit",
        Description:"States whether pets are allowed on the property, any associated fees, and any restrictions on size or breed"
     }

]

  return (
   <>
   {
    rules.map((item,index)=><Box key={index} mt={1}>
        <Typography textTransform={"capitalize"} fontWeight={"bold"}>{item.Category}</Typography>
        <Typography mt={1} textAlign={"justify"}>{item.Description}</Typography>
    </Box>
    )
   }
   
   </>
  )
};

export default RuleLists;