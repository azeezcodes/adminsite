import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Layout from '@/components/Layout/Layout'
import TeachersTab from '@/components/teachers/tab/TeachersTab'
import Image from 'next/image'
import TeachersProfile from '@/components/teachers/modals/TeachersProfile';
import TeachersForm from '@/components/teachers/modals/TeachersForm/TeachersForm';
import TeacherCreated from '@/components/teachers/modals/TeacherCreated';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};
const styleForm = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  outline: 'none',
  boxShadow: 24,
  width: '36%',
  p: 4,
};

const teachers = () => {
  const [open, setOpen] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);
  const handleClose = () => setOpen(false);
  return (
    <Layout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TeachersProfile />
        </Box>
      </Modal>


      <Modal
        open={openForm}
        onClose={handleCloseForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleForm}>
          {/* <TeachersForm /> */}

          <TeacherCreated/>
        </Box>
      </Modal>
          <div className='bg-bodyBg min-h-screen w-full pt-4'>
            <div className="wrapper min-h-[90vh] w-[92%] py-4 px-6 mx-auto rounded-lg bg-white">
                <div className="header flex justify-between">
            
                    <h3 className='text-[#2F327D] text-[1.48rem]'>Teacher</h3>  
                      <button className='bg-[#2F327D] flex items-center rounded-[4px] text-white px-6 py-2 '>
                          <Image src="/users.svg" className='mr-2' width= {18} height = {18} alt="card icon" />
                          <h3 onClick = {handleOpenForm}>
                            Create New Teacher
                          </h3>
                      </button>  
                </div>  
          <TeachersTab open = {handleOpen} />   
            </div>
        </div>
    </Layout>
  )
}

export default teachers


