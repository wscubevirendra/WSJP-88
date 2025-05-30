import ContactForm from '@/components/ContactForm'
import React from 'react'
import getData from '@/api/api-call';
import Link from 'next/link';
import DeleteBtn from '@/components/DeleteBtn';
import StatusBtn from '@/components/StatusBtn';


export default async function page() {
  const fetchData = await getData();


  return (
    <div className='px-4'>
      <h1 className='text-3xl font-bold text-center mt-10'>Welcome to the User Management System</h1>
      <p className='text-center mt-4 text-gray-600'>This is a simple application to manage user data.</p>
      <div className='w-full gap-4 mt-4'>
        <Link href="/add">
          <button className="bg-amber-400 cursor-pointer px-5 py-2 my-4">Add </button></Link>
        <div className="overflow-x-auto  mt-10">
          <table className="min-w-full bg-white rounded-xl shadow-md">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Contact</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {fetchData.map((user, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.contact || "N/A"}</td>
                  <td className="py-3 flex gap-5 px-4">
                    <StatusBtn status={user.status} id={user._id} />
                    <DeleteBtn id={user._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}
