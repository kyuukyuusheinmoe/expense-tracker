import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { componentMapper } from '../../../utils/form/componentMapper';

function DynamicFormElement({componentType, label, dataSource, name}) {
  const {control} = useFormContext()
  const {
    field,
  } = useController({
    name,
    control,
  });

  const Component = componentMapper[componentType]?.component

  return (
    <>
      {Component && <Component label={label} items={dataSource?.items || []} name={field.name} {...field}/>} 
    </>
  )
}

export default DynamicFormElement
