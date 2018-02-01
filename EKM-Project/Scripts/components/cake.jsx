const Checkout = (props) => {

     return <button onClick={props.checkout} className="btn btn-success" style={{ width: "100%", bottom: "0px", height: "35px", fontSize: "13px", borderRadius: "0px", position: "sticky" }}>
        Checkout</button>;
}

const CollapseButton = (props) => {
    return (
        <div style={{ fontSize: "28px", fontWeight: "bold", height: "38px", width: "90px", marginRight: "-35px"}}>{props.children}</div>
        );
}

const CakeTable = (props) => {

    const style = {
        height: "auto",
        backgroundColor: "white",
        marginBottom: "10px",
        margin: "5px",
        border: "1px solid #888",
        display: "inline-block"

    };

    const cakeList = [...props.cakes];
    let SearchCount = 0;
    const list = cakeList.map((cake, index) => {
        var base64Icon = "data:image/png;base64," + cake.Image;
        if (cake.CakeName.toLowerCase().includes(props.SearchText)) {
            return (
                <div key={index} style={style}>
                    <div style={{ display: "flex", flexFlow: "column" }}>
                        <img style={{ borderBottom: "1px solid rgb(136, 136, 136)" }} src={base64Icon} height="220px" width="250px" />
                        <div style={{ borderBottom: "1px solid rgb(136,136,136)" }}>{cake.CakeName}</div>
                        <div style={{ display: "flex", flexFlow: "row" }}>
                            <div style={{ fontSize: "20px", borderRight: "1px solid rgb(136, 136, 136)", width: "60%", height: "auto", lineHeight: "32px" }}>£{
                                cake.Price}</div>
                            <button className="btn btn-default" onClick={(event) => props.addtoshopping(cake)} key={index} style={{ border: "none", fontSize: "14px", height: "auto", width: "100px", borderRadius: "0px", lineHeight: "8px" }}>Add</button>

                        </div>
                    </div>
                </div>
            );
        } else { SearchCount++;}      
    });

    if (SearchCount === cakeList.length && cakeList.length > 0) {
        return <h1>Nothing to display!</h1>;
    } else if (SearchCount === cakeList.length) {
        return <div>Loading..</div>;
    }

    return <div>{list}</div>;
}

const Customer = (props) => {
    const style = {
        width: "50%",
        minWidth: "300px",
        height: "350px",
        margin: "auto",
        backgroundColor: "#fff", color: "#000", border: "1px solid #444", overflow: "auto"
    }

    return (<div style={style}>
        <div style={{ textAlign: "center", backgroundColor: "#246CCC", color: "#fff", position: "sticky", top: "0", width: "auto", height: "50px", fontSize: "17px", lineHeight: "50px" }}>Customer Details</div>
        <CustomerForm submitcustomerdetails={props.submitCustomerDetails} />
    </div>);
}

