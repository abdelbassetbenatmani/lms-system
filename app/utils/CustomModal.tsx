import { Modal,Box } from '@mui/material';
import { FC } from 'react'

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
    setRoute?: (route: string) => void;
    component?: any;
}
const CustomModal:FC<Props> = ({open,setOpen,setRoute,component:Component}) => {
  return (
    <Modal
    open={open}
    onClose={()=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] xl:w-[40%]">
        <Component setOpen={setOpen} setRoute={setRoute}/>
    </Box>
  </Modal>
  )
}

export default CustomModal