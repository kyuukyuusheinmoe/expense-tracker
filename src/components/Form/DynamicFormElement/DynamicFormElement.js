import React, {useEffect, useState} from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { componentMapper } from '../../../utils/form/componentMapper';
import useAPIData from '../../../hooks/useAPIData';

function DynamicFormElement({control, componentType, label, dataSource, name, defaultValue, condition}) {
  const {
    field,
  } = useController({
    name,
    control,
  });

  const {watch} = useFormContext()

  const [componentShow, setComponentShow] = useState(true)

    const watchValues = watch()
    
    useEffect(()=> {
        if (condition) {
          const {name, hasValue, show} = condition;
          setComponentShow(()=> watchValues[name] === hasValue ? show : true);
        }
      }, [condition, watchValues, setComponentShow])

  const Component = componentMapper[componentType]?.component

  const itemList =  useAPIData(dataSource)

  return (
    <>
      {Component && componentShow && <Component label={label} items={itemList || []} name={field.name} {...field} defaultValue={defaultValue}/>} 
    </>
  )
}

export default DynamicFormElement
