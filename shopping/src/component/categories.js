import React ,{useEffect,useState} from 'react'
import {getAllCata} from '../user/process'


const Categoies = () =>{
    const [values , setVales] = useState([]);
    
    const {name,  subcategory} = values
    
    const preload = () => {
        getAllCata().then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            setVales(data);
          }
        });
      };
     
      useEffect(() => {
        preload();
      }, []);
     console.log(values)



    return (
        <div class="banner-section spad">
            <div class="container-fluid">
                <div class="row">
                {values.map((Categoy , index)=>{
                    return(<div class="col-lg-4" key={index}>
                        <div class="single-banner">
                            <img src={`img/${Categoy.name}.jpg`} alt=""/>
                            <div class="inner-text" >
                                <a href={`shop/${Categoy._id}`}><h4>{Categoy.name}</h4></a>
                            </div>
                        </div>
                    </div>)
                })}
                    {/* <div class="col-lg-4">
                        <div class="single-banner">
                            <img src="img/banner-1.jpg" alt=""/>
                            <div class="inner-text">
                                <h4>Men’s</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-banner">
                            <img src="img/banner-2.jpg" alt=""/>
                            <div class="inner-text">
                                <h4>Women’s</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-banner">
                            <img src="img/banner-3.jpg" alt=""/>
                            <div class="inner-text">
                                <h4>Kid’s</h4>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
       )
}

export default Categoies;