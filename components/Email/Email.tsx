
import React from 'react';
import { Controller, Control, FieldValues, DeepMap, FieldError } from 'react-hook-form';


type IconType = React.ElementType;

interface InputProps {
  name: string;
  label?: string;
  placeholder: string;
  icon?: IconType | string;
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}

export const Email: React.FC<InputProps> = ({ name, placeholder, label, icon, control, errors }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: true }} 
        render={({ field: { onChange, value } }) => (
          <div>
            {label && <label className='text-[#777777] text-[12px] font-medium leading-[21px] tracking-[0px] text-left'>{label}</label> }
            <span className='input-border flex items-center border rounded-md border-solid border-[#BEBEBE] mt-[12px]'>
              <input
                type="email"
                className="form-control w-full border-none rounded-md focus:outline-none focus:shadow-none shadow-none h-[50px] placeholder:text-[#9D9D9D] text-[14px] px-3"
                placeholder={placeholder}
                autoComplete="off"
                value={value}
                onChange={onChange}
              />
            </span>
          </div>
        )}
      />
      <div className='mt-[10px]'>
      {errors[name] && <span className="text-red-500 text-sm">Please Enter {placeholder}</span>}
      </div>
    </div>
  );
};

