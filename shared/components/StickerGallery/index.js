export default function StickerGallery({GalleryType}) {


    if (GalleryType === "Gallery") {
        return (
            <div style={{
                height: 800,
                width: 800,
                backgroundColor: "#acacacff",
                display: "flex", 
                flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "right",
                alignItems: "right",
                textAlign: "center",
                fontWeight: "bold",
            }}>

                <div>

                    <img style={{

                        src: "https://placehold.co/600x400",
                        alt:"image placeholder 1",
                        width: 300,
                        height: 250,
                        backgroundColor: "#d10000ff",
                        margin: 20
                    
                    }}/> 

                    <div style={{

                        fontSize: 20,
                        color: "#000000",
                    }}>title</div>
             
                </div>


                <div> 


                       <img style={{

                        src: "https://placehold.co/600x400",
                        alt:"image placeholder 1",
                        width: 300,
                        height: 250,
                        backgroundColor: "#d10000ff",
                        margin: 20
                    
                    }}/> 

                    
                    <div style={{

                        fontSize: 20,
                        color: "#000000",
                    }}>title</div>



                </div>


                <div>




                       <img style={{

                        src: "https://placehold.co/600x400",
                        alt:"image placeholder 1",
                        width: 300,
                        height: 250,
                        backgroundColor: "#d10000ff",
                        margin: 20
                    
                    }}/> 

                    
                    <div style={{

                        fontSize: 20,
                        color: "#000000",
                    }}>title</div>
                    
                
                    
                    </div>





                <div>
                    
                    
                       <img style={{

                        src: "https://placehold.co/600x400",
                        alt:"image placeholder 1",
                        width: 300,
                        height: 250,
                        backgroundColor: "#d10000ff",
                        margin: 20
                    
                    }}/> 

                    
                    <div style={{

                        fontSize: 20,
                        color: "#000000",
                    }}>title</div>
                    
                    
                    
            
                    
                     </div>




            </div>
        )
    }

}