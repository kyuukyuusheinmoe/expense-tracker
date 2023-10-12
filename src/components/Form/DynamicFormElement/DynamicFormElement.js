import React from 'react'
import { useController } from 'react-hook-form'
import { componentMapper } from '../../../utils/form/componentMapper';
import useAPIData from '../../../hooks/useAPIData';

function DynamicFormElement({control, componentType, label, dataSource, name, defaultValue}) {
  const {
    field,
  } = useController({
    name,
    control,
  });

  const Component = componentMapper[componentType]?.component

  const itemList =  useAPIData(dataSource)

  return (
    <>
      {Component && <Component label={label} items={itemList || []} name={field.name} {...field} defaultValue={defaultValue}/>} 
    </>
  )
}

export default DynamicFormElement
