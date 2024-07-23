// example output of form builder: 
/**
 * 
 * {
 *  formName: string
 *  id: string
 *  formElements: [
 *      {
 *          type: InputType
 *          label: string
 *          name: string
 *          
 *          IF InputType === group
 *          
 *          groupFormElements: []
 *      }
 *  ]
 * }
 * 
 */

import { Input } from "@/components/ui/input"

const FormBuilder = () => {
    return (
        <>
            <h1>Form Builder</h1>

            <Input />

            {/* Add a form title */}
            {/* generates ID */}
            {/* Add new form element button */}
            {/* Select an input type */}
            {/* Input name, input label */}
            {/* If its a select, need to add select items */}
            {/* Groups? */}
            {/* Finish form button */}
        </>
    )
}

export default FormBuilder;