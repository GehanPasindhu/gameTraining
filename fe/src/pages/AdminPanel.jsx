import React from 'react'
import Sidebar from '../components/admin/Sidebar'
import Header from '../components/admin/Header'

function AdminPanel() {
  return (
    <>
    <div className='flex min-h-screen bg-gray-100'>
        <Sidebar/>
        <div className='flex-1'>
            <Header/>
            <main className='p-4'>
                
            </main>
        </div>
    </div>
    </>
  )
}

export default AdminPanel