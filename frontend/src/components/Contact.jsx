import React, { useState } from 'react';
import Heading from './Heading';
import InputBox from './InputBox';
import { BACKEND_URL } from '../utils/config';
import { IoIosSend } from 'react-icons/io';
import { toast } from 'react-toastify';

const Contact = () => {
  const [inputs, setInputs] = useState({
    senderEmail: '',
    emailSubject: '',
    emailBody: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();
      // console.log(data);
      toast.success(data.message);
      setInputs({ senderEmail: '', emailSubject: '', emailBody: '' });
      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
      toast.error(error);
    }
  };

  return (
    <div id='contact' className='p-8 mt-[90px] flex flex-col items-center'>
      <Heading title='contact' />
      <div className='w-[900px] mt-12 border-2 border-gray-200 px-12 py-8 rounded-lg shadow-xl hover:shadow-2xl'>
        <form
          className='flex flex-col justify-center gap-4'
          onSubmit={handleSubmit}
        >
          <InputBox
            label='email'
            type='email'
            placeholder='Your email here'
            name='senderEmail'
            onChange={(e) =>
              setInputs({ ...inputs, senderEmail: e.target.value })
            }
            value={inputs.senderEmail}
          />
          <InputBox
            label='Subject'
            type='text'
            placeholder='Subject of the email'
            name='emailSubject'
            onChange={(e) =>
              setInputs({ ...inputs, emailSubject: e.target.value })
            }
            value={inputs.emailSubject}
          />
          <div className='flex flex-col mb-4'>
            <label
              htmlFor='emailBody'
              className='text-3xl capitalize tracking-widest font-bold'
            >
              Email body
            </label>
            <textarea
              id='emailBody'
              name='emailBody'
              placeholder='Body of the email'
              style={{ height: '200px' }}
              className='bg-gray-100 mt-2 h-16 px-4 py-2 rounded-lg text-xl font-medium hover:border hover:border-gray-900 shadow-xl hover:shadow-2xl border-none'
              required
              onChange={(e) =>
                setInputs({ ...inputs, emailBody: e.target.value })
              }
              value={inputs.emailBody}
            />
          </div>
          <div className='bg-blue-200 w-[400px] mx-auto mt-4 px-2 py-4 rounded-md text-center hover:bg-blue-300 hover:border-2 hover:border-blue-900 shadow-xl hover:shadow-2xl flex justify-center items-center'>
            <button
              type='submit'
              className='uppercase text-3xl tracking-widest font-bold flex items-center gap-2'
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-dots loading-lg'></span>
              ) : (
                <>
                  send email
                  <IoIosSend size={30} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
