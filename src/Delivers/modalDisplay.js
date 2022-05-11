import React, { Fragment, Component } from "react";

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: "",
            size: "",
            espresso: "",
            dairy: "",
            whippedCream: "",
            syrupsSauces: "",
            sugarStirrer: "",
            optional: "",
            custom: "",
            iceCream: ""
        }
    }

    handleEvent = (event) => {
        if (event) {
            this.setState({
                [event.target.name]: event.target.value  
            })
        }
    }

    conditionalPrice = (defaultPrice, size1, espresso1, dairy1, whippedCream1, syrupsSauces1, sugarStirrer1, optional1, custom1, iceCream1) => {
        let totalPrice = Number(defaultPrice) + size1 + espresso1 + dairy1 + whippedCream1 + syrupsSauces1 + sugarStirrer1 + optional1 + custom1 + iceCream1;
        sessionStorage.setItem('totalCust', totalPrice);
        return totalPrice;
    }
    CustomizedData = []
    addItem = () => {

        let custData =
        {
            "coffeeID": sessionStorage.getItem('tempId'),
            "coffeeName": sessionStorage.getItem('tempName'),
            "coffeeImg": sessionStorage.getItem('tempImg'),


            "size": this.state.size.split(',')[0],
            "sizePrice": this.state.size.split(',')[1],


            "espresso": this.state.espresso.split(',')[0],
            "espressoPrice": this.state.espresso.split(',')[1],


            "dairy": this.state.dairy.split(',')[0],
            "dairyPrice": this.state.dairy.split(',')[1],


            "whippedCream": this.state.whippedCream.split(',')[0],
            "whippedPrice": this.state.whippedCream.split(',')[1],


            "syrupsSauces": this.state.syrupsSauces.split(',')[0],
            "syrupsPrices": this.state.syrupsSauces.split(',')[1],


            "sugarStir": this.state.sugarStirrer.split(',')[0],
            "sugarPrice": this.state.sugarStirrer.split(',')[1],



            "custom": this.state.custom.split(',')[0],
            "customPrice": this.state.custom.split(',')[1],


            "iceCream": this.state.iceCream.split(',')[0],
            "iceCreamPrice": this.state.iceCream.split(',')[1]

        }






        this.CustomizedData.push(custData)
        localStorage.setItem('Customizeddata', JSON.stringify(this.CustomizedData))

        let temp_id = sessionStorage.getItem('tempId');
        this.props.tempId(Number(temp_id));
        // this.props.CustomizedData(this.CustomizedData);
    }

    addOn = ({ addOn }) => {
        if (addOn) {
            if (addOn.length > 0) {

                return addOn.map((item) => {
                    // this.setState({itemName:item.name})
                    return (
                        <Fragment key={item._id}>
                            <h1>Customize : <b>{item.name}</b></h1>
                            <h1>Price : <b>	&#8377; {item.Price}</b></h1>
                            <h1>Size : </h1>
                            {
                                item.size.map((sizeData, index) => {
                                    return (
                                        <div className="form-check" key={index}>
                                            <form>
                                                <input className="form-check-input" type="radio" name="size" value={[sizeData.name, sizeData.Additional_Price]}  onClick={this.handleEvent}/>
                                                <label className="form-check-label" >
                                                    <span>{sizeData.inStock}</span>
                                                    <span >{sizeData.name}: </span>
                                                    <span>{sizeData.Additional_Price}</span>
                                                </label>

                                            </form>
                                        </div>
                                    )
                                })
                            }

                            <h1>Espresso:</h1>
                            {
                                item.Espresso.map((espressoData, index) => {
                                    return (
                                        <Fragment>
                                            <div className="form-check" key={index}>
                                                <form>
                                                    <input className="form-check-input" type="radio" name="espresso" value={[espressoData.name, espressoData.Additional_Price]} id="flexRadioDefault2" onClick={this.handleEvent}  />
                                                    <label className="form-check-label" for="flexRadioDefault2">

                                                        <span>{espressoData.name}: </span>
                                                        <span>{espressoData.Additional_Price}</span>
                                                    </label>
                                                </form>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }

                            <h1>Dairy/Non-Dairy :</h1>
                            {
                                item.Dairy.map((dairyData, index) => {
                                    return (
                                        <Fragment>
                                            <div className="form-check" key={index}>
                                                <form>
                                                    <input className="form-check-input" type="radio" name="dairy" value={[dairyData.name, dairyData.Additional_Price]} onClick={this.handleEvent} id="flexRadioDefault3"  />
                                                    <label className="form-check-label" for="flexRadioDefault3">

                                                        <span>{dairyData.name}: </span>
                                                        <span>{dairyData.Additional_Price}</span>
                                                    </label>
                                                </form>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }

                            <h1>Whipped Cream :</h1>
                            {
                                item.whippedCream.map((whippedData, index) => {
                                    return (
                                        <Fragment>

                                            <div className="form-check" key={index}>
                                                <form>
                                                    <input className="form-check-input" type="radio" name="whippedCream" value={[whippedData.name, whippedData.Additional_Price]} onClick={this.handleEvent} id="flexRadioDefault4"  />
                                                    <label className="form-check-label" for="flexRadioDefault4">

                                                        <span>{whippedData.name}: </span>
                                                        <span>{whippedData.Additional_Price}</span>
                                                    </label>
                                                </form>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }

                            <h1>Syrups and Sauces :</h1>

                            {
                                item.syrupsSauces.map((syrupsSauces, index) => {
                                    return (
                                        <Fragment>
                                            <div className="form-check" key={index}>
                                                <form>
                                                    <input className="form-check-input" type="radio" name="syrupsSauces" value={[syrupsSauces.name, syrupsSauces.Additional_Price]} onClick={this.handleEvent} id="flexRadioDefault5" />
                                                    <label className="form-check-label" for="flexRadioDefault5">

                                                        <span>{syrupsSauces.name}: </span>
                                                        <span>{syrupsSauces.Additional_Price}</span>
                                                    </label>
                                                </form>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }

                            <h1>Sugar and Stirrer [Complimentary] :</h1>
                            {
                                item.sugarStirrer.map((sugarStirrer, index) => {
                                    return (
                                        <Fragment>
                                            <div className="form-check" key={index}>
                                                <form>
                                                    <input className="form-check-input" type="radio" name="sugarStirrer" value={[sugarStirrer.name, sugarStirrer.Additional_Price]} onClick={this.handleEvent} id="flexRadioDefault6"  />
                                                    <label className="form-check-label" for="flexRadioDefault6" >

                                                        <span>{sugarStirrer.name}: </span>
                                                        <span>{sugarStirrer.Additional_Price}</span>
                                                    </label>
                                                </form>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }

                            <h1>Optional :</h1>
                            {
                                item.optional.map((optional, index) => {

                                    return (
                                        <Fragment>

                                            <div className="form-check" key={index}>
                                                <form>
                                                    <input className="form-check-input" type="radio" name="optional" value={[optional.name, optional.Additional_Price]} onClick={this.handleEvent} id="flexRadioDefault7" />
                                                    <label className="form-check-label" for="flexRadioDefault7">

                                                        <span>{optional.name}: </span>
                                                        <span>{optional.Additional_Price}</span>
                                                    </label>
                                                </form>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }

                            <h1>Customs :</h1>
                            {
                                item.Customs.map((custom, index) => {

                                    return (
                                        <Fragment>

                                            <div className="form-check" key={index}>
                                                <form>
                                                    <input className="form-check-input" type="radio" name="custom" value={[custom.name, custom.Additional_Price]} onClick={this.handleEvent} id="flexRadioDefault8" />
                                                    <label className="form-check-label" for="flexRadioDefault8">

                                                        <span>{custom.name}: </span>
                                                        <span>{custom.Additional_Price}</span>
                                                    </label>
                                                </form>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }

                            <h1>Ice-Cream :</h1>
                            {
                                item.iceCream.map((IceCream, index) => {

                                    return (
                                        <Fragment>

                                            <div className="form-check" key={index}>
                                                <form>
                                                    <input className="form-check-input" type="radio" name="iceCream" value={[IceCream.name, IceCream.Additional_Price]} onClick={this.handleEvent} id="flexRadioDefault9"  />
                                                    <label className="form-check-label" for="flexRadioDefault9">

                                                        <span>{IceCream.name}: </span>
                                                        <span>{IceCream.Additional_Price}</span>
                                                    </label>
                                                </form>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }
                        </Fragment>
                    )


                })
            }
            else {
                return (
                    <div>
                        <img className="Loading" src='/image/Loader.gif' alt="Loader..." />
                        <h1 className="Loading">Loading.....</h1>
                    </div>)
            }

        }
    }
    render() {
        
        return (
            <Fragment>
                {this.addOn(this.props)}

                <center><h3>Total Price For This Item is : {this.conditionalPrice(this.props.defaultPrice, Number(this.state.size.split(',')[1]), Number(this.state.espresso.split(',')[1]), Number(this.state.dairy.split(',')[1]), Number(this.state.whippedCream.split(',')[1]), Number(this.state.syrupsSauces.split(',')[1]), Number(this.state.sugarStirrer.split(',')[1]), Number(this.state.optional.split(',')[1]), Number(this.state.custom.split(',')[1]), Number(this.state.iceCream.split(',')[1]))} </h3></center>
                <hr />
                <center><button type="button" onClick={this.addItem} className="btn" style={{ backgroundColor: "#006341", color: "#fff" }}>Add Your Customized Coffee</button></center>
            </Fragment>
        )
    }
   
       
    
}

export default Modal;