import React, { useEffect, useState } from 'react'

import './home.css';
import { useDispatch } from 'react-redux';
import { addData, editData } from '../../redux/action/action';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';

export default function Home() {

    const [disable, setDisable] = useState(true)
    const [disable3, setDisable3] = useState(true)
    const [disable4, setDisable4] = useState(true)
    const [disable5, setDisable5] = useState(true)
    const [disable6, setDisable6] = useState(true)



    const [page, setPage] = useState(1)

    const [one, setOne] = useState("NO")
    const [two, setTwo] = useState("NO")
    const [three, setThree] = useState("NO")
    const [four, setFour] = useState("NO")
    const [five, setFive] = useState("NO")
    const [six, setSix] = useState("NO")

    const dispatch = useDispatch()
    const selectdata = state => state.UserReducer.FormData
    const updateInfo = useSelector(selectdata)


    // update form
   

    // **********update page info**********

    const [updateformdata,setupdateformdata]=useState([])
    const [updateId ,setupdateId]=useState()
   
   

    const submitData = (e) => {

        e.preventDefault(); 
        let data = {
            id:"1",
            one: one,
            two: two,
            three: three,
            four: four,
            five: five,
            six: six
        }

        dispatch(addData(data))
        console.log(data)
        Swal.fire(
            '',
            'Successfully Submitted',
            'success'
        )

        setPage(3)

       
       
    }
 
   const UpdatePage =(id,item)=>{
    setPage(2)
    setupdateId(id)
    setupdateformdata(item)
    console.log("item",item)

   

   }

   useEffect(()=>{
    if (updateformdata.one === "YES") {
      setDisable(false)
    }
    else{
     setDisable(true)
    }
 },[updateformdata.one])
   
   const handlechangeone=(e)=>{
    setOne(e.target.value)
    console.log("updateone",e.target.value)
    let value = e.target.value
       if (value === "NO") {
           setDisable(true)
       }
       else if (value === "YES"||"NA") {
        setDisable(false)
       }
       else{
        setDisable(true)
       }
   }

   
   const handlechangetwo=(e)=>{
    setTwo(e.target.value)
    console.log("updatetwo",e.target.value)

    let value = e.target.value
    if (value === "NO") {
        setDisable3(true)
    }
    else if (value === "YES"||"NA") {
     setDisable3(false)
    }
    else{
     setDisable3(true)
    }

   }

   const handlechangethree=(e)=>{
    setThree(e.target.value)
    console.log("updatetwo",e.target.value)

    let value = e.target.value
    if (value === "NO") {
        setDisable4(true)
    }
    else if (value === "YES"||"NA") {
     setDisable4(false)
    }
    else{
     setDisable4(true)
    }

   }
   const handlechangefour=(e)=>{
    setFour(e.target.value)
    console.log("updatetwo",e.target.value)

    let value = e.target.value
    if (value === "NO") {
        setDisable5(true)
    }
    else if (value === "YES"||"NA") {
     setDisable5(false)
    }
    else{
     setDisable5(true)
    }

   }

   const handlechangefive=(e)=>{
    setFive(e.target.value)
    console.log("updatetwo",e.target.value)

    let value = e.target.value
    if (value === "NO") {
        setDisable6(true)
    }
    else if (value === "YES"||"NA") {
     setDisable6(false)
    }
    else{
     setDisable6(true)
    }

   }

   

   


    const update = (e) => {
        e.preventDefault();
        let data = {
            one:one,
            two: two,
            three: three,
            four:four,
            five: five,
            six: six
        }

        dispatch(editData(updateId, data))
        Swal.fire(
            '',
            'Successfully Updated',
            'success'
        )
        setPage(3)
        console.log(data, "edit")


    }

    // console.log("updateData",updateInfo)
    return (
        <div>
            <div className='container'>
                {
                    page === 1 ?
                        <form  onSubmit={submitData}>
                             
                            <div className='mainBox'>
                           
                                <div>
                                    <div className='questionBox'>
                                        <label>1.Do you have any siblings?</label>
                                        <div className='radioButtonBox'>
                                            <div>

                                                <input type="radio" value="YES" checked={one === 'YES'} onChange={(e) => { setOne(e.target.value) }} name="one" />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO"  checked={one === 'NO'} name="one" onChange={(e) => { setOne(e.target.value) }} />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA"  checked={one === 'NA'} name="one" onChange={(e) => { setOne(e.target.value) }} />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='questionBox' >
                                        <label>2.Are your brothers and sisters annoying?</label>
                                        <div className='radioButtonBox' >
                                            <div>

                                                <input type="radio" value="YES" disabled={one === "NO" ? disable : ""} checked={two === 'YES'} name="two" onChange={(e) => { setTwo(e.target.value) }} />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" disabled={one === "NO" ? disable : ""} name="two" checked={two === 'NO'} onChange={(e) => { setTwo(e.target.value) }} />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" disabled={one === "NO" ? disable : ""} name="two" checked={two === 'NA'} onChange={(e) => { setTwo(e.target.value) }} />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='questionBox'>
                                        <label>3.Can you count to 1000?</label>
                                        <div className='radioButtonBox'>
                                            <div>

                                                <input type="radio" value="YES" name="three" disabled={two === "NO" ? disable : ""} checked={three === 'YES'} onChange={(e) => { setThree(e.target.value) }} />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" name="three" disabled={two === "NO" ? disable : ""} checked={three === 'NO'} onChange={(e) => { setThree(e.target.value) }} />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" name="three" disabled={two === "NO" ? disable : ""} checked={three === 'NA'} onChange={(e) => { setThree(e.target.value) }} />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='questionBox'>
                                        <label>4.Are you afraid of the dark?</label>
                                        <div className='radioButtonBox'>
                                            <div>

                                                <input type="radio" value="YES" name="four" disabled={three === "NO" ? disable : ""} checked={four === 'YES'} onChange={(e) => { setFour(e.target.value) }} />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" name="four" disabled={three === "NO" ? disable : ""} checked={four === 'NO'} onChange={(e) => { setFour(e.target.value) }} />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" name="four" disabled={three === "NO" ? disable : ""} checked={four === 'NA'} onChange={(e) => { setFour(e.target.value) }} />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='questionBox'>
                                        <label>5.Do you have a favorite superhero?</label>
                                        <div className='radioButtonBox'>
                                            <div>

                                                <input type="radio" value="YES" name="five" disabled={four === "NO" ? disable : ""} checked={five === 'YES'} onChange={(e) => { setFive(e.target.value) }} />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" name="five" disabled={four === "NO" ? disable : ""} checked={five === 'NO'} onChange={(e) => { setFive(e.target.value) }} />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" name="five" disabled={four === "NO" ? disable : ""} checked={five === 'NA'} onChange={(e) => { setFive(e.target.value) }} />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='questionBox'>
                                        <label>6.Do you have a best friend?</label>
                                        <div className='radioButtonBox'>
                                            <div>

                                                <input type="radio" value="YES" name="six" disabled={five === "NO" ? disable : ""} checked={six === "YES"} onChange={(e) => { setSix(e.target.value) }} />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" name="six" disabled={five === "NO" ? disable : ""} checked={six === "NO"} onChange={(e) => { setSix(e.target.value) }} />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" name="six" disabled={five === "NO" ? disable : ""} checked={six === "NA"} onChange={(e) => { setSix(e.target.value) }} />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <button type='submit'  className='btn btn-primary' value={"submit"}>Save</button>&nbsp;
                                        <button type='reset' className='btn btn-primary' value={"cancel"}>Cancel</button>

                                    </div>
                                </div>


                            </div>
                        </form>
                        :
                        page === 2 ?
                            <form onSubmit={update}>
                                <div className='mainBox'>
                                    
                                    <div>
                                        <div className='questionBox'>
                                            <label>1.Do you have any siblings?</label>
                                            <div className='radioButtonBox'>
                                                <div>

                                                    <input type="radio" value="YES" name='one' defaultChecked={updateformdata.one === 'YES'}  onChange={handlechangeone}  />&nbsp;
                                                    <label>YES</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NO" name='one'  defaultChecked={updateformdata.one === 'NO'} onChange={handlechangeone} />&nbsp;
                                                    <label>NO</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NA" name='one'  defaultChecked={updateformdata.one === 'NA'} onChange={handlechangeone} />&nbsp;
                                                    <label>NA</label>
                                                </div>
                                            </div>

                                        </div>


                                        <div className='questionBox' >
                                            <label>2.Are your brothers and sisters annoying?</label>
                                            <div className='radioButtonBox' >
                                                <div>

                                                    <input type="radio" value="YES" name='two' disabled={disable} defaultChecked={updateformdata.two === 'YES'}  onChange={handlechangetwo} />&nbsp;
                                                    <label>YES</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NO" name='two' disabled={disable}  defaultChecked={updateformdata.two === 'NO'} onChange={handlechangetwo} />&nbsp;
                                                    <label>NO</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NA" name='two' disabled={disable}  defaultChecked={updateformdata.two === 'NA'} onChange={handlechangetwo} />&nbsp;
                                                    <label>NA</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='questionBox'>
                                            <label>3.Can you count to 1000?</label>
                                            <div className='radioButtonBox'>
                                                <div>

                                                    <input type="radio" value="YES" name='three'  disabled={disable3} defaultChecked={updateformdata.three === 'YES'} onChange={handlechangethree} />&nbsp;
                                                    <label>YES</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NO" name='three'  disabled={disable3} defaultChecked={updateformdata.three === 'NO'} onChange={handlechangethree} />&nbsp;
                                                    <label>NO</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NA" name='three'   disabled={disable3} defaultChecked={updateformdata.three === 'NA'} onChange={handlechangethree} />&nbsp;
                                                    <label>NA</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='questionBox'>
                                            <label>4.Are you afraid of the dark?</label>
                                            <div className='radioButtonBox'>
                                                <div>

                                                    <input type="radio" value="YES" name='four'  disabled={disable4} defaultChecked={updateformdata.four === 'YES'} onChange={handlechangefour} />&nbsp;
                                                    <label>YES</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NO" name='four'  disabled={disable4} defaultChecked={updateformdata.four === 'NO'} onChange={handlechangefour} />&nbsp;
                                                    <label>NO</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NA" name='four'  disabled={disable4} defaultChecked={updateformdata.four === 'NA'} onChange={handlechangefour} />&nbsp;
                                                    <label>NA</label>
                                                </div>
                                            </div>

                                        </div>


                                        <div className='questionBox'>
                                            <label>5.Do you have a favorite superhero?</label>
                                            <div className='radioButtonBox'>
                                                <div>

                                                    <input type="radio" value="YES" name='five'  disabled={disable5} defaultChecked={updateformdata.five === 'YES'} onChange={handlechangefive} />&nbsp;
                                                    <label>YES</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NO" name='five'  disabled={disable5} defaultChecked={updateformdata.five === 'NO'} onChange={handlechangefive} />&nbsp;
                                                    <label>NO</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NA" name='five'  disabled={disable5} defaultChecked={updateformdata.five === 'NA'} onChange={handlechangefive} />&nbsp;
                                                    <label>NA</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='questionBox'>
                                            <label>6.Do you have a best friend?</label>
                                            <div className='radioButtonBox'>
                                                <div>

                                                    <input type="radio" value="YES" id='one' name='six' disabled={disable6} defaultChecked={updateformdata.six === "YES"} onChange={(e) => { setSix(e.target.value) }} />&nbsp;
                                                    <label>YES</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NO" id='one' name='six' disabled={disable6} defaultChecked={updateformdata.six === "NO"} onChange={(e) => { setSix(e.target.value) }} />&nbsp;
                                                    <label>NO</label>
                                                </div>
                                                <div>

                                                    <input type="radio" value="NA" id='one' name='six' disabled={disable6} defaultChecked={updateformdata.six === "NA"} onChange={(e) => { setSix(e.target.value) }} />&nbsp;
                                                    <label>NA</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div>
                                            <button type='submit' className='btn btn-primary' value={"submit"}>Update</button>&nbsp;
                                            <button type='reset' className='btn btn-primary' onClick={()=>{setPage(3)}} value={"cancel"}>Cancel</button>

                                        </div>
                                    </div>


                                </div>
                            </form>
                            : 
                            page=== 3?
                            
                             
                            <div className='mainBox'>
                                 {
                                  updateInfo.map((item,index)=>(
                                    <div key={index}>
                                        <div style={{textAlign:"right"}}>
                                           <button onClick={()=>{UpdatePage(index,item)}} className='btn btn-primary'>Update</button>
                                        </div>
                                        <div>
                                        <div className='questionBox'>
                                        <label>1.Do you have any siblings?</label>
                                        <div className='radioButtonBox'>
                                            <div>

                                                <input type="radio" value="YES" disabled checked={item.one === 'YES'}  name="one" />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" disabled  checked={item.one === 'NO'}  />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" disabled  checked={item.one === 'NA'}  />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='questionBox' >
                                        <label>2.Are your brothers and sisters annoying?</label>
                                        <div className='radioButtonBox' >
                                            <div>

                                                <input type="radio" value="YES" disabled checked={item.two === 'YES'} name="two"  />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" disabled  name="two" checked={item.two === 'NO'}  />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" disabled  name="two" checked={item.two === 'NA'}  />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='questionBox'>
                                        <label>3.Can you count to 1000?</label>
                                        <div className='radioButtonBox'>
                                            <div>

                                                <input type="radio" value="YES" name="three" disabled checked={item.three === 'YES'}  />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" name="three" disabled checked={item.three === 'NO'}  />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" name="three" disabled checked={item.three === 'NA'}  />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='questionBox'>
                                        <label>4.Are you afraid of the dark?</label>
                                        <div className='radioButtonBox'>
                                            <div>

                                                <input type="radio" value="YES" name="four" disabled checked={item.four === 'YES'}  />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" name="four" disabled checked={item.four === 'NO'}  />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" name="four" disabled checked={item.four === 'NA'}  />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='questionBox'>
                                        <label>5.Do you have a favorite superhero?</label>
                                        <div className='radioButtonBox'>
                                            <div>

                                                <input type="radio" value="YES" name="five" disabled checked={item.five === 'YES'}  />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" name="five" disabled checked={item.five === 'NO'}  />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" name="five" disabled checked={item.five === 'NA'}  />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='questionBox'>
                                        <label>6.Do you have a best friend?</label>
                                        <div className='radioButtonBox'>
                                            <div>

                                                <input type="radio" value="YES" name="six" disabled checked={item.six === "YES"} />&nbsp;
                                                <label>YES</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NO" name="six" disabled checked={item.six === "NO"} />&nbsp;
                                                <label>NO</label>
                                            </div>
                                            <div>

                                                <input type="radio" value="NA" name="six" disabled checked={item.six === "NA"} />&nbsp;
                                                <label>NA</label>
                                            </div>
                                        </div>

                                    </div>
                                        </div>
                                  

                                  
                                </div>
                                  ))  
                                 }
                               


                            </div>
                     
                        :null


                }

            </div>
        </div>
    )
}