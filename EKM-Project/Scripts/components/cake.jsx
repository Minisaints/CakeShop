const Checkout = (props) => {

    return <button onClick={props.checkout} className="btn btn-success" style={{ width: "100%", bottom: "0px", height: "35px", fontSize: "13px", borderRadius: "0px", position: "sticky" }}>
        Checkout</button>;
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
                height: "500px",
                margin: "auto",
                backgroundColor: "#fff", textAlign: "center", color: "#000", border: "1px solid #444", overflow: "auto"
            }}><div style={{ textAlign: "center", backgroundColor: "#246CCC", color: "#fff", position: "sticky", top: "0", width: "auto", height: "50px", fontSize: "17px", lineHeight: "45px" }}>Order Summary</div>
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

    if (props.shoppinglist.length === 0) {
        noItems = <p style={{ textAlign: "center", fontSize: "16px" }}>Basket empty</p>;
    } else {
        noItems = <div>{list}</div>;
    }

    if (!props.isbasketempty) {
        emptyBasket = <Checkout checkout={props.checkout} />;
    }

    return (
        <div style={{ marginBottom: "10px", width: "250px", height: "330px", border: "1px solid #444", backgroundColor: "white", position: "absolute", right: "10px", bottom: "0", overflow: "auto", overflowX: "hidden" }}>
            <div onClick={props.togglebasket} style={{ lineHeight: "38px", fontSize: "16px", height: "40px", cursor: "pointer", position: "sticky", width: "inherit", color: "#fff", backgroundColor: "#246CCC", textAlign: "center", borderBottom: "1px solid #444", top: "0" }}>Shopping Basket</div>
            <div style={{ fontSize: "13px", display: "flex", textAlign: "center", borderBottom: "1px solid #444", marginBottom: "10px" }}><h4 style={{ width: "100%", borderRight: "1px solid #444" }}>Product</h4><h4 style={{ width: "100%" }}>Price</h4></div>
            {noItems}
            <div style={{ backgroundColor: "#fff", borderTop: "1px solid #444", width: "100%", textAlign: "right", fontSize: "14px", paddingRight: "5px", bottom: "35px", position: "sticky" }} >Total Price: £{props.totalprice.toFixed(2)}</div>
            {emptyBasket}
        </div>
    );
};

const CakeTable = (props) => {

    const style = {
        width: "100%",
        height: "100px",
        backgroundColor: "white",
        marginBottom: "10px",
        display: "flex",
        flexFlow: "row",
        border: "1px solid #888"

    };

    const cakeName = {
        width: "100%",
        height: "100%",
        textAlign: "center",
        lineHeight: "90px",
        overflow: "hidden", borderRight: "1px solid #444"
    }

    const cakeDesc = {
        width: "100%", height: "100%",
        textAlign: "center",
        lineHeight: "90px",
        fontSize: "14px",
        overflow: "hidden", borderRight: "1px solid #444"
    }

    const cakePrice = {
        width: "100%", height: "100%",
        textAlign: "center",
        lineHeight: "90px", borderRight: "1px solid #444"
    }

    const cakeList = [...props.cakes];
    const list = cakeList.map((cake, index) => {
        return (
            <div key={index}>
                <div style={{ height: "10px", width: "100%", backgroundColor: "#2d87ff" }}></div>
                <div style={style}>
                    <p style={cakeName}>
                        {cake.CakeName}
                    </p>
                    <p style={cakeDesc}>
                        {cake.CakeDescription}
                    </p>
                    <p style={cakePrice}>
                        £{cake.Price.toFixed(2)}
                    </p>
                    <button className="btn btn-default" onClick={(event) => props.addtoshopping(cake)} key={index} style={{ fontSize: "14px", margin: "25px", height: "50px", width: "50px" }}>Add</button>
                </div>
            </div>
        );
    });

    return <div>{list}</div>;
}

