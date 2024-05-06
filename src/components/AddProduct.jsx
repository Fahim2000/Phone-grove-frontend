

const AddProduct = () => {

    const handleAddPhone = (event) => {
        event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const brand = form.brand.value;
         const price = form.price.value;
         const desc = form.desc.value;
         const rating = form.rating.value;
         const photo = form.photo.value;

         const newPhone = {name,brand,price,desc,rating,photo}
         console.log(newPhone);

       // send data to the server
        fetch('http://localhost:5000/phones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPhone)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    // Swal.fire({
                    //     title: 'Success!',
                    //     text: 'Coffee Added Successfully',
                    //     icon: 'success',
                    //     confirmButtonText: 'Cool'
                    //   })
                    alert("Success")
                }
            })
    }
         
     
      return (
        <div className="">
            <h2 className="text-3xl font-extrabold">Add a Phone</h2>
            <form onSubmit={handleAddPhone}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Phone Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Phone Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="desc" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="rating out of 5" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Phoro URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
               
                <input type="submit" value="Add a Phone" className="btn btn-block" />

            </form>
        </div>
    );
};


export default AddProduct;