import React, { FC } from 'react'
import { Box } from '@mui/material'

interface DataGridContainerProps {
  children: React.ReactNode
  height?: number
}

export const DataGridContainer: FC<DataGridContainerProps> = ({
  children,
  height = 480
}) => (
  // <Box sx={{ width: 1 }}>
  <Box
    sx={{
      height: { height },
      width: '100%',
      mb: 2,
      '& .super-app-theme--header': {
        color: 'text.secondary',
        textTransform: 'uppercase',
        fontSize: '12px',
        fontWeight: 800
      },
      '& .super-app-theme--header-approval-status': {
        color: '#9ea0a5',
        '& .MuiDataGrid-columnHeaderTitleContainerContent': {
          width: '100% !important',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center'
        }
      },
      '& .super-app-theme--header-approval-action': {
        color: '#9ea0a5',
        '& .MuiDataGrid-columnHeaderTitleContainerContent': {
          width: '100% !important',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center'
        }
      },
      '&  .MuiDataGrid-columnSeparator': {
        visibility: 'hidden'
      },
      '& .MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
        outline: 'none!important'
      },
      '.MuiDataGrid-row--lastVisible': {
        borderBottom: 'none!important'
      }
    }}
  >
    {children}
  </Box>
  // </Box>
)
