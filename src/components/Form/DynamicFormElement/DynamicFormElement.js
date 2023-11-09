import React, {useEffect, useState} from 'react'
import { useController, useFormContext, useWatch } from 'react-hook-form'
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
          const {name: dependencyFieldName, hasValue, show} = condition;
          const isVisible = watchValues[dependencyFieldName] === hasValue ? show : true
          setComponentShow((prev)=>
          { 
            // if (!prev) {
            //   control.unregister(name, {
            //     keepIsValid: true,
            //   })
            // }
            return isVisible;
          })
        }
      }, [condition, watchValues, setComponentShow, control, name])

  const Component = componentMapper[componentType]?.component

  const itemList =  useAPIData(dataSource, watchValues[condition?.name])

  return (
    <>
      {Component && componentShow && <Component label={label} items={itemList || []} name={field.name} {...field} defaultValue={defaultValue}/>} 
    </>
  )
}

export default DynamicFormElement
