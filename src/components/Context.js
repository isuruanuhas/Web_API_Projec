import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Redmi 9T",
                "src": "https://photos.dialcom.lk/med/items/xiaomi-redmi-k30i-5g-mobile-phones-price-in-sri-lanka_3359_jpg",
                "description": "6 GB RAM with 64 or 128 GB storage",
                "content": "Redmi K20 Pro and Redmi K20 are smartphones introduced by the Xiaomi sub-brand Redmi in an event held in China. A Premium variant for the Pro was later revealed, with the Snapdragon 855+, a new 512 GB/12 GB RAM model.",
                "price": 399,
                "colors": ["Glacier Bluer", "black", "Carbon Black", "Flame Red"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nokia 7.2",
                "src": "https://lifemobile.lk/wp-content/uploads/2019/10/nokia7-2-cyan.jpg",
                "description": "4 GB RAM with 64 GB storage",
                "content": "The Nokia 7.2 smartphone comes with a 6.3 inch full HD display. This provides a clear and vibrant visual experience on your phone. The 48 MP +5 MP + 8 MP rear camera comes along with LED flash. It also comes with a 20 MP front camera is useful for clicking memories that you can preserve with yourself. The phone also comes with a 64 GB of internal storage that you can use to store your media files and documents..",
                "price": 190,
                "colors": ["red", "black", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Oppo F11 Pro",
                "src": "https://buyabans.com/upload/product/Phone/OPPH-A52020BK/web.jpg",
                "description": "4000mAH lithium-polymer battery",
                "content": "48MP+5MP dual rear camera with normal, video, expert, time-lapse, panorama, portrait, slow-motion | 16MP front camera"
                +"16.58 centimeters (6.5-inch) FHD+ multi-touch capacitive touchscreen with 2340 x 1080 pixels resolution, 397 ppi pixel density"
                +"Memory, Storage and SIM: 6GB RAM | 64GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G).",
                "price": 250,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Samsung Galaxy M31s",
                "src": "https://www.lg.com/lk/images/mobile-phones/md05870096/LG_Q6-Mobiles_Phoness-350.jpg",
                "description": "6GB RAM, 128GB internal",
                "content": "Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera | 32MP (F2.2) front camera"
                +"16.4 centimeters (6.5-inch) super Amoled - Infinity-O display, FHD+ capacitive multi-touch touchscreen with 1080 x 2400 pixels resolution, 407 ppi pixel density and Contrast Ratio: 78960:1"
                +"Memory, Storage & SIM: 6GB RAM, 128GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G).",
                "price": 299,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Apple iPhone 11 ",
                "src": "https://www.futuremobiles.lk/wp-content/uploads/2019/04/Matte-Black-1.png",
                "description": "4K video, and Slo-Mo",
                "content": "6.1-inch (15.5 cm) Liquid Retina HD LCD display Water and dust resistant (2 meters for up to 30 minutes, IP68) Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps"
                +"12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo Face ID for secure authentication and Apple Pay"
                +"A13 Bionic chip with third-generation Neural Engine Fast-charge capable.",
                "price": 599,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Redmi Note 9Pro",
                "src": "https://shopluxtt.com/pub/media/catalog/product/cache/bf8ba255d51d7063daf799182eb3549a/s/w/sw-m2003j6a1g.jpg",
                "description": "5020mAH lithium-polymer battery",
                "content": "48MP rear camera with ultra-wide, macro, depth sensor, portrait, night mode, ai scene recognition, hdr, pro mode | 13MP front camera"
                +"16.5862 centimeters (6.53-inch) FHD+ display with multi-touch capacitive touchscreen with 2340 x 1080 pixels resolution | 19.5:9 aspect ratio"
                +"Memory, Storage & SIM: 4GB RAM | 64GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G).",
                "price": 170,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


