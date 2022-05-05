import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
class GiftCardDisplay extends Component{
    constructor(){
        super()
        this.state={
            giftCards:''
        }
    }
    giftID = (id) => {
        
                console.log('ID giftcarddisp>>>',id)
                this.setState({giftCards:id})
                this.props.finalGift(id)
                
                
        
                //    console.log("gift_Category >>>>",gift_Category)
               
        
            }
    renderCards = ({ giftCard }) => {
        console.log("Inside giftCard>>>>",this.giftCards)
        // console.log("Inside giftCard",props.giftCard._id)
        if (giftCard.length > 0) {
            return giftCard.map((item) => {
                return (
                    <div key={item._id} className="CardImages">
                        <Link>
                        
                            <img src={item.img_url} style={{border:"5px solid #006341",display:"inline-block",width:"45%"}}/><br/>
                            <center><button className="btn " onClick={() => {this.giftID(item._id)}} style={{backgroundColor:"#006341",color:"#fff",display:"inline-block",marginTop:"-27%"}}>ADD</button></center>
                        </Link>
                    </div>
                )
            })
        }
    }
    renderCart = (giftCards) => {
      
                return (
                    <b>{giftCards} </b>
                )
           
    }
    render(){
        return (
            <div>
                  <div className="col-md-12" id="renderAdded">
                    <h1>Item Added</h1>
                    Item Number {this.renderCart(this.state.giftCards)}&nbsp;Added
                </div>
                {this.renderCards(this.props)}
            </div>
    
        )
    }
   
}
export default GiftCardDisplay;
// export default withRouter(GiftCardDisplay);
// const GiftCardDisplay = (props) => {
//     let giftCards = []
//     const giftID = (id) => {
        
//         console.log('ID giftcarddisp>>>',id)
//         giftCards.push(id);
//         this.props.finalGift()
        
        

//         //    console.log("gift_Category >>>>",gift_Category)
       

//     }
//     const renderCards = ({ giftCard }) => {
//         // console.log("Inside giftCard>>>>",giftCards)
//         // console.log("Inside giftCard",props.giftCard._id)
//         if (giftCard.length > 0) {
//             return giftCard.map((item) => {
//                 return (
//                     <div key={item._id} className="CardImages">
//                         <Link>
                        
//                             <img src={item.img_url} />
//                             <button onClick={giftID(item._id)}>ADD</button>
//                         </Link>
//                     </div>
//                 )
//             })
//         }
//     }
//     return (
//         <div>
//             {renderCards(props)}
//         </div>

//     )
// }
