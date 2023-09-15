import React, { useContext } from 'react'
import { useController, useFormContext } from 'react-hook-form'

function DynamicFormElement({name}) {
  const {control} = useFormContext()
  const {
    field,
  } = useController({
    name,
    control,
  });

  return (
    <div>
      
    </div>
  )
}

export default DynamicFormElement
