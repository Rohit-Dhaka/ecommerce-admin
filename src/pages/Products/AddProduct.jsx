import React, { useState } from 'react'
import { UseContext } from '../../context/AuthContext'

const AddProduct = () => {
  const {addproduct}   = UseContext();
  const [formdata , setFormdata] = useState({ image:'' , title:'' , description:'',price:'',size:'',category:'',subcategory:'',stock:''})

  const handleSubmit = async (e) =>{
    e.preventDefault();
    addproduct(formdata)

    const data = new FormData();
    data.append("image" , formdata.image)
    data.append("title" , formdata.title)
    data.append("description" , formdata.description)
    data.append("price" , formdata.price)
    data.append("size" , JSON.stringify(formdata.size))
    data.append("category" , JSON.stringify(formdata.category))
    data.append("subcategory" , JSON.stringify(formdata.subcategory))
    data.append("stock" , formdata.stock)
      

  }

    const toggleValue = (field, value) => {
    if (formdata[field].includes(value)) {
      setFormdata({ ...formdata, [field]: formdata[field].filter(v => v !== value) });
    } else {
      setFormdata({ ...formdata, [field]: [...formdata[field], value] });
    }
  };


  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFormdata({...formdata, image: e.target.files[0]})}  />
        <input type="text" placeholder='title'  value={formdata.title} onChange={(e) => setFormdata({...formdata,  title: e.target.value})} />
        <input type="text" placeholder='description'   value={formdata.description} onChange={(e) => setFormdata({...formdata,  description: e.target.value})}/>
        <input type="number" placeholder='price'  value={formdata.price} onChange={(e) => setFormdata({...formdata,  price: e.target.value})} />
        <input type="number" placeholder='stock'  value={formdata.stock} onChange={(e) => setFormdata({...formdata,  stock: e.target.value})} />

           <p>Select Size:</p>

           {['s','m','l','xl','2xl'].map(size =>(
              <label key={size}>
                <input type="checkbox" 
                  checked={formdata.size.includes(size)}
                  onChange={() => toggleValue('size',size) }
                />
                {size.toUpperCase()}
              </label>
           ))}

             <p>Select Categories:</p>
        {['Men','Women','Kids'].map(cat => (
          <label key={cat}>
            <input 
              type="checkbox" 
              checked={formdata.category.includes(cat)} 
              onChange={() => toggleValue('category', cat)} 
            />
            {cat}
          </label>
        ))}

           <p>Select Subcategories:</p>
        {['Topwear','Bottomwear','Winterwear'].map(sub => (
          <label key={sub}>
            <input 
              type="checkbox" 
              checked={formdata.subcategory.includes(sub)} 
              onChange={() => toggleValue('subcategory', sub)} 
            />
            {sub}
          </label>
        ))}




        
          

          <input type="submit" value='Add Product' />
      </form>

    </section>
  )
}

export default AddProduct