const CustomerForm = (props) => {

    return (
        <div style={{ height: "85%", display: "flex"}}>
            <form onSubmit={props.submitcustomerdetails} style={{ fontSize: "14px", width: "100%", display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center" }}>
                First name <input className="form-control" type="text" name="firstname" required autofocus="true"/>
                Last name <input className="form-control" type="text" name="lastname" required/>
                Date of Birth
                <div style={{ display: "flex", flexFlow: "row", justifyContent: "center"}}>
                    
                    <input style={{ width: "16%", minWidth: "93px" }} className="form-control" placeholder="Day" type="text" name="dateofbirthday" required pattern="[0-9]{1,2}"/>
                    <input style={{ width: "16%", minWidth: "93px"}} className="form-control" placeholder="Month" type="text" name="dateofbirthmonth" required pattern="[0-9]{1,2}" />
                    <input style={{ width: "16%", minWidth: "93px"}} className="form-control" placeholder="Year" type="text" name="dateofbirthyear" required pattern="[0-9]{4}"/>
                </div>
                Address <input className="form-control" type="text" name="address" required/>
                <input style={{ marginTop: "10px" }} className="btn btn-warning" type="submit" value="Confirm Details" />
            </form>
        </div>
    );
}

const OrderSummary = (props) => {

    const shoppingList = [...props.shoppinglist];
    const list = shoppingList.map((item, index) => {
        return (
            <div key={index} style={{ fontSize: "12px", display: "flex", alignItems: "flex-end", justifyContent: "center", textAlign: "center" }}>
                <div style={{ width: "100%", borderRight: "1px solid #444" }}>
                    <p >
                        {item.CakeName}
                    </p>
                </div>
                <div style={{ width: "100%" }}>
                    <p >
                        £{item.Price.toFixed(2)}
                    </p>
                </div>
            </div>
        );
    });

    let noItems = null;

    if (props.shoppinglist.length) {
        noItems = <div>{list}</div>;
    } else {
        noItems = <p style={{ textAlign: "center", fontSize: "16px" }}>Order empty</p>;
    }

    return (

        <div>
            <div style={{
                width: "60%",
                minWidth: "300px",
                height: "500px",
                margin: "auto",
                backgroundColor: "#fff", textAlign: "center", color: "#000", border: "1px solid #444", overflow: "auto"
            }}><div style={{ textAlign: "center", backgroundColor: "#246CCC", color: "#fff", position: "sticky", top: "0", width: "auto", height: "50px", fontSize: "17px", lineHeight: "50px" }}>Order Summary</div>
                <div style={{ height: "50%" }}>
                    <div style={{ display: "flex", flexFlow: "row", borderBottom: "1px solid #444", marginBottom: "10px" }}><h4 style={{ width: "100%", borderRight: "1px solid #444" }}>Product</h4><h4 style={{ width: "100%" }}>Price</h4></div>
                    {noItems}
                    <div style={{ backgroundColor: "#fff", borderTop: "1px solid #444", width: "100%", textAlign: "right", fontSize: "14px", paddingRight: "5px", bottom: "0px", position: "sticky" }} >Total Price: £{props.totalprice.toFixed(2)}</div>

                </div>
            </div><div style={{ height: "55%", display: "flex", alignContent: "flex-end", justifyContent: "center", marginTop: "10px" }}>
                <button style={{ marginRight: "5px" }} onClick={props.paybycash} className="btn btn-primary">Pay by Cash</button>
                <button style={{ marginLeft: "5px" }} onClick={props.paybycard} className="btn btn-warning">Pay by Card</button>
            </div></div>);
}

const OrderBasket = (props) => {

    const array = [...props.shoppinglist];
    const list = array.map((cake, index) => {

        return (
            <div style={{ fontSize: "12px", display: "flex", textAlign: "center" }} key={index}>

                <div style={{ borderRight: "1px solid #555", width: "100%" }}>
                    <p >{cake.CakeName}</p>
                </div>
                <div style={{ width: "100%" }}>
                    <p>£{cake.Price.toFixed(2)}</p>
                    <button
                        onClick={(event) => props.removefrombasket(index, cake)}
                        style={{ border: "none", outline: "none", borderRadius: "5px", color: "#fff", backgroundColor: "red", float: "right", marginTop: "-28px", marginRight: "4px", marginBottom: "3px", height: "20px", width: "20px", textAlign: "center", fontSize: "9px" }}>
                        <strong>X</strong>
                    </button>
                </div>
            </div>);

    });

    let noItems = null;
    let emptyBasket = null;
    const auth = document.getElementById("root").getAttribute("auth");  

    if (props.shoppinglist.length === 0) {
        noItems = <p style={{ textAlign: "center", fontSize: "16px" }}>Basket empty</p>;
    } else {
        noItems = <div>{list}</div>;
    }

    if (!props.isbasketempty && auth) {
        emptyBasket = <Checkout checkout={props.checkout}/>;
    }

    return (
        <div style={{ marginBottom: "10px", width: "250px", height: "330px", border: "1px solid #444", backgroundColor: "white", position: "absolute", right: "10px", bottom: "0", overflow: "auto", overflowX: "hidden" }}>
            
            <div onClick={props.togglebasket} style={{ lineHeight: "38px", fontSize: "16px", height: "40px", cursor: "pointer", position: "sticky", width: "inherit", color: "#fff", backgroundColor: "#246CCC", textAlign: "center", borderBottom: "1px solid #444", top: "0"}}><div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}><div style={{width: "70%",  textAlign: "right"}}>Shopping Basket</div><CollapseButton>&times;</CollapseButton></div></div>
            <div style={{ fontSize: "13px", display: "flex", textAlign: "center", borderBottom: "1px solid #444", marginBottom: "10px" }}><h4 style={{ width: "100%", borderRight: "1px solid #444" }}>Product</h4><h4 style={{ width: "100%" }}>Price</h4></div>
            {noItems}
            <div style={{ backgroundColor: "#fff", borderTop: "1px solid #444", width: "100%", textAlign: "right", fontSize: "14px", bottom: "0px", position: "sticky"}} ><div style={{paddingRight: "5px"}}>Total Price: £{props.totalprice.toFixed(2)}</div>
                {emptyBasket}
            </div>
        </div>
    );
};

const CardForm = (props) => {

    return (
        <div style={{ height: "85%", display: "flex", justifyContent: "" }}>
            <form onSubmit={props.submitOrder} style={{ width: "100%", display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center" }}>
                Cardholder Name <input className="form-control" type="text" name="cardholdername" autofocus="true" />
                Card Number <input className="form-control" type="text" name="cardnumber" />
                Expiry Date <input className="form-control" type="text" name="expirydate" />
                CSC <input className="form-control" type="text" name="csc" />
                <input style={{ marginTop: "10px" }} className="btn btn-success" type="submit" value="Submit Order" />
            </form>
        </div>
    );
}

const Payment = (props) => {

    const style = {
        width: "60%",
        minWidth: "300px",
        height: "350px",
        margin: "auto",
        backgroundColor: "#fff", textAlign: "center", color: "#000", border: "1px solid #444", overflow: "auto"
    }

    return (<div style={style}>
        <div style={{ textAlign: "center", backgroundColor: "#246CCC", color: "#fff", position: "sticky", top: "0", width: "auto", height: "50px", fontSize: "17px", lineHeight: "50px" }}>Payment Details</div>
        <CardForm submitOrder={props.submitorder} />
    </div>);
}

class Shop extends React.Component {
    state = {
        shoppingList: [],
        cakes: {},
        isBasketOpen: false,
        totalPrice: 0.00,
        showOrderSummary: false,
        isBasketEmpty: true,
        cardPaymentMethod: false,
        showCakeTable: true,
        paymentDetails: {},
        showPaymentForm: false,
        customerDetails: {},
        showCustomerForm: false,
        submitOrder: false,
        customerData: [],
        orderPlaced: false,
        searchText: ""
        //orderSuccess: false
    }

   

    componentDidMount = () => {
        axios.get("api/cakes").then(response => {
            this.setState({ cakes: [...response.data] });
        });

    }

    AddToShoppingListHandler = (cake) => {

        let list = this.state.shoppingList;
        list.push(cake);

        this.setState({
            shoppingList: list,
            totalPrice: this.state.totalPrice + cake.Price,
            isBasketEmpty: false
        });

    }

    RemoveFromShoppingListHandler = (index, cake) => {

        let list = this.state.shoppingList;
        let basketEmpty = false;
        list.indexOf(index);
        list.splice(index, 1);

        let newTotal = this.state.totalPrice - cake.Price;

        if (newTotal <= 0.00) {
            newTotal = 0.00;
        }

        if (this.state.shoppingList.length === 0) {
            basketEmpty = true;
        }
        this.setState({
            shoppingList: list,
            totalPrice: newTotal,
            isBasketEmpty: basketEmpty
        });

    }

    CheckoutHandler = () => {
        this.setState({
            showOrderSummary: true,
            cardPaymentMethod: false,
            showCakeTable: false,
            isBasketOpen: false

        });
    }

    ToggleBasketHandler = () => {
        const open = this.state.isBasketOpen;
        this.setState({
            isBasketOpen: !open
        });
    }

    PayByCardHandler = () => {
        this.setState({
            showOrderSummary: false,
            showCustomerForm: true,
            showCakeTable: false
        });

        console.log("Paying by card");
    }

    PayByCashHandler = () => {

        console.log("Paying with cash");
    }

    SubmitOrderHandler = (event) => {
        event.preventDefault();
        this.setState({
            paymentDetails: {
                holderName: event.target.cardholdername.value,
                cardNumber: event.target.cardnumber.value,
                expiryDate: event.target.expirydate.value,
                csc: event.target.csc.value
            },
            submitOrder: true
        });
    }

    SubmitCustomerDetailsHandler = (event) => {
        event.preventDefault();

        let tempdate =
            event.target.dateofbirthmonth.value + "-" +
            event.target.dateofbirthday.value + "-" +
            event.target.dateofbirthyear.value;

        let dateofbirth = moment(tempdate, "MM-DD-YYYY").format("l"); 

        let customer = {
            firstName: event.target.firstname.value,
            lastName: event.target.lastname.value,
            dateOfBirth: dateofbirth,
            address: event.target.address.value
        }

        this.SubmitCustomerDetails(customer);
    }

    SubmitCustomerDetails(customer) {


        axios.post("api/customer", customer)
            .then(response => {
                this.setState({
                    customerData: response.data,
                    customerDetails: customer,
                    showPaymentForm: true,
                    showCustomerForm: false
                });
            }).catch(error => {
                this.setState({submitOrder: false});
            });
        
    }

    SearchTextHandler = (event) => {
        this.setState({
            searchText: event.target.value.toLowerCase()
        });
    }

    PlaceOrder() {
        const orderlist = this.state.shoppingList;
            const customerAccountId = document.getElementById("root").getAttribute("user");     

                for (let i = 0; i < orderlist.length; i++) {

                        const Order = {
                            CakeId: orderlist[i].Id,
                            CustomerAccountId: customerAccountId,
                            Price: orderlist[i].Price,
                            CustomerId: this.state.customerData.Id,
                            Status: 0
                        }

                        axios.post("api/order", Order)
                            .then(response => {
                                if (response.status === 201 && i === 0)
                                    toastr.success("Order has been placed");
                            }).catch(error => {
                                if (i === 0)
                                toastr.error("The order failed, please try again.");
                            });
                    }

                this.setState({
                    submitOrder: false,
                    cardPaymentMethod: false,
                    showCakeTable: true,
                    isBasketOpen: false,
                    isBasketEmpty: true,
                    paymentDetails: {},
                    shoppingList: [],
                    customerDetails: {},
                    showPaymentForm: false,
                    totalPrice: 0.00
                });
    }

render() {


        if (this.state.submitOrder) {
            this.PlaceOrder();
        }

        let openBasket = null;
        let order = null;


        if (this.state.isBasketOpen) {
            openBasket = <div style={{ position: "fixed", right: "0px", bottom: "0px" }}>
                <OrderBasket
                    shoppinglist={this.state.shoppingList}
                    removefrombasket={this.RemoveFromShoppingListHandler}
                    isbasketempty={this.state.isBasketEmpty}
                    checkout={this.CheckoutHandler}
                    togglebasket={this.ToggleBasketHandler}
                    totalprice={this.state.totalPrice} /></div>;
        } else {
            const OpenOrderSummary = () => {
                return (
                    <div onClick={this.ToggleBasketHandler} style={{ display: "flex", alignItems: "center", justifyContent: "center", lineHeight: "38px", fontSize: "18px", cursor: "pointer", color: "#fff", backgroundColor: "#246CCC", textAlign: "center", border: "1px solid #444", height: "40px", position: "fixed", right: "10px", bottom: "10px", paddingRight: "10px", paddingLeft: "10px" }}>
                        Open Basket ({this.state.shoppingList.length})</div>
                );
            }
            openBasket = <OpenOrderSummary />;
        }

        if (this.state.showOrderSummary) {
            order = <OrderSummary shoppinglist={this.state.shoppingList} paybycash={this.PayByCashHandler} paybycard={this.PayByCardHandler} totalprice={this.state.totalPrice} />;
        } else if (this.state.showCustomerForm) {
            order = <Customer submitCustomerDetails={this.SubmitCustomerDetailsHandler} />;
        } else if (this.state.showCakeTable) {
            order = <div>
                <div style={{ display: "flex", flexFlow: "row", justifyContent: "center", height: "36px", marginBottom: "10px" }}><div>
                    <input onChange={(event) => this.SearchTextHandler(event)} className="form-control" style={{ boxShadow: "none" }} type="text" placeholder="Type to search..." /></div>                   
                    <img style={{ marginTop: "3px", height: "30px", width: "30px" }} src="Content/images/search.png" /></div><hr />

                    <CakeTable
                            cakes={this.state.cakes}
                            addtoshopping={this.AddToShoppingListHandler}
                            SearchText={this.state.searchText} />
            </div>;
        } else if (this.state.showPaymentForm) {
            order = <Payment submitorder={this.SubmitOrderHandler} />;
        }

        return (
            <div style={{textAlign: "center", backgroundColor: "transparent", marginTop: "20px" }}>
                    {order}
                {openBasket}
            </div>

        );
    }
}

class App extends React.Component {
    render() {
        return (
            <Shop/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));