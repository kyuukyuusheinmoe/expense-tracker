import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { componentMapper } from '../../../utils/form/componentMapper';

function DynamicFormElement({control, componentType, label, dataSource, name, defaultValue}) {
  const {
    field,
  } = useController({
    name,
    control,
  });

  const Component = componentMapper[componentType]?.component

  return (
    <>
      {Component && <Component label={label} items={dataSource?.items || []} name={field.name} {...field} defaultValue={defaultValue}/>} 
    </>
  )
}

export default DynamicFormElement
