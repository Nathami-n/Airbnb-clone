'use client'
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import {signIn} from 'next-auth/react'
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import useRegisterModal from '@app/hooks/useRegisterModal'
import useLoginModal from '@app/hooks/useLoginModal'
import { Heading, Modal, Input, CustomButton } from '..';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
    const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,

    }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> =  async (data) => {
    setIsLoading(true);
    try {
      const success =  await signIn('credentials',{...data, redirect: false});
      if(success){ 
        toast.success("logged in");
        router.refresh()
        loginModal.onClose();
    }

    } catch(error) {
      toast.error('Something went wrong')
      loginModal.onClose();
    }
    setIsLoading(false)
  }

  const bodyContent = (<div className='flex flex-col gap-4'> 
  <Heading 
  title='Welcome Back'
  subtitle='Login to your Account'
  />
  <Input 
  id='email'
  label='Email'
  disabled={isLoading}
  errors={errors}
  register={register}
  required
  />
  <Input 
  id='password'
  label='Password'
  type='password'
  disabled={isLoading}
  errors={errors}
  register={register}
  required
  />
  </div>)

  const footerContent = (
    <div className='
    flex
    flex-col
    gap-4
    mt-3
    '>
      <hr/>
      <CustomButton
      outline
      label='Continue with Google'
      icon={FcGoogle}
      onClick={()=> {}}
      />
      <CustomButton
      outline
      label='Continue with Github'
      icon={AiFillGithub} 
      onClick={()=> {}}
      />
      <div className='
      text-neutral-500
      text-center
      mt-4
      font-light
      '>
        <div className='
        flex
        flex-row
        items-center
        gap-2
        justify-center
        '>
          <div>
          Already have an account?
          </div>
          <div 
          onClick={registerModal.onClose}
          className='
          text-neutral-800
          cursor-pointer
          hover:underline
          '>
          Log in
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}

    />
  )
}

export default LoginModal