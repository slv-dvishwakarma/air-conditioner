import React from 'react';
import { Controller, Control, FieldValues, DeepMap, FieldError } from 'react-hook-form';
import { SVGIcon } from '../Icons';


type IconType = React.ElementType;

interface InputProps {
  name: string;
  label?: string;
  placeholder: string;
  icon?: IconType | string;
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}

export const Phone: React.FC<InputProps> = ({ name, placeholder, label, icon, control, errors }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: true }} 
        render={({ field: { onChange, value } }) => (
          <div>
            {label && <label className='text-base font-medium leading-[21px] tracking-[0px] text-left'>{label}</label> }
            <span className='input-border flex items-center border rounded-md border-solid border-[#BEBEBE] mt-[12px]'>
              <input
                type="tel"
                className="form-control w-full border-none rounded-md focus:outline-none focus:shadow-none shadow-none h-[50px] placeholder:text-[#9D9D9D] text-[14px] px-3"
                placeholder={placeholder}
                autoComplete="off"
                value={value}
                onChange={(e) => {
                    const newValue = e.target.value.replace(/\D/g, ''); 
                    onChange(newValue.slice(0, 10)); 
                  }}
              />
              
              {icon && typeof icon === 'string' ? (
                <span className='text-[#7E52FF] text-xl pl-0 pr-5 py-0 absolute right-0'>
                  <SVGIcon name="Location" /> 
                </span>
              ) : null}
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

