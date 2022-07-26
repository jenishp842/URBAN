import React, { useState } from 'react';
import "./vendor.css";
import { Formik } from 'formik';
import * as Yup from "yup"
import { useParams } from 'react-router';
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { useDispatch } from 'react-redux';
import * as action from "../../../store/actions/index"

const Venderservice = () =>{
    const [holiday,setHoliday] = useState(['sunday'])
    const dispatch= useDispatch();
    const params = useParams();
    const  options  = [
        { label:  'monday', value:  'monday'  },
        { label:  'tuesday', value:  'tuesday'  },
        { label:  'wednesday', value:  'wednesday'  },
        { label:  'thursday', value:  'thursday'  },
        { label:  'friday', value:  'friday'  },
        { label:  'saturday', value:  'saturday'  },
        { label:  'sunday', value:  'sunday'  }
      ]
    const submit = (values) =>{
        const addrs=["area","city","state"]
        const body = {address:{}};
        Object.keys(values).forEach(i=>{
            if(addrs.includes(i)){
                body.address[i]=values[i]
            }
            else{
                body[i]=values[i]
            }
        });
        body.service=params.id
        body.holiday=holiday
        console.log(body)
        dispatch(action.createVendor({...body}))
        // comment
    }
    const vendorSchema = Yup.object({
        name:Yup.string().required(),
        shopname:Yup.string().required(),
        area:Yup.string().min(15).required(),
        contact:Yup.number().required(),
        starttime:Yup.string().required(),
        working:Yup.number().required(),
        servicetime:Yup.string().required(),
    })
    const handleHoliday = e =>{
     setHoliday(e.split(","))
    }
    return (
    <div className='vendor-component'>
        <Formik
        initialValues={{
            name:"",
            shopname:"",
            area:"",
            city:"ahmedabad",
            state:"Gujrat",
            contact:"",
            starttime:"",
            working:"",
            servicetime:""
        }}
        validationSchema={vendorSchema}
        validate={
            (values)=>{
              const errors={}
              console.log(values)
              return errors
            }
          }
        onSubmit={submit}
        >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleSubmit
         })=>(
            <form onSubmit={handleSubmit} className='vendor-form'>
            <div className='mb-3'>
               <label>Name</label>
                <input name="name" className="form-control w-70" 
                type="text" onChange={handleChange} value={values.name}/>
                {touched.name && errors.name && <span>{errors.name}</span>}
            </div>
            <div className='mb-3'>
            <label>Shop Name</label> 
            <input className="form-control" name='shopname' 
            onChange={handleChange} value={values.shopname} type="text"/>
            {touched.shopname && errors.shopname && <span>{errors.shopname}</span>}
            </div>
            <div className='mb-3'>
                <label>Address</label>
                <div className='mb-3'>
                <input className="form-control" name='area' onChange={handleChange}
                 value={values.address} type="textarea"/>
                 {touched.area && errors.area && <span>{errors.area}</span>}
                </div>
                <div className='mb-3'>
                    <label>City</label>
                <select className="form-control"
                        name='city'
                        onChange={handleChange} 
                        value={values.city}>
                    <option value="ahmedabad">ahmedabad</option>
                    <option value="surat">surat</option>
                </select>
                </div>
                <div className='mb-3'>
                <label>State</label>
                <select className="form-control"
                name='state' onChange={handleChange} value={values.state}
                >
                    <option value="Gujrat">Gujrat</option>
                    <option value="Rajasthan">Rajasthan</option>
                </select>
                </div>
            </div>
            <div className='mb-3'>
                <label>Contact</label>
                <input className="form-control"
                name='contact'
                onChange={handleChange} value={values.contact}
                 type="text"/>
                 {touched.contact && errors.contact && <span>{errors.contact}</span>}
            </div>
            <div className='mb-3'>
               <label>Start time</label>
                <select className="form-control" 
                name='starttime'
                onChange={handleChange} value={values.starttime}
                >
                    <option value="">Select start time</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
                {touched.starttime && errors.starttime && <span>{errors.starttime}</span>}
            </div>
            <div className='mb-3'>
                <label>Maximum service duration</label>
                <select className="form-control" name='servicetime'
                onChange={handleChange} value={values.servicetime}
                >
                    <option value="">Select service duration</option>
                    <option value="30">30 min</option>
                    <option value="45">45 min</option>
                    <option value="60">1 hour</option>
                </select>
                {touched.servicetime && errors.servicetime && <span>{errors.servicetime}</span>}
            </div>
            <div className='mb-3'>
                <label>Woking hours per day</label>
                <input className="form-control" type="number"
                name='working'
                onChange={handleChange} value={values.working}
                />
                {touched.working && errors.working && <span>{errors.working}</span>}
            </div>
            <div>
                <MultiSelect
                name="holiday"
                onChange={handleHoliday}
                defaultValue="sunday"
                 options={options} 
                />
            </div>
            <button type="submit" className='btn btn-success'> Apply </button>
        </form>
         )}
        </Formik>
        
    </div>
  )
    }
export default Venderservice