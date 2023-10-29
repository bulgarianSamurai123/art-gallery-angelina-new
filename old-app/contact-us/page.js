import Input from '@components/UI/Input'
import InputContainer from '@components/UI/InputContainer'
import React from 'react'

const ContactUs = () => {
  return (
    <section className='pt-5'>
      <h1 className='text-3xl font-bold text-center'>Contact us Page</h1>
      <form className='pt-10'>
        <InputContainer>
          <label htmlFor='name'>Name</label>
          <Input type='text' id='name' />
        </InputContainer>
        <InputContainer>
          <label htmlFor='email'>Email</label>
          <Input type='email' id='email' />
        </InputContainer>
        <InputContainer>
          <label htmlFor='phone'>Phone num</label>
          <Input type='tel' id='phone' />
        </InputContainer>
        <InputContainer>
          <label htmlFor='message'>Message</label>
          <textarea rows={10} className='border-2 rounded-lg border-gray-850 p-2 text-sm outline-none focus:border-4 focus:border-gray-850'/>
        </InputContainer>
      </form>
    </section>
  )
}

export default ContactUs