const CardForm = (props) => {
    
        return (
            <div style={{height: "85%", display: "flex", justifyContent: "" }}>
                <form onSubmit={props.submitOrder} style={{ width: "100%", display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center" }}>
                    Cardholder Name <input className="form-control" type="text" name="cardholdername" />
                    Card Number <input className="form-control" type="text" name="cardnumber"/>
                    Expiry Date <input className="form-control" type="text" name="expirydate"/>
                    CSC <input className="form-control" type="text" name="csc"/>
                    <input style={{ marginTop: "10px" }} className="btn btn-success" type="submit" value="Submit Order" />
                </form>
            </div>
        );
}

const Payment = (props) => {

    const style = {
        width: "60%",
        height: "350px",
        margin: "auto",
        backgroundColor: "#fff", textAlign: "center", color: "#000", border: "1px solid #444", overflow: "auto"
    }

    return (<div style={style}>
        <div style={{ textAlign: "center", backgroundColor: "#246CCC", color: "#fff", position: "sticky", top: "0", width: "auto", height: "50px", fontSize: "17px", lineHeight: "45px" }}>Payment Details</div>
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
        hasPaidByCard: false,
        paymentDetails: {
            holderName: null,
            cardNumber: null,
            expiryDate: null,
            csc: null
        },
        submitOrder: false
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
            hasPaidByCard: false

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
            hasPaidByCard: true
        });

        console.log("Paid by card");
    }

    PayByCashHandler = () => {

        console.log("Paid with cash");
    }

    SubmitOrderHandler = (event) => {
        event.preventDefault();
        console.log("Card details form submitted");
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

    render() {

        if (this.state.submitOrder) {

            const paymentdetails = this.state.paymentDetails;
            console.log(paymentdetails);
            const shoppinglist = this.state.shoppingList;
            console.log(shoppinglist);
            const totalprice = this.state.totalPrice;
            console.log(totalprice);

            // check successful before resetting
            //axios.post("/api/orders", post)
            //    .then(response => {
            //        console.log(response);
            //    }); 

            this.setState({
                submitOrder: false,
                hasPaidByCard: false,
                isBasketOpen: false,
                paymentDetails: {},
                shoppingList: [],
                totalPrice: 0.00
            });
        }

        let openBasket = null;
        let order = null;
        let orderCategories = null;

        if (this.state.isBasketOpen) {
            openBasket = <OrderBasket
                shoppinglist={this.state.shoppingList}
                removefrombasket={this.RemoveFromShoppingListHandler}
                isbasketempty={this.state.isBasketEmpty}
                checkout={this.CheckoutHandler}
                togglebasket={this.ToggleBasketHandler}
                totalprice={this.state.totalPrice} />;
        } else {
            const OpenOrderSummary = () => {
                return (
                    <div onClick={this.ToggleBasketHandler} style={{ lineHeight: "38px", fontSize: "18px", cursor: "pointer", color: "#fff", backgroundColor: "#246CCC", textAlign: "center", border: "1px solid #444", width: "160px", height: "40px", position: "absolute", right: "10px", bottom: "10px" }}>
                        Open Basket ({this.state.shoppingList.length})</div>
                );
            }
            openBasket = <OpenOrderSummary />;
        }

        if (this.state.showOrderSummary) {
            order = <OrderSummary shoppinglist={this.state.shoppingList} paybycash={this.PayByCashHandler} paybycard={this.PayByCardHandler} totalprice={this.state.totalPrice} />;
        } else if (this.state.hasPaidByCard) {
            order = <Payment submitorder={this.SubmitOrderHandler} />;
        } else {

            order = <div><CakeTable cakes={this.state.cakes} addtoshopping={this.AddToShoppingListHandler} /></div>;
            orderCategories = (<div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", borderBottom: "1px solid #444", marginBottom: "10px" }}><h4 style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>Product</h4>
                <h4 style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>Description</h4>
                <h4 style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>Price</h4>
                <h4 style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "50%" }}></h4></div>);
        }

        return (
            <div style={{ paddingRight: "10px", paddingLeft: "10px", backgroundColor: "transparent", marginTop: "20px" }}>
                {orderCategories}
                {order}
                {openBasket}
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <Shop />
        );
    }
}

ReactDOM.render(<Shop />, document.getElementById("root"));